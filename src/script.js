const squares = document.querySelectorAll(".square");
const stateDisplay = document.querySelector("#state");
const infoDisplay = document.querySelector("#info");

let counter = 0;
let curPlayer = "X";

let gameStatus = [["", "", "", "", "", "", "", "", ""]];

const winningCombination = [
  [1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 1, 0, 1, 0, 0],
];

infoDisplay.textContent = "X ist an der Reihe.";
stateDisplay.textContent = "Das Spiel beginnt mit dem ersten Zug von X...";

squares.forEach((square) => {
  square.addEventListener("click", () => {
    // Überprüfe, ob die Kachel schon belegt ist
    if (!square.textContent && curPlayer === "X") {
      square.textContent = "X";
      curPlayer = "O";
      infoDisplay.textContent = "O ist an der Reihe.";
      checkWinningCombination();
    } else if (!square.textContent && curPlayer === "O") {
      square.textContent = "O";
      curPlayer = "X";
      infoDisplay.textContent = "X ist an der Reihe.";
      checkWinningCombination();
    }
    counter++;
    console.log(counter);
  });
});

function checkWinningCombination() {
  if (winningCombination == gameStatus && curPlayer === "X" && counter === 8) {
    infoDisplay.textContent = "Game Over.";
    stateDisplay.textContent = "X hat gewonnen.";
  } else if (winningCombination == gameStatus && curPlayer === "O" && counter === 8) {
    infoDisplay.textContent = "Game Over.";
    stateDisplay.textContent = "O hat gewonnen.";
  }
}

function resetGame() {
  squares.forEach((square) => {
    square.textContent = "";
    curPlayer = "X";
    infoDisplay.textContent = "X ist an der Reihe.";
  });
}
