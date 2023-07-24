window.onload = function() {
    var data = JSON.parse(localStorage.getItem('myUniqueKey'));
    if (data === null) {
        document.getElementById("result").textContent = "Bạn chưa tham gia thi.";
        return;
    }
    var result = data.result;
    var score = data.score;
    var resultDiv = document.getElementById("result");
    var scoreText = document.createElement("p");
    scoreText.textContent = "Điểm của bạn: " + score;
    resultDiv.appendChild(scoreText);
    for (var i = 0; i < result.length; i++) {
        var resultText = document.createElement("p");
        if (result[i].userAnswer !== null) {
            var correctAnswer = result[i].correctAnswer;
            if (typeof correctAnswer === 'number') {
                correctAnswer = String.fromCharCode(65 + correctAnswer);
            }
            var userAnswer = result[i].userAnswer;
            if (typeof userAnswer === 'number') {
                userAnswer = String.fromCharCode(65 + userAnswer);
            }
            resultText.textContent = result[i].question + ": Đáp án đúng là " + correctAnswer + ", bạn đã chọn " + userAnswer;
        } else {
            resultText.textContent = result[i].question + ": Bạn không điền đáp án.";
        }
        resultDiv.appendChild(resultText);
    }
    localStorage.removeItem('myUniqueKey'); // Xóa dữ liệu từ localStorage
};
