'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
 
gulp.task('sass', function () {
  return gulp.src('src/app.scss')
  	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  	.pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('dist/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('src/*.scss', ['sass']);
});