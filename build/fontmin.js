const fontmin = require('fontmin');
const configure = require('../fontmin.json');

fontmin()
    .src(configure.src)
    .use(fontmin.otf2ttf()) // ['ttf2eot', 'ttf2woff', 'ttf2svg', 'svg2ttf', 'svgs2ttf', 'otf2ttf']
    .use(fontmin.glyph({
        text: configure.content,
        hinting: false,
    }))
    .dest(configure.dest)
    .run();