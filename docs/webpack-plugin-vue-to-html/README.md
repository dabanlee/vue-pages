# Webpack Plugin Vue to HTML

`webpack-plugin-vue-to-html` 是一个将 `Vue` 组件「直出」成静态页面的一个插件，在 `webpack.config.js` 中配置：

```js
// ...
const VueToHtml = require('webpack-plugin-vue-to-html')

module.exports = {
    entry: VueToHtml.entry,
    // ...
    plugins: [
        new VueToHtml(),
        // ...
    ],
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        disableHostCheck: true,
        compress: true,
        port: '3000',
        host: VueToHTML.getHost(),
    },
}
```

会发现，`webpack` 配置的 `entry` 不是常规的手动配置的入口，而是插件 `VueToHtml` 暴露出来的一个 `entry` 接口。

当 `webpack` 进行编译的时候，`VueToHtml` 会 ** [遵循约定](/directory-structure/) ** 自动读取 `src/pages/` 目录下的文件，自动生成对应的入口文件，无需手动配置，如需额外配置入口文件，可以通过以下方式来配置：

```js

VueToHtml.entry['common'] = 'path/to/common'
module.exports = {
    entry: VueToHtml.entry,
    // ...
}
```

这样就会生成 `dist/js/common.js` 文件。

## 配置

### Console 调试工具

```js
const isDev = process.env.NODE_ENV === 'development';

new VueToHtml({
    console: isDev, // 开发模式下启用
})
```

### Head 管理

`webpack-plugin-vue-to-html` 插件默认生成的模板为：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0">
    <title>{{ title }}</title>
    <link rel="stylesheet" href="./css/global.css?1545901814">
    <link rel="stylesheet" href="./css/{{ page }}.css?1545901814">
</head>
<body data-page="{{ page }}">
    <div id="app">
        <div title="{{ title }}" data-server-rendered="true"></div>
    </div>
    <script src="./js/global.js?1545901814"></script>
    <script src="./js/{{ page }}.js?1545901814"></script>
</body>
</html>
```

其中 `{{ title }}`, `{{ page }}` 为对应的页面标题和名称，当然还可以通过初始化 `VueToHtml` 插件的时候，传入一些配置来生成对应的 head 资源。

```js
// webpack.config.js
const VueToHtml = require('webpack-plugin-vue-to-html')

export default {
    // ...
    plugins: [
        new VueToHtml({
            head: {
                meta: [{
                    name: 'keywords',
                    content: 'Vue, VueToHtml',
                }, {
                    name: 'description',
                    content: 'This is VueToHtml.',
                }],
                link: [
                    'swiper.min'
                ],
                script: [
                    'swiper.min'
                ],
            },
        }),
    ],
};
```

生成如下模板：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0">
    <meta name="keywords" content="Vue, Nativue, Hybrid">
    <meta name="description" content="This is Nativue">
    <title>{{ title }}</title>
    <link rel="stylesheet" href="./css/swiper.min.css?1545901814">
    <link rel="stylesheet" href="./css/global.css?1545901814">
    <link rel="stylesheet" href="./css/{{ page }}.css?1545901814">
</head>
<body data-page="{{ page }}">
    <div id="app">
        <div title="{{ title }}" data-server-rendered="true"></div>
    </div>
    <script src="./js/swiper.min.js?1545901814"></script>
    <script src="./js/global.js?1545901814"></script>
    <script src="./js/{{ page }}.js?1545901814"></script>
</body>
</html>
```
