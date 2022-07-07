/**
 * @description 移动 0 到数组末尾
 */

/**
 * 移动 0 到数组末尾（嵌套循环）
 * @param arr 数组
 */
export function moveZero1(arr: number[]): void {
    const length = arr.length;
    if (length === 0) return;

    let zeroLength = 0;
    for (let i = 0; i < length - zeroLength; i++) {
        if (arr[i] === 0) {
            arr.push(0);
            arr.splice(i, 1); // 本身就有 O(n)
            i--; // 数组截取了一个元素, i 要递减，否则连续的0会有错误
            zeroLength++; // 累加 0 的长度
        }
    }
}

/**
 * 移动 0 到数组末尾（双指针）
 * @param arr 数组
 */
export function moveZero2(arr: number[]): void {
    const length = arr.length;
    if (length === 0) return

    let i;
    let j = -1; // 指向第一个0

    for (i = 0; i < length; i++) {
        if (arr[i] === 0) {
            // 第一个 0
            if (j < 0) {
                j = i;
            }
        }

        if (arr[i] !== 0 && j >= 0) {
            // 交换
            const n = arr[i]
            arr[i] = arr[j]
            arr[j] = n

            j++
        }
    }
}

// 功能测试
// const arr = [1, 0, 3, 4, 0, 0, 11, 0]
// moveZero2(arr)
// console.log('arr', arr)

const arr1: number[] = []
for (let i = 0; i < 20 * 10000; i++) {
    if ( i % 10 === 0 ) {
        arr1.push(0);
    } else {
        arr1.push(i);
    }
}
console.time('moveZero1')
moveZero1(arr1) // 343.629ms
console.timeEnd('moveZero1')

const arr2: number[] = []
for (let i = 0; i < 20 * 10000; i++) {
    if ( i % 10 === 0 ) {
        arr2.push(0);
    } else {
        arr2.push(i);
    }
}

console.time('moveZero2')
moveZero2(arr2) // 1.607ms
console.timeEnd('moveZero2')