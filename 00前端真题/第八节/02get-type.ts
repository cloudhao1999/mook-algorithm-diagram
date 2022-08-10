/**
 * @description: 获取变量的类型
 */

/**
 * 获取详细的数据类型
 * @param x 变量
 * @returns 数据类型
 */
export function getType(x: any): string {
    return Object.prototype.toString.call(x).slice(8, -1).toLowerCase();
}

// 功能测试
console.log(getType(1));
console.log(getType(true));
console.log(getType(null));
console.log(getType(undefined));
console.log(getType({}));
console.log(getType([]));
console.log(getType(() => {}));
console.log(getType(new Date()));
console.log(getType(/a/));