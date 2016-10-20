(()=> {
  const gulp = require('gulp');
  const browserSync = require('browser-sync').create();
  const config = require('../bs-config.js');

  gulp.task('serve', ()=> {
    // return browserSync.init({
    //   server: {
    //     baseDir: [
    //       './public',
    //       './node_modules'
    //     ]
    //   }
    // });
    return browserSync.init(config);
  });
  
  gulp.task('reload', ()=> {
    return browserSync.reload();
  });
})()
