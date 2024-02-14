'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// const number = document.querySelector('.number');
// number.textContent = 13;
// const score = document.querySelector('.score');
// score.textContent = 10;

// document.querySelector('.guess').value = 23;
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   When player wins
  if (!guess) {
    displayMessage('⛔ No number!');
  }
  //   When Player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

const again = document
  .querySelector('.again')
  .addEventListener('click', function () {
    score = 0;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
  });
