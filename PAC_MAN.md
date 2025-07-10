# 1. Code Organization Overview

The Pac‑Man game resides in **`docs/pages/_static/apps/pac_man/`** and consists of three files:

| File | Purpose |
| ---- | ------- |
| `pac_man.html` | HTML structure of the game UI |
| `pac_man.css` | Styles for the canvas and surrounding container |
| `pac_man.js` | All gameplay logic and state management |

This folder-based approach keeps assets together and isolates them from the rest of the MkDocs project. The JavaScript file handles everything from rendering to input, while the HTML and CSS simply present the canvas and controls.

# 2. Main Functional Areas

## pac_man.html
Minimal HTML that loads the canvas, score, and new‑game button.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pac Man App</title>
    <link rel="stylesheet" href="pac_man.css">
</head>
<body>
    <div class="container">
        <h1 id="gameTitle">Pac-Man</h1>
        <div id="score">Score: 0</div>
        <div class="game-wrapper">
            <canvas id="gameCanvas"></canvas>
        </div>
        <button id="newGameBtn">New Game</button>
    </div>
    <script src="pac_man.js"></script>
</body>
</html>
```

## pac_man.css
Provides responsive layout and basic styling.

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 20px;
}
.container {
    max-width: 420px;
    margin: auto;
    background: white;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    text-align: center;
}
```

## pac_man.js
Holds the entire game state, rendering functions, input handling, and main loop. Key sections include:
- **Level parsing:** Converts a text map into wall and dot positions.
- **Movement logic:** Updates Pac‑Man and ghost positions while checking walls.
- **Collision detection:** Determines dot collection, ghost collisions, and win/lose conditions.
- **Game loop:** `setInterval` repeatedly calls `update()` and `draw()`.

```javascript
const levelMap = [
    "1111111111111111111111111111",
    "1............11............1",
    "1.1111.11111.11.11111.1111.1",
    // ...map rows trimmed...
    "1111111111111111111111111111"
];

function tryMove(entity, dx, dy) {
    const nx = entity.x + dx;
    const ny = entity.y + dy;
    if (!walls.has(`${nx},${ny}`)) {
        entity.x = nx;
        entity.y = ny;
    }
}
```

# 3. Key Game Algorithms & Mechanics

### Ghost Movement
Each ghost picks a valid neighboring cell and usually heads toward Pac‑Man by sorting options by Manhattan distance. A random choice is occasionally taken for variety.

```javascript
function moveGhost(g) {
    if (g.homeTimer > 0) { g.homeTimer--; return; }
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    const options = dirs.filter(([dx,dy]) => !walls.has(`${g.x+dx},${g.y+dy}`));
    if (options.length === 0) return;
    options.sort((a,b) =>
        Math.abs(pacman.x-(g.x+a[0])) + Math.abs(pacman.y-(g.y+a[1])) -
        (Math.abs(pacman.x-(g.x+b[0])) + Math.abs(pacman.y-(g.y+b[1]))));
    const [dx,dy] = Math.random() < 0.7 ? options[0] : options[Math.floor(Math.random()*options.length)];
    g.x += dx; g.y += dy;
}
```

### Main Update Loop
Moves Pac‑Man, advances ghosts, handles dot and power‑dot collection, and checks game‑over or win states.

```javascript
function update() {
    tryMove(pacman, pacman.dx, pacman.dy);
    pacman.dx = pacman.dy = 0;
    ghosts.forEach(moveGhost);
    dots = dots.filter(d => {
        if (d.x === pacman.x && d.y === pacman.y) {
            score += 10;
            return false;
        }
        return true;
    });
    powerDots = powerDots.filter(d => {
        if (d.x === pacman.x && d.y === pacman.y) {
            score += 50;
            return false;
        }
        return true;
    });
    updateScore();
    if (ghosts.some(g => g.x === pacman.x && g.y === pacman.y)) {
        alert('Game Over!');
        startGame();
    }
    if (dots.length === 0 && powerDots.length === 0) {
        alert('You Win!');
        startGame();
    }
}
```

# 4. Notable Patterns or Unique Code

- **Grid‑based state:** The maze layout and positions are integers on a grid, with walls stored in a `Set` of `"x,y"` keys. This simplifies collision checks.
- **Responsive scaling:** `resizeCanvas()` resizes the canvas based on container width, keeping the aspect ratio consistent on different screens.
- **Touch support:** `handleTouchStart` and `handleTouchEnd` allow swipe gestures on mobile devices.

```javascript
function handleTouchEnd(e) {
    const t = e.changedTouches[0];
    const dx = t.clientX - startX;
    const dy = t.clientY - startY;
    if (Math.abs(dx) > Math.abs(dy)) {
        pacman.dx = dx > 0 ? 1 : -1;
        pacman.dy = 0;
    } else {
        pacman.dy = dy > 0 ? 1 : -1;
        pacman.dx = 0;
    }
}
```
