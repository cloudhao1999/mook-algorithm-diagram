/**
 * @description: 连续字符 test
 */

import { findContinousChar1, findContinousChar2 } from "./11continous-char"

describe('连续字符和长度', () => {
    it('正常情况', () => { 
        const str = 'aabbcccddeeee11223'
        const res = findContinousChar2(str)
        expect(res).toEqual({char: 'e', length: 4})
    })
    it('空字符串', () => {
        const res = findContinousChar2('')
        expect(res).toEqual({char: '', length: 0})
    })
    it('无连续字符', () => {
        const str = 'abc'
        const res = findContinousChar2(str)
        expect(res).toEqual({char: 'a', length: 1})
    })
    it('全部都是连续字符', () => {
        const str = 'aaa'
        const res = findContinousChar2(str)
        expect(res).toEqual({char: 'a', length: 3})
    })
})
