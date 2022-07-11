/**
 * @description 二叉搜索树
 */

import { ITreeNode, getKthValue } from './08binary-search-tree';

const bst: ITreeNode = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null
        },
    },
    right: {
        value: 7,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 8,
            left: null,
            right: null
        }
    }
}

describe('二叉搜索树', () => {
    it('正常情况', () => {
        const res = getKthValue(bst, 3)
        expect(res).toBe(4)
    })

    it('k 不在正常范围内', () => {
        const res = getKthValue(bst, 0)
        expect(res).toBe(null)

        const res2 = getKthValue(bst, 1000)
        expect(res2).toBe(null)
    })
})