const quizdata = [
  {
    question: "Which framework is related to JS?",
    a: ".net",
    b: "flask",
    c: "react",
    d: "django",
    correct: "c",
  },
  {
    question: "which is not a programming language?",
    a: "html",
    b: "python",
    c: "java",
    d: "c++",
    correct: "a",
  },
  {
    question: "which is not a framework?",
    a: "react",
    b: "javascript",
    c: "angular",
    d: "django",
    correct: "b",
  },
  {
    question: "css stands for",
    a: "cascading style state",
    b: "cute style script",
    c: "catalan structure style",
    d: "cascading style sheet",
    correct: "d",
  },
];

let question = document.getElementById("question");
let answer = document.querySelectorAll(".answer");
// options
let opt_a = document.getElementById("a_value");
let opt_b = document.getElementById("b_value");
let opt_c = document.getElementById("c_value");
let opt_d = document.getElementById("d_value");
// submit btn
let submitbtn = document.getElementById("submit");

let qno = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselect();

  question.innerHTML = quizdata[qno].question;
  opt_a.innerHTML = quizdata[qno].a;
  opt_b.innerHTML = quizdata[qno].b;
  opt_c.innerHTML = quizdata[qno].c;
  opt_d.innerHTML = quizdata[qno].d;
}

function deselect() {
  answer.forEach((answer) => (answer.checked = false));
}

submitbtn.addEventListener("click", () => {
  let selection;

  answer.forEach((answer) => {
    if (answer.checked) {
      selection = answer.id;
    }
  });

  if (selection == quizdata[qno].correct) {
    score += 1;
  }

  qno += 1;

  if (qno == quizdata.length) {
    document.getElementById(
      "quizdiv"
    ).innerHTML = `<h3> you have answered ${score} correctly out of ${quizdata.length} </h3>`;
  } else {
    loadQuiz();
  }
});
