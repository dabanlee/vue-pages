# Vue Pages

## Documentation

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