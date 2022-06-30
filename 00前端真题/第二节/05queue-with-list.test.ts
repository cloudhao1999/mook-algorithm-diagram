/**
 * 链表实现队列 test
 */

import { MyQueue } from './05queue-with-list'

describe('链表实现队列', () => {
    it('add and length', () => {
        const queue = new MyQueue();
        queue.add(100);
        queue.add(200);
        queue.add(300);
        expect(queue.length).toBe(3);
    })

    it('delete', () => {
        const queue = new MyQueue();
        expect(queue.delete()).toBe(null);

        queue.add(100);
        queue.add(200);
        queue.add(300);
        expect(queue.delete()).toBe(100);
        expect(queue.delete()).toBe(200);
        expect(queue.delete()).toBe(300);
        expect(queue.delete()).toBeNull();
    })
})