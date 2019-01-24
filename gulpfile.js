const gulp = require('gulp');

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
// function clean(cb) {
//   // body omitted
//   cb();
// }


const lessDirPath = 'src';
const compiledDirPath = 'src';

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function buildLess(cb) {
  
  require('less-recursive-compiler').compile(
    lessDirPath, 
    compiledDirPath,
    {
      // javascriptEnabled: true
    }
  );
  cb();
}

function watchLess(cb) {
  gulp.watch(
    [lessDirPath+'/*.less', lessDirPath+'/**/*.less'],
    buildLess
  )
}

gulp.task('buildLess', buildLess);
gulp.task('watchLess', watchLess);

exports.buildLess = buildLess;
exports.watchLess = watchLess;
//exports.default = series(buildLess);