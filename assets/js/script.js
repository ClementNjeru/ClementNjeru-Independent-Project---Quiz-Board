const quizForm = require= document.querySelector('.form');
const resultPanel = document.querySelector('#output');
const Marks = document.querySelector('.marks');
const testAnswers = ['a', 'a', 'b', 'c', 'b'];

quizForm.addEventListener('submit', e => {
  e.preventDefault();

  let userAnswers = [quizForm.mcq1.id, quizForm.mcq2.id, quizForm.mcq3.id, quizForm.mcq4.id, quizForm.mcq5.id];
  let score = 0;

  userAnswers.forEach((answer, index) => {
    if (answer === testAnswers[index]) {
      score += 20;
    }
  });


  let output = 0;

  const counter = setInterval(() => {
    Marks.textContent = `${output}%`;

    if (output === score) {
      clearInterval(counter);
    } else {
      output++;
    }
  }, 10)

  quizForm.reset();

});