const process = require('process');
const { program } = require('commander');
const { pipeline } = require('stream');

const getReadStream = require('./streams/getReadStream');
const getTransformStream = require('./streams/getTransformStream');
const getWriteStream = require('./streams/getWriteStream');

program
  .requiredOption('-s, --shift <shift>')
  .option('-i, --input <path>')
  .option('-o, --output <path>')
  .requiredOption('-a, --action <action>');

program.parse(process.argv);

const start = async () => {
  const readStream = getReadStream(program.input);
  const transformStream = getTransformStream(program.shift, program.action);
  const writeStream = await getWriteStream(program.output);
  pipeline(readStream, transformStream, writeStream, error => {
    if (error) {
      throw console.error(error.message);
    } else console.log('success');
  });
};

start();
