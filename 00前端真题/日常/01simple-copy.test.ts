import { copy } from "./01simple-copy";

describe('拷贝', () => {
    it('普通值', () => {
        const arr = 3
        const arr2 = copy(arr);
        expect(arr).toEqual(arr2);
    })

    it('拷贝对象', () => {
        const arr = {
            a: 1
        }
        arr.a = arr as any
        const arr2 = copy(arr);
        expect(arr).toEqual(arr2);
    })
})