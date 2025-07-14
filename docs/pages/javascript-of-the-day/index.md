# JavaScript of the Day

Welcome to **JavaScript of the Day**, a small corner of Grit Labs where we ask Codex to build a tiny, self contained JavaScript application. Each entry showcases how a language model can turn a short specification into runnable code. These projects are not meant to be production ready—instead they serve as simple, reproducible examples you can explore or extend on your own.

The featured project is an Angular Tasks application written in TypeScript and compiled to JavaScript. Click the button below to try it without leaving the page.

<!-- Button to open modal -->
<button id="openModalButton" class="cta-btn">Open Angular Tasks App</button>

<!-- Modal -->
<div id="angular-tasksModal">
  <div id="modalContent">
    <span id="closeModal" class="close">&times;</span>
  </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("angular-tasksModal");
  const modalContent = document.getElementById("modalContent");
  const openBtn = document.getElementById("openModalButton");
  const closeBtn = document.getElementById("closeModal");

  function loadIframe() {
    if (!modalContent.querySelector("iframe")) {
      const iframe = document.createElement("iframe");
      iframe.src = "https://widgets.gritlabs.net/task-list";
      iframe.title = "Angular Tasks App";
      iframe.onload = () => {
        const err = modalContent.querySelector(".error-msg");
        if (err) err.remove();
      };
      iframe.onerror = () => {
        const err = document.createElement("div");
        err.textContent = "Failed to load Angular Tasks app.";
        err.className = "error-msg";
        modalContent.appendChild(err);
      };
      modalContent.appendChild(iframe);
    }
  }

  function closeModalFn() {
    modal.style.display = "none";
    const iframe = modalContent.querySelector("iframe");
    if (iframe) iframe.remove();
    const err = modalContent.querySelector(".error-msg");
    if (err) err.remove();
  }

  openBtn.addEventListener("click", () => {
    loadIframe();
    modal.style.display = "flex";
  });
  closeBtn.addEventListener("click", closeModalFn);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModalFn();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModalFn();
  });
});
</script>

<style>
#angular-tasksModal {
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
.error-msg {
  color: red;
  margin-top: 10px;
  text-align: center;
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
