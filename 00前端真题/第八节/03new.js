/**
 * @description: 实现 new 
 */

// ts 泛型
function customNew(constructor, ...args) {
    // 创建一个空对象，继承构造函数的原型
    const obj = Object.create(constructor.prototype);
    // 将 obj 作为 this，执行构造函数 ，并且将构造函数的参数传入
    const result = constructor.apply(obj, args);
    // 返回构造函数的返回值，如果构造函数没有返回值，则返回 obj
    return result instanceof Object ? result : obj;
}

function Foo(name) {
    this.name = name;
}
Foo.prototype.getName = function() {
    return this.name;
}

const f = customNew(Foo, '大帅比');
console.log('f',f)
console.log('getName',f.getName())

exports.customNew = customNew;