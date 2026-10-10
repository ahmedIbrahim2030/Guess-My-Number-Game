# Guess My Number Game

A small browser-based number guessing game built with HTML, CSS, and JavaScript. The player tries to guess a random number between 1 and 20, with a score system and a persisted high score.

## Features

- Random secret number generated on each new round
- Score tracking starting at 20
- Feedback for too high, too low, invalid input, win, and loss
- High score tracking across rounds
- Reset button to start a new game

## How to Run

1. Open the project folder in your browser.
2. Open `index.html` directly in a browser, or serve the folder locally.

Example local server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Project Structure

- `index.html` – game layout
- `style.css` – styling and game presentation
- `script.js` – game logic and event handling

## Gameplay

- Enter a number between 1 and 20
- Click the `Check!` button
- Use the hints to narrow down the correct number
- Click `Again!` to restart the game

## Technologies Used

- HTML5
- CSS3
- JavaScript (DOM manipulation)
