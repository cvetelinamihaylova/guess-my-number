'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let bodyEl = document.querySelector('body');
let guessDiv = document.querySelector('.number');
let scoreEl = document.querySelector('.score');
let textMessage = document.querySelector('.message');

document.querySelector('.check')
    .addEventListener('click', function () {
        const guessNumber = +document.querySelector('.guess').value;
        if (!guessNumber && guessNumber !== 0) {
            textMessage.textContent = 'No number!';
            return;
        }

        if (secretNumber === guessNumber) {
            textMessage.textContent = 'Correct number!';
            guessDiv.textContent = secretNumber;
            bodyEl.style.backgroundColor = '#60b347';
            guessDiv.style.width = '30rem';
            let highScoreEl = document.querySelector('.highscore');
            const highScore = calcHighScore(score, highScoreEl.textContent)
            highScoreEl.textContent = highScore;
        } else {
            score--;
            if (checkScore(score)) {
                secretNumber > guessNumber ? textMessage.textContent = 'Too low!' : textMessage.textContent = 'Too high!';
            } else {
                textMessage.textContent = 'Game over!';
            }
        }
        scoreEl.textContent = score;
    });
document.querySelector('.again')
    .addEventListener('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        scoreEl.textContent = score;
        textMessage.textContent = 'Start guessing...';
        guessDiv.textContent = '?';
        bodyEl.style.backgroundColor = '#222';
        guessDiv.style.width = '15rem';
        document.querySelector('.guess').value = '';
    })
function checkScore(score) {
    if (score === 0) {
        return false;
    }
    return true;
}
function calcHighScore(currentScore, highScore) {
    currentScore = +currentScore;
    highScore = +highScore;
    if (currentScore > highScore) {
        highScore = currentScore;
    }
    return highScore;
}

