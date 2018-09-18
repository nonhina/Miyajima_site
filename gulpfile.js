const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');

gulp.task("sass", function () {
  gulp.src("scss/**/*scss")
    .pipe(sass())
    .pipe(plumber())
    .pipe(gulp.dest("./css"));
});

gulp.task("default", function () {
  gulp.watch("scss/**/*.scss", ["sass"]);
});
