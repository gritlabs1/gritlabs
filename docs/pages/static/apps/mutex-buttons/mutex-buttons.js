// References to DOM elements
const powerButton = document.getElementById('powerButton');
const buttons = document.querySelectorAll('.panel-btn');
const status = document.getElementById('status');

let panelOn = JSON.parse(localStorage.getItem('mutex_panel_on')) || false;
let selected = localStorage.getItem('mutex_selected') || null;

function updateUI() {
    if (panelOn) {
        powerButton.textContent = 'On';
        powerButton.classList.remove('off');
        powerButton.classList.add('on');
    } else {
        powerButton.textContent = 'Off';
        powerButton.classList.remove('on');
        powerButton.classList.add('off');
    }

    buttons.forEach(btn => {
        const isActive = panelOn && btn.dataset.value === selected;
        btn.disabled = !panelOn;
        btn.classList.toggle('active', isActive);
        btn.classList.toggle('disabled', !panelOn);
    });

    if (panelOn) {
        status.textContent = selected ? `Currently selected: ${selected}` : 'Panel is ON. Select an input.';
    } else {
        status.textContent = 'Panel is OFF. Turn on power to use.';
    }
}

powerButton.addEventListener('click', () => {
    panelOn = !panelOn;
    localStorage.setItem('mutex_panel_on', JSON.stringify(panelOn));
    updateUI();
});

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (!panelOn) return;
        selected = btn.dataset.value;
        localStorage.setItem('mutex_selected', selected);
        updateUI();
    });
});

// Initialize on load
updateUI();
