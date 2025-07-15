# Hello World App

### Try It Now

To test the **Hello World App** yourself and see the functionality in action, click the link below:

<!-- Button to open modal -->
<button id="openModalButton" class="cta-btn">Open Hello World App</button>

<!-- Modal -->
<div id="hello-worldModal">
  <div id="modalContent">
    <span id="closeModal" class="close">&times;</span>
    <iframe src="../../_static/apps/hello-world/hello-world.html" title="Hello World App"></iframe>
  </div>
</div>

### Overview

The **Hello World App** is a lightweight, interactive web application designed to demonstrate a simple GET request. It retrieves a greeting from `https://www.gritlabs.net/api/hello` and displays it.

### Features

- **Fetch Greeting:** Automatically retrieves the greeting message when loaded.
- **Display Result:** Shows the message directly in the page.

### Purpose

Demonstrates Codex's ability to generate complete, deployable web applications with minimal setup.

### How It Works

1. **Load App:** When the iframe content loads, the JavaScript fetches the greeting from the API.
2. **Display Message:** The returned message appears within the app's container.

<script>
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("hello-worldModal");
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
#hello-worldModal {
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
