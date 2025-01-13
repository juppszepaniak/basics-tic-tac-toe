const board = document.getElementsByClassName("board");
const squares = document.getElementsByClassName("square");
const stateDisplay = document.querySelector("#state");
const infoDisplay = document.querySelector("#info");

const players = ["X", "O"];
let curPlayer = "X";

const startCells = [["", "", "", "", "", "", "", "", ""]];

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

infoDisplay.textContent = "X ... ist an der Reihe.";
stateDisplay.textContent = "Das Spiel beginnt mit dem ersten Zug von X...";

function checkUserOption() {
  console.log("The id of the element you clicked: " + squares.id);
}

function resetGame() {}
