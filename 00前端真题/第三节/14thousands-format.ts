/**
 * @description 千分位格式化
 */


/**
 * 千分位格式化（使用数组）
 * @param n 数字
 */
export function format1(n: number): string {
    n = Math.floor(n) // 去掉小数部分

    const s = n.toString()
    const arr = s.split('').reverse()
    return arr.reduce((prev, val, index) => {
        if (index % 3 === 0) {
            if (prev) {
                return val + ',' + prev
            } else {
                return val
            }
        } else {
            return val + prev
        }
    }, '')
}

/**
 * 数字转换为千分位格式化（字符串）
 * @param n 数字
 */
export function format2(n: number): string {
    n = Math.floor(n) // 去掉小数部分

    let res = ''
    let s = n.toString()
    const length = s.length

    // 10200300 length = 8

    for (let i = length - 1; i >= 0; i--) {
        const j = length - i
        if (j % 3 === 0) {
            if (i === 0) {
                res = s[i] + res
            } else {
                res = ',' + s[i] + res
            }
        } else {
            res = s[i] + res
        }
    }

    return res
}

// 功能测试
const n = 10201004050
console.log(format2(n))