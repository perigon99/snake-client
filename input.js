const net = require('net');

const { on } = require('process');

const setupInput = function(callback) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on(callback, (key) => {
    key = key
    if (key === '\u0003') {
    process.exit();
  }
  
    return stdin;
  }) 
}



const handleUserInput = () => {
  return "data"
}

module.exports = {handleUserInput, setupInput};