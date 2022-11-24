const player = (name, symbol) => {
  return { name, symbol };
};

const board = () => {
  return ["", "", "", "", "", "", "", "", ""];
};

const playerOne = player("Player 1", "X");
const playerTwo = player("Player 2", "O");

var symbol = playerOne.symbol;

function mark(e) {
  e.innerHTML = symbol;

  if (this.symbol === playerOne.symbol) {
    this.symbol = playerTwo.symbol;
  } else this.symbol = playerOne.symbol;
}

console.log(symbol);
