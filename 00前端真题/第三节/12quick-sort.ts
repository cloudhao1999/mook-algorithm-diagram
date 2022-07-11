/**
 * @description 快速排序
 */

/**
 * 快速排序（使用 splice）
 * @param arr 数组
 */
export function quickSort1(arr: number[]): number[] {
    const length = arr.length;
    if (length === 0) return arr;

    const midIndex = Math.floor(length / 2);
    const midValue = arr.splice(midIndex, 1)[0];

    const left: number[] = [];
    const right: number[] = [];

    // 注意：这里不能用 for 循环，因为 arr.length 可能会变化
    // O(n*logn)
    for (let i = 0; i < arr.length; i++) {
        const n = arr[i];
        // O(logn)
        if (n < midValue) {
            // 小于midValue，放到左边
            left.push(n);
        } else {
            // 大于midValue，放到右边
            right.push(n);
        }
    }

    return [...quickSort1(left),midValue,...quickSort1(right)];
}

/**
 * 快速排序（使用 slice）
 * @param arr 数组
 */
 export function quickSort2(arr: number[]): number[] {
    const length = arr.length;
    if (length === 0) return arr;

    const midIndex = Math.floor(length / 2);
    const midValue = arr.slice(midIndex, midIndex + 1)[0];

    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < length; i++) {
        if (i !== midIndex) {
            const n = arr[i];
            if (n < midValue) {
                // 小于midValue，放到左边
                left.push(n);
            } else {
                // 大于midValue，放到右边
                right.push(n);
            }
        }
    }

    return [...quickSort2(left),midValue,...quickSort2(right)];
}

// 功能测试
// const arr1 = [1, 6, 2, 7, 3, 8, 4, 9, 5]
// console.log('quickSort2', quickSort2(arr1))

// 性能测试
const arr1: number[] = []
for (let i = 0; i < 10 * 10000; i++) {
    arr1.push(Math.floor(Math.random() * 1000));
}
console.time("quickSort1")
quickSort1(arr1) // 59.259ms
console.timeEnd("quickSort1")

const arr2: number[] = []
for (let i = 0; i < 10 * 10000; i++) {
    arr2.push(Math.floor(Math.random() * 1000));
}
console.time("quickSort2")
quickSort2(arr2) // 54.298ms
console.timeEnd("quickSort2")