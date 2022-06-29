/**
 * 两个栈模拟一个队列
 */

export class MyQueue {
    private stack1: number[] = [];
    private stack2: number[] = [];

    /**
     * 入队
     * @param n 要入队的数据
     */
    add(n: number) {
        this.stack1.push(n);
    }

    /**
     * 出队
     */
    delete(): number | null {
        let res

        const stack1 = this.stack1
        const stack2 = this.stack2

        // 将 stack1 所有元素移动到 stack2 中
        while( stack1.length ) {
            const n = stack1.pop()
            if (n !== null) {
                stack2.push(n!)
            }
        }

        // stack2 pop
        res = stack2.pop()
        // stack2 再移动到 stack1 中
        while( stack2.length ) {
            const n = stack2.pop()
            if (n !== null) {
                stack1.push(n!)
            }
        }

        return res || null
    }

    get length(): number {
        return this.stack1.length;
    }
}

// 功能测试
const a = new MyQueue();
a.add(1);
a.add(2);
a.add(3);
console.log('a.length 1',a.length)
console.log('a.delete()', a.delete())
console.log('a.length 2',a.length)


