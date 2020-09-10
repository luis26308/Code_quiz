// create 4 buttons and give ids to insert here //
const questionEl = document.querySelector("#question")
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const timeEl = document.querySelector(".time");



let secondsLeft = 60;
setTime();

function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time left: " + secondsLeft;

    if (secondsLeft === 0 || index === 4) {
      clearInterval(timerInterval);
      console.log(alert("Your score is: " + secondsLeft))
      console.log(prompt("Enter your initials"))
    }

  }, 1000);
}


let myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: ["Douglas Crockford",
      "Sheryl Sandberg",
      "Brendan Eich",
      "Brad Pitt"
    ],
    correctAnswer: "Sheryl Sandberg"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: [
      "Node.js",
      "TypeScript",
      "npm",
      "Amazon"
    ],
    correctAnswer: "Node.js"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: [
      "Angular",
      "jQuery",
      "RequireJS",
      "ESLint"
    ],
    correctAnswer: "Angular"
  },
  {
    question: "Which of the following is not a valid JavaScript variable name?",
    answers: [
      "2names",
      "_first_and_last_names",
      "FirstAndLast",
      "None of the above"
    ],
    correctAnswer: "2names"
  },
  {
    question: "JavaScript entities start with _______ and end with _________.",
    answers: [
      "Semicolon, colon",
      "Semicolon, Ampersand",
      "Ampersand, colon",
      "Ampersand, semicolon"
    ],
    correctAnswer: "Ampersand, semicolon"
  }
]



let index = 0;
let currentQuestion = myQuestions[index];
questionEl.textContent = currentQuestion.question;
button1.textContent = currentQuestion.answers[0];
button2.textContent = currentQuestion.answers[1];
button3.textContent = currentQuestion.answers[2];
button4.textContent = currentQuestion.answers[3];

nextQuestion();

function nextQuestion() {
  currentQuestion = myQuestions[index];
  questionEl.textContent = currentQuestion.question;
  button1.textContent = currentQuestion.answers[0];
  button2.textContent = currentQuestion.answers[1];
  button3.textContent = currentQuestion.answers[2];
  button4.textContent = currentQuestion.answers[3];
}

button1.addEventListener("click", function (event) {
  event.preventDefault();
  if (button1.textContent === currentQuestion.correctAnswer) {
    alert("correct");
  }
  else {
    alert("wrong");
  }
  index++;
  nextQuestion();

})

button2.addEventListener("click", function (event) {
  event.preventDefault();
  if (button2.textContent === currentQuestion.correctAnswer) {
    alert("correct");
  }
  else {
    alert("wrong");
  }
  index++;
  nextQuestion();

})

button3.addEventListener("click", function (event) {
  event.preventDefault();
  if (button3.textContent === currentQuestion.correctAnswer) {
    alert("correct");
  }
  else {
    alert("wrong");
  }
  index++;
  nextQuestion();

})

button4.addEventListener("click", function (event) {
  event.preventDefault();
  if (button4.textContent === currentQuestion.correctAnswer) {
    alert("correct");
  }
  else {
    alert("wrong");
  }
  index++;
  nextQuestion();

})









