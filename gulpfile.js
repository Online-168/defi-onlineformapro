const { src, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function scss() {
  return src('assets/css/style.scss')
    .pipe(sass())
    .pipe(dest('assets/css/'))
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  cb();
}

function helloTask() {
  console.log('hello');
}

exports.build = series;
exports.default = series(scss, build);


// const gulp = require('gulp');

// exports.default = defaultTask

// gulp.task('sass', function () {
//   return gulp.src('assets/css/style.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('assets/css'));
// });