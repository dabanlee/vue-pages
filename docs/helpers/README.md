# Helpers

一些工具函数可以在这里引入

```js
export default {
    install(Vue) {
        Vue.prototype.common = {
            hello(greeting = 'hello vue') {
                console.log(greeting);
            },
        };
    }
};
```
