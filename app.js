// PLAN

// Ask P1 for xy board coords
// Place a 1 at the coords
// Check if any winners
// Repeat for P2
// Repeat until all moves made or winner

// EDGE CASES
// Invalid xy coords input (NaN, out of bounds, already a piece)
// No more moves available

const prompt = require('prompt');
prompt.start();

let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

let currentPlayer = 1;

const askMove = () => {
  prompt.get(['P1moveX', 'P1moveY'], (err, result) => {
    console.log(result.P1moveX, result.P1moveY);
  });
};

const placePiece = (x, y, player) => {
  // take user input and put piece
};

const printBoard = () => {
  console.log('\n\nThe board is now ');
  board.forEach(row => console.log(row));
};

const detectWinner = (board) => {
  // check the board for a winner
};

const togglePlayer = () => {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
};

// askMove();
printBoard();
