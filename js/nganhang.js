let cauHoi = [
    {
        id: 1,
        question: "1 + 1 bằng mấy?",
        answers: { A: "1", B: "2", C: "3", D: "4" },
        correct: "B"
    },
    {
        id: 2,
        question: "Thủ đô của Việt Nam là?",
        answers: { A: "Hà Nội", B: "Hải Phòng", C: "Đà Nẵng", D: "TP.HCM" },
        correct: "A"
    },
    {
        id: 3,
        question: "3 * 3 bằng mấy?",
        answers: { A: "6", B: "9", C: "12", D: "3" },
        correct: "B"
    }
];

// Lưu vào localStorage nếu chưa có
if (!localStorage.getItem("cauhoi")) {
    localStorage.setItem("cauhoi", JSON.stringify(cauHoi));
}
