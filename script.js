'use strict';

// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.btn').textContent);

// document.querySelector('.guess').value = 30;
// console.log(document.querySelector('.guess').value);
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess);

  //No Number
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess) {
    if (guess === secretNumber) {
      //WON the Game
      document.querySelector('.message').textContent = '🎉 Correct Guess!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('.number').style.width = '30rem';

      if (score > highScore) {
        highScore = score;

        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          guess > secretNumber ? '🔼Number Too High!' : '🔽Number Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '💣You Lost the Game!';
        document.querySelector('.score').textContent = 0;
      }
    }
    // else if (guess > secretNumber) {
    //   //Number is high
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '🔼Number Too High!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💣You Lost the Game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (guess < secretNumber) {
    //   //Number is low
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '🔽Number Too Low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💣You Lost the Game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
