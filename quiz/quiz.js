import { questions } from "./questions.js";

const questionElement = document.querySelector(".question");
const answerBtn = document.querySelector(".answer_btn");
const nextBtn = document.querySelector(".next");
const quizElem = document.querySelector(".quiz");

let questionCounter = 0;
let score = 0;
let nQuestions = 10;

// generating new random number everytime 
let pickedNumbers = new Set();// Set to keep track of previously picked numbers
function getUniqueRandomNumber() {
    let randomNumber;
    // Keep generating a random number until it's not been picked before
    do {
        randomNumber = Math.floor(Math.random() * questions.length);
    } while (pickedNumbers.has(randomNumber));
    
    // Add the number to the set of picked numbers
    pickedNumbers.add(randomNumber);
    return randomNumber;
}
let index = getUniqueRandomNumber();

startQuiz();
function startQuiz() {
    score = 0;
    questionCounter = 0;
    showQuiz();
}

function showQuiz() {
    const questionNo = questionCounter + 1;
    const questionsArr = questions[index];
    questionElement.textContent = questionNo + "." + questionsArr.question;

    // running for each on answers[] array not on main array..
    questionsArr.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerHTML = answer.option;
        answerBtn.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtn.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
    nextBtn.addEventListener("click", newQuiz);
}
function newQuiz() {
    resetpreviousquiz();
    index = getUniqueRandomNumber();
    questionCounter ++;
    if (questionCounter < nQuestions-1) {
        showQuiz();
    } else {
        gameOver();
    }
}

function resetpreviousquiz() {
    nextBtn.style.display = "none";
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function gameOver() {
    nextBtn.style.display = "none";
    questionElement.innerHTML = "";
    answerBtn.innerHTML = `Your Scored ${score} out of ${nQuestions} questions.`;
    answerBtn.classList.add("lastscore");
    const playBtn = document.createElement("button");
    quizElem.appendChild(playBtn)
    playBtn.classList.add("playbtn");
    playBtn.innerHTML = "Play Again";
    playBtn.addEventListener("click", function () {
    answerBtn.classList.remove("lastscore");
    playBtn.style.display = "none";
    startQuiz();
    });
}
