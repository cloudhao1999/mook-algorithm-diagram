/**
 * @description 数字转换为千分位格式化 test
 */

import { format1, format2 } from './14thousands-format';

describe('数字千分位格式化', () => {
    it('正常', () => {
        const n = 10201004050
        const res = format2(n)
        expect(res).toBe('10,201,004,050')
    })
    it('小于1000', () => {
        expect(format1(0)).toBe('0')
        expect(format1(10)).toBe('10')
    })
})