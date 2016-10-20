(()=>{
  const gulp = require('gulp');
  const sourcemaps = require('gulp-sourcemaps');
  const webpack = require('webpack-stream');
  const plumber = require('gulp-plumber');
  
  gulp.task('webpack', ()=> {
    return gulp.src('src/main.ts')
    .pipe(plumber())
    .pipe(webpack(require('../webpack.config.js')))
    .pipe(gulp.dest('public/scripts'))
  });
})();