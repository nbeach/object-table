var gulp = require('gulp'); 

//Plugins
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var addsrc = require('gulp-add-src');

var htmlmin = require('gulp-htmlmin');
var html2js = require('gulp-html2js');
var ngannotate = require('gulp-ng-annotate');
var uglifyjs = require('gulp-uglifyjs');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var karma = require('karma').server;


//Clean
gulp.task('clean', function() {
    return gulp.src('dist/*', {read: false})
        .pipe(clean());
});


//Build
gulp.task('dist', function() {
    return gulp.src('src/views/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(html2js({ outputModuleName: 'objectTable', base: 'src' }))
        .pipe(addsrc('src/scripts/**/*.js'))
        .pipe(ngannotate())
        .pipe(concat('object-table.js'))
        .pipe(gulp.dest('dist'))
        .pipe(sourcemaps.init())
        .pipe(rename('object-table.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
        
});


//Karma
gulp.task('karma', function (done) {
  karma.start({
    singleRun: true
  }, done);
});

//Watcher
gulp.task('watch', function() {
    gulp.watch('src/scripts/**/*.js', ['dist']);
    gulp.watch('src/views/**/*.html', ['dist']);
});

// Default Task
gulp.task('default', ['dist']);