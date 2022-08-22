/**
 * @description tree to array
 */

interface IArrayItem {
    id: number;
    name: string;
    parentId: number;
}

interface ITreeNode {
    id: number;
    name: string;
    children?: ITreeNode[];
}

function convert1(root: ITreeNode): IArrayItem[] {
    // Map
    const nodeToParent: Map<ITreeNode, ITreeNode> = new Map();

    const arr: IArrayItem[] = [];

    // 广度优先遍历，queue
    const queue: ITreeNode[] = []; // 数组
    queue.unshift(root); // 根结点入队

    while (queue.length > 0) {
        const curNode = queue.pop(); // 出队
        if (curNode == null) break;

        const { id, name, children = [] } = curNode

        // 创建数组 item 并 push
        const parentNode = nodeToParent.get(curNode)
        const parentId = parentNode ? parentNode.id : 0
        const item: IArrayItem = { id, name, parentId }
        arr.push(item)

        // 子节点入队
        children.forEach(child => {
            // 映射 parent
            nodeToParent.set(child, curNode)

            // 入队
            queue.unshift(child)
        })
    }

    return arr;
}

const obj = {
    id: 1,
    name: '1',
    children: [
        {
            id: 2,
            name: '2',
            children: [
                {
                    id: 3,
                    name: '3',
                },
                {
                    id: 4,
                    name: '4',
                }
            ]
        },
        {
            id: 5,
            name: '5',
            children: [
                {
                    id: 6,
                    name: '6',
                }
            ]
        }
    ]
}

const arr1 = convert1(obj)
console.log(arr1)