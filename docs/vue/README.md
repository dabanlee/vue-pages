# Vue

在此文件中引入 `Vue` 生态的相关资源：

```js
// src/vue.js
import Vue from 'vue';

// addons
import helpers from '@addons/helpers'

Vue.use(helpers)

export default Vue; // Vue 必须被默认导出
```
