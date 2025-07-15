# Angular Grid App

### Try It Now

To test the **Angular Grid App** yourself and see the functionality in action, click the link below:

<!-- Button to open modal -->
<button id="openModalButton" class="cta-btn">Open Angular Grid App</button>

<!-- Modal -->
<div id="angular-gridModal">
  <div id="modalContent">
    <span id="closeModal" class="close">&times;</span>
  </div>
</div>

### Overview

The **Angular Grid App** demonstrates embedding a remote AG Grid widget inside a modal. The widget comes from an external source and runs entirely in an iframe.

### Features

- **Remote Loading:** The Angular application is loaded from `https://widgets.gritlabs.net/ag-grid-demo` only when the modal opens.
- **Resource Cleanup:** The iframe is removed when the modal closes.
- **Error Handling:** Displays a friendly message if the widget fails to load.

<script>
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("angular-gridModal");
  const modalContent = document.getElementById("modalContent");
  const openBtn = document.getElementById("openModalButton");
  const closeBtn = document.getElementById("closeModal");

  function showIframe() {
    if (!modalContent.querySelector("iframe")) {
      const iframe = document.createElement("iframe");
      iframe.src = "https://widgets.gritlabs.net/ag-grid-demo";
      iframe.title = "Angular Grid App";
      iframe.onload = () => {
        const err = modalContent.querySelector(".error-msg");
        if (err) err.remove();
      };
      iframe.onerror = () => {
        const err = document.createElement("div");
        err.textContent = "Failed to load Angular Grid app.";
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
    showIframe();
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
#angular-gridModal {
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
