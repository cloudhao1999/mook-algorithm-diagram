/**
 * 反转单向链表
 */

export interface ILinkListNode {
    value: number;
    next?: ILinkListNode;
}

/**
 * 反转单向链表
 * @param list 要反转的链表
 */
export function reverseLinkList(listNode: ILinkListNode): ILinkListNode {
    // 定义三个指针
    let prevNode: ILinkListNode | undefined = undefined;
    let curNode: ILinkListNode | undefined = undefined;
    let nextNode: ILinkListNode | undefined = listNode;

    // 以nextNode为主，遍历链表
    while(nextNode) {
        // 第一个元素，删掉nextNode的next,防止循环引用
        if (curNode && !prevNode) {
            delete curNode.next;
        }

        // 反转指针
        if (curNode && prevNode) {
            curNode.next = prevNode;
        }

        // 整体向后移动指针
        prevNode = curNode;
        curNode = nextNode;
        nextNode = nextNode?.next;
    }
    // 最后一个到补充：当nextNode为空时，此时curNode尚未设置nextNode，所以需要设置
    curNode!.next = prevNode;
    return curNode!;
}

/**
 * 根据数组创建单向链表
 * @param arr number arr
 */
export function createLinkList(arr: number[]): ILinkListNode{
    const length = arr.length;
    if (length === 0) throw new Error("arr is empty");
    // arr: [100,200,300]
    // { value: 300 }
    // { value: 200, next: { value: 300 } }
    // { value: 100, next: { value: 200, next: { value: 300 } } }

    let curNode: ILinkListNode = {
        value: arr[length - 1]
    }
    if (length === 1) return curNode;
    for (let i = length - 2; i >= 0; i--) {
        curNode = {
            value: arr[i],
            next: curNode
        }
    }

    return curNode;
}

const arr = [100, 200, 300]
const linkList = createLinkList(arr);
console.log('linkList', linkList)
console.log('reverseLinkList', reverseLinkList(linkList).value)