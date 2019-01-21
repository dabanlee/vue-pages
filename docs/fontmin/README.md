# fontmin

> `fontmin` 是用来抽离字体包中「某些文字」的插件， [文档地址](https://github.com/ecomfe/fontmin)

> 由于中文字体包普遍很大，所以在这主要用来抽离中文字体包

## Configuration

```json
// fontmin.json
{
    "src": "src/_fonts/*.otf", // 源字体
    "dest": "src/fonts", // 新生成的字体存放目录
    "content": "content here" // 需要抽离的字
}
```

## Usage

```js
const fontmin = require('fontmin');
const configure = require('../fontmin.json');
// const types = ['ttf2eot', 'ttf2woff', 'ttf2svg', 'svg2ttf', 'svgs2ttf', 'otf2ttf']
fontmin()
    .src(configure.src)
    .use(fontmin.otf2ttf()) 
    .use(fontmin.glyph({
        text: configure.content,
        hinting: false,
    }))
    .dest(configure.dest)
    .run();
```