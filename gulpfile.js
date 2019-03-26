'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
//migt need to be installed
 
gulp.task('sass', function () {
  return gulp.src('./src/styles/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles/css/main.css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/styles/sass/main.scss', ['sass']);
});