var gulp = require('gulp');
var browserify = require('gulp-browserify');
var jshint = require('gulp-jshint');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('default', function() {
  return gulp.src('src/app.js')
    .pipe(ngAnnotate())
    .pipe(gulp.dest('dest'));
});

gulp.task('scripts', function() {
  gulp.src('src/app.js')
    .pipe(browserify({
      insertGlobals: true,
      debug: !gulp.env.production
    }))
    .pipe(gulp.dest('dest'))
});

gulp.task('lint', function() {
  return gulp.src('src/app.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});