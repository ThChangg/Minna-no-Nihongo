// ---------- Nghe hội thoại ----------
// Luồng: nghe -> câu hỏi nghe hiểu -> đúng/sai -> điền từ trong lời thoại -> chép lại câu -> kết quả
let L = {}; // trạng thái bài nghe hiện tại

const stem = w => w.replace(/[ey]$/, '');
const nextL = `<button class="btn btn-primary w-100 mt-3" data-key="Enter Space ArrowRight" onclick="L.i++;stepShow()">Tiếp →${kbd('Enter')}</button>`;
const replayBtn = `<button class="btn btn-outline-secondary btn-sm mb-3" data-key="r" onclick="playDialog(0)">🔊 Nghe lại${kbd('R')}</button>`;

// Danh sách hội thoại: chọn nhóm trước (g = null), rồi chọn hội thoại trong nhóm
function showListenList(g = null) {
  stopAuto();
  if (g === null) {
    app.innerHTML = `
      <button class="btn btn-link p-0 mb-3" data-key="Escape" onclick="showHome()">← Trang chủ${kbd('Esc')}</button>
      <h5 class="mb-3">🎧 Nghe hội thoại</h5>
      <div class="d-grid gap-2">
        ${GROUPS.map((grp, k) => `<button class="btn btn-outline-primary text-start p-3" data-key="${k + 1}" onclick="showListenList(${k})">
          <b>${grp.name}</b> <small class="text-secondary">· ${grp.to - grp.from + 1} hội thoại</small>${kbd(k + 1)}</button>`).join('')}
      </div>`;
    return;
  }
  const grp = GROUPS[g];
  app.innerHTML = `
    <button class="btn btn-link p-0 mb-3" data-key="Escape" onclick="showListenList()">← Nhóm khác${kbd('Esc')}</button>
    <h5 class="mb-3">🎧 ${grp.name}</h5>
    <div class="d-grid gap-2">
      ${DIALOGUES.slice(grp.from, grp.to + 1).map((d, n) => `<button class="btn btn-outline-primary text-start p-3" data-key="${(n + 1) % 10}" onclick="showDialog(${grp.from + n})">
        <b>Bộ ${grp.from + n + 1}</b> · ${d.title}${kbd((n + 1) % 10)}</button>`).join('')}
    </div>`;
}

// ---------- Giọng đọc: A và B dùng hai giọng khác nhau ----------
function dlgVoices() {
  const en = speechSynthesis.getVoices().filter(v => /^en[-_]/i.test(v.lang));
  const us = en.filter(v => /^en[-_]US/i.test(v.lang));
  const pool = us.length >= 2 ? us : en;
  const rank = v => /natural|online|google/i.test(v.name) ? 0 : 1;
  return [...pool].sort((a, b) => rank(a) - rank(b)).slice(0, 2);
}
function say(text, spk, rate, done) {
  const vs = dlgVoices(), u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  u.rate = rate;
  const v = vs[spk === 'A' ? 0 : 1] || vs[0];
  if (v) u.voice = v;
  if (vs.length < 2) u.pitch = spk === 'A' ? 0.85 : 1.25; // chỉ có 1 giọng: đổi cao độ để phân biệt
  u.onend = u.onerror = done;
  speechSynthesis.speak(u);
}
function markLine(i) {
  document.querySelectorAll('[data-line]').forEach(el => el.classList.toggle('bg-warning-subtle', +el.dataset.line === i));
}
// Đọc lần lượt các câu, nghỉ 0,4 giây giữa các lượt
function playDialog(from = 0) {
  stopAuto();
  const t = dlgToken, lines = L.d.lines;
  let i = from;
  const step = () => {
    if (t !== dlgToken) return;
    markLine(i);
    if (i >= lines.length) return;
    say(lines[i][1], lines[i][0], L.rate, () => { if (t === dlgToken) { i++; setTimeout(step, 400); } });
  };
  step();
}

// ---------- Lời thoại ----------
// mask: từ đích bị che thành ____ ; các từ đích còn lại được in đậm
function lineHtml(d, n, mask) {
  const all = new RegExp(d.keys.map(k => '\\b' + stem(k) + '\\w*').join('|'), 'gi');
  return d.lines[n][1].replace(all, m =>
    mask && m.toLowerCase().startsWith(stem(mask)) ? '____' : `<b class="text-primary">${m}</b>`);
}
const transcriptHtml = (d, { vi = false, mask = null } = {}) => d.lines.map((l, n) => `
  <div class="mb-2 p-2 rounded" data-line="${n}">
    <span class="badge text-bg-secondary me-2">${l[0]}</span>${lineHtml(d, n, mask)}
    ${vi ? `<div class="small text-secondary ms-4">${l[2]}</div>` : ''}
  </div>`).join('');

