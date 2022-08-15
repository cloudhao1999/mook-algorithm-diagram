/**
 * @description: 自定义bind test
 */

import './08bind'

describe('自定义 bind', () => {
    it('绑定this', () => {
        function fn(this: any, a: any, b: any, c: any) {
            console.log(this, a, b, c)
            return a + b + c
        }
        // @ts-ignore
        const fn1 = fn.customBind({x: 100}, 10)
        expect(fn1(20, 30)).toBe(60)
    })
})