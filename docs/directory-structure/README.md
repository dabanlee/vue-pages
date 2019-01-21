# Directory Structure

## 目录结构

`just init vue-pages <project-name>` 后会生成以下目录：

```
|-- /build              // 构建相关脚本
|-- /common             // 外部通用插件，如 swiper
|-- /src
|---- /addons           // Vue 插件
|---- /images           // 项目通用图片资源
|---- /components       // 项目通用组件
|---- /pages            // 多页面路口
|------ /index          // 默认首页
|-------- /images       // 页面内图片资源
|-------- /components   // 页面内通用组件
|---------- Hello.vue   // 普通组件
|-------- index.vue     // 页面入口（必须）
|---- global.scss       // 全局通用样式
|---- global.js         // 全局通用脚本
|---- vue.js            // 可以在这里使用 Vue 生态中的各种组件插件等等
|-- .babelrc
|-- .gitignore
|-- fontmin.json        // 字体抽离工具
|-- package.json
|-- README.md
|-- postcss.config.js   // postcss 配置
|-- webpack.config.js   // webpack 配置
```

## 生成文件

`yarn run dev` 后会生成以下文件：

```
|-- /dist
|---- /js
|------ global.js
|------ index.js
|---- /css
|------ global.css
|------ index.css
|---- index.html
```

## 约定

`VueToHTML` 会遵循一些 **「约定」** 以减少配置项，目前有以下 **「约定」** ：

- 默认多页面入口目录： `src/pages/`
    - 当然也可以在 `webpack.config.js` 中通过 `VueToHTML.pagesDIR = 'path/to/pages'` 来修改默认配置
- 默认多页面生成目录：`dist/`，比如 `dist/index.html`、`dist/some-page.html`
    - 当然也可以在 `webpack.config.js` 中通过 `options.output.dist = 'path/to/dist'` 来修改默认配置
- 在页面中 **至少** 需要包含 `index.vue` 文件
 - 以页面 `some-page` 为例，必须在 `src/pages/some-page` 目录中包含 `src/pages/some-page/index.vue`
- 生成的静态页面相关资源：默认以 `src/pages/` 目录下的目录名为生成的静态资源的文件名，还是以 `src/pages/some-page` 为例，会在 `dist/` 目录中生成：
    - `dist/some-page.html`
    - `dist/js/some-page.js`
    - `dist/css/some-page.css`

?> `提示：` `VueToHTML` 会遵循 **「约定优于配置」** 的这种约定。
