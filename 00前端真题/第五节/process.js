// console.info(process.pid)

const http = require('http');

const server = http.createServer()
server.listen(3000, () => {
    console.log('server is running at 3000')
})

console.log(process.pid)

// WebWorker 进程
// fork
// cluster 进程