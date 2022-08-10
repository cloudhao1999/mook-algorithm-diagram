/**
 * @description: 数组扁平化 test
 */

import { flatten1, flatten2 } from './01array-flatten'

describe('数组扁平化', () => {
    it('空数组', () => {
        expect(flatten1([])).toEqual([]);
        expect(flatten2([])).toEqual([]);
    })
    it('非嵌套数组', () => {
        expect(flatten1([1, 2, 3])).toEqual([1, 2, 3]);
        expect(flatten2([1, 2, 3])).toEqual([1, 2, 3]);
    })
    it('一级嵌套数组', () => {
        expect(flatten1([[1, 2, 3], [4, 5, 6]])).toEqual([1, 2, 3, 4, 5, 6]);
        expect(flatten2([[1, 2, 3], [4, 5, 6]])).toEqual([1, 2, 3, 4, 5, 6]);
    })
    it('二级嵌套数组', () => {
        expect(flatten1([[1, 2, 3], [4, [5, 6], 7]])).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(flatten2([[1, 2, 3], [4, [5, 6], 7]])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    })
})