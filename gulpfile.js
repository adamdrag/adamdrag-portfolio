var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var wait = require('gulp-wait');
var rename = require('gulp-rename');
const minifyHTML = require('gulp-minify-html');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('scripts', function() {
    return gulp.src('js/scripts.js')
        .pipe(plumber(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        })))
        .pipe(uglify({
            output: {
                comments: '/^!/'
            }
        }))
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('js'));
});

gulp.task('styles', function () {
    return gulp.src('./scss/styles.scss')
        .pipe(wait(250))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('html', function() {
    gulp.src('indexDev.html')
      .pipe(minifyHTML())
      .pipe(rename({basename: 'index'}))
      .pipe(gulp.dest('./'))
});

gulp.task('watch', ['scripts', 'styles', 'html'], function() {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('scss/*.scss', ['styles']);
    gulp.watch('indexDev.html', ['html']);
});
