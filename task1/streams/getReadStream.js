const fs = require('fs');

const readStream = input =>
  input ? fs.createReadStream(input) : process.stdin;

module.exports = readStream;
