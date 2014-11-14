var gulp = require('gulp'); 

//Plugins
var del = require('del');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var addsrc = require('gulp-add-src');

var htmlmin = require('gulp-htmlmin');
var html2js = require('gulp-html2js');
var ngAnnotate  = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var karma = require('karma').server;


//Clean
gulp.task('clean', function() {
    del('dist/*');
});


//Build
gulp.task('dist', function() {

    //Compile HTML views to AngularJS template cache modules and concat into single file
    return gulp.src('src/views/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(html2js({ outputModuleName: 'objectTable', base: 'src' }))
        .pipe(concat('views.js'))

    //Add other JavaScript sources and minify
        .pipe(addsrc('src/scripts/module.js'))
        .pipe(addsrc('src/scripts/*/*.js'))
        .pipe(sourcemaps.init())
        .pipe(ngAnnotate())
        .pipe(concat('object-table.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('object-table.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});


//Test
gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});


//Watch
gulp.task('watch', function() {
    gulp.watch('src/scripts/**/*.js', ['dist']);
    gulp.watch('src/views/**/*.html', ['dist']);
});

// Default Task
gulp.task('default', ['dist']);