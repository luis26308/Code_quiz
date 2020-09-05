// create 4 buttons and give ids to insert here //
const question = document.querySelector("question")
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const timeEl = document.querySelector(".time");


let secondsLeft = 60;

function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = ("Time left: " + secondsLeft);

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      // sendMessage();
    }

  }, 1000);
}

const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: ["Douglas Crockford",
      "Sheryl Sandberg",
      "Brendan Eich",
      "something"
    ],
    correctAnswer: ""
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: [
      "Node.js",
      "TypeScript",
      "npm",
      "something"
    ],
    correctAnswer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: [
       "Angular",
       "jQuery",
       "RequireJS",
       "ESLint"
    ],
    correctAnswer: "d"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: [
       "Angular",
       "jQuery",
       "RequireJS",
       "ESLint"
    ],
    correctAnswer: "d"
  }
];


let index = 0;
let currentQuestion = myQuestions[0];
nextQuestion();

function nextQuestion() {
  currentQuestion = myQuestions[index]
  question.textContent = myQuestions.question;
  button1.textContent = myQuestions.answers[0];
  button2.textContent = myQuestions.answers[1];
  button3.textContent = myQuestions.answers[2];
  button4.textContent = myQuestions.answers[3];
}

button1.addEventListener("click", function (event) {
  event.preventDefault();
  if (button1.textContent === myQuestions.correctAnswer) {
    alert("correct")
  }
  else {
    alert("wrong")
  }
  index++
  nextQuestion()

})

button2.addEventListener("click", function (event) {
  event.preventDefault();
  if (button2.textContent === myQuestions.correctAnswer) {
    alert("correct")
  }
  else {
    alert("wrong")
  }
  index++
  nextQuestion()

})

button3.addEventListener("click", function (event) {
  event.preventDefault();
  if (button3.textContent === myQuestions.correctAnswer) {
    alert("correct")
  }
  else {
    alert("wrong")
  }
  index++
  nextQuestion()

})

button4.addEventListener("click", function (event) {
  event.preventDefault();
  if (button4.textContent === myQuestions.correctAnswer) {
    alert("correct")
  }
  else {
    alert("wrong")
  }
  index++
  nextQuestion()

})

