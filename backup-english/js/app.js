const app = document.getElementById('app');
const toWord = w => ({ word: w[0], ipa: w[1], pos: w[2], vi: w[3], ex: w[4], tip: TIPS[w[0]] || '', exVi: EX_VI[w[0]] });
const ALL = SETS.flatMap(s => s.words.map(toWord));
const MODES = {
  flash: 'Flashcard', quiz: 'Trắc nghiệm', type: 'Gõ từ', order: 'Sắp xếp câu', cloze: 'Điền từ vào câu',
  en2vi: 'Dịch Anh → Việt', vi2en: 'Dịch Việt → Anh', mixed: 'Trộn ⚡'
};
const MIXED_TYPES = ['flash', 'quiz', 'type', 'order', 'cloze', 'en2vi', 'vi2en'];
// Âm thanh tự đọc khi hiện câu hỏi: null = không đọc (tránh lộ đáp án)
const promptAudio = (type, w) => {
  if (type === 'order' || type === 'cloze' || type === 'vi2en') return null;
  return type === 'en2vi' ? w.ex : w.word;
};
let S = {}; // trạng thái lượt học hiện tại

const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const speak = t => { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(t); u.lang = 'en-US'; speechSynthesis.speak(u); };
const $ = id => document.getElementById(id);
const kbd = k => `<kbd class="key-hint">${k}</kbd>`; // gợi ý phím tắt trên nút

// Tự động phát âm: đọc từ khi hiện câu hỏi, đọc câu ví dụ sau khi trả lời.
// Đọc xong nghỉ 3 giây rồi đọc lại, cho đến khi sang câu tiếp theo.
const AUTO_MS = 3000;
let autoOn = localStorage.getItem('auto') !== '0', autoTimer, autoToken = 0;
let dlgToken = 0; // hủy lượt đọc hội thoại đang chạy (listen.js)
const stopAuto = () => { autoToken++; dlgToken++; clearTimeout(autoTimer); speechSynthesis.cancel(); };
function startAuto(text) {
  stopAuto();
  if (!autoOn) return;
  const token = autoToken;
  const loop = () => {
    if (token !== autoToken) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.onend = () => { autoTimer = setTimeout(loop, AUTO_MS); };
    speechSynthesis.speak(u);
  };
  loop();
}
function toggleAuto() {
  autoOn = !autoOn;
  localStorage.setItem('auto', autoOn ? '1' : '0');
  $('autoBtn').textContent = autoLabel();
  if (!autoOn) stopAuto();
  else {
    const { w, type } = S.queue[S.i];
    const text = S.answered ? w.ex : promptAudio(type, w);
    if (text) startAuto(text);
  }
}
const autoLabel = () => `🔁 Tự phát: ${autoOn ? 'Bật' : 'Tắt'}`;

// ---------- Nhóm bộ từ (chỉ số bộ tính từ 0, from/to gồm cả hai đầu) ----------
const GROUPS = [
  { name: 'Nền tảng', desc: 'Giao tiếp, cảm xúc, công việc, lập trình cơ bản', from: 0, to: 9 },
  { name: 'Đời sống 1', desc: 'Gia đình, nhà cửa, ăn uống, cơ thể, thời tiết', from: 10, to: 17 },
  { name: 'Đời sống 2', desc: 'Du lịch, đi lại, mua sắm, nhà hàng, ngân hàng, khám bệnh', from: 18, to: 25 },
  { name: 'Đời sống 3', desc: 'Giải trí, thể thao, mạng xã hội, tính cách, môi trường', from: 26, to: 33 },
  { name: 'Công việc, học tập', desc: 'Trường học, văn phòng, kinh doanh, tài chính, sự kiện', from: 34, to: 43 },
  { name: 'Lập trình, công nghệ', desc: 'Web, dữ liệu, cú pháp, quy trình, phần cứng', from: 44, to: 49 }
];
const LIMIT = 20; // nhóm hoặc "tất cả": mỗi lượt học lấy ngẫu nhiên từng này từ
const groupOf = i => GROUPS.findIndex(g => i >= g.from && i <= g.to);
const groupSets = g => SETS.slice(GROUPS[g].from, GROUPS[g].to + 1);
// scope: >= 0 là bộ, -1 là tất cả, <= -2 là nhóm (nhóm k = -2 - k)
const groupScope = g => -2 - g;

