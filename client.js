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
  let inputKey = ""
  conn.setEncoding('utf8');
  conn.on("connect", () => {console.log("Connexion established") }) 
  conn.on("connect", () => {
    conn.write("Name: max");   
  })
  

  return conn;
}

module.exports = {connect};
