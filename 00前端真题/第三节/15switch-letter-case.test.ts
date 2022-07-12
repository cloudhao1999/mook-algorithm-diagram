/**
 * @description 切换字母大小写 test
 */

import { switchLetterCase1, switchLetterCase2 } from './15switch-letter-case';

describe('切换字母大小写', () => {
    it('正常情况', () => {
        const str = '100aBcdxYz'
        const res = switchLetterCase1(str)
        expect(res).toBe('100AbCDXyZ')
    })
    it('空字符串', () => {
        const str = ''
        const res = switchLetterCase2(str)
        expect(res).toBe('')
    })
    it('非字母', () => {
        const str = '100你好'
        const res = switchLetterCase2(str)
        expect(res).toBe('100你好')
    })
})