// ---------- Trang chủ ----------
function showHome() {
  stopAuto();
  app.innerHTML = `
    <h4 class="mb-1">📘 ${ALL.length} từ vựng giao tiếp</h4>
    <div class="text-secondary small mb-3">${SETS.length} bộ, mỗi bộ 10 từ và một đoạn hội thoại</div>
    <div class="d-grid gap-2 mb-2">
      ${GROUPS.map((g, k) => `<button class="btn btn-outline-primary text-start p-3" data-key="${k + 1}" onclick="showGroup(${k})">
        <b>${g.name}</b> <small class="text-secondary">· Bộ ${g.from + 1}–${g.to + 1}</small>${kbd(k + 1)}<br>
        <small class="text-secondary">${g.desc}</small></button>`).join('')}
    </div>
    <button class="btn btn-primary w-100 p-3" data-key="a" onclick="showModes(-1)">★ Tất cả ${ALL.length} từ${kbd('A')}</button>
    <button class="btn btn-outline-primary w-100 p-3 mt-2" data-key="h" onclick="showListenList()">🎧 Nghe hội thoại${kbd('H')}</button>`;
}

// ---------- Một nhóm: danh sách bộ ----------
function showGroup(g) {
  stopAuto();
  const grp = GROUPS[g];
  app.innerHTML = `
    <button class="btn btn-link p-0 mb-3" data-key="Escape" onclick="showHome()">← Trang chủ${kbd('Esc')}</button>
    <h5 class="mb-3">${grp.name}</h5>
    <div class="row row-cols-2 g-2 mb-2">
      ${groupSets(g).map((s, n) => `<div class="col"><button class="btn btn-outline-primary w-100 text-start p-3 h-100" data-key="${(n + 1) % 10}" onclick="showModes(${grp.from + n})">
        <b>Bộ ${grp.from + n + 1}</b>${kbd((n + 1) % 10)}<br><small class="text-secondary">${s.name}</small></button></div>`).join('')}
    </div>
    <button class="btn btn-primary w-100 p-3" data-key="a" onclick="showModes(${groupScope(g)})">★ Học cả nhóm (${LIMIT} từ ngẫu nhiên)${kbd('A')}</button>`;
}

// ---------- Chọn chế độ ----------
function showModes(scope) {
  stopAuto();
  const isSet = scope >= 0, isAll = scope === -1, g = isSet ? groupOf(scope) : isAll ? -1 : -2 - scope;
  S.scope = scope;
  S.words = isSet ? SETS[scope].words.map(toWord)
    : isAll ? ALL
    : groupSets(g).flatMap(s => s.words.map(toWord));
  S.title = isSet ? `Bộ ${scope + 1}: ${SETS[scope].name}` : isAll ? `Tất cả ${ALL.length} từ` : `Cả nhóm: ${GROUPS[g].name}`;
  const back = isSet ? `showGroup(${g})` : 'showHome()';
  app.innerHTML = `
    <button class="btn btn-link p-0 mb-3" data-key="Escape" onclick="${back}">← Quay lại${kbd('Esc')}</button>
    <h5 class="mb-1">${S.title}</h5>
    ${S.words.length > LIMIT ? `<div class="text-secondary small mb-3">Mỗi lượt học lấy ${LIMIT} từ ngẫu nhiên trong ${S.words.length} từ.</div>` : '<div class="mb-3"></div>'}
    <div class="d-grid gap-2">
      ${Object.entries(MODES).map(([k, v], n) => `<button class="btn btn-outline-dark p-3" data-key="${n + 1}" onclick="start('${k}')">${kbd(n + 1)} ${v}</button>`).join('')}
      ${isSet ? `<button class="btn btn-outline-primary p-3" data-key="9" onclick="showDialog(${scope})">${kbd(9)} 🎧 Nghe hội thoại bộ này</button>` : ''}
    </div>`;
}

