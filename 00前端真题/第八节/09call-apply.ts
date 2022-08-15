/**
 * @descripiton: 自定义 call apply
 */

// @ts-ignore
Function.prototype.customCall = function (context: any, ...args: any[]) {
    if (context == null) {
        context = globalThis
    }
    if (typeof context !== 'object') {
        context = new Object(context)
    }

    const fnKey = Symbol() // 不会出现属性名冲突的情况
    context[fnKey] = this // this 就是当前的函数

    const result = context[fnKey](...args) // 绑定了 this
    delete context[fnKey] // 清理掉 fn, 防止污染

    return result
}

// @ts-ignore
Function.prototype.customApply = function (context: any, args: any[] = []) {
    if (context == null) {
        context = globalThis
    }
    if (typeof context !== 'object') {
        context = new Object(context)
    }

    const fnKey = Symbol() // 不会出现属性名冲突的情况
    context[fnKey] = this // this 就是当前的函数

    const result = context[fnKey](...args) // 绑定了 this
    delete context[fnKey] // 清理掉 fn, 防止污染

    return result
}

function fn2(this: any, a: any, b: any, c: any) {
    console.log(JSON.stringify(this), a, b, c)
    return a + b + c
}
// @ts-ignore
fn2.customCall({x: 100}, 10, 20, 30) // 100 10 20 30
// @ts-ignore
fn2.customApply({x: 100}, [10, 20, 30]) // 100 10 20 30