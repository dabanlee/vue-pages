# postcss-background-image-auto-size

> PostCSS 插件 [postcss-background-image-auto-size](https://github.com/JustClear/postcss-background-image-auto-size)

> 在 CSS 中写 `background-image` 属性时，自动添加 `width` 和 `height` 属性。

```js
const autoSize = require('postcss-background-image-auto-size');

module.exports = {
    plugins: [autoprefixer()],
};

```

## Before

```scss
.App {
    .Logo {
        background-image: url('../images/logo.png');
    }
}
```

## After

```css
.App .Logo {
    background-image: url('../images/logo.png');
    width: 100px;
    height: 100px;
}
```