/**
 * Carousel
 */

const path = require('path');

const paths ={
    prodPath: path.join(__dirname, "../build"),
    prodHtmlPath: path.join(__dirname, '../build/index.html'),
    template: path.join(__dirname, "../src/index.html"),
    publicPath: '/',
    srcPath: path.join(__dirname, "../src"),
    nodePath: path.join(__dirname, "../node-modules"),
    indexJsPath: path.join(__dirname, "../src/index.js")
};

module.exports = paths;

