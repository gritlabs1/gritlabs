# 1. Code Organization Overview

The Pac Man game lives inside `docs/pages/_static/apps/pac_man/` and is structured as a small web app:

- `pac_man.html` – minimal HTML5 page that loads the canvas and score display.
- `pac_man.css` – basic styling for the container, canvas, and score.
- `pac_man.js` – all game logic including rendering, movement, and collision.

The rest of the repo is an MkDocs project, but those files are unrelated to the game implementation.

# 2. Main Functional Areas

## pac_man.html
Creates the canvas and score elements, then pulls in the CSS and JS files.
```html
<canvas id="gameCanvas" width="400" height="400"></canvas>
<script src="pac_man.js"></script>
```

## pac_man.css
Styles the game container and canvas.
```css
.container { max-width: 420px; margin: auto; background: white; }
canvas { background: #000; display: block; margin: 0 auto; }
```

## pac_man.js
Holds the entire game loop and state.
- Defines the grid size, Pac‑Man and ghost objects, score tracking, and wall/dot data.
- Contains draw functions for Pac‑Man, ghosts, walls, and dots.
- Handles keyboard input and moves entities each frame.
- Detects collisions and triggers win/loss conditions.

# 3. Key Game Algorithms & Mechanics

### Wall and Dot Setup
Initializes outer borders and a cross-shaped wall, then populates dots everywhere else.
```javascript
function initWalls() {
  for (let i = 0; i < rows; i++) {
    walls.add(`${i},0`);
    walls.add(`${i},${cols - 1}`);
  }
  for (let j = 0; j < cols; j++) {
    walls.add(`0,${j}`);
    walls.add(`${rows - 1},${j}`);
  }
  for (let i = 5; i < rows - 5; i++) {
    walls.add(`${i},10`);
    walls.add(`10,${i}`);
  }
}
```

### Ghost Movement
Ghosts look at open neighbor cells, sort them by Manhattan distance to Pac‑Man, then usually choose the closest option (70% chance).
```javascript
function moveGhost(g) {
  const options = [];
  [[1,0],[-1,0],[0,1],[0,-1]].forEach(([dx,dy]) => {
    const nx = g.x + dx;
    const ny = g.y + dy;
    if (!walls.has(`${nx},${ny}`)) options.push({dx,dy});
  });
  options.sort((a,b) => (
    Math.abs(pacman.x-(g.x+a.dx))+Math.abs(pacman.y-(g.y+a.dy)) -
    (Math.abs(pacman.x-(g.x+b.dx))+Math.abs(pacman.y-(g.y+b.dy)))
  ));
  const chase = Math.random() < 0.7;
  const choice = chase ? options[0] : options[Math.floor(Math.random()*options.length)];
  g.x += choice.dx;
  g.y += choice.dy;
}
```

### Main Update Loop
Each tick moves Pac‑Man, advances ghosts, checks for dot consumption or collisions, and redraws the board.
```javascript
function update() {
  tryMove(pacman, pacman.dx, pacman.dy);
  pacman.dx = pacman.dy = 0;
  ghosts.forEach(moveGhost);
  dots = dots.filter(d => {
    if (d.x === pacman.x && d.y === pacman.y) {
      score += 10;
      updateScore();
      return false;
    }
    return true;
  });
  if (ghosts.some(g => g.x === pacman.x && g.y === pacman.y)) {
    alert('Game Over!');
    reset();
  }
  if (dots.length === 0) {
    alert('You Win!');
    reset();
  }
}
```

# 4. Notable Patterns or Unique Code

- **Simple Ghost AI** – The `moveGhost` function provides lightweight pursuit behavior by sorting potential moves by distance and introducing randomness. This keeps the code small yet yields unpredictable paths.
- **Grid‑based Collision Checks** – Positions are stored as integer grid coordinates, so walls and dots are managed via string keys like `"x,y"` in a `Set`. This simplifies collision logic without complex geometry.

Overall, the game demonstrates a concise, self-contained implementation suitable for embedding inside the docs site.
