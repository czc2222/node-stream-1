const http = require('http')
const fs = require('fs')
const server = http.createServer()
server.on('request', (request, response) => {
  const stream =
    fs.createReadStream('./big_file.txt')
  stream.pipe(response) // 使用pipe 进行连接传到stream上 stream流处理 减少cpu内存的使用
  stream.pause()
  setTimeout(()=>{
    stream.resume()
  },3000)

})

server.listen(8888)