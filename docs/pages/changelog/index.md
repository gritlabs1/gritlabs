# Changelog

## v1.0.0 - 2025-07-15

#### Features
- Added a **Dice Roller** JavaScript of the Day with an interactive modal.
- Added a **Stopwatch** JavaScript of the Day.
- Added a **Hello World** JavaScript of the Day demo.
- Added a **Smart JS Tasks** JavaScript of the Day with server-side persistence.
- Added an **Angular Tasks** JavaScript of the Day that embeds a remote widget.
- Added an **Angular Mutex Buttons** JavaScript of the Day.
- Added an **Angular Grid** JavaScript of the Day.
- Published a **Continuous Integration** article.
- Added a **Code Review Best Practices** article.
- Added a **Clean Architecture** article.
- Added a **Module Federation** article.
- Added a **Domain-Driven Design** article.
- Added a **Database-Driven Design** article.
- Added an **Automated Testing Misconceptions** article.
- Added a **Puppeteer User Interaction** article.
- Documented a **Known Issues** term in the terminology template.
- Added a **Visitor Tracking** snippet.
- Removed the proprietary GSL notice from documentation.

#### Fixes to Known Issues
- Deployment pipeline connection failure is resolved ([#00006](../known-issues/2025/07/00006.md)).

## v0.6.0 - 2025-07-10

#### Features
- Added a **Pac Man** JavaScript of the Day with responsive gameplay and MIT-licensed code.
- Documented how to start the game and improved movement mechanics.
- Added an **AI-generated Content and Attribution** article with a navigation link.
- Updated the **RUBE** article with improved framing and image attribution.
- Clarified template usage rules in `AGENTS.md`.

#### Fixes to Known Issues
- None.

## v0.5.0 - 2025-07-09

#### Features
- Introduced a **Known Issues** tracker with an archived issues page.
- Renamed **App of the Day** to **JavaScript of the Day** and added a **Pong Game** example featured on the landing page.
- Documented repository automation with `AGENTS.md` and a "Template Upload Mode" concept.
- Moved all JavaScript assets to the `_static` directory.
- Enabled interactive table sorting using the Tablesort library.
- Backfilled known issues data and reorganized past releases.

#### Fixes to Known Issues
- Pong game paddle lacked touch controls; commit [`57162b8`](https://github.com/gritlabs1/gritlabs/commit/57162b8) enabled finger tracking. ([#00001](../known-issues/2025/07/00001.md))


## v0.4.0 - 2025-07-08

#### Features
- Added a **Roulette** JavaScript of the Day featuring a playable game with improved animation and spin behavior.
- Added the **RUBE - The Four-Point Design Approach** article and a navigation link.
- Clarified in the documentation that `GOALS.md` can express features.

#### Fixes to Known Issues
- Roulette wheel numbers were hard to see; commit [`b83149b`](https://github.com/gritlabs1/gritlabs/commit/b83149b) changed them to white for better contrast. ([#00003](../known-issues/2025/07/00003.md))
- Roulette wheel spin logic was erratic; commit [`535f019`](https://github.com/gritlabs1/gritlabs/commit/535f019) corrected the start and stop positions. ([#00002](../known-issues/2025/07/00002.md))


## v0.3.0 - 2025-07-07

#### Features
- Implemented the **Mutex Buttons** JavaScript of the Day with an interactive demo.
- Added a **Top 10 Website Features** article and navigation link.
- Added fallback behavior for browsers with JavaScript disabled, including a noscript warning and redirect.
- Enabled Mermaid diagrams with new charts for Goals and Dependency Modeling.

#### Fixes to Known Issues
- None.

## v0.2.0 - 2025-07-06

#### Features
- Introduced the **JavaScript of the Day** section featuring self-contained example applications.
- Added a Task List app written in vanilla JavaScript with accompanying HTML and CSS.
- Embedded the Task List demo inside the documentation via an interactive modal.
- Updated the navigation to include the new JavaScript of the Day pages.

#### Fixes to Known Issues
- None.

## v0.1.0 - 2025-07-05

#### Features
- Initial import of the Grit Labs documentation and templates.
- Added `requirements.txt` to track Python dependencies.
- Set up a GitHub Actions workflow for building and deploying the site.
- Replaced the interface perspective article with **Program to an Interface** and added attribution.
- Cleaned up the documentation by removing the Document‑Driven Development section and unrelated articles.
- Switched the CI workflow to a self-hosted runner.

#### Fixes to Known Issues
- None.

