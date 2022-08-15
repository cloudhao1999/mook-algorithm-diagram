/**
 * @description curry add
 */

export function curry(fn: Function) {
    const fnArgsLength = fn.length
    let args: any[] = []

    function calc(this: any, ...newArgs: any[]) {
        // 积累参数
        args = [
            ...args,
            ...newArgs
        ]
        if (args.length < fnArgsLength) {
            // 参数不够，继续积累
            return calc
        } else {
            // 参数够了，执行函数
            return fn.apply(this, args.slice(0, fnArgsLength))
        }
    }

    return calc
}

function add(a: number, b: number, c: number): number {
    return a + b + c
}
console.log(add(10, 20, 30)) // 60

const curryAdd = curry(add)
console.log(curryAdd(10)(20)(30)) // 60