// ---------- Màn nghe ----------
function showDialog(si) {
  stopAuto();
  L = { si, d: DIALOGUES[si], rate: 1, show: false, vi: false };
  paintListen();
  playDialog(0);
}
function paintListen() {
  const d = L.d;
  app.innerHTML = `
    <button class="btn btn-link p-0 mb-2" data-key="Escape" onclick="showListenList(${groupOf(L.si)})">← Danh sách${kbd('Esc')}</button>
    <h5>🎧 Bộ ${L.si + 1} · ${d.title}</h5>
    <div class="text-secondary small mb-3">Nghe 1–2 lần, cố hiểu nội dung rồi làm bài.</div>
    <div class="d-flex flex-wrap gap-2 mb-3">
      <button class="btn btn-primary" data-key="Space r" onclick="playDialog(0)">▶ Nghe${kbd('Space')}</button>
      <button class="btn btn-outline-secondary" data-key="s" onclick="toggleRate()">${L.rate < 1 ? '🐢 Chậm' : '🐇 Thường'}${kbd('S')}</button>
      <button class="btn btn-outline-secondary" data-key="t" onclick="toggleTr()">${L.show ? 'Ẩn' : 'Hiện'} lời thoại${kbd('T')}</button>
      ${L.show ? `<button class="btn btn-outline-secondary" data-key="v" onclick="toggleVi()">${L.vi ? 'Ẩn' : 'Hiện'} bản dịch${kbd('V')}</button>` : ''}
    </div>
    <div class="card card-body mb-3" ${L.show ? '' : 'hidden'}>${transcriptHtml(d, { vi: L.vi })}</div>
    <button class="btn btn-success w-100" data-key="Enter" onclick="startExercises()">Làm bài →${kbd('Enter')}</button>`;
}
function toggleRate() { L.rate = L.rate === 1 ? 0.75 : 1; paintListen(); }
function toggleTr() { L.show = !L.show; if (!L.show) L.vi = false; paintListen(); }
function toggleVi() { L.vi = !L.vi; paintListen(); }

// ---------- Bài tập ----------
function startExercises() {
  stopAuto();
  const d = L.d;
  const longLines = d.lines.map((_, i) => i).filter(i => d.lines[i][1].split(' ').length >= 4);
  L.steps = [
    ...d.qa.map(q => ({ t: 'qa', q })),
    ...d.tf.map(f => ({ t: 'tf', f })),
    ...shuffle(d.keys).slice(0, 5).map(k => ({ t: 'cloze', k })),
    ...shuffle(longLines).slice(0, 3).map(n => ({ t: 'dict', n }))
  ];
  L.i = 0; L.score = 0;
  stepShow();
}
function stepShow() {
  stopAuto();
  if (L.i >= L.steps.length) return listenResult();
  const pct = Math.round(L.i / L.steps.length * 100);
  app.innerHTML = `
    <div class="d-flex justify-content-between align-items-center mb-2">
      <button class="btn btn-link p-0" data-key="Escape" onclick="paintListen()">← Nghe lại${kbd('Esc')}</button>
      <small class="text-secondary">${L.i + 1}/${L.steps.length}</small>
    </div>
    <div class="progress mb-4" style="height:4px"><div class="progress-bar" style="width:${pct}%"></div></div>
    <div id="lq"></div>`;
  const s = L.steps[L.i];
  ({ qa: stepQa, tf: stepTf, cloze: stepCloze, dict: stepDict })[s.t](s);
}
function lDone(ok, html = '') {
  stopAuto();
  if (ok) L.score++;
  $('lafter').innerHTML = html + nextL;
}
const optBtn = (n, ok, label) =>
  `<button class="btn btn-outline-dark text-start" data-key="${n + 1}" data-ok="${ok ? 1 : 0}" onclick="lPick(this)">${kbd(n + 1)} ${label}</button>`;
function lPick(btn) {
  const ok = btn.dataset.ok === '1';
  document.querySelectorAll('#lopts button').forEach(b => {
    b.disabled = true;
    if (b.dataset.ok === '1') b.className = 'btn btn-success text-start';
  });
  if (!ok) btn.className = 'btn btn-danger text-start';
  lDone(ok);
  const ltr = $('ltr'); // bài điền từ: hiện lời thoại đầy đủ sau khi trả lời
  if (ltr) ltr.innerHTML = transcriptHtml(L.d);
}

