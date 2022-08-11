/**
 * @description 遍历 DOM tree
 */

/**
 * 访问节点
 * @param node 节点
 */
function visitNode(node) {
    if (node instanceof Comment) {
        // 注释
        console.log('comment:', node.textContent);
    }
    if (node instanceof Text) {
        // 文本节点
        const t = node.textContent?.trim()
        t && console.log('text:', node.textContent?.trim());
    }
    if (node instanceof HTMLElement) {
        // 元素节点
        console.log('element:', `<${node.tagName.toLowerCase()}>`);
    }
}

/**
 * 深度优先遍历
 * @param root 根节点
 */
function depthFirstTraverse(root) {
    visitNode(root);
    const childNodes = root.childNodes;
    if (childNodes.length) {
        childNodes.forEach(child => depthFirstTraverse(child));
    }
}

/**
 * 深度优先遍历(用栈实现)
 * @param root 根节点
 */
 function depthFirstTraverse2(root) {
    const stack = []

    // 根结点入栈
    stack.push(root);

    while(stack.length > 0) {
        const node = stack.pop();
        visitNode(node);
        const childNodes = node.childNodes;
        if (childNodes.length) {
            // 将子节点倒序推入栈中
            Array.from(childNodes).reverse().forEach(child => stack.push(child));
        }
    }
}

/**
 * 广度优先遍历
 * @param root 根节点
 */
function breadthFirstTraverse(root) {
    const queue = [] // 数组，存储节点

    // 根结点入队
    queue.unshift(root);

    while(queue.length > 0) {
        const node = queue.pop();
        visitNode(node);
        const childNodes = node.childNodes;
        if (childNodes.length) {
            childNodes.forEach(child => queue.unshift(child));
        }
    }
}

const box = document.querySelector('.box');
if (box == null) throw new Error('box not found');  // 检查 box 是否存在
depthFirstTraverse(box);
console.log('======================')
breadthFirstTraverse(box);
console.log('======================')
depthFirstTraverse2(box);