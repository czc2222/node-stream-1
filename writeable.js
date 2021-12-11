const { Writable } = require("stream");

const outStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});

process.stdin.pipe(outStream); //process.stdin 用户输入的stream
//下面代码 等同与 pipe
// process.stdin.on('data', (chunk)=>{
//   outStream.write(chunk)
// })