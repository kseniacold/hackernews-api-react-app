const gulp = require('gulp');
const less = require('gulp-less');

const lessDirPath = 'src';
const compiledDirPath = 'src';

/**
 * Compiles .less files recursively 
 * And puts output .css files in the initial foldes
 */
function buildLess() {
  return gulp.src('./' + lessDirPath + '/**/*.less')
  .pipe(less({
    javascriptEnabled: true
  }))
  .pipe(gulp.dest('./' + compiledDirPath));
}

// Create gulp task to use in package.json
gulp.task('buildLess', buildLess);

exports.buildLess = buildLess;