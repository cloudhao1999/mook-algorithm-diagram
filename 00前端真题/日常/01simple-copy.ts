let map = new Map();
export function copy(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }
    let newObj: any = null;
    if (map.get(obj)) {
        newObj = map.get(obj);
    } else {
        newObj = obj instanceof Array ? [] : {};
        map.set(obj, newObj);
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = copy(obj[key]);
            }
        }
    }
    return newObj;
}