const { watch, src, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function scss() {
  return src('assets/css/style.scss')
    .pipe(sass())
    .pipe(dest('assets/css/'))
}

function build(cb) {
  cb();
}

function helloTask() {
  console.log('hello');
}

exports.build = series;
exports.default = function () {
  watch('assets/css/style.scss', scss);
}
