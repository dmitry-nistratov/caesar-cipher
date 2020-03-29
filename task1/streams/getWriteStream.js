const fs = require('fs');

const writeStream = output => {
  if (output) {
    return new Promise(res => {
      fs.access(output, err => {
        if (err) {
          throw console.error(err.message);
        }
        res(fs.createWriteStream(output, { flags: 'a' }));
      });
    });
  }
  return process.stdout;
};

module.exports = writeStream;
