
# 事件总线机制
::: tip 关键词
eventBus
:::

> 开发过程中，我们免不了需要跨组件传参或者跨页面传参，下述为在项目中真实使用的总线机制


## 使用示例

```js
let bus = new EventBus();

// emit 一次后，移除监听回调
bus.$once('event',(data) => {
    console.log(data);  // out: 测试文案
});

// emit 几次，输出几次
bus.$on('event', (data) => {
    console.log(data);  // out: 测试文案
});

bus.$emit('event', '测试文案');


// off 事件
bus.$off();  // 移除所有事件监听
bus.$off('event');  // 移除事件名为 event 的监听
bus.$off('event',cb1) // 移除事件名为 event 并且回调函数为 cb1 的监听
```

## 源码实现

```js
/**
 * 事件总线机制完整代码
 */
class EventBus {
    constructor() {
        this.stores = this.stores || {};  //{key:Array}
    }

    /**
     * 订阅事件
     * $on('event',cb)、$on('event',cb,this)
     * 
     * @param {String} event 事件名称
     * @param {Function} fn 回调函数
     * @param {Object} ctx this指向
     */
    $on(event, fn, ctx) {
        if (typeof fn != "function") {
            console.error('fn must be a function')
            return
        }

        ctx && fn.bind(ctx);

        this.stores[event] ? this.stores[event].push(fn) : this.stores[event] = [fn];
    }

    /**
     * 发布事件数据
     * $emit('event')、$emit('event','data')
     * 
     * @param {String} event 事件名称
     * @param {any} data 响应数据
     */
    $emit(event, data) {
        if (this.stores[event]) {
            this.stores[event].forEach(fn => {
                fn && fn(data);
            });
        }
    }

    /**
     * 订阅一次事件
     * $once('event',cb)
     * 
     * @param {String} event 事件名称
     * @param {Function} fn 回调函数
     */
    $once(event, fn) {
        let _this = this;
        function handler(args) {
            fn.apply(_this, [args])
            _this.$off(event)
        }
        this.$on(event, handler)
    }

    /**
     * 取消事件绑定
     * $off()、$off('event')、$off('event',cb)
     * 
     * @param {String} event 事件名称
     * @param {Function} fn 回调函数
     */
    $off(event, fn) {

        // all
        if (!arguments.length) {
            this.stores = {};
            return;
        }

        // no this event
        if (!this.stores[event]) return;


        // has event and no fn fn
        if (arguments.length == 1) {
            delete this.stores[event];
            return;
        }

        // both has event and fn
        for (let i = 0; i < this.stores[event].length; i++) {
            let cb = this.stores[event][i];
            if (cb == fn) {
                this.stores[event].splice(i, 1);
                break;
            }
        }
    }
}

```
