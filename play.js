const net = require('net');
const { connect } = require('./client');
const { on } = require('process');
connect();
console.log('Connecting ...');


/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
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

setupInput(handleUserInput())