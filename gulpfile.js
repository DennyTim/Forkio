'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');						//sass
var browserSync = require('browser-sync').create();		//runtime watcher and changer
var clean = require('gulp-clean');						//cleaner product directory "dev"
var cleanCSS = require('gulp-clean-css');				//CSS minifier
var sourcemaps = require('gulp-sourcemaps');			//SCSS navigation in Chrome inspector
var imagemin = require('gulp-imagemin');				//Img minify
var rename = require("gulp-rename");					//rename files after minify
var concat = require('gulp-concat');						//concat for js
let uglify = require('gulp-uglify-es').default;				//minify for js
const autoprefixer = require('gulp-autoprefixer');
var runSequence = require('run-sequence');				//runner

gulp.task('clean-dev', function(){
    return gulp.src('./dist', {read: false})
        .pipe(clean())
});

gulp.task('img', function(){
    return gulp.src('./src/img/*.png')
        .pipe(gulp.dest('./dist/img'))
});

gulp.task('buildHtml', function() {			//Copy index.html to dir "dev"
    var buildhtml = gulp.src('./src/*.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())											//minify js
        .pipe(concat('all.js'))									//concat all js files
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('sass', function(){
    return gulp.src('./src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(cleanCSS({compatibility: 'ie8'}))				// minifyCSS after sourcemaps and sass
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename(function (path) {						// function of rename extname for .css
            path.extname = ".min.css";
        }))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('serve', function (){
    browserSync.init({
        server: "./dist"
    });

    gulp.watch('src/scss/**/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch('./src/**/*.js', ['scripts']).on('change', browserSync.reload);
    gulp.watch("./src/index.html").on('change', browserSync.reload);
});


gulp.task('build', function (cb) {
    runSequence('clean-dev',['img','buildHtml','scripts','sass','serve'],cb)
})

gulp.task('default', ['build'], function(){
    console.log('=== ALL DONE ===')
});