// ---------- Lượt học ----------
function start(mode, words = S.words) {
  S.mode = mode;
  S.run = words;
  const picked = shuffle(words).slice(0, LIMIT);
  S.queue = picked.map(w => ({ w, type: mode === 'mixed' ? shuffle(MIXED_TYPES)[0] : mode }));
  S.i = 0; S.score = 0; S.wrong = [];
  showQuestion();
}

function showQuestion() {
  stopAuto();
  S.answered = false;
  if (S.i >= S.queue.length) return showResult();
  const { w, type } = S.queue[S.i];
  const pct = Math.round(S.i / S.queue.length * 100);
  app.innerHTML = `
    <div class="d-flex justify-content-between align-items-center mb-2">
      <button class="btn btn-link p-0" data-key="Escape" onclick="showModes(${S.scope})">← Thoát${kbd('Esc')}</button>
      <button id="autoBtn" class="btn btn-sm btn-outline-secondary" onclick="toggleAuto()">${autoLabel()}</button>
      <small class="text-secondary">${S.i + 1}/${S.queue.length}</small>
    </div>
    <div class="progress mb-4" style="height:4px"><div class="progress-bar" style="width:${pct}%"></div></div>
    <div id="q"></div>`;
  ({
    flash: renderFlash, quiz: renderQuiz, type: renderType, order: renderOrder, cloze: renderCloze,
    en2vi: renderEn2Vi, vi2en: w => renderOrder(w, true)
  })[type](w);
  const p = promptAudio(type, w);
  if (p) startAuto(p);
}

const wordHead = w => `<div class="word">${w.word}</div>
  <div class="text-secondary">${w.ipa} · ${w.pos}</div>
  <button class="btn btn-outline-secondary btn-sm mt-2" onclick="speak('${w.word}')">🔊 Nghe</button>`;

function record(ok) {
  S.answered = true;
  ok ? S.score++ : S.wrong.push(S.queue[S.i].w);
}
function next() { S.i++; showQuestion(); }
const nextBtn = `<button class="btn btn-primary w-100 mt-3" data-key="Enter Space ArrowRight" onclick="next()">Tiếp →${kbd('Enter')}</button>`;

// Flashcard
const exLine = w => `<div class="text-secondary fst-italic">${w.ex}
  <button class="btn btn-sm btn-link p-0 ms-1" onclick="event.stopPropagation();speak(S.queue[S.i].w.ex)">🔊</button></div>`;
const tipLine = w => w.tip ? `<div class="small mt-2 text-warning-emphasis">💡 ${w.tip}</div>` : '';

function reveal() {
  if (!$('back').hidden) return;
  S.answered = true;
  startAuto(S.queue[S.i].w.ex);
  $('back').hidden = false;
  $('reveal').hidden = true;
  $('judge').hidden = false;
}
function renderFlash(w) {
  $('q').innerHTML = `
    <div class="card text-center" role="button" onclick="reveal()"><div class="card-body py-5">
      <div onclick="event.stopPropagation()">${wordHead(w)}</div>
      <div id="back" class="mt-4" hidden><div class="fs-4">${w.vi}</div>${exLine(w)}${tipLine(w)}</div>
    </div></div>
    <button id="reveal" class="btn btn-primary w-100 mt-3" data-key="Space Enter" onclick="reveal()">Xem nghĩa${kbd('Space')}</button>
    <div id="judge" hidden><div class="d-flex gap-2 mt-3">
      <button class="btn btn-danger flex-fill hint-sm" data-key="1" onclick="record(false);next()">${kbd(1)} ✗ Chưa nhớ</button>
      <button class="btn btn-success flex-fill hint-sm" data-key="2" onclick="record(true);next()">${kbd(2)} ✓ Đã nhớ</button>
    </div></div>`;
}

