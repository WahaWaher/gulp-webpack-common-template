const { src, dest } = require('gulp');
const htmlreplace = require('gulp-html-replace');
const rename = require('gulp-rename');
// Configs
const { mode, config } = require('../project.config');

const commonReplacement = {
  css: ['css/vendors~app.min.css', 'css/app.min.css'],
  js: ['js/vendors~app.min.js', 'js/app.min.js'],
};

/**
 * Copy/Replace root HTML from "src/" to "build/"
 */
const rootPagesHTML = () => {
  return src(['src/*.html'])
    .pipe(htmlreplace(commonReplacement))
    .pipe(dest('build'));
};

/**
 * Copy/Replace root PHP from "src/" to "build/"
 */
const rootPagesPHP = () => {
  return src('src/*.php')
    .pipe(rename({ extname: '.html' }))
    .pipe(htmlreplace(commonReplacement))
    .pipe(rename({ extname: '.php' }))
    .pipe(dest('build'));
};

/**
 * Copy all from "src/layout" to "build/"
 */
const layout = () => src('src/layout/**/*').pipe(dest('build/layout'));

/**
 * Copy all from "src/pages" to "build/"
 */
const pages = () => src('src/pages/**/*').pipe(dest('build/pages'));

module.exports = {
  rootPagesHTML,
  rootPagesPHP,
  layout,
  pages,
};
