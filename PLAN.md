# Vocab – App học từ vựng tiếng Anh

## Định hướng
- Công nghệ: HTML, CSS, JavaScript thuần, Bootstrap 5.
- App một người dùng, chạy offline, mở `index.html` là dùng được. Không có backend.
- Dữ liệu lưu trong `localStorage`.
- Phương pháp học: lặp lại ngắt quãng kiểu Leitner (5 hộp). Nhớ thì lên hộp, quên thì về hộp 1.
- Giao diện responsive, dùng được trên điện thoại.

## Cấu trúc thư mục
```
LearnEnglish/
├── index.html
├── PLAN.md
├── css/style.css
└── js/
    ├── data.js   (bộ từ mẫu)
    └── app.js    (logic)
```

## Checklist

### Giai đoạn 1 – MVP
- [ ] Khung giao diện Bootstrap 5, responsive
- [ ] Thêm / sửa / xoá từ (từ, nghĩa, phiên âm, ví dụ)
- [ ] Lưu dữ liệu vào `localStorage`
- [ ] Flashcard: chạm để lật thẻ, chọn "Đã nhớ" / "Chưa nhớ"
- [ ] Thuật toán Leitner: tính hộp và ngày ôn tiếp theo
- [ ] Phát âm bằng Web Speech API
- [ ] Bộ từ mẫu để thử ngay

### Giai đoạn 2 – Củng cố trí nhớ
- [ ] Bài kiểm tra trắc nghiệm 4 đáp án
- [ ] Chế độ gõ lại từ
- [ ] Thống kê: số từ đã thuộc, số từ đến hạn hôm nay, streak theo ngày

### Giai đoạn 3 – Tiện ích
- [ ] Tìm kiếm / lọc từ
- [ ] Xuất / nhập JSON để sao lưu
- [ ] Nhập hàng loạt từ CSV hoặc dán văn bản
- [ ] Chế độ tối
- [ ] Chia từ theo chủ đề / bộ từ

## Câu hỏi cần chốt
1. Phạm vi lần đầu: chỉ Giai đoạn 1, hay làm cả 1 và 2?
2. Hướng học: chỉ Anh → Việt, hay thêm Việt → Anh?
3. Ngôn ngữ giao diện: tiếng Việt hay song ngữ?
4. Chủ đề từ mẫu: giao tiếp, IELTS, TOEIC, công việc, hay để trống?
5. Có tính năng nào muốn thêm hoặc bỏ?
