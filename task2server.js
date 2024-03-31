const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
    answer: "William Shakespeare"
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  displayQuestion();
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('quiz-questions').style.display = 'block';
}

function displayQuestion() {
  const questionObj = quizQuestions[currentQuestion];
  document.getElementById('question').innerText = questionObj.question;
  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';
  questionObj.options.forEach(option => {
    const optionElem = document.createElement('div');
    optionElem.innerText = option;
    optionElem.classList.add('option');
    optionElem.onclick = () => selectOption(option);
    optionsContainer.appendChild(optionElem);
  });
}

function selectOption(option) {
  const questionObj = quizQuestions[currentQuestion];
  const selectedOption = document.querySelector('.selected');
  if (selectedOption) selectedOption.classList.remove('selected');
  document.querySelector(`.option:nth-child(${questionObj.options.indexOf(option) + 1})`).classList.add('selected');
}

function submitAnswer() {
  const selectedOption = document.querySelector('.selected');
  if (!selectedOption) return; // No option selected
  const selectedAnswer = selectedOption.innerText;
  const questionObj = quizQuestions[currentQuestion];
  if (selectedAnswer === questionObj.answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizQuestions.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('quiz-questions').style.display = 'none';
  document.getElementById('result-container').style.display = 'block';
  document.getElementById('score').innerText = score;
  const resultGif = document.getElementById('result-gif');
  if (score >= 1) {
    resultGif.innerHTML = '<img src="win.gif" alt="Win GIF">';
  } else {
    resultGif.innerHTML = '<img src="lose.gif" alt="Lose GIF">';
  }
}
