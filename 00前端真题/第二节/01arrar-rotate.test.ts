import { routate1, routate2 } from "./01array-route";

describe('数组旋转', () => {
    it('正常情况', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = 3;
        const res = routate1(arr, k);
        expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]);
    })

    it('数组为空', () => {
        const arr = []
        const k = 3;
        const res = routate1(arr, k);
        expect(res).toEqual([]);
    })

    it('k 是负值', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = -3;
        const res = routate1(arr, k);
        expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]);
    })

    it('k 是0', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = 0;
        const res = routate1(arr, k);
        expect(res).toEqual(arr);
    })

    it('k 不是数字', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = 'abc';

        // @ts-ignore
        const res = routate1(arr, k);
        expect(res).toEqual([1, 2, 3, 4, 5, 6, 7]);
    })

    it('正常情况', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = 3;
        const res = routate2(arr, k);
        expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]);
    })

    it('数组为空', () => {
        const arr = []
        const k = 3;
        const res = routate2(arr, k);
        expect(res).toEqual([]);
    })

    it('k 是负值', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = -3;
        const res = routate2(arr, k);
        expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]);
    })

    it('k 是0', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = 0;
        const res = routate2(arr, k);
        expect(res).toEqual(arr);
    })

    it('k 不是数字', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = 'abc';

        // @ts-ignore
        const res = routate2(arr, k);
        expect(res).toEqual([1, 2, 3, 4, 5, 6, 7]);
    })
})