const quizBoard = require= document.querySelector('.format');
const resultPanel = document.querySelector('.submit');
const Marks = document.querySelector('.total score');
const testAnswers = ['a', 'a', 'b', 'c', 'b'];

quizBoard.addEventListener('submit', e => {
  e.preventDefault();

  let userAnswers = [quizBoard.mcq1.id, quizBoard.mcq2.id, quizBoard.mcq3.id, quizBoard.mcq4.id, quizBoard.mcq5.id];
  let score = 0;

  userAnswers.forEach((answer, index) => {
    if (answer === testAnswers[index]) {
      score += 20;
    }
  });


  let submit = 0;

  const counter = setInterval(() => {
    totalScore.textContent = `${submit}%`;

    if (submit === score) {
      clearInterval(counter);
    } else {
      submit++;
    }
  }, 10)

  quizBoard.reset();

});