# AGENTS.md

## 1. `kebab-app-name`

### 1.1. Definition

The `kebab-app-name` is the literal text you assign when creating a new app.

* **Example:** For an app named “Task List”, you might set:

  ```yaml
  kebab-app-name: task-list
  ```

### 1.2. Usage

The `kebab-app-name` value must be used consistently for the following:

#### 1.2.1. Markdown file name

* **Path:** `docs/pages/javascript-of-the-day/{kebab-app-name}.md`

#### 1.2.2. Static assets folder

* **Path:** `docs/pages/_static/apps/{kebab-app-name}/`

#### 1.2.3. Static asset filenames

Inside the folder above, create exactly three files named:

* `{kebab-app-name}.css`
* `{kebab-app-name}.html`
* `{kebab-app-name}.js`

#### 1.2.4. Landing page file

* **Path:** `docs/pages/javascript-of-the-day/index.md`
* **Description:** This is the landing page for Javascript of the Day.
  You are **not** to change the content of this page, except to update the intro sentence and the existing button reference so that it opens the new app.
  It must follow the HTML, style, and script below, embedded directly into the `index.md` file.
* **Template:**

  > The featured project is a {app name} application written in vanilla JavaScript. Click the button below to try it without leaving the page.
  >
  > **Open {app name} App**

---

## 2. Historical page file

* **Path:** `docs/pages/javascript-of-the-day/{kebab-app-name}.md`
* **Description:** This file serves as the archive page for each featured app. It must be named `{kebab-app-name}.md` and follow the template below (replace `{kebab-app-name}` and `{Display Name}` accordingly):

```markdown
# {Display Name} App

### Try It Now

To test the **{Display Name} App** yourself and see the functionality in action, click the link below:

<!-- Button to open modal -->
<button id="openModalButton" class="cta-btn">Open {Display Name} App</button>

<!-- Modal -->
<div id="{kebab-app-name}Modal">
  <div id="modalContent">
    <span id="closeModal" class="close">&times;</span>
    <iframe src="../../_static/apps/{kebab-app-name}/{kebab-app-name}.html" title="{Display Name} App"></iframe>
  </div>
</div>

### Overview

The **{Display Name} App** is a lightweight, interactive web application designed to help users manage content specific to its purpose. It persists data locally using the browser's `localStorage`, eliminating the need for a backend.

### Features

- **Add Items:** Input and save entries locally.
- **Mark Items as Completed:** Toggle the state of each entry.
- **Delete Items:** Remove entries permanently.
- **Persistent Storage:** Utilizes `localStorage` for data retention.

### Purpose

Demonstrates Codex's ability to generate complete, deployable web applications with client-side storage and minimal setup.

### How It Works

1. **Adding Items:** Enter text and click "Add"; the entry is saved to `localStorage`.
2. **Marking Completed:** Click the checkbox to toggle the completed state, which persists across reloads.
3. **Deleting Items:** Click the delete icon to remove the entry from the list and storage.

<script>
// Modal behavior (same as landing page)
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("{kebab-app-name}Modal");
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
// Use the same styles as defined for the landing page modal and button, adjusting the modal ID selector accordingly.
</style>
```

---

## 3. Navigation menu inclusion

After the `"Today's App"` link in your MkDocs `nav`, include two entries for each featured app:

### 3.1. Javascript of the Day Link

* **Text:** `{MM/D/YY} {Display Name}` (e.g. `7/6/25 Task List`)
* **Target:** `javascript-of-the-day/{kebab-app-name}.md`
* **Position:** Immediately below the `javascript-of-the-day/index.md` entry.

### 3.2. Detail Page Button

* On the landing page (`index.md`), update the existing button to point at the app’s modal as usual.

* On the archived detail page (`{kebab-app-name}.md`), include a button or link back to itself if desired, but the MkDocs nav entry serves as the primary access.

* **Example nav snippet for **\`\`**:**

  ```yaml
  nav:
    - "Today's App": javascript-of-the-day/index.md
    - "7/6/25 Task List": javascript-of-the-day/task-list.md
  ```

---

## 4. App modal container requirements

Each app must provide three static files in its folder—`{kebab-app-name}.css`, `{kebab-app-name}.html`, and `{kebab-app-name}.js`—designed for seamless embedding inside a modal on a web page. The files must follow these conventions:

### 4.1. CSS file: `{kebab-app-name}.css`

* Use a neutral, modern base (`font-family: Arial, sans-serif`, or equivalent).
* Set a subtle body background and margin/padding.
* App UI is wrapped in a `.container` class, with maximum width, centered, white background, rounded corners, and box-shadow.
* Core component classes should be modular (`.new-task`, `#task-input`, `#add-task`, `.completed`, etc).
* All app-specific styles must live within the file; avoid global selectors as much as possible.

**Example pattern:**

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 20px;
}
.container {
    max-width: 400px;
    margin: auto;
    background: white;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
/* Other class/id-based styles for modular layout */
```

---

### 4.2. HTML file: `{kebab-app-name}.html`

* Must be a complete, minimal HTML5 document.
* Loads its own CSS and JS with relative paths (`<link rel="stylesheet" href="{kebab-app-name}.css">`, `<script src="{kebab-app-name}.js"></script>`).
* All app UI is contained within a `.container` `<div>`.
* Use semantic HTML where possible.
* Only the app’s UI should be present; no extra layout or nav.
* The outer structure must look like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{Display Name} App</title>
    <link rel="stylesheet" href="{kebab-app-name}.css">
</head>
<body>
    <div class="container">
        <!-- App-specific UI goes here -->
    </div>
    <script src="{kebab-app-name}.js"></script>
</body>
</html>
```

---

### 4.3. JS file: `{kebab-app-name}.js`

* Implements all interactive logic for the app.
* Should be self-contained, relying only on the DOM within the `.container` (no assumptions about outer page context).
* Uses vanilla JS unless otherwise specified.
* Interacts with the DOM using IDs/classes matching the HTML/CSS.
* If persistent data is needed, use `localStorage` or other browser APIs (not cookies).

**Template for structure:**

```js
// Get references to DOM elements
const someInput = document.getElementById('some-input-id');
// Set up state and functions as needed

// Add event listeners for user actions

// Persist and render UI as needed
```

---

**Note:**
All app assets must work seamlessly inside an `<iframe>` in a modal overlay. Avoid global styles/scripts that could conflict with the parent page.

---

*Additional sections such as delivery rules can follow below.*
