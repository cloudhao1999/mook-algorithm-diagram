/**
 * @description: 二分查找
 */

import { binarySearch, binarySearch2 } from './06binary-search';

describe('二分查找', () => {
    it('正常情况', () => {
        const arr = [10, 20, 30, 40]
        const target = 40
        const index = binarySearch(arr, target)
        expect(index).toBe(3)
    })

    it('空数组', () => {
        expect(binarySearch2([], 10)).toBe(-1)
    })
})