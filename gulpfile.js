var gulp = require('gulp');
var postcss = require('gulp-postcss');


gulp.task('default', function() {
    return gulp.src('src/**/*.css')
        .pipe(postcss([
            require('precss'),
        ]))
        .pipe(postcss([
            require('postcss-display-inline-block'),
        ]))
        .pipe(postcss([
            require('autoprefixer'),
        ]))
        .pipe(postcss([
            require('postcss-modules')({
                generateScopedName: '[name]__[local]___[hash:base64:5]',
            }),
        ]))
        .pipe(gulp.dest('build/'));
});
