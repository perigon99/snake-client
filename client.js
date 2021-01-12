const { on } = require('process');
const net = require('net');



/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  
  conn.setEncoding('utf8');
  conn.on("connect", () => {console.log("Connexion established") }) 
  conn.on("connect", () => {conn.write("Name: max")})
  return conn;
}

module.exports = {connect};