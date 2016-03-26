/// <reference path="../typings/main.d.ts" />

(()=>{
  const gulp = require('gulp');
  
  gulp.task('watch:typescript', ()=> {
    gulp.watch('./src/**/*.ts', ['webpack', 'reload'])
  });
  
  gulp.task('watch', ['watch:typescript']);
})();