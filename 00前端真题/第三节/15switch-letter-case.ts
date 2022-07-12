/**
 * @description 切换字母大小写
 */


/**
 * 切换字母大小写（正则）
 * @param str 字符串
 */
export function switchLetterCase1(str: string): string {
    let res = ''

    const length = str.length
    if (length === 0) return res

    const reg1 = /[a-z]/
    const reg2 = /[A-Z]/

    for (let i = 0; i < length; i++) {
        const c = str[i]
        if (reg1.test(c)) {
            res += c.toUpperCase()
        } else if (reg2.test(c)) {
            res += c.toLowerCase()
        } else {
            res += c
        }
    }

    return res
}

/**
 * 切换字母大小写（ASII 编码）
 * @param str 字符串
 */
export function switchLetterCase2(str: string): string {
    let res = ''

    const length = str.length
    if (length === 0) return res

    for (let i = 0; i < length; i++) {
        const c = str[i]
        const code = c.charCodeAt(0)

        if (code >= 65 && code <= 90) {
            res += c.toLowerCase()
        } else if(code >= 97 && code <= 122) {
            res += c.toUpperCase()
        } else {
            res += c
        }
    }

    return res
}

// 功能测试
// const str = '100aBcdxYz'
// console.log(switchLetterCase2(str))

// 性能测试
const str = '100aBcdxYz'.repeat(10)
console.time('switchLetterCase1')
for (let i = 0; i < 10 * 10000; i++) {
    switchLetterCase1(str) // 371.482ms
}
console.timeEnd('switchLetterCase1')

console.time('switchLetterCase2')
for (let i = 0; i < 10 * 10000; i++) {
    switchLetterCase2(str) // 190.801ms
}
console.timeEnd('switchLetterCase2')