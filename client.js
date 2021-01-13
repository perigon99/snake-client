const { on } = require('process');
const net = require('net');
const {host, port} = require('./constant')


/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: host,
    port: port
  });
  // interpret incoming data as text
  
  conn.setEncoding('utf8');
  conn.on("connect", () => {console.log("Connexion established") }) 
  conn.on("connect", () => {
   // conn.write("Name: max");
    // conn.write("Move: up");
    // setInterval(() => {
    //  conn.write("Move: up"); 
    // }, 150)
    // setInterval(() => {
    //   conn.write("Move: left"); 
    //  }, 160)
    //  setInterval(() => {
    //   conn.write("Move: left"); 
    //  }, 170)
    //  setInterval(() => {
    //   conn.write("Move: down"); 
    //  }, 180)    
  })
  

  return conn;
}

module.exports = {connect};

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)