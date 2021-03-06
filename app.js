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
let isNextTurnAvailable = true;

const togglePlayer = () => {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
};

const printBoard = () => {
  console.log('\n\nThe board is now ');
  board.forEach(row => console.log(row));
};

const placePiece = (x, y, playerNum) => {
  board[y][x] = playerNum;
  togglePlayer();
  printBoard();
};

const askMove = (playerNum) => {
  console.log(`Player ${playerNum}, where do you want to go? (x, y) coordinates`);
  prompt.get(['X', 'Y'], (err, result) => {
    // check valid entries
    // if valid, save move to the board
    placePiece(Number(result.X), Number(result.Y), playerNum);
    askMove(currentPlayer);
  });
};

const detectWinner = (board) => {
  // check the board for a winner
};

// printBoard();
askMove(currentPlayer);
