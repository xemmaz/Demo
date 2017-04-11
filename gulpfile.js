var gulp		=	require('gulp');
var concat		=	require('gulp-concat');
var browserSync	=	require('browser-sync');
var cleanCSS 	= 	require('gulp-clean-css');

gulp.task('css', function(){
	return gulp.src([
				'./app/vendor/normalize-css/normalize.css',
				'./app/assets/base.css',
				'./app/vendor/animate.css/animate.css'])
			.pipe(concat('estilo.css'))
			.pipe(cleanCSS())
			.pipe(gulp.dest('./app/assets'));
});

gulp.task('css-watch', ['css'], browserSync.reload);
gulp.task('html-watch', browserSync.reload);

gulp.task('watch', function(){
	browserSync({
		server: {
			baseDir: './app/'
		}
	});
	gulp.watch('./app/assets/base.css', ['css-watch']);
	gulp.watch('./app/*.html', ['html-watch']);
});

gulp.task('default', ['css','watch']);