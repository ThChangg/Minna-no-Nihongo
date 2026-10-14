// Minna no Nihongo I, bài 16–20: nối câu bằng thể て, thể ない, thể từ điển, thể た, thể thông thường
SETS.push(
  { name: "Nối câu, cơ thể", words: [
    ["乗[の]ります", "v1", "lên (tàu, xe)", "駅[えき]から バスに 乗[の]って、 大学[だいがく]へ 行[い]きます。", "Từ nhà ga tôi lên xe buýt rồi đến trường đại học."],
    ["降[お]ります", "v2", "xuống (tàu, xe)", "次[つぎ]の 駅[えき]で 電車[でんしゃ]を 降[お]りて ください。", "Hãy xuống tàu ở ga tiếp theo."],
    ["乗[の]り換[か]えます", "v2", "đổi tàu, chuyển tuyến", "東京駅[とうきょうえき]で 地下鉄[ちかてつ]に 乗[の]り換[か]えます。", "Tôi đổi sang tàu điện ngầm ở ga Tokyo."],
    ["浴[あ]びます", "v2", "tắm (vòi sen)", "シャワーを 浴[あ]びてから、 寝[ね]ます。", "Tắm vòi sen xong tôi đi ngủ."],
    ["入[い]れます", "v2", "cho vào", "ここに カードを 入[い]れて ください。", "Hãy cho thẻ vào đây."],
    ["出[だ]します", "v1", "lấy ra, nộp", "かばんから 資料[しりょう]を 出[だ]しました。", "Tôi đã lấy tài liệu từ trong cặp ra."],
    ["押[お]します", "v1", "ấn, đẩy", "この ボタンを 押[お]して、 お金[かね]を 出[だ]します。", "Ấn nút này rồi lấy tiền ra."],
    ["若[わか]い", "ai", "trẻ", "先生[せんせい]は 若[わか]くて、 親切[しんせつ]です。", "Thầy giáo trẻ và tử tế."],
    ["長[なが]い", "ai", "dài", "妹[いもうと]は 髪[かみ]が 長[なが]いです。", "Em gái tôi tóc dài."],
    ["短[みじか]い", "ai", "ngắn", "冬[ふゆ]は 日[ひ]が 短[みじか]いです。", "Mùa đông ngày ngắn."],
    ["明[あか]るい", "ai", "sáng sủa", "この 部屋[へや]は 広[ひろ]くて、 明[あか]るいです。", "Căn phòng này rộng và sáng."],
    ["暗[くら]い", "ai", "tối", "暗[くら]いですから、 電気[でんき]を つけましょう。", "Tối quá, bật đèn lên nào."],
    ["体[からだ]", "n", "cơ thể", "野菜[やさい]は 体[からだ]に いいです。", "Rau tốt cho cơ thể."],
    ["頭[あたま]", "n", "đầu", "リンさんは 頭[あたま]が いいです。", "Chị Linh thông minh."],
    ["髪[かみ]", "n", "tóc", "昨日[きのう] 髪[かみ]を 切[き]りました。", "Hôm qua tôi đã cắt tóc."],
    ["顔[かお]", "n", "mặt", "朝[あさ] 起[お]きて、 顔[かお]を 洗[あら]います。", "Buổi sáng tôi thức dậy rồi rửa mặt."],
    ["目[め]", "n", "mắt", "兄[あに]は 目[め]が 大[おお]きいです。", "Anh trai tôi mắt to."],
    ["足[あし]", "n", "chân", "たくさん 歩[ある]きましたから、 足[あし]が 痛[いた]いです。", "Vì đi bộ nhiều nên tôi đau chân."],
    ["背[せ]", "n", "chiều cao, lưng", "弟[おとうと]は 背[せ]が 高[たか]いです。", "Em trai tôi cao."],
    ["どうやって", "q", "bằng cách nào", "空港[くうこう]まで どうやって 行[い]きますか。", "Đi đến sân bay bằng cách nào?"]
  ],
  dlg: { title: "Đi đến trường đại học",
    keys: ["どうやって", "降[お]ります", "地下鉄[ちかてつ]", "明[あか]るい", "すぐ"],
    lines: [
      ["A", "すみません。 さくら大学[だいがく]まで どうやって 行[い]きますか。", "Xin lỗi. Đi đến Đại học Sakura bằng cách nào ạ?"],
      ["B", "ここから バスに 乗[の]って、 駅[えき]で 降[お]ります。", "Từ đây anh lên xe buýt rồi xuống ở nhà ga."],
      ["A", "それから 電車[でんしゃ]ですか。", "Sau đó đi tàu điện ạ?"],
      ["B", "はい。 地下鉄[ちかてつ]に 乗[の]り換[か]えて、 三[みっ]つ目[め]の 駅[えき]で 降[お]りて ください。", "Vâng. Anh đổi sang tàu điện ngầm rồi xuống ở ga thứ ba."],
      ["A", "駅[えき]から 遠[とお]いですか。", "Từ ga đến đó có xa không ạ?"],
      ["B", "いいえ、 駅[えき]を 出[で]て、 すぐです。 大[おお]きくて、 明[あか]るい 建物[たてもの]です。", "Không, ra khỏi ga là đến ngay. Đó là toà nhà to và sáng sủa."]
    ],
    qa: [
      { q: "Đầu tiên A phải đi bằng gì?", opts: ["Xe buýt", "Tàu điện ngầm", "Taxi", "Đi bộ"], ans: 0 },
      { q: "A xuống tàu điện ngầm ở ga thứ mấy?", opts: ["Ga thứ ba", "Ga thứ nhất", "Ga thứ hai", "Ga thứ năm"], ans: 0 }
    ],
    tf: [
      { s: "Trường đại học ở ngay gần nhà ga.", a: true },
      { s: "Toà nhà của trường nhỏ và tối.", a: false }
    ] } },

  { name: "Thể ない: phải, không được", words: [
    ["覚[おぼ]えます", "v2", "nhớ, thuộc", "毎日[まいにち] 漢字[かんじ]を 覚[おぼ]えなければ なりません。", "Hằng ngày tôi phải học thuộc chữ Hán."],
    ["忘[わす]れます", "v2", "quên", "傘[かさ]を 忘[わす]れないで ください。", "Đừng quên ô nhé."],
    ["なくします", "v1", "làm mất", "パスポートを なくさないで ください。", "Đừng làm mất hộ chiếu."],
    ["払[はら]います", "v1", "trả tiền", "今日[きょう] お金[かね]を 払[はら]わなくても いいです。", "Hôm nay không cần trả tiền cũng được."],
    ["返[かえ]します", "v1", "trả lại", "金曜日[きんようび]までに 本[ほん]を 返[かえ]さなければ なりません。", "Tôi phải trả sách trước thứ Sáu."],
    ["出[で]かけます", "v2", "đi ra ngoài", "今晩[こんばん]は 出[で]かけないで ください。", "Tối nay đừng ra ngoài."],
    ["脱[ぬ]ぎます", "v1", "cởi (quần áo, giày)", "ここで 靴[くつ]を 脱[ぬ]がなければ なりません。", "Phải cởi giày ở đây."],
    ["持[も]って 行[い]きます", "v1", "mang đi", "明日[あした] 傘[かさ]を 持[も]って 行[い]きます。", "Ngày mai tôi mang ô đi."],
    ["心配[しんぱい]します", "v3", "lo lắng", "大丈夫[だいじょうぶ]ですから、 心配[しんぱい]しないで ください。", "Không sao đâu, đừng lo lắng."],
    ["残業[ざんぎょう]します", "v3", "làm thêm giờ", "今日[きょう]は 残業[ざんぎょう]しなくても いいです。", "Hôm nay không cần làm thêm giờ."],
    ["出張[しゅっちょう]します", "v3", "đi công tác", "来週[らいしゅう] 大阪[おおさか]へ 出張[しゅっちょう]しなければ なりません。", "Tuần sau tôi phải đi công tác Osaka."],
    ["大切[たいせつ]", "na", "quan trọng", "これは 大切[たいせつ]な 資料[しりょう]ですから、 なくさないで ください。", "Đây là tài liệu quan trọng, đừng làm mất."],
    ["大丈夫[だいじょうぶ]", "na", "không sao, ổn", "薬[くすり]を 飲[の]みましたから、 もう 大丈夫[だいじょうぶ]です。", "Tôi uống thuốc rồi nên đã ổn."],
    ["危[あぶ]ない", "ai", "nguy hiểm", "危[あぶ]ないですから、 入[はい]らないで ください。", "Nguy hiểm, xin đừng vào."],
    ["熱[ねつ]", "n", "sốt", "昨日[きのう]から 熱[ねつ]が あります。", "Tôi bị sốt từ hôm qua."],
    ["病気[びょうき]", "n", "bệnh, ốm", "病気[びょうき]ですから、 会社[かいしゃ]を 休[やす]みます。", "Vì bị ốm nên tôi nghỉ làm."],
    ["薬[くすり]", "n", "thuốc", "一日[いちにち]に 三回[さんかい] 薬[くすり]を 飲[の]まなければ なりません。", "Một ngày phải uống thuốc ba lần."],
    ["お風呂[ふろ]", "n", "bồn tắm", "今晩[こんばん]は お風呂[ふろ]に 入[はい]らないで ください。", "Tối nay đừng tắm bồn."],
    ["上着[うわぎ]", "n", "áo khoác", "暑[あつ]いですから、 上着[うわぎ]を 脱[ぬ]いでも いいですか。", "Nóng quá, tôi cởi áo khoác có được không?"],
    ["までに", "exp", "trước (thời hạn)", "土曜日[どようび]までに レポートを 出[だ]して ください。", "Hãy nộp báo cáo trước thứ Bảy."]
  ],
  dlg: { title: "Đi khám bệnh",
    keys: ["熱[ねつ]", "頭[あたま]", "薬[くすり]", "お風呂[ふろ]", "大丈夫[だいじょうぶ]"],
    lines: [
      ["A", "どう しましたか。", "Anh bị làm sao?"],
      ["B", "昨日[きのう]から 熱[ねつ]が あります。 頭[あたま]も 痛[いた]いです。", "Tôi bị sốt từ hôm qua. Đầu cũng đau."],
      ["A", "かぜですね。 この 薬[くすり]を 飲[の]んで ください。 今晩[こんばん]は お風呂[ふろ]に 入[はい]らないで ください。", "Anh bị cảm rồi. Hãy uống thuốc này. Tối nay đừng tắm bồn."],
      ["B", "明日[あした] 出張[しゅっちょう]しなければ なりませんが…。", "Nhưng ngày mai tôi phải đi công tác..."],
      ["A", "無理[むり]を しないで ください。 二[に]、三日[さんにち] 休[やす]まなければ なりません。", "Đừng cố quá sức. Anh phải nghỉ hai, ba ngày."],
      ["B", "分[わ]かりました。", "Tôi hiểu rồi."],
      ["A", "大丈夫[だいじょうぶ]ですよ。 心配[しんぱい]しないで ください。 お大事[だいじ]に。", "Không sao đâu. Đừng lo lắng. Anh giữ gìn sức khoẻ nhé."]
    ],
    qa: [
      { q: "Bệnh nhân bị làm sao?", opts: ["Sốt và đau đầu", "Đau bụng", "Đau chân", "Đau răng"], ans: 0 },
      { q: "Bác sĩ dặn tối nay không được làm gì?", opts: ["Tắm bồn", "Uống thuốc", "Ngủ sớm", "Ăn cơm"], ans: 0 }
    ],
    tf: [
      { s: "Bệnh nhân phải nghỉ hai, ba ngày.", a: true },
      { s: "Bác sĩ bảo bệnh nhân cứ đi công tác.", a: false }
    ] } },

  { name: "Thể từ điển: khả năng, sở thích", words: [
    ["できます", "v2", "có thể, làm được", "リンさんは 日本語[にほんご]を 話[はな]す ことが できます。", "Chị Linh có thể nói tiếng Nhật."],
    ["洗[あら]います", "v1", "rửa, giặt", "食[た]べる まえに、 手[て]を 洗[あら]います。", "Trước khi ăn tôi rửa tay."],
    ["弾[ひ]きます", "v1", "chơi (đàn)", "妹[いもうと]は ピアノを 弾[ひ]く ことが できます。", "Em gái tôi biết chơi piano."],
    ["歌[うた]います", "v1", "hát", "趣味[しゅみ]は 歌[うた]を 歌[うた]う ことです。", "Sở thích của tôi là hát."],
    ["集[あつ]めます", "v2", "sưu tầm, thu thập", "趣味[しゅみ]は 切手[きって]を 集[あつ]める ことです。", "Sở thích của tôi là sưu tầm tem."],
    ["捨[す]てます", "v2", "vứt", "ここに ごみを 捨[す]てないで ください。", "Đừng vứt rác ở đây."],
    ["換[か]えます", "v2", "đổi", "銀行[ぎんこう]で お金[かね]を 換[か]える ことが できます。", "Có thể đổi tiền ở ngân hàng."],
    ["運転[うんてん]します", "v3", "lái xe", "お酒[さけ]を 飲[の]みましたから、 運転[うんてん]しないで ください。", "Bạn đã uống rượu nên đừng lái xe."],
    ["予約[よやく]します", "v3", "đặt trước", "旅行[りょこう]の まえに、 ホテルを 予約[よやく]します。", "Trước chuyến đi tôi đặt khách sạn."],
    ["ピアノ", "n", "đàn piano", "毎晩[まいばん] 寝[ね]る まえに、 ピアノを 弾[ひ]きます。", "Mỗi tối trước khi ngủ tôi chơi piano."],
    ["現金[げんきん]", "n", "tiền mặt", "この 店[みせ]は 現金[げんきん]で 払[はら]わなければ なりません。", "Cửa hàng này phải trả bằng tiền mặt."],
    ["趣味[しゅみ]", "n", "sở thích", "私[わたし]の 趣味[しゅみ]は 写真[しゃしん]を 撮[と]る ことです。", "Sở thích của tôi là chụp ảnh."],
    ["日記[にっき]", "n", "nhật ký", "寝[ね]る まえに、 日記[にっき]を 書[か]きます。", "Trước khi ngủ tôi viết nhật ký."],
    ["課長[かちょう]", "n", "trưởng nhóm, tổ trưởng", "課長[かちょう]は 今[いま] 会議室[かいぎしつ]に います。", "Tổ trưởng hiện đang ở phòng họp."],
    ["部長[ぶちょう]", "n", "trưởng phòng", "部長[ぶちょう]は ゴルフが 上手[じょうず]です。", "Trưởng phòng chơi golf giỏi."],
    ["社長[しゃちょう]", "n", "giám đốc", "社長[しゃちょう]は 英語[えいご]を 話[はな]す ことが できます。", "Giám đốc có thể nói tiếng Anh."],
    ["動物[どうぶつ]", "n", "động vật", "どんな 動物[どうぶつ]が 好[す]きですか。", "Bạn thích con vật nào?"],
    ["インターネット", "n", "internet", "インターネットで ホテルを 予約[よやく]する ことが できます。", "Có thể đặt khách sạn qua internet."],
    ["特[とく]に", "adv", "đặc biệt là", "スポーツが 好[す]きです。 特[とく]に サッカーが 好[す]きです。", "Tôi thích thể thao. Đặc biệt là bóng đá."],
    ["なかなか", "adv", "mãi mà không", "漢字[かんじ]を なかなか 覚[おぼ]える ことが できません。", "Tôi mãi mà không nhớ được chữ Hán."]
  ],
  dlg: { title: "Sở thích",
    keys: ["趣味[しゅみ]", "ピアノ", "動物[どうぶつ]", "特[とく]に", "インターネット"],
    lines: [
      ["A", "リンさんの 趣味[しゅみ]は 何[なん]ですか。", "Sở thích của chị Linh là gì?"],
      ["B", "歌[うた]を 歌[うた]う ことです。 ピアノも 少[すこ]し 弾[ひ]く ことが できます。", "Là hát. Tôi cũng biết chơi piano một chút."],
      ["A", "すごいですね。 私[わたし]の 趣味[しゅみ]は 動物[どうぶつ]の 写真[しゃしん]を 撮[と]る ことです。", "Giỏi quá. Sở thích của tôi là chụp ảnh động vật."],
      ["B", "いいですね。 どんな 動物[どうぶつ]ですか。", "Hay nhỉ. Động vật nào vậy?"],
      ["A", "特[とく]に 犬[いぬ]と 猫[ねこ]が 好[す]きです。 毎晩[まいばん] 寝[ね]る まえに、 インターネットで 写真[しゃしん]を 見[み]ます。", "Tôi đặc biệt thích chó và mèo. Mỗi tối trước khi ngủ tôi xem ảnh trên internet."],
      ["B", "今度[こんど] 私[わたし]にも 見[み]せて ください。", "Lần tới cho tôi xem với nhé."]
    ],
    qa: [
      { q: "Sở thích của chị Linh là gì?", opts: ["Hát", "Chụp ảnh", "Sưu tầm tem", "Viết nhật ký"], ans: 0 },
      { q: "A thích chụp ảnh gì?", opts: ["Động vật", "Hoa", "Núi", "Tàu điện"], ans: 0 }
    ],
    tf: [
      { s: "Chị Linh biết chơi piano một chút.", a: true },
      { s: "A đặc biệt thích ngựa.", a: false }
    ] } },

  { name: "Thể た: kinh nghiệm, thay đổi", words: [
    ["登[のぼ]ります", "v1", "leo (núi)", "富士山[ふじさん]に 登[のぼ]った ことが あります。", "Tôi đã từng leo núi Phú Sĩ."],
    ["泊[と]まります", "v1", "trọ lại, nghỉ lại", "京都[きょうと]で 古[ふる]い 旅館[りょかん]に 泊[と]まりました。", "Ở Kyoto tôi đã trọ tại một lữ quán cổ."],
    ["掃除[そうじ]します", "v3", "dọn dẹp", "日曜日[にちようび]は 掃除[そうじ]したり、 買[か]い物[もの]したり します。", "Chủ nhật tôi khi thì dọn dẹp, khi thì đi mua sắm."],
    ["洗濯[せんたく]します", "v3", "giặt giũ", "天気[てんき]が いいですから、 洗濯[せんたく]します。", "Trời đẹp nên tôi giặt đồ."],
    ["なります", "v1", "trở nên", "日本語[にほんご]が 上手[じょうず]に なりました。", "Tiếng Nhật của tôi đã giỏi lên."],
    ["眠[ねむ]い", "ai", "buồn ngủ", "昨日[きのう] 遅[おそ]く 寝[ね]ましたから、 眠[ねむ]いです。", "Hôm qua ngủ muộn nên tôi buồn ngủ."],
    ["強[つよ]い", "ai", "mạnh", "今日[きょう]は 風[かぜ]が 強[つよ]いです。", "Hôm nay gió mạnh."],
    ["弱[よわ]い", "ai", "yếu", "私[わたし]は お酒[さけ]に 弱[よわ]いです。", "Tôi uống rượu kém."],
    ["練習[れんしゅう]", "n", "luyện tập", "毎日[まいにち] 会話[かいわ]の 練習[れんしゅう]を します。", "Hằng ngày tôi luyện tập hội thoại."],
    ["ゴルフ", "n", "golf", "ゴルフを した ことが ありますか。", "Bạn đã từng chơi golf chưa?"],
    ["相撲[すもう]", "n", "vật sumo", "一度[いちど] 相撲[すもう]を 見[み]た ことが あります。", "Tôi đã từng xem sumo một lần."],
    ["調子[ちょうし]", "n", "tình trạng, phong độ", "最近[さいきん] 体[からだ]の 調子[ちょうし]が いいです。", "Gần đây tình trạng sức khoẻ của tôi tốt."],
    ["一度[いちど]", "adv", "một lần", "一度[いちど] 北海道[ほっかいどう]へ 行[い]った ことが あります。", "Tôi đã từng đi Hokkaido một lần."],
    ["一度[いちど]も", "adv", "chưa lần nào", "すしは 一度[いちど]も 食[た]べた ことが ありません。", "Tôi chưa ăn sushi lần nào."],
    ["だんだん", "adv", "dần dần", "だんだん 寒[さむ]く なります。", "Trời lạnh dần."],
    ["もうすぐ", "adv", "sắp sửa", "もうすぐ 春[はる]に なります。", "Sắp sang mùa xuân rồi."],
    ["おかげさまで", "exp", "nhờ trời, nhờ anh chị", "おかげさまで、 元気[げんき]に なりました。", "Nhờ trời, tôi đã khoẻ lại."],
    ["でも", "conj", "nhưng", "旅行[りょこう]は 楽[たの]しかったです。 でも、 疲[つか]れました。", "Chuyến đi rất vui. Nhưng tôi mệt."]
  ],
  dlg: { title: "Leo núi Phú Sĩ",
    keys: ["一度[いちど]も", "もうすぐ", "なります", "練習[れんしゅう]"],
    lines: [
      ["A", "リンさん、 富士山[ふじさん]に 登[のぼ]った ことが ありますか。", "Chị Linh, chị đã từng leo núi Phú Sĩ chưa?"],
      ["B", "いいえ、 一度[いちど]も ありません。 田中[たなか]さんは？", "Chưa, chưa lần nào. Còn anh Tanaka?"],
      ["A", "一度[いちど] あります。 とても 疲[つか]れましたが、 きれいでした。", "Tôi leo một lần rồi. Rất mệt nhưng đẹp."],
      ["B", "いいですね。 私[わたし]も 登[のぼ]りたいです。", "Thích nhỉ. Tôi cũng muốn leo."],
      ["A", "じゃ、 夏[なつ]に 一緒[いっしょ]に 行[い]きませんか。 もうすぐ 暖[あたた]かく なりますよ。", "Vậy mùa hè cùng đi không? Trời sắp ấm lên rồi đấy."],
      ["B", "はい、 ぜひ。 毎日[まいにち] 歩[ある]く 練習[れんしゅう]を します。", "Vâng, nhất định rồi. Tôi sẽ tập đi bộ hằng ngày."]
    ],
    qa: [
      { q: "Chị Linh đã leo núi Phú Sĩ bao giờ chưa?", opts: ["Chưa lần nào", "Một lần", "Hai lần", "Nhiều lần"], ans: 0 },
      { q: "Hai người định đi khi nào?", opts: ["Mùa hè", "Mùa đông", "Tuần sau", "Ngày mai"], ans: 0 }
    ],
    tf: [
      { s: "Anh Tanaka đã leo núi Phú Sĩ một lần.", a: true },
      { s: "Chị Linh không muốn leo núi.", a: false }
    ] } },

  { name: "Thể thông thường: nói chuyện thân mật", words: [
    ["要[い]ります", "v1", "cần", "旅行[りょこう]に ビザが 要[い]りますか。", "Đi du lịch có cần visa không?"],
    ["調[しら]べます", "v2", "tra cứu, tìm hiểu", "辞書[じしょ]で 言葉[ことば]の 意味[いみ]を 調[しら]べる。", "Tôi tra nghĩa của từ bằng từ điển."],
    ["修理[しゅうり]します", "v3", "sửa chữa", "昨日[きのう] 自転車[じてんしゃ]を 修理[しゅうり]した。", "Hôm qua tôi đã sửa xe đạp."],
    ["僕[ぼく]", "pro", "tớ (nam giới tự xưng)", "僕[ぼく]は 明日[あした] 学校[がっこう]へ 行[い]かない。", "Ngày mai tớ không đến trường."],
    ["君[きみ]", "pro", "cậu", "君[きみ]も 一緒[いっしょ]に 行[い]く？", "Cậu cũng đi cùng chứ?"],
    ["うん", "exp", "ừ", "うん、 僕[ぼく]も 行[い]く。", "Ừ, tớ cũng đi."],
    ["ううん", "exp", "không (thân mật)", "ううん、 まだ 食[た]べて いない。", "Không, tớ chưa ăn."],
    ["言葉[ことば]", "n", "từ, ngôn ngữ", "この 言葉[ことば]の 意味[いみ]が 分[わ]からない。", "Tớ không hiểu nghĩa của từ này."],
    ["着物[きもの]", "n", "kimono", "着物[きもの]を 着[き]た ことが ある？", "Cậu đã từng mặc kimono chưa?"],
    ["ビザ", "n", "visa", "ビザを もらわなければ ならない。", "Tớ phải xin visa."],
    ["初[はじ]め", "n", "đầu (thời kỳ)", "来月[らいげつ]の 初[はじ]めに 国[くに]へ 帰[かえ]る。", "Đầu tháng sau tớ về nước."],
    ["終[お]わり", "n", "cuối (thời kỳ)", "今月[こんげつ]の 終[お]わりに 試験[しけん]が ある。", "Cuối tháng này có kỳ thi."],
    ["こっち", "pro", "phía này (thân mật)", "こっちの ほうが 安[やす]いよ。", "Cái này rẻ hơn đấy."],
    ["そっち", "pro", "phía đó (thân mật)", "そっちの 天気[てんき]は どう？", "Thời tiết bên đó thế nào?"],
    ["あっち", "pro", "phía kia (thân mật)", "トイレは あっちだよ。", "Nhà vệ sinh ở đằng kia đấy."],
    ["どっち", "q", "cái nào (thân mật)", "コーヒーと お茶[ちゃ]と どっちが いい？", "Cà phê và trà, cậu thích cái nào?"],
    ["みんなで", "adv", "mọi người cùng nhau", "日曜日[にちようび] みんなで 京都[きょうと]へ 行[い]く。", "Chủ nhật mọi người cùng đi Kyoto."],
    ["けど", "conj", "nhưng (thân mật)", "カレーは 辛[から]いけど、 おいしい。", "Cà ri cay nhưng ngon."]
  ],
  dlg: { title: "Kế hoạch nghỉ hè",
    keys: ["みんなで", "君[きみ]", "僕[ぼく]", "初[はじ]め", "ビザ"],
    lines: [
      ["A", "夏休[なつやす]み、 国[くに]へ 帰[かえ]る？", "Nghỉ hè cậu có về nước không?"],
      ["B", "ううん、 帰[かえ]らない。 みんなで 北海道[ほっかいどう]へ 行[い]く。 君[きみ]は？", "Không, tớ không về. Mọi người cùng đi Hokkaido. Còn cậu?"],
      ["A", "僕[ぼく]は 八月[はちがつ]の 初[はじ]めに ベトナムへ 行[い]く。", "Đầu tháng Tám tớ đi Việt Nam."],
      ["B", "いいね。 ビザは 要[い]る？", "Thích nhỉ. Có cần visa không?"],
      ["A", "まだ 分[わ]からない。 今晩[こんばん] インターネットで 調[しら]べる。", "Tớ chưa biết. Tối nay tớ sẽ tra trên internet."],
      ["B", "そう。 じゃ、 写真[しゃしん]を たくさん 撮[と]って 来[き]てね。", "Thế à. Vậy chụp thật nhiều ảnh mang về nhé."]
    ],
    qa: [
      { q: "Nghỉ hè B đi đâu?", opts: ["Hokkaido", "Về nước", "Việt Nam", "Kyoto"], ans: 0 },
      { q: "A đi Việt Nam khi nào?", opts: ["Đầu tháng Tám", "Cuối tháng Tám", "Đầu tháng Bảy", "Tuần sau"], ans: 0 }
    ],
    tf: [
      { s: "A sẽ tra trên internet xem có cần visa không.", a: true },
      { s: "B về nước vào kỳ nghỉ hè.", a: false }
    ] } }
);
