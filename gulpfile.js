const { spawn } = require('child_process');
const gulp = require('gulp');
const less = require('less');

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

// TODO clean this up
function watchLess(cb) {
  gulp.watch(
    [lessDirPath+'/**/*.less'],
    function(cb){cb()}
  )
  .on('change', function(path, stats){
    //console.log('File ' + path + ' was changed');
    let outPath = path.replace('.less', '.css');
    let cmd = `/usr/bin/lessc ${path} ${outPath}`;
    console.log(`Running ${cmd}`);
    // spawn(cmd);
  })
}

gulp.task('buildLess', buildLess);
gulp.task('watchLess', watchLess);

exports.buildLess = buildLess;
exports.watchLess = watchLess;
//exports.default = series(buildLess);