// Trắc nghiệm
function renderQuiz(w) {
  const others = shuffle(ALL.filter(x => x.vi !== w.vi)).slice(0, 3);
  const opts = shuffle([w, ...others]);
  $('q').innerHTML = `
    <div class="card text-center mb-3"><div class="card-body py-4">${wordHead(w)}</div></div>
    <div class="d-grid gap-2" id="opts">
      ${opts.map((o, n) => `<button class="btn btn-outline-dark text-start" data-key="${n + 1}" data-ok="${o === w ? 1 : 0}" onclick="pick(this)">${kbd(n + 1)} ${o.vi}</button>`).join('')}
    </div>
    <div id="after" hidden></div>`;
}
function pick(btn) {
  const w = S.queue[S.i].w, ok = btn.dataset.ok === '1';
  document.querySelectorAll('#opts button').forEach(b => {
    b.disabled = true;
    if (b.dataset.ok === '1') b.className = 'btn btn-success text-start';
  });
  if (!ok) btn.className = 'btn btn-danger text-start';
  record(ok);
  startAuto(w.ex);
  $('after').hidden = false;
  $('after').innerHTML = `<div class="mt-3">${exLine(w)}${tipLine(w)}</div>${nextBtn}`;
}

// Gõ lại từ
function renderType(w) {
  $('q').innerHTML = `
    <div class="card text-center mb-3"><div class="card-body py-4">
      <div class="text-secondary small">Gõ từ tiếng Anh (${w.pos})</div>
      <div class="fs-2 fw-bold my-2">${w.vi}</div>
      <button class="btn btn-outline-secondary btn-sm" onclick="speak('${w.word}')">🔊 Nghe</button>
      <div id="hint" class="font-monospace text-secondary mt-2"></div>
    </div></div>
    <form onsubmit="checkType(event)">
      <input id="ans" class="form-control form-control-lg text-center" autocomplete="off" autocapitalize="off" spellcheck="false" autofocus>
      <div class="d-flex gap-2 mt-3" id="typeBtns">
        <button type="button" class="btn btn-outline-secondary" onclick="$('hint').textContent='${w.word[0]} '+'_ '.repeat(${w.word.length - 1})">Gợi ý</button>
        <button type="submit" class="btn btn-primary flex-fill">Kiểm tra</button>
      </div>
    </form>
    <div id="after"></div>`;
  $('ans').focus();
}
function checkType(e) {
  e.preventDefault();
  const w = S.queue[S.i].w, inp = $('ans');
  const ok = inp.value.trim().toLowerCase() === w.word;
  inp.disabled = true;
  inp.classList.add(ok ? 'is-valid' : 'is-invalid');
  $('typeBtns').hidden = true;
  record(ok);
  startAuto(w.ex);
  $('after').innerHTML = `<div class="text-center mt-3"><div class="word">${w.word}</div>
    <div class="text-secondary">${w.ipa}</div><div class="text-secondary fst-italic mt-1">${w.ex}</div></div>${nextBtn}`;
}

