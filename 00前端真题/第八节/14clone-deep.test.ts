/**
 * @description: 深拷贝 test
 */

import { cloneDeep } from './14clone-deep'

describe('深拷贝', () => {
    it('值类型', () => {
        const a = 10;
        const b = cloneDeep(a);
        expect(b).toBe(a);
    })
    it('普通对象和数组', () => {
        const a = {
            x: 10,
            y: 20,
            arr: [10, 20, 30]
        }
        const b = cloneDeep(a);
        a.x = 20;
        expect(b.x).toBe(10)
    })
    it('Map', () => {
        const a = new Map([['x', 10], ['y', 20]]);
        const b = cloneDeep(a);
        a.set('x', 20);
        expect(b.get('x')).toBe(10);
    })
    it('Set', () => {
        const a = new Set([10, 20, 30]);
        const b = cloneDeep(a);
        a.add(40);
        expect(b.has(40)).toBe(false);
    })
})