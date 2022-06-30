/**
 * 用链表实现队列
 */

interface IListNode {
    value: number;
    next: IListNode | null;
}

export class MyQueue {
    private head: IListNode | null = null;
    private tail: IListNode | null = null;
    private len: number = 0;

    /**
     * 入队，在tail位置
     * @param number 要入队的数据
     */
    add(number: number) {
        const newNode: IListNode = {
            value: number,
            next: null
        }

        // 处理head
        if (!this.head) {
            this.head = newNode;
        }
        // 处理tail
        const tailNode = this.tail;
        if (tailNode) {
            tailNode.next = newNode;
        }
        this.tail = newNode;

        // 记录长度
        this.len++;
    }

    /**
     * 出队，在head位置
     */
    delete(): number | null {
        const headNode = this.head;
        if (!headNode) {
            return null;
        }
        if (this.len <= 0) {
            return null
        }
        // 取值
        const value = headNode.value;
        // 处理headNode
        this.head = headNode.next;
        // 记录长度
        this.len--;

        return value
    }

    get length(): number {
        // length 要单独存储，不能遍历链表，否则时间复杂度会很高
        return this.len;
    }
}

// const q = new MyQueue();
// q.add(100);
// q.add(200);
// q.add(300);
// console.info(q.length)
// console.info(q.delete())
// console.info(q.length)
// console.info(q.delete())
// console.info(q.length)
// console.info(q.delete())
// console.info(q.length)
// console.info(q.delete())
// console.info(q.length)

// 性能测试
const q = new MyQueue();
console.time('queue with list')
for (let i = 0; i < 100_000; i++) {
    q.add(i);
}
for (let i = 0; i < 100_000; i++) {
    q.delete();
}
console.timeEnd('queue with list')

const q2: number[] = [];
console.time('queue with array')
for (let i = 0; i < 100_000; i++) {
    q2.push(i);
}
for (let i = 0; i < 100_000; i++) {
    q2.shift();
}
console.timeEnd('queue with array')