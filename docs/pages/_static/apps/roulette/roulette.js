// Minimal Roulette game logic

document.addEventListener('DOMContentLoaded', () => {
  const balanceEl = document.getElementById('balance');
  const betAmountInput = document.getElementById('bet-amount');
  const betTypeSelect = document.getElementById('bet-type');
  const betNumberInput = document.getElementById('bet-number');
  const resultEl = document.getElementById('result');
  const spinBtn = document.getElementById('spin');
  const wheel = document.getElementById('wheel');

  let balance = 100;
  let currentRotation = 0;

  const redNumbers = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];

  // Create number labels around the wheel
  const totalSlots = 37; // numbers 0-36
  const radius = 90; // distance from center for numbers
  for (let i = 0; i < totalSlots; i++) {
    const numEl = document.createElement('div');
    numEl.className = `wheel-number ${getColor(i)}`;
    numEl.textContent = i;
    const angle = i * (360 / totalSlots);
    numEl.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;
    wheel.appendChild(numEl);
  }

  function getColor(num) {
    if (num === 0) return 'green';
    return redNumbers.includes(num) ? 'red' : 'black';
  }

  function updateBalance() {
    balanceEl.textContent = balance;
  }

  betTypeSelect.addEventListener('change', () => {
    betNumberInput.style.display = betTypeSelect.value === 'number' ? 'inline-block' : 'none';
  });

  spinBtn.addEventListener('click', () => {
    const betAmount = parseInt(betAmountInput.value, 10);
    if (isNaN(betAmount) || betAmount <= 0) {
      alert('Enter a bet amount.');
      return;
    }
    if (betAmount > balance) {
      alert('Insufficient balance.');
      return;
    }

    let betNumber = null;
    if (betTypeSelect.value === 'number') {
      betNumber = parseInt(betNumberInput.value, 10);
      if (isNaN(betNumber) || betNumber < 0 || betNumber > 36) {
        alert('Enter a number between 0 and 36.');
        return;
      }
    }

    const additionalRotation = Math.floor(Math.random() * 360) + 1800; // spin at least 5 times
    currentRotation += additionalRotation;
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    resultEl.textContent = '';
    spinBtn.disabled = true;

    wheel.addEventListener('transitionend', () => {
      const winningNumber = Math.floor(Math.random() * 37);
      const winningColor = getColor(winningNumber);

      let win = false;
      let payout = 0;

      switch (betTypeSelect.value) {
        case 'number':
          win = winningNumber === betNumber;
          payout = 35;
          break;
        case 'red':
        case 'black':
          win = winningColor === betTypeSelect.value;
          payout = 1;
          break;
        case 'odd':
          win = winningNumber !== 0 && winningNumber % 2 === 1;
          payout = 1;
          break;
        case 'even':
          win = winningNumber !== 0 && winningNumber % 2 === 0;
          payout = 1;
          break;
      }

      if (win) {
        balance += betAmount * payout;
        resultEl.textContent = `Number: ${winningNumber} (${winningColor}) - You win!`;
      } else {
        balance -= betAmount;
        resultEl.textContent = `Number: ${winningNumber} (${winningColor}) - You lose.`;
      }
      updateBalance();
      spinBtn.disabled = false;
    }, { once: true });
  });

  updateBalance();
});
