# Vue Pages

## Initialization

直接使用 [`just-cli`](https://github.com/JustClear/just-cli) 命令行工具初始化项目

```sh
$ # 安装 just-cli 忽略此步骤
$ sudo yarn global add just-cli

$ # 添加 VuePages 为模板
$ just add
$ template name: vue-pages
$ branch(master): master
$ git: https://github.com/JustClear/vue-pages.git

$ # 初始化名称为 `project-name` 的项目
$ just init vue-pages <project-name>
$ cd <project-name>
$ yarn
$ yarn start
```

## Getting Started

```js
// webpack.config.js
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

详细文档请参阅 [Documentation](https://justclear.github.io/vue-pages/#/)

## License

Licensed under the [MIT License](https://github.com/JustClear/vue-pages/blob/master/LICENSE)