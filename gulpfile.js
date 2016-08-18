var gulp = require('gulp');
var script = require('./tasks/script');
var moduleTask = require('./tasks/module');
var style = require('./tasks/style');
var watch = require('./tasks/watch');
var server = require('./tasks/server');

gulp.task('script', ['module:rebuild'], script);
gulp.task('script:build', [ 'module:rebuild'], script.build);

gulp.task('module', moduleTask);
gulp.task('module:rebuild', moduleTask.rebuild);

gulp.task('style', style);
gulp.task('style:build', style.build);

gulp.task('watch', watch);

gulp.task('server', ['script'], server);

gulp.task('default', ['script', 'style', 'watch', 'server']);

gulp.task('build', [ 'script:build', 'style:build']);
