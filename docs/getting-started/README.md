# Getting Started

## Webpack Configure

很简单常规的一个 `Vue` 项目的 `webpack` 配置，不同的是这里使用了一个叫 `webpack-plugin-vue-to-html` 的 `webpack` 插件，详见 [Webpack Plugin Vue to Html](/webpack-plugin-vue-to-html/)

```js
const path = require('path')
const VueLoader = require('vue-loader/lib/plugin')
const ExtractCSS = require('mini-css-extract-plugin')
const minify = require('babel-minify-webpack-plugin')
const VueToHTML = require('webpack-plugin-vue-to-html')

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

const configure = {
    entry: VueToHTML.entry,
    output: {
        filename: 'js/[name].js',
        libraryTarget: 'this',
    },
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            '@src': path.resolve(__dirname, `src`),
            '@addons': path.resolve(__dirname, `src/addons`),
        },
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: 'babel-loader',
        }, {
            test: /\.vue$/,
            use: [{
                loader: 'vue-loader',
            }],
        }, {
            test: /\.(sa|sc|c)ss$/,
            use: [{
                    loader: ExtractCSS.loader,
                    options: {
                        publicPath: '../',
                    },
                }, 'css-loader',
                'postcss-loader',
                'resolve-url-loader',
                'sass-loader?outputStyle=expanded',
            ],
        }, {
            test: /\.(svg|gif|jpg|jpeg|png)$/,
            use: [{
                loader: `url-loader`,
                options: {
                    limit: 1,
                    name: `images/[name].[ext]?[hash:8]`,
                },
            }],
        }, {
            test: /\.(woff|ttf|eot)$/,
            use: [{
                loader: `url-loader`,
                options: {
                    limit: 5120,
                    name: `[path][name].[ext]?[hash:8]`,
                },
            }],
        }],
    },
    plugins: [
        new VueLoader(),
        new VueToHTML({
            console: isDev,
        }),
        new ExtractCSS({
            filename: `css/[name].css?[hash:8]`,
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        disableHostCheck: true,
        compress: true,
        port: '3000',
        host: VueToHTML.getHost(),
    },
}

if (isProd) {
    configure.plugins.push(new minify());
}

module.exports = configure;
```
