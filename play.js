const net = require('net');
const { on } = require('process');



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
 
  return conn;
}

console.log('Connecting ...');
connect();