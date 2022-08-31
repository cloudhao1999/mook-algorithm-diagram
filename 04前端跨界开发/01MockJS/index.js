/**
 * @description: MockJs
 */

const Strategies = {
    'String': (rule, value) => {}, // 字符串类型的转换处理函数
    'Number': (rule, value) => {}, // 数字类型的转换处理函数
    'Boolean': (rule, value) => {}, // 布尔类型的转换处理函数
    'Array': (rule, value) => {}, // 数组类型的转换处理函数
    'Placeholder': (rule, value) => {}, // 占位符类型的转换处理函数
}

// 模版转换函数
function parseTemplate(schema = {}) {
    let result = {};
    for (let prop of Object.keys(schema)) {
        let [name, rule] = prop.split('|');
        let value = schema[prop];

        let type = value.stratsWith('@') ?
            'Placeholder' : 
            Object.prototype.toString.call(value).slice(8, -1);
        
        result[name] = Strategies[type](rule, value);
    }
    return result;
}