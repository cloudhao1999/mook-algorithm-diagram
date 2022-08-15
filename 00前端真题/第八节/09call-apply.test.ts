/**
 * @description 自定义 call apply
 */

import './09call-apply'

describe('自定义 call', () => {
    it('绑定 this 对象', () => {
        function fn(this: any, a: any, b: any, c: any) {
            console.log(this, a, b, c)
            return a + b + c
        }
        // @ts-ignore
        const fn3 = fn.customCall({x: 100}, 10, 20, 30)
        expect(fn3).toBe(60)
    })
})
describe('自定义 apply', () => {
    it('绑定 this 对象', () => {
        function fn(this: any, a: any, b: any, c: any) {
            console.log(this, a, b, c)
            return a + b + c
        }
        // @ts-ignore
        const fn3 = fn.customApply({x: 100}, [10, 20, 30])
        expect(fn3).toBe(60)
    })
})