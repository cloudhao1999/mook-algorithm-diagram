export function routate1(arr: number[], k: number): number[] {
    const length = arr.length;
    if (!k || length === 0) return arr;
    const step = Math.abs(k) % length;

    // O(n^2)
    for (let i = 0; i < step; i++) {
        const n = arr.pop()
        if (n != null) {
            arr.unshift(n) // 数组是一个有序结构，unshift操作非常慢 O(n)
        }
    }
    return arr;
}

// console.log(routate1([1, 2, 3, 4, 5], 2));

export function routate2(arr: number[], k: number): number[]{
    const length = arr.length;
    if (!k || length === 0) return arr;
    const step = Math.abs(k) % length;

    // O(1)
    const part1 = arr.slice(-step); // slice很快，因为不改变原数组，只是拷贝 O(1)
    const part2 = arr.slice(0, length - step);
    return [...part1, ...part2];
}

// console.log(routate2([1, 2, 3, 4, 5], 2));


// 性能测试
const arr1: number[] = []
for (let i = 0; i < 10 * 10000; i++) {
    arr1.push(i)
}

const arr2: number[] = []
for (let i = 0; i < 10 * 10000; i++) {
    arr2.push(i)
}

// console.time('routate1')
// routate1(arr1, 9 * 10000)
// console.timeEnd('routate1') //1.390s (O(n^2)) 

// console.time('routate2')
// routate2(arr2, 9 * 10000)
// console.timeEnd('routate2') // 0.765ms (O(1))

