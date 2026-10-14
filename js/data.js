// Từ vựng và câu theo giáo trình Minna no Nihongo I (bài 1–25).
// Mỗi bài: { name, words, dlg }
// Mỗi từ: [từ, loại từ, nghĩa, câu ví dụ, nghĩa câu ví dụ]
// Chữ Hán viết kèm cách đọc trong ngoặc vuông: 先生[せんせい]. Câu ví dụ tách cụm bằng dấu cách.
// dlg: hội thoại của bài. lines: [người nói, tiếng Nhật, tiếng Việt]; keys: từ đích xuất hiện trong lời thoại
// qa: câu hỏi nghe hiểu (ans = chỉ số đáp án đúng); tf: nhận định đúng/sai (a = true/false)
const POS = {
  n: 'danh từ', pro: 'đại từ', q: 'từ hỏi', v1: 'động từ nhóm I', v2: 'động từ nhóm II', v3: 'động từ nhóm III',
  ai: 'tính từ い', na: 'tính từ な', adv: 'phó từ', conj: 'liên từ', exp: 'cụm từ'
};

const SETS = [
  { name: "Giới thiệu bản thân", words: [
    ["私[わたし]", "pro", "tôi", "私[わたし]は リンです。", "Tôi là Linh."],
    ["あなた", "pro", "bạn, anh, chị", "あなたは 学生[がくせい]ですか。", "Bạn là sinh viên phải không?"],
    ["あの 人[ひと]", "pro", "người kia", "あの 人[ひと]は 田中[たなか]さんです。", "Người kia là anh Tanaka."],
    ["先生[せんせい]", "n", "thầy giáo, cô giáo", "田中[たなか]さんは 先生[せんせい]です。", "Anh Tanaka là giáo viên."],
    ["学生[がくせい]", "n", "học sinh, sinh viên", "私[わたし]は 学生[がくせい]じゃ ありません。", "Tôi không phải là sinh viên."],
    ["会社員[かいしゃいん]", "n", "nhân viên công ty", "ナムさんは 会社員[かいしゃいん]です。", "Anh Nam là nhân viên công ty."],
    ["銀行員[ぎんこういん]", "n", "nhân viên ngân hàng", "佐藤[さとう]さんも 銀行員[ぎんこういん]です。", "Chị Sato cũng là nhân viên ngân hàng."],
    ["医者[いしゃ]", "n", "bác sĩ", "山田[やまだ]さんは 医者[いしゃ]ですか。", "Anh Yamada là bác sĩ phải không?"],
    ["研究者[けんきゅうしゃ]", "n", "nhà nghiên cứu", "佐藤[さとう]さんは 研究者[けんきゅうしゃ]じゃ ありません。", "Chị Sato không phải là nhà nghiên cứu."],
    ["エンジニア", "n", "kỹ sư", "ナムさんは エンジニアですか。", "Anh Nam là kỹ sư phải không?"],
    ["大学[だいがく]", "n", "trường đại học", "私[わたし]は さくら大学[だいがく]の 学生[がくせい]です。", "Tôi là sinh viên Đại học Sakura."],
    ["病院[びょういん]", "n", "bệnh viện", "山田[やまだ]さんは さくら病院[びょういん]の 医者[いしゃ]です。", "Anh Yamada là bác sĩ của Bệnh viện Sakura."],
    ["だれ", "q", "ai", "あの 人[ひと]は だれですか。", "Người kia là ai?"],
    ["何歳[なんさい]", "q", "mấy tuổi", "リンさんは 何歳[なんさい]ですか。", "Chị Linh bao nhiêu tuổi?"],
    ["はい", "exp", "vâng, đúng", "はい、 学生[がくせい]です。", "Vâng, tôi là sinh viên."],
    ["いいえ", "exp", "không", "いいえ、 先生[せんせい]じゃ ありません。", "Không, tôi không phải là giáo viên."],
    ["初[はじ]めまして", "exp", "rất vui được gặp (lần đầu gặp)", "初[はじ]めまして。 リンです。", "Rất vui được gặp anh chị. Tôi là Linh."],
    ["日本[にほん]", "n", "Nhật Bản", "日本[にほん]から 来[き]ました。", "Tôi đến từ Nhật Bản."],
    ["ベトナム", "n", "Việt Nam", "私[わたし]は ベトナムから 来[き]ました。", "Tôi đến từ Việt Nam."],
    ["どうぞ よろしく", "exp", "rất mong được giúp đỡ", "リンです。 どうぞ よろしく。", "Tôi là Linh. Rất mong được anh chị giúp đỡ."]
  ],
  dlg: { title: "Chào hỏi lần đầu",
    keys: ["初[はじ]めまして", "学生[がくせい]", "会社員[かいしゃいん]", "先生[せんせい]", "だれ", "医者[いしゃ]"],
    lines: [
      ["A", "初[はじ]めまして。 私[わたし]は リンです。", "Rất vui được gặp anh. Tôi là Linh."],
      ["B", "初[はじ]めまして。 田中[たなか]です。 リンさんは 学生[がくせい]ですか。", "Rất vui được gặp chị. Tôi là Tanaka. Chị Linh là sinh viên à?"],
      ["A", "いいえ、 学生[がくせい]じゃ ありません。 会社員[かいしゃいん]です。", "Không, tôi không phải sinh viên. Tôi là nhân viên công ty."],
      ["B", "そうですか。 私[わたし]は さくら大学[だいがく]の 先生[せんせい]です。", "Vậy à. Tôi là giáo viên của Đại học Sakura."],
      ["A", "田中[たなか]さん、 あの 人[ひと]は だれですか。", "Anh Tanaka, người kia là ai vậy?"],
      ["B", "山田[やまだ]さんです。 山田[やまだ]さんは 医者[いしゃ]です。", "Là anh Yamada. Anh Yamada là bác sĩ."]
    ],
    qa: [
      { q: "Chị Linh làm nghề gì?", opts: ["Nhân viên công ty", "Sinh viên", "Giáo viên", "Bác sĩ"], ans: 0 },
      { q: "Anh Yamada làm nghề gì?", opts: ["Bác sĩ", "Giáo viên", "Nhân viên ngân hàng", "Kỹ sư"], ans: 0 }
    ],
    tf: [
      { s: "Anh Tanaka là giáo viên đại học.", a: true },
      { s: "Chị Linh là sinh viên.", a: false }
    ] } },

  { name: "Đồ vật: これ, それ, あれ", words: [
    ["これ", "pro", "cái này", "これは 辞書[じしょ]です。", "Đây là quyển từ điển."],
    ["それ", "pro", "cái đó", "それは 私[わたし]の 傘[かさ]です。", "Đó là cái ô của tôi."],
    ["あれ", "pro", "cái kia", "あれは だれの かばんですか。", "Kia là cặp của ai?"],
    ["本[ほん]", "n", "sách", "これは 日本語[にほんご]の 本[ほん]です。", "Đây là sách tiếng Nhật."],
    ["辞書[じしょ]", "n", "từ điển", "それは 辞書[じしょ]じゃ ありません。", "Đó không phải là từ điển."],
    ["雑誌[ざっし]", "n", "tạp chí", "これは 車[くるま]の 雑誌[ざっし]です。", "Đây là tạp chí về ô tô."],
    ["新聞[しんぶん]", "n", "báo", "あれは 日本[にほん]の 新聞[しんぶん]ですか。", "Kia là báo Nhật phải không?"],
    ["ノート", "n", "vở", "この ノートは 私[わたし]のです。", "Quyển vở này là của tôi."],
    ["名刺[めいし]", "n", "danh thiếp", "これは 私[わたし]の 名刺[めいし]です。 どうぞ。", "Đây là danh thiếp của tôi. Xin mời."],
    ["鉛筆[えんぴつ]", "n", "bút chì", "それは 鉛筆[えんぴつ]ですか、 ボールペンですか。", "Đó là bút chì hay bút bi?"],
    ["鍵[かぎ]", "n", "chìa khoá", "これは 車[くるま]の 鍵[かぎ]です。", "Đây là chìa khoá ô tô."],
    ["時計[とけい]", "n", "đồng hồ", "その 時計[とけい]は 田中[たなか]さんのです。", "Cái đồng hồ đó là của anh Tanaka."],
    ["傘[かさ]", "n", "cái ô", "この 傘[かさ]は あなたのですか。", "Cái ô này là của bạn phải không?"],
    ["かばん", "n", "cặp, túi xách", "あの かばんは 先生[せんせい]のです。", "Cái cặp kia là của thầy giáo."],
    ["カメラ", "n", "máy ảnh", "これは 日本[にほん]の カメラです。", "Đây là máy ảnh của Nhật."],
    ["車[くるま]", "n", "ô tô", "あれは 山田[やまだ]さんの 車[くるま]です。", "Kia là ô tô của anh Yamada."],
    ["机[つくえ]", "n", "cái bàn", "それは 先生[せんせい]の 机[つくえ]です。", "Đó là bàn của thầy giáo."],
    ["椅子[いす]", "n", "cái ghế", "この 椅子[いす]は 私[わたし]のじゃ ありません。", "Cái ghế này không phải của tôi."],
    ["日本語[にほんご]", "n", "tiếng Nhật", "これは 日本語[にほんご]の 辞書[じしょ]です。", "Đây là từ điển tiếng Nhật."],
    ["何[なん]", "q", "cái gì", "それは 何[なん]ですか。", "Đó là cái gì?"]
  ],
  dlg: { title: "Cái này là gì?",
    keys: ["何[なん]", "辞書[じしょ]", "傘[かさ]", "かばん", "日本語[にほんご]"],
    lines: [
      ["A", "リンさん、 それは 何[なん]ですか。", "Chị Linh, cái đó là gì vậy?"],
      ["B", "これですか。 日本語[にほんご]の 辞書[じしょ]です。", "Cái này à? Là từ điển tiếng Nhật."],
      ["A", "そうですか。 この 傘[かさ]も リンさんのですか。", "Vậy à. Cái ô này cũng là của chị Linh à?"],
      ["B", "いいえ、 私[わたし]のじゃ ありません。 田中[たなか]さんのです。", "Không, không phải của tôi. Của anh Tanaka đấy."],
      ["A", "あの かばんは だれのですか。", "Cái cặp kia là của ai?"],
      ["B", "あれは 先生[せんせい]の かばんです。", "Kia là cặp của thầy giáo."]
    ],
    qa: [
      { q: "Quyển từ điển là từ điển tiếng gì?", opts: ["Tiếng Nhật", "Tiếng Anh", "Tiếng Việt", "Tiếng Trung"], ans: 0 },
      { q: "Cái ô là của ai?", opts: ["Anh Tanaka", "Chị Linh", "Thầy giáo", "Anh Yamada"], ans: 0 }
    ],
    tf: [
      { s: "Cái cặp là của thầy giáo.", a: true },
      { s: "Cái ô là của chị Linh.", a: false }
    ] } },

  { name: "Nơi chốn: ここ, そこ, あそこ", words: [
    ["ここ", "pro", "chỗ này, đây", "ここは 教室[きょうしつ]です。", "Đây là phòng học."],
    ["そこ", "pro", "chỗ đó", "そこは 会議室[かいぎしつ]じゃ ありません。", "Chỗ đó không phải là phòng họp."],
    ["あそこ", "pro", "chỗ kia", "受付[うけつけ]は あそこです。", "Quầy lễ tân ở đằng kia."],
    ["どこ", "q", "ở đâu", "トイレは どこですか。", "Nhà vệ sinh ở đâu?"],
    ["教室[きょうしつ]", "n", "phòng học", "日本語[にほんご]の 教室[きょうしつ]は 二階[にかい]です。", "Phòng học tiếng Nhật ở tầng hai."],
    ["食堂[しょくどう]", "n", "nhà ăn", "食堂[しょくどう]は 地下[ちか]です。", "Nhà ăn ở tầng hầm."],
    ["事務所[じむしょ]", "n", "văn phòng", "ここは 大学[だいがく]の 事務所[じむしょ]です。", "Đây là văn phòng của trường đại học."],
    ["会議室[かいぎしつ]", "n", "phòng họp", "会議室[かいぎしつ]は 三階[さんがい]です。", "Phòng họp ở tầng ba."],
    ["受付[うけつけ]", "n", "quầy lễ tân", "会社[かいしゃ]の 受付[うけつけ]は 一階[いっかい]です。", "Quầy lễ tân của công ty ở tầng một."],
    ["部屋[へや]", "n", "căn phòng", "私[わたし]の 部屋[へや]は ここです。", "Phòng của tôi ở đây."],
    ["トイレ", "n", "nhà vệ sinh", "トイレは あそこです。", "Nhà vệ sinh ở đằng kia."],
    ["エレベーター", "n", "thang máy", "エレベーターは どこですか。", "Thang máy ở đâu?"],
    ["国[くに]", "n", "đất nước", "お国[くに]は どこですか。", "Anh chị là người nước nào?"],
    ["会社[かいしゃ]", "n", "công ty", "田中[たなか]さんの 会社[かいしゃ]は 東京[とうきょう]です。", "Công ty của anh Tanaka ở Tokyo."],
    ["うち", "n", "nhà", "うちは 大阪[おおさか]です。", "Nhà tôi ở Osaka."],
    ["電話[でんわ]", "n", "điện thoại", "電話[でんわ]は 受付[うけつけ]です。", "Điện thoại ở quầy lễ tân."],
    ["靴[くつ]", "n", "giày", "これは イタリアの 靴[くつ]です。", "Đây là giày của Ý."],
    ["売[う]り場[ば]", "n", "quầy bán hàng", "靴[くつ]の 売[う]り場[ば]は 四階[よんかい]です。", "Quầy bán giày ở tầng bốn."],
    ["地下[ちか]", "n", "tầng hầm", "ワインの 売[う]り場[ば]は 地下[ちか]一階[いっかい]です。", "Quầy rượu vang ở tầng hầm thứ nhất."],
    ["いくら", "q", "bao nhiêu tiền", "この 時計[とけい]は いくらですか。", "Cái đồng hồ này giá bao nhiêu?"]
  ],
  dlg: { title: "Ở cửa hàng bách hoá",
    keys: ["靴[くつ]", "売[う]り場[ば]", "どこ", "エレベーター", "あそこ", "いくら"],
    lines: [
      ["A", "すみません。 靴[くつ]の 売[う]り場[ば]は どこですか。", "Xin lỗi. Quầy bán giày ở đâu ạ?"],
      ["B", "靴[くつ]の 売[う]り場[ば]は 三階[さんがい]です。", "Quầy bán giày ở tầng ba ạ."],
      ["A", "エレベーターは どこですか。", "Thang máy ở đâu ạ?"],
      ["B", "あそこです。", "Ở đằng kia ạ."],
      ["A", "すみません、 この 靴[くつ]は いくらですか。", "Xin lỗi, đôi giày này giá bao nhiêu?"],
      ["B", "五千円[ごせんえん]です。", "Năm nghìn yên ạ."],
      ["A", "じゃ、 これを ください。", "Vậy cho tôi lấy đôi này."]
    ],
    qa: [
      { q: "Quầy bán giày ở tầng mấy?", opts: ["Tầng ba", "Tầng một", "Tầng hai", "Tầng hầm"], ans: 0 },
      { q: "Đôi giày giá bao nhiêu?", opts: ["5.000 yên", "3.000 yên", "500 yên", "50.000 yên"], ans: 0 }
    ],
    tf: [
      { s: "Khách quyết định mua đôi giày.", a: true },
      { s: "Quầy bán giày ở tầng một.", a: false }
    ] } },

  { name: "Giờ giấc, sinh hoạt hằng ngày", words: [
    ["起[お]きます", "v2", "thức dậy", "毎朝[まいあさ] 六時[ろくじ]に 起[お]きます。", "Mỗi sáng tôi dậy lúc sáu giờ."],
    ["寝[ね]ます", "v2", "đi ngủ", "昨日[きのう] 十一時[じゅういちじ]に 寝[ね]ました。", "Hôm qua tôi đi ngủ lúc mười một giờ."],
    ["働[はたら]きます", "v1", "làm việc", "九時[くじ]から 五時[ごじ]まで 働[はたら]きます。", "Tôi làm việc từ chín giờ đến năm giờ."],
    ["休[やす]みます", "v1", "nghỉ", "昨日[きのう]は 休[やす]みませんでした。", "Hôm qua tôi đã không nghỉ."],
    ["勉強[べんきょう]します", "v3", "học", "毎晩[まいばん] 八時[はちじ]から 勉強[べんきょう]します。", "Mỗi tối tôi học từ tám giờ."],
    ["終[お]わります", "v1", "kết thúc, xong", "会社[かいしゃ]は 五時[ごじ]に 終[お]わります。", "Công ty tan làm lúc năm giờ."],
    ["銀行[ぎんこう]", "n", "ngân hàng", "銀行[ぎんこう]は 九時[くじ]から 三時[さんじ]までです。", "Ngân hàng mở từ chín giờ đến ba giờ."],
    ["郵便局[ゆうびんきょく]", "n", "bưu điện", "郵便局[ゆうびんきょく]は 何時[なんじ]からですか。", "Bưu điện mở cửa từ mấy giờ?"],
    ["図書館[としょかん]", "n", "thư viện", "図書館[としょかん]は 月曜日[げつようび] 休[やす]みです。", "Thư viện nghỉ vào thứ Hai."],
    ["デパート", "n", "cửa hàng bách hoá", "デパートは 午前[ごぜん] 十時[じゅうじ]からです。", "Cửa hàng bách hoá mở từ mười giờ sáng."],
    ["今[いま]", "adv", "bây giờ", "今[いま] 四時[よじ]半[はん]です。", "Bây giờ là bốn giờ rưỡi."],
    ["何時[なんじ]", "q", "mấy giờ", "今[いま] 何時[なんじ]ですか。", "Bây giờ là mấy giờ?"],
    ["午前[ごぜん]", "n", "buổi sáng (AM)", "午前[ごぜん] 九時[くじ]から 働[はたら]きます。", "Tôi làm việc từ chín giờ sáng."],
    ["午後[ごご]", "n", "buổi chiều (PM)", "午後[ごご] 六時[ろくじ]に 終[お]わります。", "Xong lúc sáu giờ chiều."],
    ["朝[あさ]", "n", "buổi sáng", "朝[あさ] 七時[しちじ]に 起[お]きます。", "Buổi sáng tôi dậy lúc bảy giờ."],
    ["晩[ばん]", "n", "buổi tối", "晩[ばん] 十時[じゅうじ]まで 勉強[べんきょう]します。", "Buổi tối tôi học đến mười giờ."],
    ["昨日[きのう]", "n", "hôm qua", "昨日[きのう] 勉強[べんきょう]しましたか。", "Hôm qua bạn có học không?"],
    ["今日[きょう]", "n", "hôm nay", "今日[きょう]は 休[やす]みです。", "Hôm nay là ngày nghỉ."],
    ["明日[あした]", "n", "ngày mai", "明日[あした] 働[はたら]きません。", "Ngày mai tôi không làm việc."],
    ["毎日[まいにち]", "adv", "hằng ngày", "毎日[まいにち] 十二時[じゅうにじ]に 寝[ね]ます。", "Hằng ngày tôi ngủ lúc mười hai giờ."]
  ],
  dlg: { title: "Một ngày của Linh",
    keys: ["何時[なんじ]", "起[お]きます", "働[はたら]きます", "勉強[べんきょう]します", "明日[あした]", "晩[ばん]"],
    lines: [
      ["A", "リンさん、 毎朝[まいあさ] 何時[なんじ]に 起[お]きますか。", "Chị Linh, mỗi sáng chị dậy lúc mấy giờ?"],
      ["B", "六時[ろくじ]に 起[お]きます。 九時[くじ]から 五時[ごじ]まで 働[はたら]きます。", "Tôi dậy lúc sáu giờ. Tôi làm việc từ chín giờ đến năm giờ."],
      ["A", "大変[たいへん]ですね。 晩[ばん]は 勉強[べんきょう]しますか。", "Vất vả nhỉ. Buổi tối chị có học không?"],
      ["B", "はい、 毎晩[まいばん] 八時[はちじ]から 十時[じゅうじ]まで 勉強[べんきょう]します。", "Có, mỗi tối tôi học từ tám giờ đến mười giờ."],
      ["A", "明日[あした]も 働[はたら]きますか。", "Ngày mai chị cũng làm việc à?"],
      ["B", "いいえ、 明日[あした]は 休[やす]みです。", "Không, ngày mai tôi nghỉ."]
    ],
    qa: [
      { q: "Chị Linh dậy lúc mấy giờ?", opts: ["Sáu giờ", "Bảy giờ", "Tám giờ", "Chín giờ"], ans: 0 },
      { q: "Buổi tối chị Linh học từ mấy giờ đến mấy giờ?", opts: ["Tám giờ đến mười giờ", "Chín giờ đến năm giờ", "Sáu giờ đến tám giờ", "Bảy giờ đến chín giờ"], ans: 0 }
    ],
    tf: [
      { s: "Ngày mai chị Linh được nghỉ.", a: true },
      { s: "Chị Linh làm việc từ tám giờ sáng.", a: false }
    ] } },

  { name: "Đi lại, phương tiện", words: [
    ["行[い]きます", "v1", "đi", "明日[あした] 京都[きょうと]へ 行[い]きます。", "Ngày mai tôi đi Kyoto."],
    ["来[き]ます", "v3", "đến", "リンさんは 去年[きょねん] 日本[にほん]へ 来[き]ました。", "Chị Linh đến Nhật năm ngoái."],
    ["帰[かえ]ります", "v1", "về", "七時[しちじ]に うちへ 帰[かえ]ります。", "Tôi về nhà lúc bảy giờ."],
    ["学校[がっこう]", "n", "trường học", "バスで 学校[がっこう]へ 行[い]きます。", "Tôi đi học bằng xe buýt."],
    ["スーパー", "n", "siêu thị", "昨日[きのう] スーパーへ 行[い]きました。", "Hôm qua tôi đã đi siêu thị."],
    ["駅[えき]", "n", "nhà ga", "歩[ある]いて 駅[えき]へ 行[い]きます。", "Tôi đi bộ đến nhà ga."],
    ["飛行機[ひこうき]", "n", "máy bay", "飛行機[ひこうき]で 国[くに]へ 帰[かえ]ります。", "Tôi về nước bằng máy bay."],
    ["電車[でんしゃ]", "n", "tàu điện", "電車[でんしゃ]で 会社[かいしゃ]へ 行[い]きます。", "Tôi đi làm bằng tàu điện."],
    ["地下鉄[ちかてつ]", "n", "tàu điện ngầm", "地下鉄[ちかてつ]で 大学[だいがく]へ 来[き]ました。", "Tôi đến trường đại học bằng tàu điện ngầm."],
    ["新幹線[しんかんせん]", "n", "tàu cao tốc Shinkansen", "新幹線[しんかんせん]で 大阪[おおさか]へ 行[い]きます。", "Tôi đi Osaka bằng tàu Shinkansen."],
    ["バス", "n", "xe buýt", "この バスは 駅[えき]へ 行[い]きますか。", "Xe buýt này có đi đến nhà ga không?"],
    ["タクシー", "n", "taxi", "タクシーで うちへ 帰[かえ]りました。", "Tôi đã về nhà bằng taxi."],
    ["自転車[じてんしゃ]", "n", "xe đạp", "自転車[じてんしゃ]で スーパーへ 行[い]きます。", "Tôi đi siêu thị bằng xe đạp."],
    ["歩[ある]いて", "adv", "đi bộ", "毎日[まいにち] 歩[ある]いて 学校[がっこう]へ 行[い]きます。", "Hằng ngày tôi đi bộ đến trường."],
    ["友達[ともだち]", "n", "bạn bè", "友達[ともだち]と 東京[とうきょう]へ 行[い]きます。", "Tôi đi Tokyo với bạn."],
    ["家族[かぞく]", "n", "gia đình", "家族[かぞく]と 日本[にほん]へ 来[き]ました。", "Tôi đến Nhật cùng gia đình."],
    ["一人[ひとり]で", "adv", "một mình", "一人[ひとり]で 病院[びょういん]へ 行[い]きました。", "Tôi đã đi bệnh viện một mình."],
    ["来週[らいしゅう]", "n", "tuần sau", "来週[らいしゅう] 国[くに]へ 帰[かえ]ります。", "Tuần sau tôi về nước."],
    ["誕生日[たんじょうび]", "n", "sinh nhật", "誕生日[たんじょうび]は 六月[ろくがつ] 十日[とおか]です。", "Sinh nhật tôi là ngày mười tháng Sáu."],
    ["いつ", "q", "khi nào", "いつ 日本[にほん]へ 来[き]ましたか。", "Bạn đến Nhật khi nào?"]
  ],
  dlg: { title: "Tuần sau đi đâu?",
    keys: ["来週[らいしゅう]", "友達[ともだち]", "新幹線[しんかんせん]", "行[い]きます", "帰[かえ]ります"],
    lines: [
      ["A", "リンさん、 来週[らいしゅう] どこへ 行[い]きますか。", "Chị Linh, tuần sau chị đi đâu?"],
      ["B", "友達[ともだち]と 京都[きょうと]へ 行[い]きます。", "Tôi đi Kyoto với bạn."],
      ["A", "いいですね。 何[なに]で 行[い]きますか。", "Hay quá. Chị đi bằng gì?"],
      ["B", "新幹線[しんかんせん]で 行[い]きます。 田中[たなか]さんは？", "Tôi đi bằng tàu Shinkansen. Còn anh Tanaka?"],
      ["A", "私[わたし]は どこも 行[い]きません。", "Tôi không đi đâu cả."],
      ["B", "そうですか。 私[わたし]は 日曜日[にちようび]に 帰[かえ]ります。", "Vậy à. Tôi sẽ về vào Chủ nhật."]
    ],
    qa: [
      { q: "Chị Linh đi Kyoto với ai?", opts: ["Với bạn", "Với gia đình", "Một mình", "Với anh Tanaka"], ans: 0 },
      { q: "Chị Linh đi bằng phương tiện gì?", opts: ["Tàu Shinkansen", "Xe buýt", "Máy bay", "Taxi"], ans: 0 }
    ],
    tf: [
      { s: "Chị Linh sẽ về vào Chủ nhật.", a: true },
      { s: "Anh Tanaka cũng đi Kyoto.", a: false }
    ] } }
];
