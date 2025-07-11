const rollBtn = document.getElementById('rollBtn');
const diceDisplay = document.getElementById('diceDisplay');
const historyDiv = document.getElementById('history');

let history = JSON.parse(localStorage.getItem('diceHistory') || '[]');
renderHistory();

function rollDice() {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    diceDisplay.textContent = `🎲${die1} 🎲${die2}`;
    history.unshift(`${die1} + ${die2} = ${die1 + die2}`);
    if (history.length > 10) history.pop();
    localStorage.setItem('diceHistory', JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    historyDiv.innerHTML = '<h3>History</h3>' +
        '<ul>' + history.map(h => `<li>${h}</li>`).join('') + '</ul>';
}

rollBtn.addEventListener('click', rollDice);
