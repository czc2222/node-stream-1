const fs = require("fs");
const zlib = require("zlib");
const file = process.argv[2]; //客户进行传文件
const crypto = require("crypto");


const { Transform } = require("stream");

const reportProgress = new Transform({
  transform(chunk, encoding, callback) {
    process.stdout.write(".");
    callback(null, chunk);
  }
});


fs.createReadStream(file)
  .pipe(crypto.createCipher("aes192", "123456") //加密
  .pipe(zlib.createGzip()) //压缩
  .pipe(reportProgress) //对数据进行处理
  .pipe(fs.createWriteStream(file + ".gz"))
  .on("finish", () => console.log("Done")));
