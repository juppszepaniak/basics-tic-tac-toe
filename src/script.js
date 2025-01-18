const squares = document.querySelectorAll(".square");
const stateDisplay = document.querySelector("#state");
const infoDisplay = document.querySelector("#info");

let counter = 0;
let player = ["X", "O"];
let curPlayer = "X";

let gameStatus = ["", "", "", "", "", "", "", "", ""];

const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

infoDisplay.textContent = "X ist an der Reihe.";
stateDisplay.textContent = "Viel Spaß!";

squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (square.textContent === "") {
      if (curPlayer === "X" || curPlayer === "O") {
        handlePlayerMove(square);
        if (checkWinningCombination()) {
          endGame(`${curPlayer} hat gewonnen!`);
        } else if (checkDraw()) {
          endGame("Das Spiel ist unentschieden!");
        } else {
          switchPlayer();
        }
      }
    }
  });
});

function handlePlayerMove(square) {
  let index;
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === square) {
      index = i;
      break;
    }
  }
  square.textContent = curPlayer;
  gameStatus[index] = curPlayer;
}

function switchPlayer() {
  curPlayer = curPlayer === "X" ? "O" : "X";
  infoDisplay.textContent = `${curPlayer} ist an der Reihe.`;
}

function checkWinningCombination() {
  for (let combination of winningCombination) {
    const [a, b, c] = combination;
    if (gameStatus[a] === curPlayer && gameStatus[b] === curPlayer && gameStatus[c] === curPlayer) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return gameStatus.every((cell) => cell !== "");
}

function endGame(message) {
  curPlayer = null;
  infoDisplay.textContent = "Game Over.";
  stateDisplay.textContent = message;
}

function resetGame() {
  squares.forEach((square) => {
    square.textContent = "";
  });
  gameStatus = ["", "", "", "", "", "", "", "", ""];
  curPlayer = "X";
  counter = 0;
  infoDisplay.textContent = "X ist an der Reihe.";
  stateDisplay.textContent = "Viel Spaß!";
}