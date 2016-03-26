/// <reference path="../typings/main.d.ts" />

(()=>{
  const gulp = require('gulp');
  const sourcemaps = require('gulp-sourcemaps');
  const webpack = require('webpack-stream');
  
  gulp.task('webpack', ()=> {
    return gulp.src('src/main.ts')
    .pipe(webpack(require('../webpack.config.js')))
    .pipe(gulp.dest('public/scripts'))
  });
})();