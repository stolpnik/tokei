(()=>{
  const gulp = require('gulp');
  const runSequence = require('run-sequence');
  
  gulp.task('watch:typescript', ()=> {
    gulp.watch('./src/**/*.ts', ()=>{
        return runSequence('webpack', 'reload');
    })
  });
  
  gulp.task('watch', ['watch:typescript']);
})();