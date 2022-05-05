'use strict';
const MIN = 1;
const MAX = 20;

let guessInput = document.querySelector('.guess');
let againBtn = document.querySelector('.again');
let checkBtn = document.querySelector('.check');
let displayMsg = document.querySelector('.message');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let bigNumber = document.querySelector('.number');
let secretNumber = randNumGen(MIN, MAX);

// Generate a random number between 1 and 20
function randNumGen(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Game Logic Implementation ( Check Button Handler )
checkBtn.addEventListener('click', function () {
  const guess = Number(guessInput.value);

  // check if the guess is not empty
  if (!guess && guess !== 0) {
    displayMsg.textContent = '❌ No Number';

    // check if the guess is in range
  } else if (guess < MIN || guess > MAX) {
    displayMsg.textContent = '❌ Not In Range!';

    // check if the guess is correct
  } else if (guess === secretNumber) {
    displayMsg.textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    bigNumber.style.width = '30rem';
    bigNumber.textContent = secretNumber;
    highscore.textContent = score.textContent;

    // check if the guess is higher
  } else if (guess > secretNumber) {
    displayMsg.textContent = '🔥 Such Hot!';
    score.textContent--;

    // check if the guess is lower
  } else if (guess < secretNumber) {
    displayMsg.textContent = '🧊 So Cold!';
    score.textContent--;
  }
  // change input incase of loss
  if (Number(score.textContent) === 0) {
    displayMsg.textContent = '💩 You Lose!';
    checkBtn.disabled = true;
  }
});

// reset the game to initial state ( Again Button Handler )
againBtn.addEventListener('click', function () {
  displayMsg.textContent = 'Start guessing...';
  score.textContent = 20;
  bigNumber.textContent = '?';
  guessInput.textContent = '';
  checkBtn.disabled = false;
  document.querySelector('body').style.backgroundColor = '#222';
  bigNumber.style.width = '15rem';
  secretNumber = randNumGen(MIN, MAX);
});
