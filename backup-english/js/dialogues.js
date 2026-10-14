// Hội thoại cho từng bộ (thứ tự trùng với SETS).
// lines: [người nói, tiếng Anh, tiếng Việt]; keys: từ đích xuất hiện trong lời thoại
// qa: câu hỏi nghe hiểu (ans = chỉ số đáp án đúng); tf: nhận định đúng/sai (a = true/false)
const DIALOGUES = [
  { title: "Gặp gỡ bạn mới",
    keys: ["introduce", "apologize", "invite", "appreciate", "polite", "suggest", "agree", "remind", "explain"],
    lines: [
      ["A", "Hi Tom! Let me introduce myself. I'm Linh.", "Chào Tom! Để mình tự giới thiệu. Mình là Linh."],
      ["B", "Nice to meet you, Linh. I apologize for being late.", "Rất vui được gặp bạn, Linh. Mình xin lỗi vì đến trễ."],
      ["A", "Don't worry. I'd like to invite you to dinner on Friday.", "Đừng lo. Mình muốn mời bạn ăn tối vào thứ Sáu."],
      ["B", "Thank you, I really appreciate it. You are very polite.", "Cảm ơn bạn, mình thật sự rất cảm kích. Bạn rất lịch sự."],
      ["A", "Can I suggest a place? There is a nice restaurant nearby.", "Mình đề xuất một chỗ được không? Có một nhà hàng đẹp ở gần đây."],
      ["B", "Sounds good. I agree. Please remind me on Thursday.", "Nghe hay đó. Mình đồng ý. Nhớ nhắc mình vào thứ Năm nhé."],
      ["A", "Sure. I will explain how to get there later.", "Chắc chắn rồi. Lát nữa mình sẽ giải thích cách đi đến đó."]
    ],
    qa: [
      { q: "Why does B apologize?", opts: ["B is late", "B lost a phone", "B forgot the dinner", "B is sick"], ans: 0 },
      { q: "When is the dinner?", opts: ["Monday", "Thursday", "Friday", "Sunday"], ans: 2 }
    ],
    tf: [
      { s: "B thinks Linh is polite.", a: true },
      { s: "Linh suggests a restaurant far away.", a: false }
    ] },
  { title: "Trước kỳ thi",
    keys: ["nervous", "worried", "confident", "proud", "tired", "excited", "honest", "patient"],
    lines: [
      ["A", "You look nervous. Are you okay?", "Trông bạn lo lắng quá. Bạn ổn chứ?"],
      ["B", "I'm a little worried about my exam tomorrow.", "Mình hơi lo về kỳ thi ngày mai."],
      ["A", "Be confident! You studied hard, and I'm proud of you.", "Hãy tự tin lên! Bạn đã học chăm chỉ và mình tự hào về bạn."],
      ["B", "Thanks. I'm also tired because I didn't sleep well.", "Cảm ơn. Mình cũng mệt vì ngủ không ngon."],
      ["A", "Be patient with yourself. You can rest after the exam.", "Hãy kiên nhẫn với bản thân. Bạn có thể nghỉ ngơi sau kỳ thi."],
      ["B", "To be honest, I'm excited too. It's my last exam!", "Nói thật, mình cũng háo hức. Đây là kỳ thi cuối cùng của mình!"]
    ],
    qa: [
      { q: "What is B worried about?", opts: ["An exam tomorrow", "A job interview", "A trip", "A bill"], ans: 0 },
      { q: "Why is B tired?", opts: ["B did not sleep well", "B ran a long way", "B is sick", "B is hungry"], ans: 0 }
    ],
    tf: [
      { s: "A is proud of B.", a: true },
      { s: "This is B's first exam.", a: false }
    ] },
  { title: "Bữa sáng và đi chợ",
    keys: ["breakfast", "delicious", "recipe", "grocery", "fresh", "discount", "afford", "bill", "receipt", "order"],
    lines: [
      ["A", "Good morning! What did you have for breakfast?", "Chào buổi sáng! Bạn đã ăn gì cho bữa sáng?"],
      ["B", "Pancakes. They were delicious! I found a great recipe online.", "Bánh pancake. Chúng rất ngon! Mình tìm được một công thức tuyệt vời trên mạng."],
      ["A", "Nice. I need to go to the grocery store today.", "Hay đó. Hôm nay mình cần đi cửa hàng tạp hoá."],
      ["B", "Buy fresh fruit. It's on discount this week.", "Mua trái cây tươi đi. Tuần này đang giảm giá."],
      ["A", "Good idea. I can't afford much, so I'll check the bill carefully.", "Ý hay. Mình không đủ tiền mua nhiều, nên mình sẽ kiểm tra hoá đơn cẩn thận."],
      ["B", "And keep the receipt in case you need to return something.", "Và nhớ giữ biên lai phòng khi bạn cần trả lại món gì đó."],
      ["A", "Thanks. Let's order some coffee first.", "Cảm ơn. Mình gọi cà phê trước nhé."]
    ],
    qa: [
      { q: "What did B eat for breakfast?", opts: ["Pancakes", "Eggs", "Rice", "Bread"], ans: 0 },
      { q: "Why should A buy fruit this week?", opts: ["It is on discount", "It is free", "It is a gift", "The store is closed"], ans: 0 }
    ],
    tf: [
      { s: "A has a lot of money.", a: false },
      { s: "B found the recipe online.", a: true }
    ] },
  { title: "Đi làm bị trễ",
    keys: ["arrive", "traffic", "commute", "delay", "postpone", "schedule", "reserve", "nearby", "direction"],
    lines: [
      ["A", "Good morning! You usually arrive before eight. What happened?", "Chào buổi sáng! Bạn thường đến trước tám giờ. Có chuyện gì vậy?"],
      ["B", "The traffic was terrible. My commute took two hours.", "Giao thông tệ quá. Quãng đường đi làm của mình mất hai tiếng."],
      ["A", "That is a big delay. Do you want to postpone our meeting?", "Trễ nhiều thật. Bạn có muốn hoãn cuộc họp không?"],
      ["B", "No, it's fine. What's the schedule for today?", "Không, ổn mà. Lịch trình hôm nay thế nào?"],
      ["A", "At noon we have lunch with a client. I can reserve a table nearby.", "Buổi trưa chúng ta ăn trưa với khách hàng. Mình có thể đặt bàn ở gần đây."],
      ["B", "Great. Can you send me the directions?", "Tuyệt. Bạn gửi cho mình chỉ dẫn đường đi được không?"],
      ["A", "Of course. I'll send them now.", "Tất nhiên. Mình gửi ngay đây."]
    ],
    qa: [
      { q: "Why was B late?", opts: ["There was heavy traffic", "B had a broken car", "B woke up late", "B was sick"], ans: 0 },
      { q: "What will A reserve?", opts: ["A taxi", "A table", "A room", "A ticket"], ans: 1 }
    ],
    tf: [
      { s: "B's commute took two hours.", a: true },
      { s: "B wants to postpone the meeting.", a: false }
    ] },
  { title: "Trao đổi với sếp",
    keys: ["manager", "project", "deadline", "priority", "colleague", "task", "meeting", "feedback", "salary"],
    lines: [
      ["A", "Excuse me, manager. Do you have a minute to talk about the project?", "Xin lỗi sếp. Sếp có một phút để nói về dự án không ạ?"],
      ["B", "Of course. The deadline is Friday, so it's our top priority.", "Tất nhiên. Hạn chót là thứ Sáu nên đó là ưu tiên hàng đầu."],
      ["A", "I know. My colleague Sam is helping me with the last task.", "Em biết. Đồng nghiệp Sam đang giúp em việc cuối cùng."],
      ["B", "Good. Send me your report before the meeting, and I'll give you feedback.", "Tốt. Gửi báo cáo cho tôi trước cuộc họp, tôi sẽ góp ý cho bạn."],
      ["A", "Thank you. I'll send it tonight.", "Em cảm ơn. Tối nay em sẽ gửi."],
      ["B", "Also, good news. Your salary will increase next month.", "Ngoài ra, có tin vui. Lương của bạn sẽ tăng vào tháng sau."]
    ],
    qa: [
      { q: "When is the deadline?", opts: ["Monday", "Wednesday", "Friday", "Sunday"], ans: 2 },
      { q: "What will the manager give A?", opts: ["A gift", "Feedback", "A new task", "A day off"], ans: 1 }
    ],
    tf: [
      { s: "A will send the report tomorrow morning.", a: false },
      { s: "Sam is A's colleague.", a: true }
    ] },
  { title: "Không khoẻ",
    keys: ["headache", "rest", "medicine", "exercise", "healthy", "apartment", "neighbor", "rent", "clean", "repair"],
    lines: [
      ["A", "You don't look well. What's wrong?", "Trông bạn không khoẻ. Có chuyện gì vậy?"],
      ["B", "I have a terrible headache. I think I need to rest.", "Mình bị đau đầu kinh khủng. Mình nghĩ mình cần nghỉ ngơi."],
      ["A", "Take some medicine and drink water. Also, try to exercise more. It's healthy.", "Uống thuốc và uống nước đi. Ngoài ra hãy tập thể dục nhiều hơn. Nó tốt cho sức khoẻ."],
      ["B", "You're right. My apartment is noisy and I can't sleep. My neighbor plays music all night.", "Bạn nói đúng. Căn hộ của mình ồn và mình không ngủ được. Hàng xóm mở nhạc cả đêm."],
      ["A", "That's bad. Maybe you can rent a quieter place.", "Tệ thật. Có lẽ bạn có thể thuê một chỗ yên tĩnh hơn."],
      ["B", "Maybe. First I need to clean the room and repair the window.", "Có thể. Trước hết mình cần dọn phòng và sửa cửa sổ."]
    ],
    qa: [
      { q: "What is wrong with B?", opts: ["A headache", "A broken leg", "A cold", "A toothache"], ans: 0 },
      { q: "Who plays music all night?", opts: ["A friend", "A neighbor", "A teacher", "A brother"], ans: 1 }
    ],
    tf: [
      { s: "B's apartment is quiet.", a: false },
      { s: "A suggests taking medicine.", a: true }
    ] },
  { title: "Điện thoại bị chậm",
    keys: ["battery", "update", "notification", "password", "backup", "upload", "connection", "download", "install", "device"],
    lines: [
      ["A", "My phone is so slow today. The battery is almost dead too.", "Điện thoại của mình hôm nay chậm quá. Pin cũng gần hết rồi."],
      ["B", "Did you update the system? There's a notification on your screen.", "Bạn đã cập nhật hệ thống chưa? Có một thông báo trên màn hình của bạn."],
      ["A", "Not yet. I forgot my password, so I can't log in.", "Chưa. Mình quên mật khẩu nên không đăng nhập được."],
      ["B", "Okay. First, make a backup of your photos. Then upload them to the cloud.", "Được rồi. Trước tiên hãy sao lưu ảnh của bạn. Sau đó tải chúng lên đám mây."],
      ["A", "The connection is bad here. It takes forever to download anything.", "Kết nối ở đây tệ lắm. Tải gì cũng mất rất lâu."],
      ["B", "Wait until you have Wi-Fi, then install the update on your device.", "Đợi đến khi có Wi-Fi rồi cài bản cập nhật vào thiết bị của bạn."]
    ],
    qa: [
      { q: "What should A do first?", opts: ["Make a backup", "Buy a new phone", "Install the update", "Call a friend"], ans: 0 },
      { q: "Why can't A log in?", opts: ["A forgot the password", "The screen is broken", "The battery is dead", "There is no Wi-Fi"], ans: 0 }
    ],
    tf: [
      { s: "A has a good internet connection.", a: false },
      { s: "B tells A to install the update.", a: true }
    ] },
  { title: "Lỗi trong code",
    keys: ["bug", "code", "syntax", "function", "variable", "loop", "server", "array", "database", "algorithm"],
    lines: [
      ["A", "The page doesn't work. I think there is a bug in my code.", "Trang không chạy được. Mình nghĩ có lỗi trong code của mình."],
      ["B", "Let me look. You have a syntax mistake in this function.", "Để mình xem. Bạn có lỗi cú pháp trong hàm này."],
      ["A", "Oh no. Is the variable name wrong?", "Ôi không. Tên biến bị sai à?"],
      ["B", "No, the problem is the loop. It never stops, so the server gets too many requests.", "Không, vấn đề là vòng lặp. Nó không bao giờ dừng nên máy chủ nhận quá nhiều yêu cầu."],
      ["A", "And the array? I get the data from the database.", "Còn mảng thì sao? Mình lấy dữ liệu từ cơ sở dữ liệu."],
      ["B", "The array is fine. But maybe we need a faster algorithm.", "Mảng ổn. Nhưng có lẽ chúng ta cần một thuật toán nhanh hơn."]
    ],
    qa: [
      { q: "What is the problem with the loop?", opts: ["It never stops", "It is too short", "It has no name", "It is empty"], ans: 0 },
      { q: "Where does A get the data?", opts: ["From a file", "From the database", "From a website", "From a friend"], ans: 1 }
    ],
    tf: [
      { s: "The array is wrong.", a: false },
      { s: "B finds a syntax mistake.", a: true }
    ] },
  { title: "Triển khai tính năng",
    keys: ["deploy", "feature", "debug", "error", "response", "request", "repository", "refactor", "framework", "implement"],
    lines: [
      ["A", "Are you ready to deploy the new feature?", "Bạn sẵn sàng triển khai tính năng mới chưa?"],
      ["B", "Almost. I need to debug one more error first.", "Gần xong. Mình cần gỡ thêm một lỗi nữa trước."],
      ["A", "What is the error?", "Lỗi gì vậy?"],
      ["B", "The server sends a wrong response when we make a request.", "Máy chủ gửi phản hồi sai khi chúng ta gửi yêu cầu."],
      ["A", "Did you push your code to the repository?", "Bạn đã đẩy code lên kho mã nguồn chưa?"],
      ["B", "Yes. Later I will refactor the old code. The new framework makes it easy to implement the search part.", "Rồi. Lát nữa mình sẽ tái cấu trúc code cũ. Framework mới giúp việc triển khai phần tìm kiếm dễ dàng."]
    ],
    qa: [
      { q: "What does B need to do before the deploy?", opts: ["Debug one more error", "Buy a server", "Write a report", "Call a client"], ans: 0 },
      { q: "Where did B push the code?", opts: ["To an email", "To a repository", "To a phone", "To a printer"], ans: 1 }
    ],
    tf: [
      { s: "A wants to deploy a new feature.", a: true },
      { s: "B has not pushed the code yet.", a: false }
    ] },
  { title: "Kế hoạch học tiếng Anh",
    keys: ["improve", "possible", "available", "prepare", "necessary", "avoid", "decide", "different", "achieve", "require"],
    lines: [
      ["A", "I want to improve my English this year.", "Năm nay mình muốn cải thiện tiếng Anh."],
      ["B", "That's a great goal. Is it possible to study every day?", "Mục tiêu tuyệt vời. Có thể học mỗi ngày không?"],
      ["A", "Yes, I'm available in the evening. I will prepare a plan.", "Có, buổi tối mình rảnh. Mình sẽ chuẩn bị một kế hoạch."],
      ["B", "Good. It's necessary to avoid making the same mistakes.", "Tốt. Cần tránh lặp lại cùng một lỗi."],
      ["A", "You're right. I need to decide which book to use. Each one is different.", "Bạn nói đúng. Mình cần quyết định dùng sách nào. Mỗi cuốn một khác."],
      ["B", "Don't worry. If you practice, you will achieve it. It doesn't require much money.", "Đừng lo. Nếu luyện tập, bạn sẽ đạt được. Nó không đòi hỏi nhiều tiền."]
    ],
    qa: [
      { q: "What does A want to improve?", opts: ["English", "Cooking", "Driving", "Singing"], ans: 0 },
      { q: "When is A available?", opts: ["In the morning", "In the evening", "At noon", "On Sunday"], ans: 1 }
    ],
    tf: [
      { s: "The goal requires a lot of money.", a: false },
      { s: "A will prepare a plan.", a: true }
    ] }
];
