const squares = document.querySelectorAll(".square");
const stateDisplay = document.querySelector("#state");
const infoDisplay = document.querySelector("#info");

let counter = 0;
let player = ["X", "O"];
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
  [0, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 1, 0, 1, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1],
  [0, 1, 1, 1, 0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0, 1, 0, 1, 1],
];

infoDisplay.textContent = "X ist an der Reihe.";
stateDisplay.textContent = "Das Spiel beginnt mit dem ersten Zug von X...";

squares.forEach((square) => {
  square.addEventListener("click", (event) => {
    if (!square.textContent && curPlayer === "X") {
      setupPlayground(square);
      safeUserInput(event)
      checkWinningCombination();
    } else if (!square.textContent && curPlayer === "O") {
      setupPlayground(square);
      safeUserInput(event)
      checkWinningCombination();
    }
    counter++;
    console.log(counter);
  });
});

function setupPlayground(square) {
  if (curPlayer === "X") {
    square.textContent = player[0];
    curPlayer = "O";
    infoDisplay.textContent = "O ist an der Reihe.";
  } else if (curPlayer === "O") {
    square.textContent = player[1];
    curPlayer = "X";
    infoDisplay.textContent = "X ist an der Reihe.";
  }
}

function safeUserInput(event) {
  const userInput = event.target.id;
  let lastInput = userInput;

  if (lastInput === "aOne") {
    gameStatus[0] = curPlayer === "X" ? "1" : "0";
  } else if (lastInput === "aTwo") {
    gameStatus[1] = curPlayer === "X" ? "1" : "0";
  } else if (lastInput === "aThree") {
    gameStatus[2] = curPlayer === "X" ? "1" : "0";
  } else if (lastInput === "bOne") {
    gameStatus[3] = curPlayer === "X" ? "1" : "0";
  } else if (lastInput === "bTwo") {
    gameStatus[4] = curPlayer === "X" ? "1" : "0";
  } else if (lastInput === "bThree") {
    gameStatus[5] = curPlayer === "X" ? "1" : "0";
  } else if (lastInput === "cOne") {
    gameStatus[6] = curPlayer === "X" ? "1" : "0";
  } else if (lastInput === "cTwo") {
    gameStatus[7] = curPlayer === "X" ? "1" : "0";
  } else if (lastInput === "cThree") {
    gameStatus[8] = curPlayer === "X" ? "1" : "0";
  }
 console.log(gameStatus);
}

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
  gameStatus = [["", "", "", "", "", "", "", "", ""]];
}