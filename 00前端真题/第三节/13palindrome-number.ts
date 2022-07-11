/**
 * @description 对称数
 */

/**
 * 查询1到Max的对称数
 * @param max 最大值
 * @returns 数组
 */
export function findPalindromeNumbers1(max: number): number[] {
    const res: number[] = [];
    if (max <= 0) return res;

    for(let i = 1; i<=max; i++) {
        // 转换为字符串，转换为数组，再反转，比较
        const s = i.toString();
        if (s === s.split('').reverse().join('')) {
            res.push(i);
        }
    }

    return res;
}

/**
 * 查询1到Max的对称数（字符串前后比较）
 * @param max 最大值
 * @returns 数组
 */
 export function findPalindromeNumbers2(max: number): number[] {
    const res: number[] = [];
    if (max <= 0) return res;

    for(let i = 1; i <= max; i++) {
        const s = i.toString()
        const length = s.length

        // 字符串头尾比较
        let flag = true;
        let startIndex = 0; // 字符串开始
        let endIndex = length - 1; // 字符串结束

        while (startIndex < endIndex) {
            if (s[startIndex] !== s[endIndex]) {
                flag = false;
                break;
            } else {
                startIndex++;
                endIndex--;
            }
        }

        if (flag) {
            res.push(i)
        }
    }

    return res;
}

/**
 * 查询1到Max的对称数（翻转数字）
 * @param max 最大值
 * @returns 数组
 */
 export function findPalindromeNumbers3(max: number): number[] {
    const res: number[] = [];
    if (max <= 0) return res;

    for(let i = 1; i <= max; i++) {
        let n = i;
        let rev = 0; // 存储反转数

        // i:123
        // n: 123

        // 生成反转数
        while(n > 0) {
            rev = rev * 10 + n % 10;  // rev: 3 32 321
            n = Math.floor(n / 10); // n: 12 1 0
        }

        // n: 0
        // rev: 321

        if (i === rev) res.push(i);
    }

    return res;
}

// 功能测试
console.log(findPalindromeNumbers3(200));

// 性能测试
console.time("findPalindromeNumbers1")
findPalindromeNumbers1(100 * 10000) // 170.282ms
console.timeEnd("findPalindromeNumbers1")

console.time("findPalindromeNumbers2")
findPalindromeNumbers2(100 * 10000) // 24.764ms
console.timeEnd("findPalindromeNumbers2")

console.time("findPalindromeNumbers3")
findPalindromeNumbers3(100 * 10000) // 11.701ms
console.timeEnd("findPalindromeNumbers3")