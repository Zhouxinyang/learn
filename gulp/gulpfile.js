/**
 * Created by Zxy on 2017/3/18.
 */
var gulp = require('gulp');
gulp.task('test',function(){
    console.log('aaa');
});
gulp.task('test1',function(){
    console.log('ccc');
});
gulp.task('test2',['test','test1']);
gulp.task('copy-html',function(){
    gulp.src('index.html').pipe(gulp.dest('dist'));
});