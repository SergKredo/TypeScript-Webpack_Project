const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyle() {
    return gulp.src('./style/**/*.scss').pipe(sass()).pipe(gulp.dest('./style/'));
}

gulp.task('watch', function() {
    gulp.watch('./style/**/*.scss', buildStyle);
})