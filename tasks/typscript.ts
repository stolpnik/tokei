/// <reference path="../typings/main.d.ts" />

import config from './config';

(()=>{
  const gulp = require('gulp');
  const sourcemaps = require('gulp-sourcemaps');
  const typescript = require('gulp-typescript');

  gulp.task('compile:ts', ()=> {
    return gulp.src('src/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript({
      outFile: 'main.js',
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('public/scripts'));
  });
})();