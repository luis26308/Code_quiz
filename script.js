// create 4 buttons and give ids to insert here //
const button1 = document.querySelector("")
const button2 = document.querySelector("")
const button3 = document.querySelector("")
const button4 = document.querySelector("")

let secondsLeft = 60;

function setTime() {
  let timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: [
       "Douglas Crockford",
       "Sheryl Sandberg",
       "Brendan Eich",
       "something"
    ],
    correctAnswer: ""
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
      d: "something"
    },
    correctAnswer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint"
    },
    correctAnswer: "d"
  }
];


let index = 0;
let myQuestion = questionAnswer[0]
nextQuestion();

function nextQuestion() {
  myQuestion = questionAnswer[index]
question.textContent = myQuestion.question;
button1.textContent = myQuestion.answer[0]
button2.textContent = myQuestion.answer[1]
button3.textContent = myQuestion.answer[2]
button4.textContent = myQuestion.answer[3]
}

button1.addEventListener("click", function(event) {
  event.preventDefault();
  if (button1.textContent === myQuestion.correctAnswer) {
    alert("correct")
  }
  else {
    alert("wrong")
  }
  index++
  nextQuestion(;)

})

button2.addEventListener("click", function(event) {
  event.preventDefault();
  if (button2.textContent === myQuestion.correctAnswer) {
    alert("correct")
  }
  else {
    alert("wrong")
  }
  index++
  nextQuestion(;)

})

button3.addEventListener("click", function(event) {
  event.preventDefault();
  if (button3.textContent === myQuestion.correctAnswer) {
    alert("correct")
  }
  else {
    alert("wrong")
  }
  index++
  nextQuestion(;)

})

button4.addEventListener("click", function(event) {
  event.preventDefault();
  if (button4.textContent === myQuestion.correctAnswer) {
    alert("correct")
  }
  else {
    alert("wrong")
  }
  index++
  nextQuestion(;)

})

