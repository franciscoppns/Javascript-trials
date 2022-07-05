'use strict';
/* Selecting and Manipulating Elements
console.log(document.querySelector('.message').textContent); // lermos o texto do conte]udo da classe .message
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; // score faz parte da state da nossa aplicacao
let highScore = 0;

const displayMessage = function (message) {
  // ha muitos "document.querySelector('.message').textContent = message. entao criar funcao para ser mais facil e clean
  document.querySelector('.message').textContent = message;
};

//document.querySelector('.number').textContent = secretNumber;

// Pressing check button
document.querySelector('.check').addEventListener(
  'click',
  function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess); // geralmente, valores obtidos da consola sao strings

    if (!guess) {
      //When there is no input
      //document.querySelector('.message').textContent = '⛔ No number!';
      displayMessage('⛔ No number!');

      //When player Wins
    } else if (guess === secretNumber) {
      // document.querySelector('.message').textContent = '🎉 Correct Number!';
      displayMessage('🎉 Correct Number!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem'; // a manipular um estilo temos que especificar sempre uma string
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
        // When guess is wrong
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        //document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high' : '📉 Too low';
        displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        //  document.querySelector('.message').textContent = '💥 You lost the game';
        displayMessage('💥 You lost the game');
        document.querySelector('.score').textContent = 0;
      }

      // When guess is too high - feito na primeira vez
    }
  }

  /* Sem fazer Refactoring ao codigo
  
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }*/
);

// Pressing 'Again' button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
