/**
 * @description: 手写bind
 */

// @ts-ignore
Function.prototype.customBind = function(context: any, ...bindArgs: any[]) {
    // context 是 bind 传入的 this
    // bindArgs 是 bind 传入的参数

    const self = this; // 当前的函数本身

    return function(...args: any[]) {
        // args 是调用 bind 后的参数
        return self.apply(context, [...bindArgs, ...args]);
    }
}

// 功能测试
function fn(this: any, a: any, b: any, c: any) {
    console.log(this, a, b, c)
    return a + b + c
}
// @ts-ignore
const fn1 = fn.customBind({x: 100}, 10)
console.log(fn1(20, 30)) // 100 1 2 3