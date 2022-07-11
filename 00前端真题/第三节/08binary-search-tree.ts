/**
 * @description 二叉搜索树 特点：左子树的所有节点值小于根节点的值，右子树的所有节点值大于根节点的值
 */

export interface ITreeNode {
    value: number;
    left: ITreeNode | null;
    right: ITreeNode | null;
}

const arr: number[] = []

/**
 * 二叉树前序遍历
 * @param node 二叉树的根节点
 */
export function preOrderTraverse(node: ITreeNode | null) {
    if (node === null) return
    console.log(node.value);
    arr.push(node.value);
    preOrderTraverse(node.left);
    preOrderTraverse(node.right);
}

/**
 * 寻找二叉搜索树第k小的值
 * @param node 二叉树的根节点
 * @param k 第几个值
 */
export function getKthValue(node: ITreeNode | null, k: number): number | null{
    inOrderTraverse(node);
    // console.log('arr',arr)
    return arr[k-1] || null;
}

/**
 * 二叉树的中序遍历
 * @param node 二叉树的根节点
 */
export function inOrderTraverse(node: ITreeNode | null) {
    if (node === null) return
    inOrderTraverse(node.left);
    // console.log(node.value);
    arr.push(node.value);
    inOrderTraverse(node.right);
}

/**
 * 二叉树的后序遍历
 * @param node 二叉树的根节点
 */
 export function postOrderTraverse(node: ITreeNode | null) {
    if (node === null) return
    postOrderTraverse(node.left);
    postOrderTraverse(node.right);
    console.log(node.value);
    arr.push(node.value);
}

const bst: ITreeNode = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null
        },
    },
    right: {
        value: 7,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 8,
            left: null,
            right: null
        }
    }
}

// postOrderTraverse(bst)
console.log(getKthValue(bst, 3));