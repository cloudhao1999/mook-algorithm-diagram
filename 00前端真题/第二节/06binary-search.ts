/**
 * @ description: 二分查找
 */

/**
 * 二分查找（循环）
 * @param arr 数组
 * @param target 对象
 */
export function binarySearch(arr: number[], target: number): number {
    const length = arr.length;
    if (length === 0) return -1
    
    let startIndex = 0; //开始位置
    let endIndex = length - 1; //结束位置

    while (startIndex <= endIndex) {
        const midIndex = Math.floor((startIndex + endIndex) / 2)
        const midValue = arr[midIndex]
        if (midValue === target) {
            return midIndex
        } else if (midValue > target) { // 目标值较小，则继续在左侧查找
            endIndex = midIndex - 1
        } else { // 目标值较大，则继续在右侧查找
            startIndex = midIndex + 1
        }
    }

    return -1
    
}

/**
 * 二分查找zhao（递归）
 * @param arr 数组
 * @param target 对象
 * @param startIndex 左侧标志
 * @param endIndex 右侧标志
 * @returns 找到的下标
 */
export function binarySearch2(arr: number[], target: number, startIndex?: number, endIndex?: number): number {
    const length = arr.length
    if (length === 0) return -1

    // 开始和结束的范围
    if (startIndex == null) startIndex = 0
    if (endIndex == null) endIndex = length - 1
    
    if (startIndex > endIndex) return -1
    // 中间位置
    const midIndex = Math.floor((startIndex + endIndex) / 2)
    const midValue = arr[midIndex]

    if (midValue === target) {
        return midIndex
    } else if (midValue > target) { // 目标值较小，则继续在左侧查找
        return binarySearch2(arr, target, startIndex, midIndex - 1)
    } else { // 目标值较大，则继续在右侧查找
        return binarySearch2(arr, target, midIndex + 1, endIndex)
    }
}

// 功能测试
const arr = [10, 20, 30, 40, 50, 60]
const target = 20;
const index = binarySearch2(arr, target);
console.log('index',index)

// 性能测试
console.time('binarySearch')
for (let i = 0; i < 10 * 1000000; i++) {
    binarySearch(arr, target)
}
console.timeEnd('binarySearch') // 64.822ms

console.time('binarySearch2')
for (let i = 0; i < 10 * 1000000; i++) {
    binarySearch2(arr, target)
}
console.timeEnd('binarySearch2') // 165.923ms