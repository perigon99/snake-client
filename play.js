const { connect } = require('./client');
const {handleUserInput, setupInput} = require("./input")


console.log('Connecting ...');
connect();


setupInput(handleUserInput())