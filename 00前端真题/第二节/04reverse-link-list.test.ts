/**
 * 反转单向链表 test
 */
import { ILinkListNode, reverseLinkList, createLinkList } from './04reverse-link-list'
describe('反转单向链表', () => {
    it('单个元素', () => {
        const listNode: ILinkListNode = {
            value: 100
        }
        expect(reverseLinkList(listNode)).toEqual(listNode);
    })

    it('多个元素', () => {
        const node = createLinkList([100, 200, 300])
        const node1 = reverseLinkList(node)
        expect(node1.value).toBe(300)
    })
})