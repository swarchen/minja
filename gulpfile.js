var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browserSync', function(){
	browserSync.init({
		server:{
			baseDir:'.'
		}
		})
	})

gulp.task('watch', ['browserSync'], function(){
	gulp.watch('scss/*.scss', browserSync.reload);
	gulp.watch('js/*.js', browserSync.reload);
	gulp.watch('index.html', browserSync.reload);
	})