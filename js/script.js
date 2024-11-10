const questions = [
    {
        question: "What is the chemical symbol for gold?",
        answers: ["Ag", "Au", "Fe", "Hg"],
        correctAnswerIndex: 0
    },
    {
        question: "What is the closest planet to the Sun?",
        answers: ["Venus", "Earth", "Mercury", "Mars"],
        correctAnswerIndex: 0
    },
    {
        question: "What is the chemical symbol for water?",
        answers: ["H2O", "O2", "CO2", "N2"],
        correctAnswerIndex: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Mars", "Earth", "Venus", "Jupiter"],
        correctAnswerIndex: 0
    }
];
let currentQuestionIndex = 0;
let score = 0;
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-text').innerText = question.question;
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach((button, index) => {
        button.innerText = question.answers[index];
    });
    document.getElementById('score').innerText = score;
}
function checkAnswer(selectedAnswerIndex) {
    const correctAnswerIndex = questions[currentQuestionIndex].correctAnswerIndex;
    if (selectedAnswerIndex === correctAnswerIndex) {
        score++;
    }
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(button => button.disabled = true);
}
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        const buttons = document.querySelectorAll('.answer-btn');
        buttons.forEach(button => button.disabled = false);
    } else {
        alert("Quiz Over! Your final score is: " + score);
    }
}
loadQuestion();
