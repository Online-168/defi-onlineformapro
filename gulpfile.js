const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const { watch, src, dest, series } = require('gulp');

function scss() {
  return src('assets/css/style.scss')
    .pipe(sass())
    .pipe(dest('assets/css/'))
}

function helloTask() {
  console.log('hello');
}

// Watch scss AND html files, doing different things with each.
function serve() {

  // Serve files from the root of this project
  browserSync.init({
    
      proxy: "defi_online"
    
      // server: {
      //     baseDir: "./"
      // }
  })

  gulp.watch(["*/**/*.html", "*/**/*.css", "*/**/*.twig"]).on("change", reload);
}

exports.build = series;

exports.default = function () {
  watch('assets/css/style.scss', scss);
  helloTask();
  serve();
}
