'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');						//sass
var browserSync = require('browser-sync').create();		//runtime watcher and changer
var clean = require('gulp-clean');						//cleaner product directory "dev"
var cleanCSS = require('gulp-clean-css');				//CSS minifier
var sourcemaps = require('gulp-sourcemaps');			//SCSS navigation in Chrome inspector
var imagemin = require('gulp-imagemin');				//Img minify
var rename = require("gulp-rename");

gulp.task('clean-dev', function(){
	return gulp.src('./dev', {read: false})
		.pipe(clean())
});

gulp.task('img', ['clean-dev'], function(){
    return gulp.src('./src/img/*.png')
        .pipe(gulp.dest('./dev/img'))
});

gulp.task('sass', ['img'], function(){
    return gulp.src('./src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
		.pipe(cleanCSS({compatibility: 'ie8'}))				// minifyCSS after sourcemaps and sass
		.pipe(rename(function (path) {						// function of rename extname for .css
			path.extname = ".min.css";
		 }))
        .pipe(gulp.dest('./dev/css'))
});

gulp.task('serve', ['sass'], function (){
    browserSync.init({
        server: "./"
    });

    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch("./index.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve'], function(){
    console.log('=== ALL DONE ===')
});
