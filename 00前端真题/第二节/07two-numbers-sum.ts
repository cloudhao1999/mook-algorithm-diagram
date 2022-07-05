/**
 * @description 两数之和
 */

/**
 * 寻找两数之和
 * @param arr 数组
 * @param n 两数之和
 * @returns 数组
 */
export function findTwoNumbers1(arr: number[], n: number): number[] {
    const res: number[] = [];
    const length = arr.length;
    if(length === 0) return res;

    // O(n^2)
    for(let i = 0; i < length - 1; i++) {
        const n1 = arr[i];
        let flag = false; //记录是否得到了结果

        for (let j = i + 1; j < length; j++) {
            const n2 = arr[j];
            if (n1 + n2 === n) {
                res.push(n1);
                res.push(n2);
                flag = true;
                break;
            }
        }

        if (flag) {
            break;
        }
    }

    return res
}

/**
 * 查找和为n的两个数（双指针）
 * @param arr 数组
 * @param n 数组的合
 */
export function findTwoNumbers2(arr: number[], n: number): number[] {
    const res : number[] = []

    const length = arr.length
    if (length === 0) return res

    let i = 0 // 头
    let j = length - 1 // 尾

    // O(n)
    while(i < j) {
        const n1 = arr[i]
        const n2 = arr[j]
        const sum = n1 + n2

        if (sum === n) {
            res.push(n1)
            res.push(n2)
            break
        } else if (sum < n) { // sum 小于 n，向右移动 i
            i++
        } else {
            // sum 大于 n, 则 j 要向前移动
            j--
        }
    }

    return res;
}

// 功能测试
const arr = [1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,21,24,7,11,15];
// console.log(findTwoNumbers2(arr, 15));

console.time("findTwoNumbers1") // 163.641ms
for (let i = 0; i < 1000000; i++) {
    findTwoNumbers1(arr, 15)
}
console.timeEnd("findTwoNumbers1")

console.time("findTwoNumbers2") // 26.355ms
for (let i = 0; i < 1000000; i++) {
    findTwoNumbers2(arr, 15)
}
console.timeEnd("findTwoNumbers2")

// 时间复杂度达到 O(n^2)，是不可用的算法
// 凡有序，必二分
// 优化嵌套循环，可以考虑使用双指针