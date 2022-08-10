/**
 * @description 数组扁平化
 */

/**
 * 数组扁平化，使用push
 * @param arr 数组
 * @returns 扁平化的数组
 */
export function flatten1(arr: Array<any>): Array<any> {
    const res: Array<any> = [];

    arr.forEach(item => {
        if (Array.isArray(item)) {
            res.push(...flatten1(item));
        } else {
            res.push(item);
        }
    })

    return res;
}

/**
 * @description 数组扁平化
 */

/**
 * 数组扁平化，使用concat
 * @param arr 数组
 * @returns 扁平化的数组
 */
 export function flatten2(arr: Array<any>): Array<any> {
    let res: Array<any> = [];

    arr.forEach(item => {
        res = res.concat(Array.isArray(item) ? flatten2(item) : item);
    })
    return res;
}

// 功能测试
const arr = [1,[2,[3],4], 5]
console.log(flatten2(arr));