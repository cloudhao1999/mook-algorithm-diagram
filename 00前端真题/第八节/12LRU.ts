/**
 * @description LRU缓存机制
 */

export default class LRUCache {
    private length: number;
    private data: Map<any, any> = new Map();

    constructor(length: number) {
        if (length < 1) {
            throw new Error('length must be greater than 0');
        }
        this.length = length;
    }

    set(key: any, value: any) {
        const data = this.data

        if (data.has(key)) {
            data.delete(key);
        }

        data.set(key, value);

        if (data.size > this.length) {
            // 如果超出了容量，则删除 Map 最老的元素
            const delKey = data.keys().next().value;
            data.delete(delKey);
        }
    }

    get(key: any): any {
        const data = this.data;
        if (!data.has(key)) return null;

        const value = data.get(key);
        data.delete(key);
        data.set(key, value);

        return value;
    }
}

const cache = new LRUCache(3);
cache.set(1, 1);
cache.set(2, 2);
cache.set(3, 3);
console.log(cache.get(1));       // 返回  1
console.log(cache.get(2));       // 返回  2
console.log(cache.get(3));       // 返回  3
cache.set(4, 4);    // 该操作会使得 key=1 的数据失效
console.log(cache.get(1));       // 返回 null (未找到)
console.log(cache.get(2));       // 返回  2
console.log(cache.get(3));       // 返回  3
console.log(cache.get(4));       // 返回  4