var gulp = require('gulp');
var postcss = require('gulp-postcss');


gulp.task('default', function() {
    return gulp.src('src/**/*.css')
        .pipe(postcss([require('postcss-display-block')]))
        .pipe(gulp.dest('build/'));
});
