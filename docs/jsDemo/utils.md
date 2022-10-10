# Utils方法
::: tip 关键词
Utils
:::
## GUID生成
```js
/**
 * guid生成方法
 */
function creatGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (t) {
        var e = (16 * Math.random()) | 0;
        return (t == 'x' ? e : (3 & e) | 8).toString(16);
    });
}
```

## url参数转对象
```js
/**
 * query转Object对象  a=1&b=2&c=3 或者 /pages/index/index?a=1&b=2&c=3
 * @param {String} queryString  query
 * @returns {Object} {a:1,b:2,c:3}
 */
function query2object(queryString) {
    if (typeof (queryString) !== 'string') return {};

    const querys = queryString.slice(queryString.indexOf('?') + 1);
    const querysObj = querys.split('&');
    let hash; const myJson = {};

    for (let i = 0; i < querysObj.length; i++) {
        hash = querysObj[i].split('=');
        myJson[hash[0]] = hash[1];
    }
    return myJson;
}
```

## 对象转url参数
```js
/**
 * object对象转query
 * @param {Object} queryObj  query
 */
function object2Query(queryObj = {}) {
    if (typeof (queryObj) !== 'object') return '';
    if (Object.keys(queryObj).length == 0) return '';

    const queryArr = [];
    let key = '';
    for (key in queryObj) {
        queryArr.push(key + '=' + queryObj[key]);
    }

    return queryArr.join('&');
}
```



## 获取输入的类型值
```js
function getInputType() {
    const class2type = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regexp',
        '[object Object]': 'object',
        '[object Error]': 'error',
        '[object Symbol]': 'symbol'
    };

    return function (obj) {
        if (obj == null) {
            return obj + '';
        }
        // javascript高级程序设计中提供了一种方法,可以通用的来判断原始数据类型和引用数据类型
        const str = Object.prototype.toString.call(obj);
        return typeof obj === 'object' || typeof obj === 'function' ? class2type[str] || 'object' : typeof obj;
    };
}
```

## 检测字符长度
```js
/**
 * 检测字符长度
 * @param {string} str 要检测的字符
 * @returns {number} 字符长度
 */
function chatLength(str = '') {
    if (str.length == 0) return 0;

    let len = 0;
    for (let i = 0; i < str.length; i++) {
        const cur = str.charAt(i);
        if (/^[\u0000-\u00ff]$/.test(cur)) {
            len++;
        } else { len += 2; }
    }
    return len;
}
```