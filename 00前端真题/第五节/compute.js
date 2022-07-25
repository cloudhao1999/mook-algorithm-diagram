/**
 * @description 子进程 计算
 */

function getSum() {
    let sum = 0;
    for (let i = 0; i < 10000; i++) {
        sum += i;
    }
    return sum;
}

process.on('message', (data) => {
    console.log('子进程 id', process.pid);
    console.log('子进程收到消息:', data);

    const sum = getSum();
    // 发送消息给主进程
    process.send(sum);
})