// Nghe hiểu
function stepQa({ q }) {
  const opts = shuffle(q.opts.map((o, i) => ({ o, ok: i === q.ans })));
  $('lq').innerHTML = `
    <div class="text-secondary small mb-1">Nghe hiểu</div>
    <div class="fs-5 mb-2">${q.q}</div>${replayBtn}
    <div class="d-grid gap-2" id="lopts">${opts.map((x, n) => optBtn(n, x.ok, x.o)).join('')}</div>
    <div id="lafter"></div>`;
}
// Đúng / Sai
function stepTf({ f }) {
  $('lq').innerHTML = `
    <div class="text-secondary small mb-1">Đúng hay sai?</div>
    <div class="fs-5 mb-2">${f.s}</div>${replayBtn}
    <div class="d-grid gap-2" id="lopts">
      ${optBtn(0, f.a === true, 'Đúng')}${optBtn(1, f.a === false, 'Sai')}
    </div>
    <div id="lafter"></div>`;
}
// Điền từ trong lời thoại
function stepCloze({ k }) {
  const opts = shuffle([k, ...distractors(ALL.find(x => x.word === k), 3, L.d.keys).map(x => x.word)]);
  $('lq').innerHTML = `
    <div class="text-secondary small mb-2">Chọn từ điền vào chỗ trống trong lời thoại</div>
    <div class="card card-body mb-3" id="ltr">${transcriptHtml(L.d, { mask: k })}</div>
    <div class="d-grid gap-2" id="lopts">${opts.map((w, n) => optBtn(n, w === k, w)).join('')}</div>
    <div id="lafter"></div>`;
}
// Nghe và chép lại một câu
function stepDict({ n }) {
  const line = L.d.lines[n];
  $('lq').innerHTML = `
    <div class="text-secondary small mb-2">Nghe và gõ lại câu bạn nghe được</div>
    <button class="btn btn-primary mb-3" data-key="ArrowUp" onclick="sayLine(${n})">🔊 Nghe lại${kbd('↑')}</button>
    <form id="dform" onsubmit="dictCheck(event)">
      <input id="dans" class="form-control form-control-lg" autocomplete="off" autocapitalize="off" spellcheck="false">
      <button class="btn btn-primary w-100 mt-3" type="submit">Kiểm tra${kbd('Enter')}</button>
    </form>
    <div id="lafter"></div>`;
  $('dans').focus();
  sayLine(n);
}
function sayLine(n) {
  stopAuto();
  say(L.d.lines[n][1], L.d.lines[n][0], L.rate, () => {});
}
const normWords = s => s.toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9' ]/g, ' ').split(/\s+/).filter(Boolean);
function dictCheck(e) {
  e.preventDefault();
  const line = L.d.lines[L.steps[L.i].n];
  const got = normWords($('dans').value), want = normWords(line[1]);
  const ok = got.join(' ') === want.join(' ');
  $('dans').disabled = true;
  $('dans').classList.add(ok ? 'is-valid' : 'is-invalid');
  $('dform').querySelector('button').hidden = true;
  const pool = [...got];
  const diff = want.map(w => {
    const hit = pool.indexOf(w);
    if (hit >= 0) pool.splice(hit, 1);
    return `<span class="${hit >= 0 ? 'text-success' : 'text-danger'}">${w}</span>`;
  }).join(' ');
  lDone(ok, `<div class="text-center mt-3">
    <div class="fs-5">${line[1]}</div>
    <div class="mt-1 font-monospace">${diff}</div>
    <div class="small text-secondary mt-1">${line[2]}</div></div>`);
}
// ---------- Kết quả ----------
function listenResult() {
  app.innerHTML = `
    <div class="text-center my-4">
      <div class="display-4 fw-bold">${L.score}/${L.steps.length}</div>
      <div class="text-secondary">Bộ ${L.si + 1} · ${L.d.title}</div>
    </div>
    <div class="card card-body mb-3">${transcriptHtml(L.d, { vi: true })}</div>
    <div class="d-grid gap-2">
      <button class="btn btn-primary" data-key="1" onclick="playDialog(0)">${kbd(1)} 🔊 Nghe lại</button>
      <button class="btn btn-warning" data-key="2" onclick="startExercises()">${kbd(2)} Làm bài lại</button>
      <button class="btn btn-outline-dark" data-key="3" onclick="showListenList(${groupOf(L.si)})">${kbd(3)} Danh sách hội thoại</button>
    </div>`;
}
