var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss') // takes every file ending in .scss
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

 
gulp.task('css', async function () {
    gulp.src('./css/*.css')
      .pipe(uglifycss({
        "uglyComments": true
      }))
      .pipe(gulp.dest('./dist/'));
  });

gulp.task('run', gulp.parallel('sass', 'css'));

// gulp.task('watch', function() {
//     gulp.series('./sass/*.scss', ('sass')); // watch for any .scss file change run 'sass'
//     gulp.series('./css/*.css', ('css')); // watch for any .css file change run 'css'
// })

// gulp.task('default', gulp.parallel('run', 'watch'));