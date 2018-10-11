'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

//var minify = require('gulp-uglify');
//var clean = require('gulp-clean');
//var concat = require('gulp-concat');
//var imagemin = require('gulp-imagemin');

//gulp.task('hello', function(){
//    console.log('Hello world')
//})
//
//gulp.task('minify', function(){
//    return gulp.src('./src/js/**/*.js')
//        .pipe(minify())
//        .pipe(gulp.dest('./build'))
//})
//
//gulp.task('allinone', function () {
//    return gulp.src('./src/js/**/*.js')
//        .pipe(concat('bundle.js'))
//        .pipe(gulp.dest('./build'))
//})

gulp.task('serve',  function (){
    browserSync.init({
        server: "./"
    })

    //gulp.watch('./src/js/**/*.js',['minify']);
    gulp.watch('./src/scss/**/*.scss',['sass']);
    gulp.watch('./index.html').on('change', browserSync.reload)
})

gulp.task('sass', function(){
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/css'))
})

//gulp.task('clean', function () {
//    return gulp.src('./build', {read: false})
//        .pipe(clean())
//})

//gulp.task('img', function(){
//    return gulp.src('./src/img/*')
//        .pipe(imagemin({
//                interlaced: true,
//                progressive: true,
//                svgoPlugins: [{removeViewBox:false}],
//            })
//        )
//        .pipe(gulp.dest('./build/img'))
//});



gulp.task('default', ['serve', 'sass'], function(){
    console.log('=== ALL DONE ===')
})
