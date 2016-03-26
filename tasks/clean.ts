/// <reference path="../typings/main.d.ts" />

(()=>{
  const gulp = require('gulp');
  const del = require('del');

  gulp.task('clean:ts', ()=>{
    del.sync(['public/scripts']);
  });
})();