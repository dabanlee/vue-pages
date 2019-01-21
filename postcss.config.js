const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');
const autoSize = require('postcss-background-image-auto-size');

const isProd = process.env.NODE_ENV === 'production';

const configure = {
    plugins: [
        autoprefixer(),
        autoSize(),
        pxtoviewport({
            viewportWidth: 750,
        }),
    ],
};

if (isProd) {
    configure.plugins.push(cssnano())
}

module.exports = configure