/**
 * 自定义 new test
 */

const { customNew } = require('./03new')

describe('自定义 new', () => {
    it('new', () => {
        function Foo(name) {
            this.name = name;
        }
        Foo.prototype.getName = function() {
            return this.name;
        }
        
        const f = customNew(Foo, '大帅比');
        expect(f.getName()).toBe('大帅比');
        expect(f.name).toBe('大帅比');
    })
})