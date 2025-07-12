const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let startTime = null;
let elapsed = parseInt(localStorage.getItem('stopwatchElapsed'), 10) || 0;
let intervalId = null;

function pad(num) {
    return String(num).padStart(2, '0');
}

function updateDisplay() {
    let time = elapsed;
    if (startTime) {
        time += Date.now() - startTime;
    }
    const ms = Math.floor(time / 10) % 100;
    const s = Math.floor(time / 1000) % 60;
    const m = Math.floor(time / 60000);
    display.textContent = `${pad(m)}:${pad(s)}:${pad(ms)}`;
}

function start() {
    if (!startTime) {
        startTime = Date.now();
        intervalId = setInterval(updateDisplay, 10);
    }
}

function stop() {
    if (startTime) {
        elapsed += Date.now() - startTime;
        startTime = null;
        clearInterval(intervalId);
        localStorage.setItem('stopwatchElapsed', elapsed);
    }
}

function reset() {
    startTime = null;
    elapsed = 0;
    clearInterval(intervalId);
    localStorage.removeItem('stopwatchElapsed');
    updateDisplay();
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

updateDisplay();
