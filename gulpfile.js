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



gulp.task('clean-dev', function(){
    return gulp.src('./dev', {read: false})
        .pipe(clean())
});

gulp.task('img', ['clean-dev'], function(){
    return gulp.src('./src/img/*.png')
        .pipe(gulp.dest('./dev/img'))
});

gulp.task('buildHtml', ['img'], function() {			//Copy index.html to dir "dev"
    var buildhtml = gulp.src('./src/*.html')
        .pipe(gulp.dest('dev'))
});

gulp.task('scripts', ['buildHtml'], function() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())											//minify js
        .pipe(concat('all.js'))									//concat all js files
        .pipe(gulp.dest('./dev/js'))
});

gulp.task('sass', ['scripts'], function(){
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
        .pipe(gulp.dest('./dev/css'))
});

gulp.task('serve', ['sass'], function (){
    browserSync.init({
        server: "./dev"
    });

    gulp.watch('src/scss/**/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch('./src/**/*.js', ['scripts']).on('change', browserSync.reload);
    gulp.watch("./src/index.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve'], function(){
    console.log('=== ALL DONE ===')
});
