'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');
//var minify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

gulp.task('clean-build', function(){
	return gulp.src('./build', {read: false})
		.pipe(clean())
});

gulp.task('img', ['clean-build'], function(){
    return gulp.src('./src/img/*.png')
        .pipe(gulp.dest('./build/img'))
});

gulp.task('sass', ['img'], function(){
    return gulp.src('./src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/css'))
});

gulp.task('serve', ['sass'], function (){
    browserSync.init({
        server: "./"
    });

    //gulp.watch('./src/css/**/*.css', ['minify']);
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch("./index.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve'], function(){
    console.log('=== ALL DONE ===')
});


