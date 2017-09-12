var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass');

// Uglify scripts task
gulp.task('scripts', function() {
    gulp.src('assets/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('min'));
});

// Sass compiler
gulp.task('styles', function () {
    gulp.src('sass/theme.scss')
        .pipe(sass({
            style: 'compressed'
        }))
        .pipe(gulp.dest('css'));
});

// Watch tasks
gulp.task('watch', function () {
    gulp.watch('sass/*.scss', ['styles'] );
    gulp.watch('assets/js/*.js', ['scripts'] );
});

gulp.task('default', ['styles', 'scripts', 'watch']);