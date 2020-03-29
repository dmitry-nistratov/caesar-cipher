const { Transform } = require('stream');

const cipherCode = require('../utils/cipher');

const transformStream = (shift, action) =>
  new Transform({
    transform(chunk, encoding, callback) {
      this.push(cipherCode(chunk, shift, action));
      callback();
    }
  });

module.exports = transformStream;
