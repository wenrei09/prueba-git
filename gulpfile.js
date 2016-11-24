'use-strict';
var gulp = require ('gulp');
var sass = require ('gulp-sass');
var navegador = require ('browser-sync');

gulp.task('mover', function (){
	gulp.src('./src/bower_components/bootstrap/dist/css/bootstrap.min.css')
	.pipe(gulp.dest('./dist/css'));

	gulp.src('.src/bower_components/bootstrap/dist/js/bootstrap.min.js')
	.pipe(gulp.dest('./dist/js'));

	gulp.src('.src/bower_components/jquery/dist/js/jquery.min.js')
	.pipe(gulp.dest('./dist/js'));

	gulp.src('.src/bower_components/bootstrap/dist/fonts/*.*')
	.pipe(gulp.dest('./dist/fonts'));

	gulp.src('.src/img/*.*').pipe(gulp.dest('./dist/img'));
});

//sass

gulp.task('sass', function(){
	gulp.src('./src/sass/*.sass')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./dist/css'));
})


//SERVIDOR

gulp.task('server', function(){
	//Servidor
	var files = [
	'./dist/*.html',
	'./dist/css/*.css',
	'./dist/js/*.js',
	];

	navegador.init(files, {
		server: {
			baseDir:'./dist/'
		}
	})

});

//Tarea por Defecto

gulp.task('default',['server'],function(){
	gulp.watch('.src/sass/*.sass',['sass']);
	gulp.watch('.src/img/*.*',['mover']);

});