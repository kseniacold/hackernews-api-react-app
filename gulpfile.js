const { series } = require('gulp');

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
// function clean(cb) {
//   // body omitted
//   cb();
// }

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function buildLess(cb) {
  const lessDirPath = 'src';
  const compiledDirPath = 'src';
  require('less-recursive-compiler').compile(lessDirPath, compiledDirPath);
  cb();
}

exports.buildLess = buildLess;
//exports.default = series(buildLess);