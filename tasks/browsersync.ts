/// <reference path="../typings/main.d.ts" />

(()=> {
  const gulp = require('gulp');
  const browserSync = require('browser-sync').create();

  gulp.task('serve', ()=> {
    browserSync.init({
      server: {
        baseDir: [
          './public',
          './node_modules'
        ]
      }
    });
  });
  
  gulp.task('reload', ()=> {
    browserSync.reload();
  });
})()