// Điền từ vào câu: che từ đích trong câu ví dụ (khớp cả dạng biến đổi: greeted, groceries...)
const blankRe = w => new RegExp('\\b' + w.word.replace(/[ey]$/, '') + '\\w*', 'i');
// n từ nhiễu: ưu tiên cùng loại từ, thiếu thì lấy thêm loại từ khác
function distractors(w, n = 3, exclude = []) {
  const others = ALL.filter(x => x.word !== w.word && !exclude.includes(x.word));
  return [...shuffle(others.filter(x => x.pos === w.pos)), ...shuffle(others.filter(x => x.pos !== w.pos))].slice(0, n);
}
function renderCloze(w) {
  const re = blankRe(w);
  if (!re.test(w.ex)) return renderQuiz(w);
  const opts = shuffle([w, ...distractors(w)]);
  $('q').innerHTML = `
    <div class="card text-center mb-3"><div class="card-body py-4">
      <div class="text-secondary small mb-2">Chọn từ điền vào chỗ trống</div>
      <div class="fs-4">${w.ex.replace(re, '<b class="text-primary">____</b>')}</div>
    </div></div>
    <div class="d-grid gap-2" id="opts">
      ${opts.map((o, n) => `<button class="btn btn-outline-dark text-start" data-key="${n + 1}" data-ok="${o === w ? 1 : 0}" onclick="pick(this)">${kbd(n + 1)} ${o.word}</button>`).join('')}
    </div>
    <div id="after" hidden></div>`;
}

// Dịch Anh → Việt: đọc câu tiếng Anh, chọn bản dịch tiếng Việt đúng trong 4 lựa chọn
function renderEn2Vi(w) {
  const others = shuffle(ALL.filter(x => x.word !== w.word)).slice(0, 3);
  const opts = shuffle([w, ...others]);
  $('q').innerHTML = `
    <div class="card text-center mb-3"><div class="card-body py-4">
      <div class="text-secondary small mb-2">Chọn bản dịch đúng</div>
      <div class="fs-4">${w.ex}</div>
      <button class="btn btn-outline-secondary btn-sm mt-2" onclick="speak(S.queue[S.i].w.ex)">🔊 Nghe</button>
    </div></div>
    <div class="d-grid gap-2" id="opts">
      ${opts.map((o, n) => `<button class="btn btn-outline-dark text-start" data-key="${n + 1}" data-ok="${o === w ? 1 : 0}" onclick="pick(this)">${kbd(n + 1)} ${o.exVi}</button>`).join('')}
    </div>
    <div id="after" hidden></div>`;
}

// Sắp xếp câu: ghép lại câu ví dụ từ các từ bị xáo
// vi = true: dịch Việt → Anh (đề là câu tiếng Việt), ngược lại đề là từ khoá
function renderOrder(w, vi = false) {
  const toks = w.ex.split(' ');
  let bank = toks.map((_, i) => i);
  for (let t = 0; t < 5; t++) {
    bank = shuffle(bank);
    if (bank.map(i => toks[i]).join(' ') !== w.ex) break;
  }
  S.o = { toks, bank, chosen: [] };
  const head = vi
    ? `<div class="text-secondary small">Dịch sang tiếng Anh · từ khoá: <b>${w.word}</b> (${w.vi})</div>
       <div class="fs-4 mt-2">${w.exVi}</div>`
    : `<div class="text-secondary small">Ghép thành câu hoàn chỉnh · từ khoá:</div>
       <div class="fs-4 fw-bold text-primary">${w.word} <span class="text-secondary fs-6">(${w.vi})</span></div>`;
  $('q').innerHTML = `
    <div class="card text-center mb-3"><div class="card-body py-4">${head}</div></div>
    <div id="chosen" class="border rounded p-2 mb-3 d-flex flex-wrap gap-2" style="min-height:3.2rem"></div>
    <div id="bank" class="d-flex flex-wrap gap-2 mb-3"></div>
    <div id="orderCtl" class="d-flex gap-2">
      <button class="btn btn-outline-secondary" data-key="Backspace" onclick="unplaceLast()">↶ Xoá${kbd('⌫')}</button>
      <button id="chk" class="btn btn-primary flex-fill" data-key="Enter" onclick="checkOrder()" disabled>Kiểm tra${kbd('Enter')}</button>
    </div>
    <div id="after"></div>`;
  paintOrder();
}
function paintOrder() {
  const { toks, bank, chosen } = S.o;
  $('chosen').innerHTML = chosen.map((ti, n) => `<button class="btn btn-primary btn-sm" onclick="unplace(${n})">${toks[ti]}</button>`).join('')
    || '<span class="text-secondary small">Bấm các từ bên dưới để ghép câu</span>';
  $('bank').innerHTML = bank.map((ti, n) => `<button class="btn btn-outline-dark btn-sm" ${n < 9 ? `data-key="${n + 1}"` : ''} onclick="place(${n})">${n < 9 ? `<small class="opacity-50 me-1">${n + 1}</small>` : ''}${toks[ti]}</button>`).join('');
  $('chk').disabled = bank.length > 0;
}
function place(n) { S.o.chosen.push(S.o.bank.splice(n, 1)[0]); paintOrder(); }
function unplace(n) { S.o.bank.push(S.o.chosen.splice(n, 1)[0]); paintOrder(); }
function unplaceLast() { if (S.o.chosen.length) unplace(S.o.chosen.length - 1); }
function checkOrder() {
  const w = S.queue[S.i].w, { toks, chosen } = S.o;
  const ok = chosen.map(i => toks[i]).join(' ') === w.ex;
  $('chosen').classList.add(ok ? 'border-success' : 'border-danger');
  document.querySelectorAll('#chosen button').forEach(b => b.disabled = true);
  $('bank').hidden = true;
  $('orderCtl').hidden = true;
  record(ok);
  startAuto(w.ex);
  $('after').innerHTML = `<div class="text-center mt-1">
      <div class="${ok ? 'text-success' : 'text-danger'} fw-semibold">${ok ? '✓ Chính xác' : '✗ Đáp án đúng:'}</div>
      <div class="fs-5 mt-1">${w.ex}</div>${tipLine(w)}</div>${nextBtn}`;
}

