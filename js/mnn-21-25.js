// Minna no Nihongo I, bài 21–25: と思います, mệnh đề bổ nghĩa danh từ, とき, cho nhận hành động, たら
SETS.push(
  { name: "Ý kiến, dự đoán", words: [
    ["思[おも]います", "v1", "nghĩ", "明日[あした]は 雨[あめ]が 降[ふ]ると 思[おも]います。", "Tôi nghĩ ngày mai trời sẽ mưa."],
    ["言[い]います", "v1", "nói", "先生[せんせい]は 明日[あした] 試験[しけん]が あると 言[い]いました。", "Thầy giáo nói ngày mai có bài thi."],
    ["勝[か]ちます", "v1", "thắng", "昨日[きのう]の 試合[しあい]は 日本[にほん]が 勝[か]ちました。", "Trận đấu hôm qua Nhật đã thắng."],
    ["負[ま]けます", "v2", "thua", "私[わたし]の 好[す]きな チームは 負[ま]けたと 思[おも]います。", "Tôi nghĩ đội tôi thích đã thua."],
    ["役[やく]に 立[た]ちます", "v1", "có ích", "この 辞書[じしょ]は とても 役[やく]に 立[た]ちます。", "Quyển từ điển này rất có ích."],
    ["動[うご]きます", "v1", "chuyển động, chạy (máy)", "この 時計[とけい]は 動[うご]きません。", "Cái đồng hồ này không chạy."],
    ["やめます", "v2", "bỏ, thôi", "兄[あに]は 来月[らいげつ] 会社[かいしゃ]を やめると 言[い]いました。", "Anh trai tôi nói tháng sau sẽ nghỉ việc ở công ty."],
    ["気[き]を つけます", "v2", "chú ý, cẩn thận", "車[くるま]に 気[き]を つけて ください。", "Hãy cẩn thận với ô tô."],
    ["留学[りゅうがく]します", "v3", "du học", "来年[らいねん] 日本[にほん]へ 留学[りゅうがく]したいと 思[おも]います。", "Tôi nghĩ năm sau mình muốn du học Nhật."],
    ["無駄[むだ]", "na", "lãng phí", "時間[じかん]の 無駄[むだ]だと 思[おも]います。", "Tôi nghĩ là lãng phí thời gian."],
    ["不便[ふべん]", "na", "bất tiện", "この 町[まち]は 交通[こうつう]が 不便[ふべん]だと 思[おも]います。", "Tôi nghĩ thành phố này giao thông bất tiện."],
    ["交通[こうつう]", "n", "giao thông", "東京[とうきょう]は 交通[こうつう]が 便利[べんり]です。", "Tokyo giao thông tiện lợi."],
    ["物価[ぶっか]", "n", "vật giá", "日本[にほん]は 物価[ぶっか]が 高[たか]いと 思[おも]います。", "Tôi nghĩ vật giá ở Nhật cao."],
    ["ニュース", "n", "tin tức", "今朝[けさ]の ニュースを 見[み]ましたか。", "Bạn đã xem tin tức sáng nay chưa?"],
    ["夢[ゆめ]", "n", "ước mơ, giấc mơ", "私[わたし]の 夢[ゆめ]は 日本[にほん]で 働[はたら]く ことです。", "Ước mơ của tôi là làm việc ở Nhật."],
    ["試合[しあい]", "n", "trận đấu", "明日[あした]の 試合[しあい]は どちらが 勝[か]つでしょうか。", "Trận đấu ngày mai bên nào sẽ thắng nhỉ?"],
    ["意見[いけん]", "n", "ý kiến", "私[わたし]も 田中[たなか]さんと 同[おな]じ 意見[いけん]です。", "Tôi cũng cùng ý kiến với anh Tanaka."],
    ["最近[さいきん]", "adv", "gần đây", "最近[さいきん] とても 忙[いそが]しいです。", "Gần đây tôi rất bận."],
    ["たぶん", "adv", "có lẽ", "リンさんは たぶん 来[こ]ないでしょう。", "Có lẽ chị Linh sẽ không đến."],
    ["きっと", "adv", "chắc chắn", "明日[あした]は きっと いい 天気[てんき]でしょう。", "Ngày mai chắc chắn trời sẽ đẹp."]
  ],
  dlg: { title: "Trận bóng ngày mai",
    keys: ["試合[しあい]", "たぶん", "最近[さいきん]", "ニュース", "きっと"],
    lines: [
      ["A", "明日[あした]の サッカーの 試合[しあい]、 どちらが 勝[か]つと 思[おも]いますか。", "Trận bóng đá ngày mai, chị nghĩ bên nào sẽ thắng?"],
      ["B", "たぶん 日本[にほん]が 勝[か]つと 思[おも]います。 最近[さいきん] とても 強[つよ]いですから。", "Tôi nghĩ có lẽ Nhật sẽ thắng. Vì gần đây họ rất mạnh."],
      ["A", "そうですね。 でも、 ニュースで ブラジルも 調子[ちょうし]が いいと 言[い]って いましたよ。", "Đúng vậy nhỉ. Nhưng tin tức nói Brazil cũng đang có phong độ tốt đấy."],
      ["B", "ええ。 きっと おもしろい 試合[しあい]に なるでしょう。", "Vâng. Chắc chắn sẽ là một trận đấu hay."],
      ["A", "一緒[いっしょ]に テレビで 見[み]ませんか。", "Cùng xem trên tivi không?"],
      ["B", "いいですね。 うちへ 来[き]て ください。", "Hay đấy. Anh đến nhà tôi nhé."]
    ],
    qa: [
      { q: "B nghĩ đội nào sẽ thắng?", opts: ["Nhật Bản", "Brazil", "Hai đội hoà", "Không biết"], ans: 0 },
      { q: "Hai người sẽ xem trận đấu ở đâu?", opts: ["Qua tivi ở nhà B", "Ở sân vận động", "Ở quán cà phê", "Không xem"], ans: 0 }
    ],
    tf: [
      { s: "Tin tức nói Brazil cũng đang có phong độ tốt.", a: true },
      { s: "B nghĩ trận đấu sẽ nhàm chán.", a: false }
    ] } },

  { name: "Trang phục, nhà ở", words: [
    ["着[き]ます", "v2", "mặc (áo)", "赤[あか]い セーターを 着[き]て いる 人[ひと]は リンさんです。", "Người mặc áo len đỏ là chị Linh."],
    ["履[は]きます", "v1", "đi (giày), mặc (quần)", "白[しろ]い 靴[くつ]を 履[は]いて いる 人[ひと]は だれですか。", "Người đi giày trắng là ai?"],
    ["かぶります", "v1", "đội (mũ)", "帽子[ぼうし]を かぶって いる 人[ひと]は 山田[やまだ]さんです。", "Người đội mũ là anh Yamada."],
    ["かけます", "v2", "đeo (kính)", "眼鏡[めがね]を かけて いる 人[ひと]は 私[わたし]の 兄[あに]です。", "Người đeo kính là anh trai tôi."],
    ["生[う]まれます", "v2", "sinh ra", "ここは 私[わたし]が 生[う]まれた 町[まち]です。", "Đây là thành phố nơi tôi sinh ra."],
    ["私[わたし]たち", "pro", "chúng tôi", "これは 私[わたし]たちが 作[つく]った ケーキです。", "Đây là cái bánh chúng tôi làm."],
    ["コート", "n", "áo khoác dài", "昨日[きのう] 買[か]った コートは とても 暖[あたた]かいです。", "Cái áo khoác mua hôm qua rất ấm."],
    ["セーター", "n", "áo len", "母[はは]に もらった セーターを 着[き]ます。", "Tôi mặc cái áo len mẹ tặng."],
    ["スーツ", "n", "bộ vest", "父[ちち]は 毎日[まいにち] スーツを 着[き]て、 会社[かいしゃ]へ 行[い]きます。", "Bố tôi hằng ngày mặc vest đi làm."],
    ["帽子[ぼうし]", "n", "mũ", "これは 京都[きょうと]で 買[か]った 帽子[ぼうし]です。", "Đây là cái mũ tôi mua ở Kyoto."],
    ["眼鏡[めがね]", "n", "kính mắt", "新[あたら]しい 眼鏡[めがね]を 買[か]う お金[かね]が ありません。", "Tôi không có tiền mua kính mới."],
    ["ケーキ", "n", "bánh ngọt", "妹[いもうと]が 作[つく]った ケーキは おいしいです。", "Bánh em gái tôi làm rất ngon."],
    ["お弁当[べんとう]", "n", "cơm hộp", "これは 母[はは]が 作[つく]った お弁当[べんとう]です。", "Đây là cơm hộp mẹ tôi làm."],
    ["都合[つごう]", "n", "sự thuận tiện (thời gian)", "明日[あした]は 都合[つごう]が 悪[わる]いです。", "Ngày mai tôi không tiện."],
    ["家賃[やちん]", "n", "tiền thuê nhà", "この 部屋[へや]は 家賃[やちん]が 高[たか]いです。", "Căn phòng này tiền thuê cao."],
    ["アパート", "n", "căn hộ, nhà trọ", "駅[えき]から 近[ちか]い アパートを 探[さが]して います。", "Tôi đang tìm căn hộ gần nhà ga."],
    ["和室[わしつ]", "n", "phòng kiểu Nhật", "和室[わしつ]が ある うちに 住[す]みたいです。", "Tôi muốn sống ở ngôi nhà có phòng kiểu Nhật."],
    ["布団[ふとん]", "n", "chăn đệm kiểu Nhật", "日本[にほん]では 布団[ふとん]で 寝[ね]る 人[ひと]が 多[おお]いです。", "Ở Nhật có nhiều người ngủ bằng đệm futon."]
  ],
  dlg: { title: "Tìm thuê căn hộ",
    keys: ["アパート", "家賃[やちん]", "和室[わしつ]", "布団[ふとん]", "都合[つごう]"],
    lines: [
      ["A", "どんな アパートを 探[さが]して いますか。", "Chị đang tìm căn hộ như thế nào?"],
      ["B", "駅[えき]から 近[ちか]くて、 家賃[やちん]が 安[やす]い アパートが いいです。", "Tôi muốn căn hộ gần nhà ga và tiền thuê rẻ."],
      ["A", "これは どうですか。 和室[わしつ]が ある 部屋[へや]です。", "Căn này thì sao? Phòng có gian kiểu Nhật."],
      ["B", "いいですね。 布団[ふとん]で 寝[ね]る ことが できますね。 家賃[やちん]は いくらですか。", "Hay đấy. Có thể ngủ bằng đệm futon nhỉ. Tiền thuê bao nhiêu?"],
      ["A", "一[いっ]か月[げつ] 六万円[ろくまんえん]です。", "Một tháng sáu mươi nghìn yên."],
      ["B", "じゃ、 明日[あした] 見[み]に 行[い]きたいです。 都合[つごう]は どうですか。", "Vậy ngày mai tôi muốn đi xem. Anh có tiện không?"]
    ],
    qa: [
      { q: "B tìm căn hộ như thế nào?", opts: ["Gần ga, tiền thuê rẻ", "Rộng và mới", "Có vườn", "Xa nhà ga"], ans: 0 },
      { q: "Tiền thuê một tháng là bao nhiêu?", opts: ["60.000 yên", "16.000 yên", "6.000 yên", "100.000 yên"], ans: 0 }
    ],
    tf: [
      { s: "Căn phòng có gian kiểu Nhật.", a: true },
      { s: "B muốn đi xem ngay hôm nay.", a: false }
    ] } },

  { name: "Chỉ đường: とき, と", words: [
    ["回[まわ]します", "v1", "vặn, xoay", "これを 右[みぎ]へ 回[まわ]すと、 音[おと]が 大[おお]きく なります。", "Vặn cái này sang phải thì âm thanh to lên."],
    ["引[ひ]きます", "v1", "kéo", "この ドアは 引[ひ]くと、 開[あ]きます。", "Cánh cửa này kéo thì mở."],
    ["変[か]えます", "v2", "thay đổi", "色[いろ]を 変[か]える とき、 この ボタンを 押[お]します。", "Khi đổi màu thì ấn nút này."],
    ["触[さわ]ります", "v1", "sờ, chạm", "これに 触[さわ]ると、 水[みず]が 出[で]ます。", "Chạm vào cái này thì nước chảy ra."],
    ["歩[ある]きます", "v1", "đi bộ, bước đi", "道[みち]が 分[わ]からない とき、 地図[ちず]を 見[み]て 歩[ある]きます。", "Khi không biết đường tôi vừa xem bản đồ vừa đi."],
    ["渡[わた]ります", "v1", "băng qua", "橋[はし]を 渡[わた]ると、 右[みぎ]に 郵便局[ゆうびんきょく]が あります。", "Qua cầu thì bên phải có bưu điện."],
    ["曲[ま]がります", "v1", "rẽ", "二[ふた]つ目[め]の 角[かど]を 右[みぎ]へ 曲[ま]がります。", "Tôi rẽ phải ở góc phố thứ hai."],
    ["寂[さび]しい", "ai", "buồn, cô đơn", "寂[さび]しい とき、 家族[かぞく]に 電話[でんわ]を かけます。", "Khi buồn tôi gọi điện cho gia đình."],
    ["お湯[ゆ]", "n", "nước nóng", "この ボタンを 押[お]すと、 お湯[ゆ]が 出[で]ます。", "Ấn nút này thì nước nóng chảy ra."],
    ["音[おと]", "n", "âm thanh", "音[おと]が 小[ちい]さい とき、 ここを 回[まわ]して ください。", "Khi âm thanh nhỏ, hãy vặn chỗ này."],
    ["故障[こしょう]", "n", "hỏng hóc", "故障[こしょう]の とき、 この 番号[ばんごう]に 電話[でんわ]して ください。", "Khi bị hỏng, hãy gọi vào số này."],
    ["道[みち]", "n", "con đường", "道[みち]が 分[わ]からない とき、 交番[こうばん]で 聞[き]きます。", "Khi không biết đường tôi hỏi ở đồn cảnh sát."],
    ["交差点[こうさてん]", "n", "ngã tư", "あの 交差点[こうさてん]を 左[ひだり]へ 曲[ま]がると、 銀行[ぎんこう]が あります。", "Rẽ trái ở ngã tư kia thì có ngân hàng."],
    ["信号[しんごう]", "n", "đèn giao thông", "信号[しんごう]が 赤[あか]い とき、 渡[わた]っては いけません。", "Khi đèn đỏ thì không được băng qua."],
    ["角[かど]", "n", "góc phố", "あの 角[かど]に コンビニが あります。", "Ở góc phố kia có cửa hàng tiện lợi."],
    ["橋[はし]", "n", "cây cầu", "この 橋[はし]を 渡[わた]って、 まっすぐ 行[い]って ください。", "Hãy qua cây cầu này rồi đi thẳng."],
    ["駐車場[ちゅうしゃじょう]", "n", "bãi đỗ xe", "建物[たてもの]の 後[うし]ろに 駐車場[ちゅうしゃじょう]が あります。", "Phía sau toà nhà có bãi đỗ xe."],
    ["建物[たてもの]", "n", "toà nhà", "あの 白[しろ]い 建物[たてもの]は 市役所[しやくしょ]です。", "Toà nhà màu trắng kia là toà thị chính."]
  ],
  dlg: { title: "Hỏi đường đến thư viện",
    keys: ["道[みち]", "交差点[こうさてん]", "信号[しんごう]", "角[かど]", "橋[はし]", "建物[たてもの]"],
    lines: [
      ["A", "すみません。 図書館[としょかん]は どこですか。", "Xin lỗi. Thư viện ở đâu ạ?"],
      ["B", "この 道[みち]を まっすぐ 行[い]くと、 交差点[こうさてん]が あります。", "Đi thẳng con đường này thì có ngã tư."],
      ["A", "はい。", "Vâng."],
      ["B", "信号[しんごう]を 渡[わた]って、 二[ふた]つ目[め]の 角[かど]を 右[みぎ]へ 曲[ま]がって ください。", "Hãy qua đèn giao thông rồi rẽ phải ở góc phố thứ hai."],
      ["A", "二[ふた]つ目[め]の 角[かど]を 右[みぎ]ですね。", "Rẽ phải ở góc phố thứ hai đúng không ạ."],
      ["B", "ええ。 橋[はし]を 渡[わた]ると、 左[ひだり]に 白[しろ]い 建物[たてもの]が あります。 それが 図書館[としょかん]です。", "Vâng. Qua cầu thì bên trái có toà nhà màu trắng. Đó là thư viện."]
    ],
    qa: [
      { q: "A muốn đi đâu?", opts: ["Thư viện", "Toà thị chính", "Bưu điện", "Nhà ga"], ans: 0 },
      { q: "Phải rẽ phải ở góc phố thứ mấy?", opts: ["Thứ hai", "Thứ nhất", "Thứ ba", "Thứ tư"], ans: 0 }
    ],
    tf: [
      { s: "Thư viện là toà nhà màu trắng.", a: true },
      { s: "Qua cầu thì thư viện nằm bên phải.", a: false }
    ] } },

  { name: "Giúp đỡ: てくれます, てもらいます", words: [
    ["くれます", "v2", "cho (mình)", "友達[ともだち]が 私[わたし]に 傘[かさ]を 貸[か]して くれました。", "Bạn đã cho tôi mượn ô."],
    ["直[なお]します", "v1", "sửa", "兄[あに]が 自転車[じてんしゃ]を 直[なお]して くれました。", "Anh trai đã sửa xe đạp giúp tôi."],
    ["連[つ]れて 行[い]きます", "v1", "dẫn đi", "日曜日[にちようび] 子[こ]どもを 公園[こうえん]へ 連[つ]れて 行[い]きます。", "Chủ nhật tôi dẫn con ra công viên."],
    ["連[つ]れて 来[き]ます", "v3", "dẫn đến", "明日[あした] 友達[ともだち]を うちへ 連[つ]れて 来[き]ます。", "Ngày mai tôi dẫn bạn về nhà."],
    ["紹介[しょうかい]します", "v3", "giới thiệu", "田中[たなか]さんが いい 先生[せんせい]を 紹介[しょうかい]して くれました。", "Anh Tanaka đã giới thiệu cho tôi một giáo viên tốt."],
    ["案内[あんない]します", "v3", "hướng dẫn, dẫn đi tham quan", "友達[ともだち]に 京都[きょうと]を 案内[あんない]して もらいました。", "Tôi được bạn dẫn đi tham quan Kyoto."],
    ["説明[せつめい]します", "v3", "giải thích", "先生[せんせい]が 漢字[かんじ]の 意味[いみ]を 説明[せつめい]して くれました。", "Thầy giáo đã giải thích nghĩa chữ Hán cho tôi."],
    ["おじいさん", "n", "ông, cụ ông", "おじいさんに 古[ふる]い 時計[とけい]を もらいました。", "Tôi được ông tặng cái đồng hồ cũ."],
    ["おばあさん", "n", "bà, cụ bà", "おばあさんに 道[みち]を 教[おし]えて あげました。", "Tôi đã chỉ đường cho một bà cụ."],
    ["準備[じゅんび]", "n", "sự chuẩn bị", "友達[ともだち]が 旅行[りょこう]の 準備[じゅんび]を 手伝[てつだ]って くれました。", "Bạn đã giúp tôi chuẩn bị cho chuyến đi."],
    ["引[ひ]っ越[こ]し", "n", "việc chuyển nhà", "引[ひ]っ越[こ]しの とき、 みんなが 手伝[てつだ]って くれました。", "Khi chuyển nhà mọi người đã giúp tôi."],
    ["お菓子[かし]", "n", "bánh kẹo", "リンさんが ベトナムの お菓子[かし]を くれました。", "Chị Linh đã cho tôi bánh kẹo Việt Nam."],
    ["ホームステイ", "n", "ở cùng gia đình bản xứ", "ホームステイの 家族[かぞく]が 日本語[にほんご]を 教[おし]えて くれました。", "Gia đình homestay đã dạy tiếng Nhật cho tôi."],
    ["全部[ぜんぶ]", "adv", "toàn bộ, tất cả", "宿題[しゅくだい]は 全部[ぜんぶ] 終[お]わりました。", "Bài tập về nhà đã xong toàn bộ."],
    ["自分[じぶん]で", "adv", "tự mình", "この 料理[りょうり]は 自分[じぶん]で 作[つく]りました。", "Món này tôi tự nấu."],
    ["ほかに", "adv", "ngoài ra", "ほかに だれが 手伝[てつだ]って くれましたか。", "Ngoài ra còn ai đã giúp bạn?"]
  ],
  dlg: { title: "Chuyển nhà",
    keys: ["引[ひ]っ越[こ]し", "ほかに", "自分[じぶん]で", "お菓子[かし]", "お弁当[べんとう]"],
    lines: [
      ["A", "リンさん、 引[ひ]っ越[こ]しは もう 終[お]わりましたか。", "Chị Linh, việc chuyển nhà đã xong chưa?"],
      ["B", "はい。 田中[たなか]さんが 車[くるま]で 荷物[にもつ]を 運[はこ]んで くれました。", "Rồi. Anh Tanaka đã chở đồ bằng ô tô giúp tôi."],
      ["A", "よかったですね。 ほかに だれが 手伝[てつだ]って くれましたか。", "Tốt quá nhỉ. Ngoài ra còn ai giúp chị nữa?"],
      ["B", "佐藤[さとう]さんが 掃除[そうじ]を 手伝[てつだ]って くれました。 それから、 町[まち]を 案内[あんない]して くれました。", "Chị Sato giúp tôi dọn dẹp. Sau đó còn dẫn tôi đi tham quan khu phố."],
      ["A", "親切[しんせつ]ですね。 晩[ばん]ご飯[はん]は 自分[じぶん]で 作[つく]りましたか。", "Tử tế quá nhỉ. Bữa tối chị tự nấu à?"],
      ["B", "いいえ、 佐藤[さとう]さんが お菓子[かし]と お弁当[べんとう]を 持[も]って 来[き]て くれました。", "Không, chị Sato đã mang bánh kẹo và cơm hộp đến cho tôi."]
    ],
    qa: [
      { q: "Ai chở đồ giúp chị Linh?", opts: ["Anh Tanaka", "Chị Sato", "Anh Yamada", "Chị Linh tự chở"], ans: 0 },
      { q: "Chị Sato mang gì đến?", opts: ["Bánh kẹo và cơm hộp", "Hoa", "Đồ uống", "Bàn ghế"], ans: 0 }
    ],
    tf: [
      { s: "Chị Sato dẫn chị Linh đi tham quan khu phố.", a: true },
      { s: "Chị Linh tự nấu bữa tối.", a: false }
    ] } },

  { name: "Giả định: たら, ても", words: [
    ["考[かんが]えます", "v2", "suy nghĩ", "いくら 考[かんが]えても、 分[わ]かりません。", "Dù nghĩ bao nhiêu tôi cũng không hiểu."],
    ["着[つ]きます", "v1", "đến nơi", "駅[えき]に 着[つ]いたら、 電話[でんわ]を ください。", "Khi đến ga thì gọi điện cho tôi nhé."],
    ["足[た]ります", "v1", "đủ", "お金[かね]が 足[た]りなかったら、 貸[か]しますよ。", "Nếu không đủ tiền thì tôi cho mượn."],
    ["頑張[がんば]ります", "v1", "cố gắng", "大変[たいへん]でも、 最後[さいご]まで 頑張[がんば]ります。", "Dù vất vả tôi cũng cố gắng đến cùng."],
    ["年[とし]を 取[と]ります", "v1", "già đi, có tuổi", "年[とし]を 取[と]っても、 働[はたら]きたいです。", "Dù có tuổi tôi vẫn muốn làm việc."],
    ["降[ふ]ります", "v1", "rơi (mưa, tuyết)", "雨[あめ]が 降[ふ]っても、 出[で]かけます。", "Dù trời mưa tôi vẫn ra ngoài."],
    ["田舎[いなか]", "n", "nông thôn, quê", "年[とし]を 取[と]ったら、 田舎[いなか]に 住[す]みたいです。", "Khi về già tôi muốn sống ở nông thôn."],
    ["チャンス", "n", "cơ hội", "チャンスが あったら、 留学[りゅうがく]したいです。", "Nếu có cơ hội tôi muốn đi du học."],
    ["億[おく]", "n", "một trăm triệu", "一[いち]億[おく]円[えん] あったら、 何[なに]を しますか。", "Nếu có một trăm triệu yên bạn sẽ làm gì?"],
    ["もし", "adv", "nếu", "もし 時間[じかん]が あったら、 遊[あそ]びに 来[き]て ください。", "Nếu có thời gian thì đến chơi nhé."],
    ["意味[いみ]", "n", "ý nghĩa", "辞書[じしょ]を 見[み]ても、 意味[いみ]が 分[わ]かりません。", "Dù xem từ điển tôi cũng không hiểu nghĩa."],
    ["転勤[てんきん]", "n", "chuyển công tác", "来月[らいげつ] 大阪[おおさか]へ 転勤[てんきん]します。", "Tháng sau tôi chuyển công tác đến Osaka."],
    ["暇[ひま]", "na", "rảnh rỗi", "暇[ひま]だったら、 手伝[てつだ]って ください。", "Nếu rảnh thì giúp tôi nhé."],
    ["いろいろ", "na", "nhiều thứ, đủ loại", "日本[にほん]で いろいろな 所[ところ]へ 行[い]きました。", "Ở Nhật tôi đã đi nhiều nơi."],
    ["お世話[せわ]に なりました", "exp", "cảm ơn đã giúp đỡ tôi", "三年間[さんねんかん]、 本当[ほんとう]に お世話[せわ]に なりました。", "Ba năm qua thật sự cảm ơn anh chị đã giúp đỡ."],
    ["どうぞ お元気[げんき]で", "exp", "chúc mạnh khoẻ (khi chia tay)", "大阪[おおさか]へ 行[い]っても、 どうぞ お元気[げんき]で。", "Dù đi Osaka cũng chúc anh chị mạnh khoẻ."]
  ],
  dlg: { title: "Chia tay",
    keys: ["転勤[てんきん]", "お世話[せわ]に なりました", "もし", "暇[ひま]", "頑張[がんば]ります", "どうぞ お元気[げんき]で"],
    lines: [
      ["A", "リンさん、 来月[らいげつ] 大阪[おおさか]へ 転勤[てんきん]ですね。", "Chị Linh, tháng sau chị chuyển công tác đến Osaka nhỉ."],
      ["B", "はい。 田中[たなか]さん、 いろいろ お世話[せわ]に なりました。", "Vâng. Anh Tanaka, cảm ơn anh đã giúp đỡ tôi rất nhiều."],
      ["A", "大阪[おおさか]に 着[つ]いたら、 連絡[れんらく]して くださいね。", "Đến Osaka rồi thì liên lạc với tôi nhé."],
      ["B", "はい。 もし 暇[ひま]が あったら、 遊[あそ]びに 来[き]て ください。", "Vâng. Nếu có thời gian rảnh thì anh đến chơi nhé."],
      ["A", "ありがとう。 仕事[しごと]が 大変[たいへん]でも、 頑張[がんば]って ください。", "Cảm ơn chị. Dù công việc vất vả cũng cố gắng lên nhé."],
      ["B", "はい、 頑張[がんば]ります。 田中[たなか]さんも どうぞ お元気[げんき]で。", "Vâng, tôi sẽ cố gắng. Chúc anh Tanaka cũng mạnh khoẻ."]
    ],
    qa: [
      { q: "Chị Linh chuyển công tác đến đâu?", opts: ["Osaka", "Tokyo", "Kyoto", "Hokkaido"], ans: 0 },
      { q: "Anh Tanaka dặn chị Linh làm gì khi đến nơi?", opts: ["Liên lạc với anh ấy", "Gửi ảnh", "Mua quà", "Quay về ngay"], ans: 0 }
    ],
    tf: [
      { s: "Chị Linh mời anh Tanaka đến chơi nếu rảnh.", a: true },
      { s: "Chị Linh chuyển đi vào tuần sau.", a: false }
    ] } }
);
