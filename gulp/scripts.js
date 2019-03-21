const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const baseDir = 'src/optimised/';
gulp.src([
baseDir + '/dist/js/bootstrap.js',
baseDir + '/assets/js/docs.min.js',
baseDir + '/assets/js/ie10-viewport-bug-workaround.js'
])
 .pipe(concat('index.js'))
 .pipe(uglify())
 .pipe(gulp.dest('dist/optimised/'));
