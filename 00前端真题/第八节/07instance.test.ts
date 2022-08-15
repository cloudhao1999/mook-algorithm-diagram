/**
 * @description 自定义instanceof test
 */

import { myInstanceof } from './07instanceof'

describe('自定义 instanceof', () => {
    it('null undefined', () => {
        expect(myInstanceof(null, Object)).toBe(false)
        expect(myInstanceof(undefined, Object)).toBe(false)
    })
    it('值类型', () => {
        expect(myInstanceof(1, Object)).toBe(false)
        expect(myInstanceof(true, Object)).toBe(false)
        expect(myInstanceof('', Object)).toBe(false)
    })
    it('引用类型', () => {
        expect(myInstanceof([], Object)).toBe(true)
        expect(myInstanceof(new Date(), Object)).toBe(true)
        expect(myInstanceof({}, Object)).toBe(true)
        expect(myInstanceof({}, Array)).toBe(false)
    })
    it('自定义', () => {
        class A {}
        class B extends A {}
        expect(myInstanceof(new A(), A)).toBe(true)
        expect(myInstanceof(new B(), A)).toBe(true)
        expect(myInstanceof(new B(), B)).toBe(true)
    })
})