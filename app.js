// PLAN
// Draw to command line
//

const prompt = require('prompt');
prompt.start();

function askMove() {
  prompt.get('P1move', (err, result) => {
    console.log(result.P1move);
  });
}

askMove();
