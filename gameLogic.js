const player = (name, symbol) => {
  return { name, symbol };
};

const gameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];
  return { board };
})();

const playerOne = player("Player 1", "X");
const playerTwo = player("Player 2", "O");

var symbol = playerOne.symbol;

var { board } = gameBoard;

var { resetBoard } = gameBoard;

function mark(e) {
  e.innerHTML = this.symbol;

  this.board[parseInt(e.id)] = this.symbol;

  playerTurn(this.symbol);

  winCheck(this.board, this.symbol);
}

function playerTurn(symbol) {
  if (this.symbol === playerOne.symbol) {
    this.symbol = playerTwo.symbol;
  } else this.symbol = playerOne.symbol;
}

function winCheck(board, symbol) {
  if (board[0] === board[1] && board[1] === board[2] && board[0] !== "") {
    winMessage(symbol);
    reset(board, symbol);
  } else if (
    board[3] === board[4] &&
    board[4] === board[5] &&
    board[3] !== ""
  ) {
    winMessage(symbol);
    reset(board, symbol);
  } else if (
    board[6] === board[7] &&
    board[7] === board[8] &&
    board[6] !== ""
  ) {
    winMessage(symbol);
    reset(board, symbol);
  } else if (
    board[0] === board[3] &&
    board[3] === board[6] &&
    board[0] !== ""
  ) {
    winMessage(symbol);
    reset(board, symbol);
  } else if (
    board[1] === board[4] &&
    board[4] === board[7] &&
    board[1] !== ""
  ) {
    winMessage(symbol);
    reset(board, symbol);
  } else if (
    board[2] === board[5] &&
    board[5] === board[8] &&
    board[2] !== ""
  ) {
    winMessage(symbol);
    reset(board, symbol);
  } else if (
    board[0] === board[4] &&
    board[4] === board[8] &&
    board[0] !== ""
  ) {
    winMessage(symbol);
    reset(board, symbol);
  } else if (
    board[2] === board[4] &&
    board[4] === board[6] &&
    board[2] !== ""
  ) {
    winMessage(symbol);
    reset(board, symbol);
  } else if (
    board[0] !== "" &&
    board[1] !== "" &&
    board[2] !== "" &&
    board[3] !== "" &&
    board[4] !== "" &&
    board[5] !== "" &&
    board[6] !== "" &&
    board[7] !== "" &&
    board[8] !== ""
  ) {
    alert("Draw");
    reset(board, symbol);
  }
}

function winMessage(symbol) {
  if (symbol === "X") {
    alert("Player Two won!");
  } else alert("Player One won!");
}

function reset(board, symbol) {
  clearArray(board);
  symbol = playerOne.symbol;

  console.log(board);
  console.log(symbol);

  const field = document.getElementById("board");
  for (const child of field.children) {
    child.replaceChildren();
  }
}

function clearArray(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = "";
  }
}
