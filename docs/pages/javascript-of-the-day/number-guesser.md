# Number Guesser App

### Try It Now

To test the **Number Guesser App** yourself and see the functionality in action, click the link below:

<!-- Button to open modal -->
<button id="openModalButton" class="cta-btn">Open Number Guesser App</button>

<!-- Modal -->
<div id="number-guesserModal">
  <div id="modalContent">
    <span id="closeModal" class="close">&times;</span>
    <iframe src="../../_static/apps/number-guesser/number-guesser.html" title="Number Guesser App"></iframe>
  </div>
</div>

### Overview

The **Number Guesser App** is a lightweight, interactive web application that challenges you to guess a random number between 1 and 100. It records your best score in the browser's `localStorage` so you can try to improve over time.

### Features

- **Random Target Number:** Generates a new secret number each round.
- **Hint Messages:** Tells you if your guess is too high or too low.
- **Attempt Counter:** Tracks how many guesses you've made.
- **Best Score Persistence:** Saves your lowest attempt count using `localStorage`.

### Purpose

Demonstrates Codex's ability to generate complete, deployable web applications with client-side storage and minimal setup.

### How It Works

1. **Make a Guess:** Enter a number and click "Guess" to submit.
2. **Receive Feedback:** The app lets you know if the secret number is higher or lower.
3. **Win & Reset:** When you guess correctly, your attempts are stored and a new number is generated.

<script>
// Modal behavior (same as landing page)
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("number-guesserModal");
  const openBtn = document.getElementById("openModalButton");
  const closeBtn = document.getElementById("closeModal");
  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});
</script>

<style>
/* Same styles as other JavaScript of the Day modals */
#number-guesserModal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
#modalContent {
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 90%;
  max-width: 600px;
}
#modalContent iframe {
  width: 100%;
  height: 70vh;
  border: none;
}
#closeModal {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
}
.cta-btn {
  background-color: #ff9800;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}
.cta-btn:hover {
  background-color: #e68900;
}
</style>
