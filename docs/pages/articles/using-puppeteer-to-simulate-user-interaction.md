# Using Puppeteer to Simulate User Interaction

Puppeteer is a Node.js library that drives Chrome or Chromium using the DevTools Protocol. It lets you script clicks, form input, and navigation—ideal for automation and testing. While headless by default, it can also display the browser window, which is handy when debugging.

---

## What is Puppeteer?

* Controls Chrome/Chromium directly from Node.js
* Headless or non-headless modes
* Useful for automation, scraping, PDF generation, and UI testing

## Why Use Puppeteer for UI Testing?

* Replays real browser interactions
* Framework-agnostic—works with Angular, React, Vue, and more
* Supports form filling, clicking, DOM inspection, and page navigation
* Enables E2E tests in CI/CD and environments without a GUI

## Setting Up Puppeteer

Install Puppeteer with npm:

```bash
npm install puppeteer --save-dev
```

Optionally install `concurrently` to run the Angular dev server and tests in parallel:

```bash
npm install concurrently --save-dev
```

Puppeteer downloads a compatible version of Chromium automatically during installation.

## Example Workflow: Editing a Task

Below is a simplified example that launches an Angular app, edits a task, and verifies the DOM update.

1. Start the Angular dev server (`ng serve`).
2. Navigate to `http://localhost:4200/`.
3. Wait for the task list to render.
4. Click the edit button for the first task.
5. Fill in a new value and save.
6. Confirm the updated text appears in the task list.

## Code Example

```javascript
const puppeteer = require('puppeteer');
const { exec } = require('child_process');

(async () => {
  // Launch the Angular dev server
  const server = exec('ng serve');

  // Give the server time to start
  await new Promise(r => setTimeout(r, 10000));

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:4200/');

  // Wait for the task list
  await page.waitForSelector('.task-list');

  // Edit the first task
  await page.click('.task-item:first-child .edit-button');
  await page.type('.task-item:first-child input', 'Updated Task');
  await page.click('.task-item:first-child .save-button');

  // Verify the change
  const text = await page.$eval('.task-item:first-child .task-text', el => el.textContent);
  if (text.includes('Updated Task')) {
    console.log('Task updated successfully');
  }

  await browser.close();
  server.kill();
})();
```

This script starts the dev server, launches Chromium, and simulates a simple edit operation.

## Automating the Script

Add a script entry in `package.json`:

```json
"scripts": {
  "e2e": "concurrently \"ng serve\" \"node e2e.js\""
}
```

Running `npm run e2e` will serve the app and execute the Puppeteer test simultaneously. This pattern works well in CI pipelines and in headless agents like Codex.

## Angular-Specific Tips

* Use `page.waitForSelector` to ensure Angular-rendered elements are ready before interacting.
* If routing is involved, wait for network idle or specific route changes.
* For dynamic components, query by stable IDs or data attributes.

## Puppeteer vs. Other Tools

| Tool       | Key Strengths                        |
|------------|-------------------------------------|
| Puppeteer  | Direct Chrome control, simple API   |
| Playwright | Cross-browser support, powerful waits|
| Cypress    | Built-in assertions, time-travel UI |
| Selenium   | Works with many languages and browsers |

## Summary

Puppeteer makes it straightforward to script real user flows in a browser. It works for any JavaScript framework, integrates with CI, and runs headlessly for Codex agents.

## Further Reading

* [Puppeteer documentation](https://pptr.dev/)
* [Playwright](https://playwright.dev/) – a feature-rich alternative
