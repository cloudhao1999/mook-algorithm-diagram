/**
 * @descripiton 手写 instanceof
 */

/**
 * 自定义instanceof
 * @param instance 实例对象
 * @param origin class or function
 */
export function myInstanceof(instance: any, origin: any): boolean {
    if (instance == null) return false // 如果实例为null或undefined，返回false

    const type = typeof instance
    // 值类型
    if (type !== 'object' && type !== 'function') return false

    let tempInstance = instance // 为了防止修改 instance
    while (tempInstance) {
        if (tempInstance.__proto__ === origin.prototype) {
            return true
        }
        // 未匹配到，顺着原型链往上找
        tempInstance = tempInstance.__proto__
    }

    return false
}

// 功能测试
console.log(myInstanceof({}, Object)) // true
console.log(myInstanceof([], Object)) // true
console.log(myInstanceof([], Array)) // true
console.log(myInstanceof(new Date(), Date)) // true