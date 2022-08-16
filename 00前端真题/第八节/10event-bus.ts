/**
 * @description Event Bus
 */

export default class EventBus {
    private events: {[key: string]: Array<{fn: Function, isOnce: boolean}>} = {}

    constructor() {
        this.events = {}
    }

    on(type: string, fn: Function, isOnce: boolean = false) {
        const events = this.events
        if (!events[type]) {
            events[type] = [] // 初始化 key 对应的数组
        }
        events[type].push({fn, isOnce})
    }

    once(type: string, fn: Function) {
        this.on(type, fn, true)
    }

    off(type: string, fn?: Function) {
        if (!fn) {
            // 解绑所有 type 的函数
            this.events[type] = []
        } else {
            // 解绑单个 fn
            const fnList = this.events[type]
            if (fnList) {
                this.events[type] = fnList.filter(item => item.fn !== fn)
            }
        }
    }

    emit(type: string, ...args: any) {
        const fnList = this.events[type]
        if (fnList == null) return

        // 注意
        this.events[type] = fnList.filter(item => {
            const { fn, isOnce } = item
            fn(...args)

            // once 执行一次就要被过滤掉
            return !isOnce
        })
    }
}

const e = new EventBus()

function fn1(a: any, b: any) {
    console.log('fn1', a, b)
}
function fn2(a: any, b: any) {
    console.log('fn2', a, b)
}
function fn3(a: any, b: any) {
    console.log('fn3', a, b)
}

e.on('key1', fn1)
e.on('key1', fn2)
e.once('key1', fn3)

e.emit('key1', 1, 2)

e.off('key1', fn1)

e.emit('key1', 1, 2)

