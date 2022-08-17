/**
 * @description LRU缓存机制 双向链表
 */

interface IListNode {
    value: any
    key: string // 存储 key，方便删除（否则删除的时候需要遍历）
    prev?: IListNode
    next?: IListNode
}

export default class LRUCache2 {
    private length: number;
    private data: {[key: string]: IListNode} = {};
    private dataLength: number = 0;
    private listHead: IListNode | null = null;
    private listTail: IListNode | null = null;

    constructor(length: number) {
        if (length < 1) {
            throw new Error('length must be greater than 0');
        }
        this.length = length;
    }

    private moveToTail(curNode: IListNode) {
        const tail = this.listTail
        if (tail === curNode) return

        // 1. 让 prevNode nextNode 断绝与 curNode 的关系
        const prevNode = curNode.prev
        const nextNode = curNode.next
        if (prevNode) {
            if (nextNode) {
                prevNode.next = nextNode
            } else {
                delete prevNode.next
            }
        }
        if (nextNode) {
            if (prevNode) {
                nextNode.prev = prevNode
            } else {
                delete nextNode.prev
            }

            if (this.listHead === curNode) {
                this.listHead = nextNode
            }
        }

        // 2. 让 curNode 断绝与 prevNode nextNode 的关系
        delete curNode.prev
        delete curNode.next

        // 3. 在 list 末尾建立 curNode 的关系
        if (tail) {
            tail.next = curNode
            curNode.prev = tail
        }
        this.listTail = curNode
    }

    private tryClean() {
        while(this.dataLength > this.length) {
            const head = this.listHead
            if (head == null) throw new Error('head is null')
            const headNext = head.next
            if (headNext == null) throw new Error('headNext is null')

            // 1. 断绝 head 和 next 的关系
            delete headNext.prev
            delete head.next

            // 2. 重新赋值 listHead
            this.listHead = headNext

            // 3.清理 data
            delete this.data[head.key]

            // 4.重新计数
            this.dataLength--
        }
    }

    get(key: string): any {
        const data = this.data
        const curNode = data[key]

        if (!curNode) return null;
        // 本身就是最新的，不需要操作
        if (this.listTail === curNode) {
            return curNode.value
        }

        // curNode 移动到末尾
        this.moveToTail(curNode)

        return curNode.value
    }

    set(key: string, value: any) {
        const data = this.data
        const curNode = data[key]

        if (curNode == null) {
            // 新增数据
            const newNode: IListNode = {
                key,
                value,
            }
            // 移动到末尾
            this.moveToTail(newNode)

            data[key] = newNode
            this.dataLength++

            if (this.dataLength === 1) {
                this.listHead = newNode
            }
        } else {
            // 修改现有数据
            curNode.value = value
            // 移动到末尾
            this.moveToTail(curNode)
        }

        // 尝试清理长度
        this.tryClean()
    }
}

const cache = new LRUCache2(3);
cache.set('1', 1);
cache.set('2', 2);
cache.set('3', 3);
console.log(cache.get('1'));       // 返回  1
console.log(cache.get('2'));       // 返回  2
console.log(cache.get('3'));       // 返回  3
cache.set('4', 4);    // 该操作会使得 key=1 的数据失效
console.log(cache.get('1'));       // 返回 null (未找到)
console.log(cache.get('2'));       // 返回  2
console.log(cache.get('3'));       // 返回  3
console.log(cache.get('4'));       // 返回  4