// ---------- Kết quả ----------
function showResult() {
  const total = S.queue.length;
  app.innerHTML = `
    <div class="text-center my-4">
      <div class="display-4 fw-bold">${S.score}/${total}</div>
      <div class="text-secondary">${S.title} · ${MODES[S.mode]}</div>
    </div>
    ${S.wrong.length ? `<h6>Từ cần ôn (${S.wrong.length})</h6>
      <ul class="list-group mb-3">${S.wrong.map(w => `<li class="list-group-item d-flex justify-content-between">
        <span><b class="text-primary font-monospace">${w.word}</b> <small class="text-secondary">${w.ipa}</small></span><span>${w.vi}</span></li>`).join('')}</ul>`
      : '<div class="alert alert-success text-center">Tuyệt vời, bạn nhớ hết rồi! 🎉</div>'}
    <div class="d-grid gap-2">
      ${S.wrong.length ? `<button class="btn btn-warning" data-key="1" onclick="start(S.mode, S.wrong.map(x => x))">${kbd(1)} Học lại từ sai</button>` : ''}
      <button class="btn btn-primary" data-key="${S.wrong.length ? 2 : 1}" onclick="start(S.mode, S.words)">${kbd(S.wrong.length ? 2 : 1)} Làm lại (xáo trộn)</button>
      <button class="btn btn-outline-dark" data-key="${S.wrong.length ? 3 : 2}" onclick="showHome()">${kbd(S.wrong.length ? 3 : 2)} Về trang chủ</button>
    </div>`;
}

// ---------- Phím tắt: bấm phím trùng data-key của nút đang hiển thị ----------
document.addEventListener('keydown', e => {
  if (e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;
  if (e.target.tagName === 'INPUT' && !['Escape', 'ArrowUp'].includes(e.key)) return; // đang gõ chữ
  const k = e.key === ' ' ? 'space' : e.key.toLowerCase();
  const btn = [...document.querySelectorAll('[data-key]')]
    .find(b => !b.disabled && b.offsetParent && b.dataset.key.toLowerCase().split(' ').includes(k));
  if (btn) { e.preventDefault(); btn.click(); }
});

showHome();
