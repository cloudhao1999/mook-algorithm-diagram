/**
 * @description: array to tree
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

function convert(arr: IArrayItem[]): ITreeNode | null {
    // 用于 id 和 treeNode 的映射
    const idToTreeNode: Map<number, ITreeNode> = new Map();

    let root: ITreeNode | null = null; ;

    arr.forEach(item => {
        const { id, name, parentId } = item

        // 定义 treeNode 并加入map
        const treeNode: ITreeNode = { id, name }
        idToTreeNode.set(id, treeNode)

        // 找到 parentNode 并加入到 children
        const parentNode = idToTreeNode.get(parentId)
        if (parentNode) {
            if (!parentNode.children) {
                parentNode.children = []
            }
            parentNode.children.push(treeNode)
        }

        // 找到根节点
        if (parentId === 0) {
            root = treeNode
        }
    })

    return root;
}

const arr: IArrayItem[] = [
    { id: 1, name: '1', parentId: 0 },
    { id: 2, name: '2', parentId: 1 },
    { id: 3, name: '3', parentId: 1 },
    { id: 4, name: '4', parentId: 1 },
    { id: 5, name: '5', parentId: 2 },
    { id: 6, name: '6', parentId: 2 },
    { id: 7, name: '7', parentId: 3 },
]

const tree = convert(arr)
console.log(tree)