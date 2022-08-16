/**
 * @description Event Bus - 拆分保存 on 和 once 事件
 */

class EventBus2 {
    private events: { [key: string]: Function[]}
    private onceEvents: { [key: string]: Function[]}

    constructor() {
        this.events = {};
        this.onceEvents = {};
    }

    on(type: string, fn: Function) {
        const events = this.events
        if (events[type] == null) events[type] = []
        events[type].push(fn)
    }

    once(type: string, fn: Function) {
        const onceEvents = this.onceEvents
        if (onceEvents[type] == null) onceEvents[type] = []
        onceEvents[type].push(fn)
    }

    off(type: string, fn?: Function) {
        if (!fn) {
            // 解绑所有事件
            this.events[type] = []
            this.onceEvents[type] = []
        } else {
            // 解绑单个事件
            const fnList = this.events[type]
            const onceFnList = this.onceEvents[type]
            if (fnList) {
                this.events[type] = fnList.filter(curFn => curFn !== fn)
            }
            if (onceFnList) {
                this.onceEvents[type] = onceFnList.filter(curFn => curFn !== fn)
            }
        }
    }

    emit(type: string, ...args: any[]) {
        const fnList = this.events[type]
        const onceFnList = this.onceEvents[type]

        if (fnList) {
            fnList.forEach(f => f(...args))
        }
        if (onceFnList) {
            onceFnList.forEach(f => f(...args))

            // once 执行一次就删除
            this.onceEvents[type] = []
        }
    }
}

const e2 = new EventBus2()

function fn01(a: any, b: any) {
    console.log('fn1', a, b)
}
function fn02(a: any, b: any) {
    console.log('fn2', a, b)
}
function fn03(a: any, b: any) {
    console.log('fn3', a, b)
}

e2.on('key1', fn01)
e2.on('key1', fn02)
e2.once('key1', fn03)

e2.emit('key1', 1, 2)

e2.off('key1', fn01)

e2.emit('key1', 1, 2)