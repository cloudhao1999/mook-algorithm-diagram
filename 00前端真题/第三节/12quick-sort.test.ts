/**
 * @description 快速排序 test
 */

import { quickSort1, quickSort2 } from "./12quick-sort"

describe("快速排序", () => {
    it("正常情况", () => {
        const arr = [1, 6, 2, 7, 3, 8, 4, 9, 5]
        const res = quickSort2(arr)
        expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })
    it("有负数", () => {
        const arr = [-1, 6, 2, 7, 3, 8, 4, 9, 5]
        const res = quickSort2(arr)
        expect(res).toEqual([-1, 2, 3, 4, 5, 6, 7, 8, 9])
    })
    it("数组元素都一样", () => {
        const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1]
        const res = quickSort2(arr)
        expect(res).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1])
    })
    it("空数组", () => {
        const arr = []
        const res = quickSort2(arr)
        expect(res).toEqual([])
    })
})