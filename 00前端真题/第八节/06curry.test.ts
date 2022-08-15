/**
 * @description curry test
 */

import { curry } from './06curry'

describe('curry', () => {
    it('curry add', () => {
        function add(a: number, b: number, c: number): number {
            return a + b + c
        }

        const curryAdd = curry(add)
        expect(curryAdd(10)(20)(30)).toBe(60)
    })
})