# 防抖与节流
::: tip 关键词
`throttle`   `debounce`
:::

这两者的概念其实还是比较容易混淆的，其实都是减少触发的次数，只不过场景不一而已

防抖：**触发后立即执行逻辑，一定时间内不再触发，超过设置时间(如1s)再进行下次执行逻辑；如点击发送请求，点击后立即发送，设置时间内的其他点击无效**

节流：**多次触发事件函数，在一定时间后再执行函数逻辑；如输入框连续输入，只取最后一次的结果进行赋值**

## 防抖

### 使用示例
```js
throttle(function(){
    // 执行逻辑
},1000)
```

### 代码实现
```js
/* 函数防抖 防止多次触发 */
function throttle(fn, gapTime) {
    if (gapTime == null || gapTime == undefined) {
        gapTime = 1500;
    }
    let _lastTime = null;
    // 返回新的函数
    return function () {
        const _nowTime = +new Date();
        if (_nowTime - _lastTime > gapTime || !_lastTime) {
            fn.apply(this, arguments); // 将this和传递给原函数
            _lastTime = _nowTime;
        }
    };
}
```
## 节流

### 使用示例
```js
debounce(function(){
    // 这里注意传参问题
    // 执行逻辑
},1000)
```

### 代码实现
```js
/* 函数节流  多用于输入框输入时*/
function debounce(fn, interval) {
    var timer;
    var gapTime = interval || 1000; // 间隔时间，如果interval不传，则默认1000ms
    return function () {
        clearTimeout(timer);
        var context = this;
        var args = arguments; // 保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
        timer = setTimeout(function () {
            fn.call(context, args);
        }, gapTime);
    };
}
```