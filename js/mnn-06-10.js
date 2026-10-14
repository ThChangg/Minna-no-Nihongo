// Minna no Nihongo I, bài 6–10: động từ + を, cho và nhận, tính từ, sở thích, vị trí
SETS.push(
  { name: "Ăn uống, hoạt động", words: [
    ["食[た]べます", "v2", "ăn", "毎朝[まいあさ] パンを 食[た]べます。", "Mỗi sáng tôi ăn bánh mì."],
    ["飲[の]みます", "v1", "uống", "一緒[いっしょ]に ビールを 飲[の]みませんか。", "Cùng uống bia với tôi không?"],
    ["見[み]ます", "v2", "xem, nhìn", "昨日[きのう]の 晩[ばん] テレビを 見[み]ました。", "Tối qua tôi đã xem tivi."],
    ["聞[き]きます", "v1", "nghe", "毎晩[まいばん] 音楽[おんがく]を 聞[き]きます。", "Mỗi tối tôi nghe nhạc."],
    ["読[よ]みます", "v1", "đọc", "図書館[としょかん]で 新聞[しんぶん]を 読[よ]みます。", "Tôi đọc báo ở thư viện."],
    ["書[か]きます", "v1", "viết", "明日[あした] レポートを 書[か]きます。", "Ngày mai tôi viết báo cáo."],
    ["買[か]います", "v1", "mua", "スーパーで 肉[にく]を 買[か]いました。", "Tôi đã mua thịt ở siêu thị."],
    ["撮[と]ります", "v1", "chụp (ảnh)", "京都[きょうと]で 写真[しゃしん]を 撮[と]りました。", "Tôi đã chụp ảnh ở Kyoto."],
    ["会[あ]います", "v1", "gặp", "駅[えき]で 友達[ともだち]に 会[あ]います。", "Tôi gặp bạn ở nhà ga."],
    ["ご飯[はん]", "n", "cơm, bữa ăn", "一緒[いっしょ]に ご飯[はん]を 食[た]べましょう。", "Chúng ta cùng ăn cơm nhé."],
    ["パン", "n", "bánh mì", "デパートで パンを 買[か]います。", "Tôi mua bánh mì ở cửa hàng bách hoá."],
    ["肉[にく]", "n", "thịt", "私[わたし]は 肉[にく]を 食[た]べません。", "Tôi không ăn thịt."],
    ["魚[さかな]", "n", "cá", "今晩[こんばん] 魚[さかな]を 食[た]べます。", "Tối nay tôi ăn cá."],
    ["野菜[やさい]", "n", "rau", "毎日[まいにち] 野菜[やさい]を 食[た]べます。", "Hằng ngày tôi ăn rau."],
    ["水[みず]", "n", "nước", "朝[あさ] 水[みず]を 飲[の]みます。", "Buổi sáng tôi uống nước."],
    ["お茶[ちゃ]", "n", "trà", "一緒[いっしょ]に お茶[ちゃ]を 飲[の]みませんか。", "Cùng uống trà với tôi không?"],
    ["映画[えいが]", "n", "phim", "日曜日[にちようび]に 映画[えいが]を 見[み]ます。", "Chủ nhật tôi xem phim."],
    ["手紙[てがみ]", "n", "thư", "家族[かぞく]に 手紙[てがみ]を 書[か]きます。", "Tôi viết thư cho gia đình."],
    ["写真[しゃしん]", "n", "ảnh", "これは 家族[かぞく]の 写真[しゃしん]です。", "Đây là ảnh gia đình tôi."],
    ["一緒[いっしょ]に", "adv", "cùng nhau", "一緒[いっしょ]に 映画[えいが]を 見[み]ませんか。", "Cùng xem phim với tôi không?"]
  ],
  dlg: { title: "Rủ đi ăn tối",
    keys: ["映画[えいが]", "手紙[てがみ]", "一緒[いっしょ]に", "ご飯[はん]", "魚[さかな]"],
    lines: [
      ["A", "リンさん、 日曜日[にちようび] 何[なに]を しますか。", "Chị Linh, Chủ nhật chị làm gì?"],
      ["B", "うちで 映画[えいが]を 見[み]ます。 それから、 手紙[てがみ]を 書[か]きます。", "Tôi xem phim ở nhà. Sau đó tôi viết thư."],
      ["A", "そうですか。 晩[ばん] 一緒[いっしょ]に ご飯[はん]を 食[た]べませんか。", "Vậy à. Buổi tối cùng ăn cơm với tôi không?"],
      ["B", "いいですね。 何[なに]を 食[た]べますか。", "Hay đấy. Mình ăn gì?"],
      ["A", "魚[さかな]は どうですか。", "Ăn cá thì thế nào?"],
      ["B", "いいですね。 じゃ、 六時[ろくじ]に 駅[えき]で 会[あ]いましょう。", "Được đấy. Vậy sáu giờ gặp nhau ở nhà ga nhé."]
    ],
    qa: [
      { q: "Chủ nhật chị Linh làm gì ở nhà?", opts: ["Xem phim và viết thư", "Đọc báo", "Học tiếng Nhật", "Nấu ăn"], ans: 0 },
      { q: "Hai người hẹn gặp nhau ở đâu?", opts: ["Ở nhà ga", "Ở nhà chị Linh", "Ở siêu thị", "Ở trường"], ans: 0 }
    ],
    tf: [
      { s: "Hai người hẹn gặp nhau lúc sáu giờ.", a: true },
      { s: "Hai người định đi ăn thịt.", a: false }
    ] } },

  { name: "Cho, nhận, dụng cụ", words: [
    ["切[き]ります", "v1", "cắt", "はさみで 紙[かみ]を 切[き]ります。", "Tôi cắt giấy bằng kéo."],
    ["送[おく]ります", "v1", "gửi", "家族[かぞく]に 荷物[にもつ]を 送[おく]ります。", "Tôi gửi đồ cho gia đình."],
    ["あげます", "v2", "cho, tặng", "母[はは]に 花[はな]を あげます。", "Tôi tặng hoa cho mẹ."],
    ["もらいます", "v1", "nhận", "友達[ともだち]に プレゼントを もらいました。", "Tôi đã nhận quà từ bạn."],
    ["貸[か]します", "v1", "cho mượn", "友達[ともだち]に お金[かね]を 貸[か]しました。", "Tôi đã cho bạn mượn tiền."],
    ["借[か]ります", "v2", "mượn", "図書館[としょかん]で 本[ほん]を 借[か]りました。", "Tôi đã mượn sách ở thư viện."],
    ["教[おし]えます", "v2", "dạy, chỉ cho", "田中[たなか]さんに ベトナム語[ご]を 教[おし]えます。", "Tôi dạy tiếng Việt cho anh Tanaka."],
    ["習[なら]います", "v1", "học (từ ai đó)", "先生[せんせい]に 日本語[にほんご]を 習[なら]います。", "Tôi học tiếng Nhật từ thầy giáo."],
    ["手[て]", "n", "tay", "手[て]で ご飯[はん]を 食[た]べます。", "Tôi ăn cơm bằng tay."],
    ["箸[はし]", "n", "đũa", "箸[はし]で ご飯[はん]を 食[た]べます。", "Tôi ăn cơm bằng đũa."],
    ["はさみ", "n", "cái kéo", "この はさみは だれのですか。", "Cái kéo này là của ai?"],
    ["パソコン", "n", "máy tính cá nhân", "パソコンで レポートを 書[か]きます。", "Tôi viết báo cáo bằng máy tính."],
    ["紙[かみ]", "n", "giấy", "この 紙[かみ]に 名前[なまえ]を 書[か]きます。", "Tôi viết tên vào tờ giấy này."],
    ["花[はな]", "n", "hoa", "誕生日[たんじょうび]に 花[はな]を もらいました。", "Tôi được tặng hoa vào ngày sinh nhật."],
    ["プレゼント", "n", "quà tặng", "父[ちち]に プレゼントを 送[おく]ります。", "Tôi gửi quà cho bố."],
    ["荷物[にもつ]", "n", "hành lý, đồ đạc", "もう 荷物[にもつ]を 送[おく]りましたか。", "Bạn đã gửi đồ chưa?"],
    ["お金[かね]", "n", "tiền", "銀行[ぎんこう]で お金[かね]を 借[か]ります。", "Tôi vay tiền ở ngân hàng."],
    ["父[ちち]", "n", "bố (của mình)", "父[ちち]に 時計[とけい]を もらいました。", "Tôi được bố tặng đồng hồ."],
    ["母[はは]", "n", "mẹ (của mình)", "昨日[きのう] 母[はは]に 電話[でんわ]を かけました。", "Hôm qua tôi đã gọi điện cho mẹ."],
    ["もう", "adv", "đã... rồi", "もう 昼[ひる]ご飯[はん]を 食[た]べましたか。", "Bạn đã ăn trưa chưa?"]
  ],
  dlg: { title: "Quà sinh nhật",
    keys: ["母[はは]", "父[ちち]", "プレゼント", "もう", "荷物[にもつ]", "送[おく]ります"],
    lines: [
      ["A", "リンさん、 いい かばんですね。", "Chị Linh, cái túi đẹp quá nhỉ."],
      ["B", "ありがとう ございます。 誕生日[たんじょうび]に 母[はは]に もらいました。", "Cảm ơn anh. Tôi được mẹ tặng vào ngày sinh nhật."],
      ["A", "いいですね。 来週[らいしゅう]は 父[ちち]の 誕生日[たんじょうび]です。", "Thích nhỉ. Tuần sau là sinh nhật bố tôi."],
      ["B", "そうですか。 プレゼントは もう 買[か]いましたか。", "Vậy à. Anh đã mua quà chưa?"],
      ["A", "いいえ、 まだです。 明日[あした] デパートで 買[か]います。", "Chưa. Ngày mai tôi sẽ mua ở cửa hàng bách hoá."],
      ["B", "荷物[にもつ]は 郵便局[ゆうびんきょく]で 送[おく]りますか。", "Anh gửi đồ ở bưu điện à?"],
      ["A", "はい、 国[くに]へ 送[おく]ります。", "Vâng, tôi gửi về nước."]
    ],
    qa: [
      { q: "Chị Linh được ai tặng cái túi?", opts: ["Mẹ", "Bố", "Bạn", "Thầy giáo"], ans: 0 },
      { q: "A sẽ mua quà ở đâu?", opts: ["Cửa hàng bách hoá", "Siêu thị", "Bưu điện", "Nhà ga"], ans: 0 }
    ],
    tf: [
      { s: "Tuần sau là sinh nhật bố của A.", a: true },
      { s: "A đã mua quà rồi.", a: false }
    ] } },

  { name: "Tính từ", words: [
    ["きれい", "na", "đẹp, sạch sẽ", "桜[さくら]は きれいな 花[はな]です。", "Hoa anh đào là loài hoa đẹp."],
    ["静[しず]か", "na", "yên tĩnh", "この 図書館[としょかん]は とても 静[しず]かです。", "Thư viện này rất yên tĩnh."],
    ["にぎやか", "na", "náo nhiệt", "東京[とうきょう]は にぎやかな 町[まち]です。", "Tokyo là thành phố náo nhiệt."],
    ["有名[ゆうめい]", "na", "nổi tiếng", "京都[きょうと]は 有名[ゆうめい]な 町[まち]です。", "Kyoto là thành phố nổi tiếng."],
    ["親切[しんせつ]", "na", "tử tế, tốt bụng", "田中[たなか]さんは とても 親切[しんせつ]です。", "Anh Tanaka rất tử tế."],
    ["元気[げんき]", "na", "khoẻ mạnh", "家族[かぞく]は みんな 元気[げんき]です。", "Cả nhà tôi đều khoẻ."],
    ["便利[べんり]", "na", "tiện lợi", "地下鉄[ちかてつ]は とても 便利[べんり]です。", "Tàu điện ngầm rất tiện lợi."],
    ["大[おお]きい", "ai", "to, lớn", "あの 大[おお]きい かばんは だれのですか。", "Cái cặp to kia là của ai?"],
    ["小[ちい]さい", "ai", "nhỏ, bé", "私[わたし]の 部屋[へや]は 小[ちい]さいです。", "Phòng của tôi nhỏ."],
    ["新[あたら]しい", "ai", "mới", "新[あたら]しい パソコンを 買[か]いました。", "Tôi đã mua máy tính mới."],
    ["古[ふる]い", "ai", "cũ", "この 時計[とけい]は とても 古[ふる]いです。", "Cái đồng hồ này rất cũ."],
    ["いい", "ai", "tốt, đẹp", "今日[きょう]は いい 天気[てんき]ですね。", "Hôm nay trời đẹp nhỉ."],
    ["暑[あつ]い", "ai", "nóng (thời tiết)", "今日[きょう]は あまり 暑[あつ]くないです。", "Hôm nay không nóng lắm."],
    ["寒[さむ]い", "ai", "lạnh (thời tiết)", "北海道[ほっかいどう]は とても 寒[さむ]いです。", "Hokkaido rất lạnh."],
    ["難[むずか]しい", "ai", "khó", "日本語[にほんご]は 難[むずか]しいですが、 おもしろいです。", "Tiếng Nhật khó nhưng thú vị."],
    ["高[たか]い", "ai", "đắt, cao", "この カメラは 高[たか]いですね。", "Cái máy ảnh này đắt nhỉ."],
    ["安[やす]い", "ai", "rẻ", "あの スーパーは 安[やす]いです。", "Siêu thị kia rẻ."],
    ["おもしろい", "ai", "thú vị, hay", "昨日[きのう] おもしろい 映画[えいが]を 見[み]ました。", "Hôm qua tôi đã xem một bộ phim hay."],
    ["おいしい", "ai", "ngon", "日本[にほん]の 食[た]べ物[もの]は おいしいです。", "Đồ ăn Nhật ngon."],
    ["忙[いそが]しい", "ai", "bận", "仕事[しごと]は 忙[いそが]しいですが、 楽[たの]しいです。", "Công việc bận nhưng vui."]
  ],
  dlg: { title: "Cuộc sống ở Nhật",
    keys: ["忙[いそが]しい", "難[むずか]しい", "おもしろい", "きれい", "親切[しんせつ]"],
    lines: [
      ["A", "リンさん、 日本[にほん]の 生活[せいかつ]は どうですか。", "Chị Linh, cuộc sống ở Nhật thế nào?"],
      ["B", "毎日[まいにち] 忙[いそが]しいですが、 楽[たの]しいです。", "Ngày nào cũng bận nhưng vui."],
      ["A", "日本語[にほんご]の 勉強[べんきょう]は どうですか。", "Việc học tiếng Nhật thế nào?"],
      ["B", "難[むずか]しいですが、 おもしろいです。", "Khó nhưng thú vị."],
      ["A", "この 町[まち]は どうですか。", "Thành phố này thế nào?"],
      ["B", "とても きれいです。 そして、 人[ひと]が 親切[しんせつ]です。", "Rất đẹp. Và mọi người tử tế."]
    ],
    qa: [
      { q: "Cuộc sống ở Nhật của chị Linh thế nào?", opts: ["Bận nhưng vui", "Rảnh rỗi", "Buồn chán", "Đắt đỏ"], ans: 0 },
      { q: "Chị Linh thấy tiếng Nhật thế nào?", opts: ["Khó nhưng thú vị", "Dễ", "Dễ nhưng chán", "Khó và chán"], ans: 0 }
    ],
    tf: [
      { s: "Chị Linh nói người dân ở đây tử tế.", a: true },
      { s: "Chị Linh nói thành phố này không đẹp.", a: false }
    ] } },

  { name: "Sở thích, khả năng", words: [
    ["分[わ]かります", "v1", "hiểu, biết", "英語[えいご]が 少[すこ]し 分[わ]かります。", "Tôi hiểu tiếng Anh một chút."],
    ["あります", "v1", "có (đồ vật, sự việc)", "今日[きょう]は 時間[じかん]が ありません。", "Hôm nay tôi không có thời gian."],
    ["好[す]き", "na", "thích", "私[わたし]は 日本[にほん]の 料理[りょうり]が 好[す]きです。", "Tôi thích món ăn Nhật."],
    ["嫌[きら]い", "na", "ghét, không thích", "私[わたし]は 魚[さかな]が 嫌[きら]いです。", "Tôi không thích cá."],
    ["上手[じょうず]", "na", "giỏi", "リンさんは 歌[うた]が 上手[じょうず]です。", "Chị Linh hát hay."],
    ["下手[へた]", "na", "kém", "私[わたし]は 絵[え]が 下手[へた]です。", "Tôi vẽ kém."],
    ["料理[りょうり]", "n", "món ăn, việc nấu ăn", "母[はは]は 料理[りょうり]が 上手[じょうず]です。", "Mẹ tôi nấu ăn giỏi."],
    ["スポーツ", "n", "thể thao", "どんな スポーツが 好[す]きですか。", "Bạn thích môn thể thao nào?"],
    ["野球[やきゅう]", "n", "bóng chày", "父[ちち]は 野球[やきゅう]が 好[す]きです。", "Bố tôi thích bóng chày."],
    ["音楽[おんがく]", "n", "âm nhạc", "時間[じかん]が ありますから、 音楽[おんがく]を 聞[き]きます。", "Vì có thời gian nên tôi nghe nhạc."],
    ["歌[うた]", "n", "bài hát", "日本[にほん]の 歌[うた]が 分[わ]かりますか。", "Bạn có hiểu bài hát tiếng Nhật không?"],
    ["絵[え]", "n", "tranh", "この 絵[え]は とても きれいです。", "Bức tranh này rất đẹp."],
    ["漢字[かんじ]", "n", "chữ Hán", "漢字[かんじ]が 全然[ぜんぜん] 分[わ]かりません。", "Tôi hoàn toàn không hiểu chữ Hán."],
    ["時間[じかん]", "n", "thời gian", "忙[いそが]しいですから、 時間[じかん]が ありません。", "Vì bận nên tôi không có thời gian."],
    ["用事[ようじ]", "n", "việc bận", "今晩[こんばん]は 用事[ようじ]が あります。", "Tối nay tôi có việc bận."],
    ["約束[やくそく]", "n", "cuộc hẹn, lời hứa", "明日[あした] 友達[ともだち]と 約束[やくそく]が あります。", "Ngày mai tôi có hẹn với bạn."],
    ["よく", "adv", "rõ, giỏi, hay", "田中[たなか]さんは 英語[えいご]が よく 分[わ]かります。", "Anh Tanaka hiểu rõ tiếng Anh."],
    ["少[すこ]し", "adv", "một chút", "ひらがなが 少[すこ]し 分[わ]かります。", "Tôi biết một chút chữ Hiragana."],
    ["全然[ぜんぜん]", "adv", "hoàn toàn không", "お金[かね]が 全然[ぜんぜん] ありません。", "Tôi hoàn toàn không có tiền."],
    ["どうして", "q", "tại sao", "どうして 昨日[きのう] 早[はや]く 帰[かえ]りましたか。", "Tại sao hôm qua bạn về sớm?"]
  ],
  dlg: { title: "Rủ đi hoà nhạc",
    keys: ["どうして", "音楽[おんがく]", "嫌[きら]い", "好[す]き", "約束[やくそく]"],
    lines: [
      ["A", "リンさん、 今晩[こんばん] 一緒[いっしょ]に コンサートへ 行[い]きませんか。", "Chị Linh, tối nay cùng đi hoà nhạc với tôi không?"],
      ["B", "すみません。 今晩[こんばん]は ちょっと…。", "Xin lỗi. Tối nay thì hơi..."],
      ["A", "どうしてですか。 音楽[おんがく]が 嫌[きら]いですか。", "Tại sao vậy? Chị không thích âm nhạc à?"],
      ["B", "いいえ、 音楽[おんがく]は 好[す]きですが、 友達[ともだち]と 約束[やくそく]が ありますから。", "Không, tôi thích âm nhạc, nhưng vì tôi có hẹn với bạn."],
      ["A", "そうですか。 残念[ざんねん]ですね。", "Vậy à. Tiếc quá nhỉ."],
      ["B", "また 今度[こんど] お願[ねが]いします。", "Lần sau anh lại rủ tôi nhé."]
    ],
    qa: [
      { q: "A rủ chị Linh đi đâu?", opts: ["Đi hoà nhạc", "Đi xem phim", "Đi ăn tối", "Đi hát karaoke"], ans: 0 },
      { q: "Vì sao chị Linh không đi được?", opts: ["Có hẹn với bạn", "Không thích âm nhạc", "Phải làm việc", "Bị ốm"], ans: 0 }
    ],
    tf: [
      { s: "Chị Linh thích âm nhạc.", a: true },
      { s: "Tối nay chị Linh sẽ đi hoà nhạc.", a: false }
    ] } },

  { name: "Vị trí: あります, います", words: [
    ["います", "v2", "có, ở (người, động vật)", "教室[きょうしつ]に 学生[がくせい]が います。", "Trong phòng học có sinh viên."],
    ["男[おとこ]の 人[ひと]", "n", "người đàn ông", "あそこに 男[おとこ]の 人[ひと]が います。", "Ở đằng kia có một người đàn ông."],
    ["女[おんな]の 人[ひと]", "n", "người phụ nữ", "あの 女[おんな]の 人[ひと]は だれですか。", "Người phụ nữ kia là ai?"],
    ["犬[いぬ]", "n", "con chó", "公園[こうえん]に 犬[いぬ]が います。", "Trong công viên có con chó."],
    ["猫[ねこ]", "n", "con mèo", "椅子[いす]の 下[した]に 猫[ねこ]が います。", "Dưới ghế có con mèo."],
    ["箱[はこ]", "n", "cái hộp", "箱[はこ]の 中[なか]に 何[なに]が ありますか。", "Trong hộp có gì?"],
    ["冷蔵庫[れいぞうこ]", "n", "tủ lạnh", "冷蔵庫[れいぞうこ]に 卵[たまご]が あります。", "Trong tủ lạnh có trứng."],
    ["テーブル", "n", "bàn ăn", "テーブルの 上[うえ]に 花[はな]が あります。", "Trên bàn có hoa."],
    ["窓[まど]", "n", "cửa sổ", "窓[まど]の 右[みぎ]に 棚[たな]が あります。", "Bên phải cửa sổ có cái giá."],
    ["公園[こうえん]", "n", "công viên", "うちの 近[ちか]くに 公園[こうえん]が あります。", "Gần nhà tôi có công viên."],
    ["喫茶店[きっさてん]", "n", "quán cà phê", "駅[えき]の 前[まえ]に 喫茶店[きっさてん]が あります。", "Trước nhà ga có quán cà phê."],
    ["上[うえ]", "n", "trên", "机[つくえ]の 上[うえ]に 辞書[じしょ]が あります。", "Trên bàn có quyển từ điển."],
    ["下[した]", "n", "dưới", "ベッドの 下[した]に かばんが あります。", "Dưới giường có cái cặp."],
    ["前[まえ]", "n", "trước", "銀行[ぎんこう]の 前[まえ]に 車[くるま]が あります。", "Trước ngân hàng có ô tô."],
    ["後[うし]ろ", "n", "sau", "先生[せんせい]の 後[うし]ろに リンさんが います。", "Chị Linh ở phía sau thầy giáo."],
    ["右[みぎ]", "n", "bên phải", "郵便局[ゆうびんきょく]は 銀行[ぎんこう]の 右[みぎ]です。", "Bưu điện ở bên phải ngân hàng."],
    ["左[ひだり]", "n", "bên trái", "トイレは エレベーターの 左[ひだり]に あります。", "Nhà vệ sinh ở bên trái thang máy."],
    ["中[なか]", "n", "trong", "かばんの 中[なか]に 鍵[かぎ]が ありません。", "Trong cặp không có chìa khoá."],
    ["隣[となり]", "n", "bên cạnh", "スーパーは 病院[びょういん]の 隣[となり]です。", "Siêu thị ở bên cạnh bệnh viện."],
    ["近[ちか]く", "n", "chỗ gần, lân cận", "この 近[ちか]くに コンビニが ありますか。", "Gần đây có cửa hàng tiện lợi không?"]
  ],
  dlg: { title: "Hỏi đường đến bưu điện",
    keys: ["近[ちか]く", "公園[こうえん]", "隣[となり]", "前[まえ]", "喫茶店[きっさてん]", "右[みぎ]"],
    lines: [
      ["A", "すみません。 この 近[ちか]くに 郵便局[ゆうびんきょく]が ありますか。", "Xin lỗi. Gần đây có bưu điện không ạ?"],
      ["B", "はい。 あそこに 公園[こうえん]が ありますね。", "Có. Đằng kia có công viên đúng không."],
      ["A", "はい。", "Vâng."],
      ["B", "郵便局[ゆうびんきょく]は あの 公園[こうえん]の 隣[となり]です。", "Bưu điện ở bên cạnh công viên đó."],
      ["A", "そうですか。 コンビニも ありますか。", "Vậy à. Có cả cửa hàng tiện lợi không ạ?"],
      ["B", "ええ、 駅[えき]の 前[まえ]に あります。 喫茶店[きっさてん]の 右[みぎ]です。", "Có, ở trước nhà ga. Bên phải quán cà phê."]
    ],
    qa: [
      { q: "Bưu điện ở đâu?", opts: ["Bên cạnh công viên", "Trước nhà ga", "Trong siêu thị", "Sau ngân hàng"], ans: 0 },
      { q: "Cửa hàng tiện lợi ở đâu?", opts: ["Trước nhà ga", "Bên cạnh công viên", "Gần bệnh viện", "Trong nhà ga"], ans: 0 }
    ],
    tf: [
      { s: "Cửa hàng tiện lợi ở bên phải quán cà phê.", a: true },
      { s: "Gần đó không có bưu điện.", a: false }
    ] } }
);
