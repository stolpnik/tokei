(()=>{
  const gulp = require('gulp');
  const del = require('del');

  gulp.task('clean:ts', ()=>{
    return del.sync(['public/scripts']);
  });
})();