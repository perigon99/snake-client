const net = require('net');

const { on } = require('process');

// Stores the active TCP connection object.

let connection; 

const setupInput = function(conn) {
  connection = conn
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", (key) => handleUserInput(key, connection))
  
 
 return stdin
}


const handleUserInput = (data, conn) => {
  if (data === '\u0003') {
     process.exit();
    }
    if(data === "w") {
      conn.write = "Move: up"
        
     };
      
    
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