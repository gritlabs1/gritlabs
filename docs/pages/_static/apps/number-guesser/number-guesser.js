const input = document.getElementById('guessInput');
const button = document.getElementById('guessBtn');
const feedback = document.getElementById('feedback');
const BEST_KEY = 'numberGuesserBest';
let target = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function resetGame() {
    if (attempts > 0) {
        const best = parseInt(localStorage.getItem(BEST_KEY), 10);
        if (!best || attempts < best) {
            localStorage.setItem(BEST_KEY, attempts);
        }
    }
    attempts = 0;
    target = Math.floor(Math.random() * 100) + 1;
    feedback.textContent = '';
    input.value = '';
}

button.addEventListener('click', () => {
    const guess = parseInt(input.value, 10);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = 'Enter a number between 1 and 100.';
        return;
    }
    attempts++;
    if (guess === target) {
        feedback.textContent = `Correct! Attempts: ${attempts}.`;
        setTimeout(resetGame, 2000);
    } else if (guess < target) {
        feedback.textContent = 'Too low. Try again!';
    } else {
        feedback.textContent = 'Too high. Try again!';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const best = localStorage.getItem(BEST_KEY);
    if (best) {
        feedback.textContent = `Best score: ${best} attempts`;
    }
});
