// PLAN
// Draw to command line
//

const prompt = require('prompt');
prompt.start();

let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

const askMove = function () {
  prompt.get(['P1moveX', 'P1moveY'], (err, result) => {
    console.log(result.P1moveX, result.P1moveY);
  });
};

askMove();
