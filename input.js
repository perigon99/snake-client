const net = require('net');

const { on } = require('process');

const setupInput = function(callback) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", (key) => handleUserInput(key))
  
 return stdin;
}


const handleUserInput = (data) => {
  if (data === '\u0003') {
     process.exit();
    }
    if(data === "w") {
      console.log("W key pressed")
    }
    if(data === "a") {
      console.log("A key pressed")
    }
    if(data === "s") {
      console.log("S key pressed")
    }
    if(data === "d") {
      console.log("d key pressed")
    }
  
   
}

module.exports = {handleUserInput, setupInput};