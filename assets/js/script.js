const quizForm = document.querySelector('.total');

const resultPanel = document.querySelector('.submit');
const Marks = document.querySelector('#score');
const testAnswers = ['a', 'a', 'b', 'c', 'b'];

quizForm.addEventListener('submit', e => {
  e.preventDefault();

  let userAnswers = [quizForm.qn1.value, quizForm.qn2.value, quizForm.qn3.value, quizForm.qn4.value, quizForm.qn5.value];
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