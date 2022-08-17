/**
 * @description LRU test
 */

import LRUCache from './12LRU'

describe('LRU test', () => {
    it('get set', () => {
        const cache = new LRUCache(3);
        cache.set(1, 1);
        cache.set(2, 2);
        cache.set(3, 3);
        expect(cache.get(1)).toBe(1);
        expect(cache.get(2)).toBe(2);
        expect(cache.get(3)).toBe(3);
        cache.set(4, 4);    // 该操作会使得 key=1 的数据失效
        expect(cache.get(1)).toBe(null);
        expect(cache.get(2)).toBe(2);
        expect(cache.get(3)).toBe(3);
        expect(cache.get(4)).toBe(4);
    })

    it('get 超出容量', () => {
        const cache = new LRUCache(3);
        cache.set(1, 1);
        cache.set(2, 2);
        cache.set(3, 3);
        expect(cache.get(1)).toBe(1);
        expect(cache.get(2)).toBe(2);
        expect(cache.get(3)).toBe(3);
        cache.set(4, 4);    // 该操作会使得 key=1 的数据失效
        expect(cache.get(1)).toBe(null);
        expect(cache.get(2)).toBe(2);
        expect(cache.get(3)).toBe(3);
        expect(cache.get(4)).toBe(4);
    })

    it('set 超出容量', () => {
        const cache = new LRUCache(3);
        cache.set(1, 1);
        cache.set(2, 2);
        cache.set(3, 3);
        expect(cache.get(1)).toBe(1);
        expect(cache.get(2)).toBe(2);
        expect(cache.get(3)).toBe(3);
        cache.set(4, 4);    // 该操作会使得 key=1 的数据失效
        expect(cache.get(1)).toBe(null);
        expect(cache.get(2)).toBe(2);
        expect(cache.get(3)).toBe(3);
        expect(cache.get(4)).toBe(4);
    })
})