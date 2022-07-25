const http = require('http');
const fork = require('child_process').fork;

const server = http.createServer((req, res) => {
    if (req.url === '/get-sum') {
        console.log('主进程id:', process.pid)

        // 开启子进程
        const computeProcess = fork('./compute.js');
        computeProcess.send('开始计算')

        computeProcess.on('message', (data) => {
            console.log('主进程收到消息:', data)
            res.end(`计算结果: ${data}`)
        })

        computeProcess.on('close', () => {
            console.log('子进程关闭')
            computeProcess.kill()
            res.end('error')
        })

        res.end('hello')
    }
})
server.listen(3001, () => {
    console.log('server is running at 3001')
})