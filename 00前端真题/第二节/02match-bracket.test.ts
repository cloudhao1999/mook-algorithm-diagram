/**
 * 括号匹配 test
 */

import { matchBracket } from "./02match-bracket";

describe('括号匹配', () => {
    it('正常情况', () => {
        const str = '{a(bc[d])ef}';
        const res = matchBracket(str);
        expect(res).toBe(true);
    })

    it('不匹配', () => {
        const str = '{a(bc[d])e)f}';
        const res = matchBracket(str);
        expect(res).toBe(false);
    })

    it('顺序不一致', () => {
        const str = '{a(bc[d])e}f)';
        const res = matchBracket(str);
        expect(res).toBe(false);
    })

    it('空字符串', () => {
        const str = '';
        const res = matchBracket(str);
        expect(res).toBe(true);
    })
})