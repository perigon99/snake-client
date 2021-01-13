const net = require('net');
const {move, message} = require('./constant')
const { on } = require('process');

// Stores the active TCP connection object.

let connection; 

const setupInput = function(conn) {
  connection = conn
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput)
  
 
 return stdin
}


const handleUserInput = (data) => {
  if (data === '\u0003') {
     process.exit();
    }
    if(data === "w") {
      connection.write(move.up)       
     };
    if(data === "a") {
      connection.write(move.left) 
    }
    if(data === "s") {
      connection.write(move.down) 
    }
    if(data === "d") {
      connection.write(move.right) 
    }  
    if(data === "q") {
      connection.write(message.hi) 
    } 
    if(data === "e") {
      connection.write(message.win) 
    } 
    if(data === "z") {
      connection.write(message.loose) 
    } 
}

module.exports = {handleUserInput, setupInput};