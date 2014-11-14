var gulp = require('gulp'); 

//Plugins
var del = require('del');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var addsrc = require('gulp-add-src');

var htmlmin = require('gulp-htmlmin');
var html2js = require('gulp-html2js');
var ngAnnotate  = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var wrap = require('gulp-wrap');

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

        //Add other JavaScript sources
        .pipe(addsrc('src/scripts/module.js'))
        .pipe(addsrc('src/scripts/*/*.js'))

        //Wrap the concatenated files in an IIFE to prevent global namespace pollution
        .pipe(wrap('(function(){\r\n\r\n<%= contents %>\r\n\r\n}(angular));'))

        //Start Source Mapping
        .pipe(sourcemaps.init())

        //Add Angular annotations
        .pipe(ngAnnotate())

        //Concat sources into single file
        .pipe(concat('object-table.js'))

        //Output concatenated source
        .pipe(gulp.dest('dist'))

        //Minify source
        .pipe(rename('object-table.min.js'))
        .pipe(uglify())

        //Output source map
        .pipe(sourcemaps.write('.'))

        //Output minified source
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