// Minna no Nihongo I, bài 11–15: số đếm, so sánh, mong muốn, thể て
SETS.push(
  { name: "Số đếm, gia đình", words: [
    ["かかります", "v1", "mất, tốn (thời gian, tiền)", "うちから 会社[かいしゃ]まで 一時間[いちじかん] かかります。", "Từ nhà đến công ty mất một tiếng."],
    ["一[ひと]つ", "n", "một cái", "カレーを 一[ひと]つ お願[ねが]いします。", "Cho tôi một suất cà ri."],
    ["二[ふた]つ", "n", "hai cái", "みかんを 二[ふた]つ 食[た]べました。", "Tôi đã ăn hai quả quýt."],
    ["いくつ", "q", "mấy cái", "机[つくえ]が いくつ ありますか。", "Có mấy cái bàn?"],
    ["二人[ふたり]", "n", "hai người", "子[こ]どもが 二人[ふたり] います。", "Tôi có hai đứa con."],
    ["りんご", "n", "quả táo", "りんごを 五[いつ]つ 買[か]いました。", "Tôi đã mua năm quả táo."],
    ["みかん", "n", "quả quýt", "箱[はこ]の 中[なか]に みかんが 八[やっ]つ あります。", "Trong hộp có tám quả quýt."],
    ["切手[きって]", "n", "tem", "八十円[はちじゅうえん]の 切手[きって]を 五枚[ごまい] ください。", "Cho tôi năm con tem 80 yên."],
    ["はがき", "n", "bưu thiếp", "はがきを 三枚[さんまい] 買[か]いました。", "Tôi đã mua ba tấm bưu thiếp."],
    ["封筒[ふうとう]", "n", "phong bì", "封筒[ふうとう]を 二枚[にまい] ください。", "Cho tôi hai cái phong bì."],
    ["両親[りょうしん]", "n", "bố mẹ", "両親[りょうしん]は ベトナムに います。", "Bố mẹ tôi ở Việt Nam."],
    ["兄弟[きょうだい]", "n", "anh chị em", "兄弟[きょうだい]が 三人[さんにん] います。", "Tôi có ba anh chị em."],
    ["兄[あに]", "n", "anh trai (của mình)", "兄[あに]は 銀行員[ぎんこういん]です。", "Anh trai tôi là nhân viên ngân hàng."],
    ["姉[あね]", "n", "chị gái (của mình)", "姉[あね]が 一人[ひとり] います。", "Tôi có một chị gái."],
    ["弟[おとうと]", "n", "em trai (của mình)", "弟[おとうと]は 大学[だいがく]の 学生[がくせい]です。", "Em trai tôi là sinh viên đại học."],
    ["妹[いもうと]", "n", "em gái (của mình)", "妹[いもうと]は 一週間[いっしゅうかん]に 一回[いっかい] 電話[でんわ]を かけます。", "Em gái tôi gọi điện mỗi tuần một lần."],
    ["外国[がいこく]", "n", "nước ngoài", "この 大学[だいがく]に 外国[がいこく]の 学生[がくせい]が 百人[ひゃくにん] います。", "Trường đại học này có một trăm sinh viên nước ngoài."],
    ["留学生[りゅうがくせい]", "n", "du học sinh", "クラスに 留学生[りゅうがくせい]が 十人[じゅうにん] います。", "Trong lớp có mười du học sinh."],
    ["どのくらい", "q", "bao lâu", "日本[にほん]に どのくらい いますか。", "Bạn ở Nhật bao lâu rồi?"],
    ["全部[ぜんぶ]で", "adv", "tổng cộng", "全部[ぜんぶ]で 千五百円[せんごひゃくえん]です。", "Tổng cộng là 1.500 yên."]
  ],
  dlg: { title: "Gia đình của Linh",
    keys: ["兄弟[きょうだい]", "兄[あに]", "妹[いもうと]", "二人[ふたり]", "両親[りょうしん]", "どのくらい", "かかります"],
    lines: [
      ["A", "リンさんは 兄弟[きょうだい]が いますか。", "Chị Linh có anh chị em không?"],
      ["B", "はい、 兄[あに]が 一人[ひとり]と 妹[いもうと]が 二人[ふたり] います。", "Có, tôi có một anh trai và hai em gái."],
      ["A", "四人[よにん] 兄弟[きょうだい]ですね。 ご両親[りょうしん]は ベトナムですか。", "Bốn anh chị em nhỉ. Bố mẹ chị ở Việt Nam à?"],
      ["B", "はい。 一[いっ]か月[げつ]に 二回[にかい] 両親[りょうしん]に 電話[でんわ]を かけます。", "Vâng. Một tháng tôi gọi điện cho bố mẹ hai lần."],
      ["A", "ベトナムまで 飛行機[ひこうき]で どのくらい かかりますか。", "Đi máy bay về Việt Nam mất bao lâu?"],
      ["B", "六時間[ろくじかん]ぐらい かかります。", "Mất khoảng sáu tiếng."]
    ],
    qa: [
      { q: "Chị Linh có mấy em gái?", opts: ["Hai", "Một", "Ba", "Không có"], ans: 0 },
      { q: "Bay về Việt Nam mất bao lâu?", opts: ["Khoảng sáu tiếng", "Khoảng hai tiếng", "Khoảng mười tiếng", "Khoảng một tiếng"], ans: 0 }
    ],
    tf: [
      { s: "Chị Linh gọi điện cho bố mẹ hai lần một tháng.", a: true },
      { s: "Chị Linh có hai anh trai.", a: false }
    ] } },

  { name: "So sánh, thời tiết", words: [
    ["簡単[かんたん]", "na", "đơn giản, dễ", "昨日[きのう]の 試験[しけん]は 簡単[かんたん]でした。", "Bài thi hôm qua dễ."],
    ["近[ちか]い", "ai", "gần", "駅[えき]は ここから 近[ちか]いです。", "Nhà ga gần đây."],
    ["遠[とお]い", "ai", "xa", "空港[くうこう]は うちから 遠[とお]いです。", "Sân bay xa nhà tôi."],
    ["速[はや]い", "ai", "nhanh", "新幹線[しんかんせん]は バスより ずっと 速[はや]いです。", "Tàu Shinkansen nhanh hơn xe buýt nhiều."],
    ["遅[おそ]い", "ai", "chậm, muộn", "この バスは 電車[でんしゃ]より 遅[おそ]いです。", "Xe buýt này chậm hơn tàu điện."],
    ["多[おお]い", "ai", "nhiều", "東京[とうきょう]は 人[ひと]が 多[おお]いです。", "Tokyo đông người."],
    ["少[すく]ない", "ai", "ít", "今年[ことし]は 雨[あめ]が 少[すく]ないです。", "Năm nay ít mưa."],
    ["暖[あたた]かい", "ai", "ấm áp", "昨日[きのう]は 暖[あたた]かかったです。", "Hôm qua trời ấm."],
    ["涼[すず]しい", "ai", "mát mẻ", "秋[あき]は 涼[すず]しいです。", "Mùa thu mát mẻ."],
    ["甘[あま]い", "ai", "ngọt", "この ケーキは とても 甘[あま]いです。", "Cái bánh này rất ngọt."],
    ["辛[から]い", "ai", "cay", "タイ料理[りょうり]は 辛[から]いですが、 おいしいです。", "Món Thái cay nhưng ngon."],
    ["重[おも]い", "ai", "nặng", "この 荷物[にもつ]は 重[おも]いですね。", "Món đồ này nặng nhỉ."],
    ["軽[かる]い", "ai", "nhẹ", "新[あたら]しい パソコンは 軽[かる]いです。", "Máy tính mới nhẹ."],
    ["季節[きせつ]", "n", "mùa", "一年[いちねん]で どの 季節[きせつ]が いちばん 好[す]きですか。", "Trong một năm bạn thích mùa nào nhất?"],
    ["夏[なつ]", "n", "mùa hè", "日本[にほん]の 夏[なつ]は とても 暑[あつ]いです。", "Mùa hè ở Nhật rất nóng."],
    ["冬[ふゆ]", "n", "mùa đông", "北海道[ほっかいどう]の 冬[ふゆ]は 寒[さむ]かったです。", "Mùa đông ở Hokkaido đã rất lạnh."],
    ["天気[てんき]", "n", "thời tiết", "昨日[きのう]は 天気[てんき]が よかったです。", "Hôm qua thời tiết đẹp."],
    ["雨[あめ]", "n", "mưa", "昨日[きのう]は 雨[あめ]でした。", "Hôm qua trời mưa."],
    ["どちら", "q", "cái nào (trong hai)", "肉[にく]と 魚[さかな]と どちらが 好[す]きですか。", "Thịt và cá, bạn thích cái nào hơn?"],
    ["いちばん", "adv", "nhất", "スポーツで サッカーが いちばん 好[す]きです。", "Trong các môn thể thao tôi thích bóng đá nhất."]
  ],
  dlg: { title: "Chuyến đi Kyoto",
    keys: ["天気[てんき]", "どちら", "少[すく]ない", "いちばん"],
    lines: [
      ["A", "リンさん、 京都[きょうと]の 旅行[りょこう]は どうでしたか。", "Chị Linh, chuyến du lịch Kyoto thế nào?"],
      ["B", "とても 楽[たの]しかったです。 天気[てんき]も よかったです。", "Rất vui. Thời tiết cũng đẹp."],
      ["A", "東京[とうきょう]と 京都[きょうと]と どちらが 好[す]きですか。", "Tokyo và Kyoto, chị thích nơi nào hơn?"],
      ["B", "京都[きょうと]の ほうが 好[す]きです。 東京[とうきょう]より 人[ひと]が 少[すく]ないですから。", "Tôi thích Kyoto hơn. Vì ít người hơn Tokyo."],
      ["A", "食[た]べ物[もの]で 何[なに]が いちばん おいしかったですか。", "Trong các món ăn, món nào ngon nhất?"],
      ["B", "すき焼[や]きが いちばん おいしかったです。 でも、 少[すこ]し 甘[あま]かったです。", "Món sukiyaki ngon nhất. Nhưng hơi ngọt."]
    ],
    qa: [
      { q: "Chị Linh thích Tokyo hay Kyoto hơn?", opts: ["Kyoto", "Tokyo", "Cả hai như nhau", "Không thích nơi nào"], ans: 0 },
      { q: "Món nào ngon nhất?", opts: ["Sukiyaki", "Sushi", "Tempura", "Sashimi"], ans: 0 }
    ],
    tf: [
      { s: "Thời tiết ở Kyoto đẹp.", a: true },
      { s: "Kyoto đông người hơn Tokyo.", a: false }
    ] } },

  { name: "Mong muốn, mục đích", words: [
    ["遊[あそ]びます", "v1", "chơi", "週末[しゅうまつ]は 友達[ともだち]と 遊[あそ]びたいです。", "Cuối tuần tôi muốn đi chơi với bạn."],
    ["泳[およ]ぎます", "v1", "bơi", "プールへ 泳[およ]ぎに 行[い]きます。", "Tôi đi đến bể bơi để bơi."],
    ["迎[むか]えます", "v2", "đón", "空港[くうこう]へ 友達[ともだち]を 迎[むか]えに 行[い]きます。", "Tôi ra sân bay đón bạn."],
    ["疲[つか]れます", "v2", "mệt", "今日[きょう]は とても 疲[つか]れました。", "Hôm nay tôi rất mệt."],
    ["結婚[けっこん]します", "v3", "kết hôn", "来年[らいねん] 結婚[けっこん]したいです。", "Năm sau tôi muốn kết hôn."],
    ["買[か]い物[もの]します", "v3", "mua sắm", "日曜日[にちようび]に スーパーで 買[か]い物[もの]します。", "Chủ nhật tôi mua sắm ở siêu thị."],
    ["食事[しょくじ]します", "v3", "dùng bữa", "今晩[こんばん] 家族[かぞく]と レストランで 食事[しょくじ]します。", "Tối nay tôi ăn ở nhà hàng với gia đình."],
    ["散歩[さんぽ]します", "v3", "đi dạo", "毎朝[まいあさ] 公園[こうえん]を 散歩[さんぽ]します。", "Mỗi sáng tôi đi dạo trong công viên."],
    ["大変[たいへん]", "na", "vất vả", "毎日[まいにち] 仕事[しごと]が 大変[たいへん]です。", "Ngày nào công việc cũng vất vả."],
    ["欲[ほ]しい", "ai", "muốn có", "新[あたら]しい 車[くるま]が 欲[ほ]しいです。", "Tôi muốn có ô tô mới."],
    ["広[ひろ]い", "ai", "rộng", "広[ひろ]い うちが 欲[ほ]しいです。", "Tôi muốn có căn nhà rộng."],
    ["狭[せま]い", "ai", "chật, hẹp", "私[わたし]の 部屋[へや]は 狭[せま]いですが、 きれいです。", "Phòng tôi chật nhưng sạch."],
    ["プール", "n", "bể bơi", "夏[なつ]は 毎日[まいにち] プールで 泳[およ]ぎます。", "Mùa hè ngày nào tôi cũng bơi ở bể bơi."],
    ["川[かわ]", "n", "sông", "川[かわ]へ 釣[つ]りに 行[い]きました。", "Tôi đã ra sông câu cá."],
    ["釣[つ]り", "n", "việc câu cá", "父[ちち]は 釣[つ]りが 好[す]きです。", "Bố tôi thích câu cá."],
    ["スキー", "n", "trượt tuyết", "冬[ふゆ]は 北海道[ほっかいどう]へ スキーに 行[い]きたいです。", "Mùa đông tôi muốn đi Hokkaido trượt tuyết."],
    ["週末[しゅうまつ]", "n", "cuối tuần", "週末[しゅうまつ]は 何[なに]を したいですか。", "Cuối tuần bạn muốn làm gì?"],
    ["お正月[しょうがつ]", "n", "Tết", "お正月[しょうがつ]は 国[くに]へ 帰[かえ]りたいです。", "Tết tôi muốn về nước."],
    ["何[なに]か", "pro", "cái gì đó", "何[なに]か 飲[の]みたいですね。", "Muốn uống cái gì đó nhỉ."],
    ["どこか", "pro", "nơi nào đó", "夏休[なつやす]みに どこか 行[い]きましたか。", "Kỳ nghỉ hè bạn có đi đâu không?"]
  ],
  dlg: { title: "Cuối tuần muốn làm gì?",
    keys: ["週末[しゅうまつ]", "川[かわ]", "釣[つ]り", "大変[たいへん]", "欲[ほ]しい", "広[ひろ]い"],
    lines: [
      ["A", "リンさん、 週末[しゅうまつ]は 何[なに]を したいですか。", "Chị Linh, cuối tuần chị muốn làm gì?"],
      ["B", "川[かわ]へ 釣[つ]りに 行[い]きたいです。 田中[たなか]さんは？", "Tôi muốn ra sông câu cá. Còn anh Tanaka?"],
      ["A", "私[わたし]は 疲[つか]れましたから、 どこも 行[い]きたくないです。", "Tôi mệt nên không muốn đi đâu cả."],
      ["B", "仕事[しごと]が 大変[たいへん]ですね。 今[いま] 何[なに]が いちばん 欲[ほ]しいですか。", "Công việc vất vả nhỉ. Bây giờ anh muốn có gì nhất?"],
      ["A", "時間[じかん]が 欲[ほ]しいです。 それから、 広[ひろ]い うちも 欲[ほ]しいです。", "Tôi muốn có thời gian. Và cũng muốn có căn nhà rộng."],
      ["B", "じゃ、 今晩[こんばん] 一緒[いっしょ]に 食事[しょくじ]しませんか。", "Vậy tối nay cùng đi ăn với tôi không?"]
    ],
    qa: [
      { q: "Cuối tuần chị Linh muốn làm gì?", opts: ["Đi câu cá", "Đi bơi", "Đi trượt tuyết", "Đi mua sắm"], ans: 0 },
      { q: "Anh Tanaka muốn có gì nhất?", opts: ["Thời gian", "Ô tô", "Tiền", "Máy tính"], ans: 0 }
    ],
    tf: [
      { s: "Anh Tanaka mệt nên không muốn đi đâu.", a: true },
      { s: "Chị Linh muốn đi câu cá ở biển.", a: false }
    ] } },

  { name: "Thể て: nhờ vả, đang làm", words: [
    ["つけます", "v2", "bật (điện, máy)", "暗[くら]いですから、 電気[でんき]を つけて ください。", "Tối quá, hãy bật đèn lên."],
    ["消[け]します", "v1", "tắt (điện, máy)", "エアコンを 消[け]しましょうか。", "Tôi tắt điều hoà nhé?"],
    ["開[あ]けます", "v2", "mở (cửa)", "窓[まど]を 開[あ]けて ください。", "Hãy mở cửa sổ ra."],
    ["閉[し]めます", "v2", "đóng (cửa)", "寒[さむ]いですから、 ドアを 閉[し]めて ください。", "Lạnh quá, hãy đóng cửa lại."],
    ["急[いそ]ぎます", "v1", "vội, gấp", "時間[じかん]が ありませんから、 急[いそ]ぎましょう。", "Không có thời gian, chúng ta nhanh lên nào."],
    ["待[ま]ちます", "v1", "đợi", "ここで ちょっと 待[ま]って ください。", "Hãy đợi ở đây một chút."],
    ["持[も]ちます", "v1", "cầm, mang", "荷物[にもつ]を 持[も]ちましょうか。", "Tôi cầm đồ giúp nhé?"],
    ["手伝[てつだ]います", "v1", "giúp đỡ", "忙[いそが]しいですか。 手伝[てつだ]いましょうか。", "Bạn bận à? Tôi giúp nhé?"],
    ["呼[よ]びます", "v1", "gọi", "タクシーを 呼[よ]びましょうか。", "Tôi gọi taxi nhé?"],
    ["話[はな]します", "v1", "nói chuyện", "リンさんは 今[いま] 先生[せんせい]と 話[はな]して います。", "Chị Linh đang nói chuyện với thầy giáo."],
    ["使[つか]います", "v1", "dùng", "この パソコンを 使[つか]って ください。", "Hãy dùng cái máy tính này."],
    ["止[と]めます", "v2", "dừng, đỗ", "あの 信号[しんごう]の 前[まえ]で 車[くるま]を 止[と]めて ください。", "Hãy dừng xe trước đèn giao thông kia."],
    ["見[み]せます", "v2", "cho xem", "パスポートを 見[み]せて ください。", "Hãy cho tôi xem hộ chiếu."],
    ["座[すわ]ります", "v1", "ngồi", "どうぞ ここに 座[すわ]って ください。", "Xin mời ngồi ở đây."],
    ["電気[でんき]", "n", "điện, đèn điện", "部屋[へや]の 電気[でんき]を 消[け]して ください。", "Hãy tắt đèn trong phòng."],
    ["名前[なまえ]", "n", "tên", "ここに 名前[なまえ]を 書[か]いて ください。", "Hãy viết tên vào đây."],
    ["住所[じゅうしょ]", "n", "địa chỉ", "住所[じゅうしょ]を 教[おし]えて ください。", "Hãy cho tôi biết địa chỉ."],
    ["地図[ちず]", "n", "bản đồ", "すみませんが、 地図[ちず]を 見[み]せて ください。", "Xin lỗi, hãy cho tôi xem bản đồ."],
    ["ゆっくり", "adv", "chậm, thong thả", "もう 少[すこ]し ゆっくり 話[はな]して ください。", "Hãy nói chậm hơn một chút."],
    ["すぐ", "adv", "ngay lập tức", "すぐ 来[き]て ください。", "Hãy đến ngay."]
  ],
  dlg: { title: "Đi taxi",
    keys: ["住所[じゅうしょ]", "地図[ちず]", "窓[まど]", "止[と]めます"],
    lines: [
      ["A", "さくらホテルまで お願[ねが]いします。", "Cho tôi đến khách sạn Sakura."],
      ["B", "はい。 住所[じゅうしょ]が 分[わ]かりますか。", "Vâng. Quý khách có biết địa chỉ không?"],
      ["A", "この 地図[ちず]を 見[み]て ください。 駅[えき]の 近[ちか]くです。", "Anh xem bản đồ này. Ở gần nhà ga."],
      ["B", "分[わ]かりました。 雨[あめ]が 降[ふ]って いますね。 窓[まど]を 閉[し]めましょうか。", "Tôi hiểu rồi. Trời đang mưa nhỉ. Tôi đóng cửa sổ nhé?"],
      ["A", "はい、 お願[ねが]いします。 すみません、 少[すこ]し 急[いそ]いで ください。", "Vâng, nhờ anh. Xin lỗi, anh đi nhanh một chút giúp tôi."],
      ["B", "はい。 あの ホテルの 前[まえ]で 止[と]めます。", "Vâng. Tôi sẽ dừng trước khách sạn kia."]
    ],
    qa: [
      { q: "Khách muốn đi đâu?", opts: ["Khách sạn Sakura", "Nhà ga", "Sân bay", "Bệnh viện"], ans: 0 },
      { q: "Thời tiết lúc đó thế nào?", opts: ["Đang mưa", "Trời nắng", "Có tuyết", "Rất nóng"], ans: 0 }
    ],
    tf: [
      { s: "Khách nhờ tài xế đi nhanh hơn một chút.", a: true },
      { s: "Khách sạn ở xa nhà ga.", a: false }
    ] } },

  { name: "Cho phép, cấm, trạng thái", words: [
    ["置[お]きます", "v1", "đặt, để", "ここに 荷物[にもつ]を 置[お]いても いいですか。", "Tôi để đồ ở đây có được không?"],
    ["作[つく]ります", "v1", "làm, chế tạo", "父[ちち]の 会社[かいしゃ]は 車[くるま]を 作[つく]って います。", "Công ty của bố tôi sản xuất ô tô."],
    ["売[う]ります", "v1", "bán", "あの 店[みせ]で 古[ふる]い 本[ほん]を 売[う]って います。", "Cửa hàng kia bán sách cũ."],
    ["知[し]ります", "v1", "biết", "リンさんの 住所[じゅうしょ]を 知[し]って いますか。", "Bạn có biết địa chỉ của chị Linh không?"],
    ["住[す]みます", "v1", "sống, ở", "兄[あに]は 大阪[おおさか]に 住[す]んで います。", "Anh trai tôi sống ở Osaka."],
    ["研究[けんきゅう]します", "v3", "nghiên cứu", "大学[だいがく]で 経済[けいざい]を 研究[けんきゅう]して います。", "Tôi đang nghiên cứu kinh tế ở trường đại học."],
    ["立[た]ちます", "v1", "đứng", "ここに 立[た]っては いけません。", "Không được đứng ở đây."],
    ["入[はい]ります", "v1", "vào", "この 部屋[へや]に 入[はい]っても いいですか。", "Tôi vào phòng này có được không?"],
    ["資料[しりょう]", "n", "tài liệu", "この 資料[しりょう]を コピーしても いいですか。", "Tôi photo tài liệu này có được không?"],
    ["カタログ", "n", "catalogue", "この カタログを もらっても いいですか。", "Tôi lấy quyển catalogue này có được không?"],
    ["時刻表[じこくひょう]", "n", "bảng giờ tàu xe", "バスの 時刻表[じこくひょう]を 見[み]せて ください。", "Hãy cho tôi xem bảng giờ xe buýt."],
    ["服[ふく]", "n", "quần áo", "姉[あね]は デパートで 服[ふく]を 売[う]って います。", "Chị tôi bán quần áo ở cửa hàng bách hoá."],
    ["製品[せいひん]", "n", "sản phẩm", "この 会社[かいしゃ]の 製品[せいひん]は 有名[ゆうめい]です。", "Sản phẩm của công ty này nổi tiếng."],
    ["ソフト", "n", "phần mềm", "弟[おとうと]は パソコンの ソフトを 作[つく]って います。", "Em trai tôi làm phần mềm máy tính."],
    ["電子辞書[でんしじしょ]", "n", "từ điển điện tử", "試験[しけん]で 電子辞書[でんしじしょ]を 使[つか]っては いけません。", "Không được dùng từ điển điện tử trong kỳ thi."],
    ["経済[けいざい]", "n", "kinh tế", "日本[にほん]の 経済[けいざい]の 本[ほん]を 読[よ]んで います。", "Tôi đang đọc sách về kinh tế Nhật Bản."],
    ["市役所[しやくしょ]", "n", "toà thị chính", "母[はは]は 市役所[しやくしょ]で 働[はたら]いて います。", "Mẹ tôi làm việc ở toà thị chính."],
    ["高校[こうこう]", "n", "trường cấp ba", "妹[いもうと]は 高校[こうこう]で 英語[えいご]を 習[なら]って います。", "Em gái tôi đang học tiếng Anh ở trường cấp ba."],
    ["歯医者[はいしゃ]", "n", "nha sĩ", "明日[あした] 歯医者[はいしゃ]へ 行[い]きます。", "Ngày mai tôi đi nha sĩ."],
    ["独身[どくしん]", "n", "độc thân", "兄[あに]は まだ 独身[どくしん]です。", "Anh trai tôi vẫn còn độc thân."]
  ],
  dlg: { title: "Gia đình ở đâu, làm gì?",
    keys: ["両親[りょうしん]", "市役所[しやくしょ]", "ソフト", "独身[どくしん]"],
    lines: [
      ["A", "リンさん、 ご家族[かぞく]は どこに 住[す]んで いますか。", "Chị Linh, gia đình chị sống ở đâu?"],
      ["B", "両親[りょうしん]は ハノイに 住[す]んで います。 父[ちち]は 市役所[しやくしょ]で 働[はたら]いて います。", "Bố mẹ tôi sống ở Hà Nội. Bố tôi làm việc ở toà thị chính."],
      ["A", "お兄[にい]さんも ハノイですか。", "Anh trai chị cũng ở Hà Nội à?"],
      ["B", "いいえ、 兄[あに]は 東京[とうきょう]の 会社[かいしゃ]で ソフトを 作[つく]って います。", "Không, anh tôi làm phần mềm ở một công ty tại Tokyo."],
      ["A", "そうですか。 結婚[けっこん]して いますか。", "Vậy à. Anh ấy đã kết hôn chưa?"],
      ["B", "いいえ、 まだ 独身[どくしん]です。", "Chưa, anh ấy vẫn độc thân."]
    ],
    qa: [
      { q: "Bố của chị Linh làm việc ở đâu?", opts: ["Toà thị chính", "Ngân hàng", "Trường cấp ba", "Bệnh viện"], ans: 0 },
      { q: "Anh trai chị Linh làm gì?", opts: ["Làm phần mềm", "Bán quần áo", "Nghiên cứu kinh tế", "Làm nha sĩ"], ans: 0 }
    ],
    tf: [
      { s: "Anh trai chị Linh làm việc ở Tokyo.", a: true },
      { s: "Anh trai chị Linh đã kết hôn.", a: false }
    ] } }
);
