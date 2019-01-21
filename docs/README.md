# About VuePages

`VuePages` 是一套支持 「静态模板直出」的 `Vue` 多页应用解决方案。

## 使用场景

虽然大多数场景下，`Vue` 是单页应用的形式存在的，但是一些特殊场景下，多页应用会有更好的体验，比如 `WebView Hybrid` 模式下，为了提升用户体验，当打开新的链接的时候，会新开一个 `WebView` 来打开新的链接，以达到 **Native-Like** 的体验。

此场景下使用 `VuePages` 可能会是一个不错的选择，`VuePages` 利用 `webpack` 插件 [`webpack-plugin-vue-to-html`](/webpack-plugin-vue-to-html/) 把 `Vue Component` 「直出」成静态页面，避免 `Vue` 的动态渲染。