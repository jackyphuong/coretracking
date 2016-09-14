var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    ts = require('gulp-typescript'),
    tsProject = ts.createProject('tsconfig.json'),
    runSequence = require("run-sequence"),
    rimraf = require('gulp-rimraf'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    ftp = require('vinyl-ftp'),
    minimist = require('minimist'),
    gutil = require('gulp-util'),
    args = minimist(process.argv.slice(2));

gulp.task('clean', function () {
    return gulp.src(['./dist'], { read: false, base: './' })
        .pipe(rimraf({ force: true }));
});

gulp.task('sass', function () {
    return gulp.src('./scss/bootstrap/bootstrap.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist/www/public/assests/css'));
});

gulp.task('compile', function () {
    return gulp.src(['www/client/**/*.ts', './server/**/*.ts'], { base: './' })
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject)).js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", () => {
    return gulp.src(["www/**/*", "!**/*.ts", "!**/*.scss"])
        .pipe(gulp.dest('./dist/www'));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", () => {
    return gulp.src([
        'core-js/client/shim.min.js',
        'core-js/client/shim.min.js.map',
        'es6-shim/es6-shim.min.js',
        'systemjs/dist/system-polyfills.js',
        'systemjs/dist/system.src.js',
        'reflect-metadata/Reflect.js',
        'reflect-metadata/Reflect.js.map',
        'rxjs/**',
        'zone.js/dist/**',
        '@angular/**',
        'angular2-in-memory-web-api/**',
        'ng2-bootstrap/bundles/ng2-bootstrap.min.js',
        'ng2-bootstrap/bundles/ng2-bootstrap.min.js.map',
        'moment/moment.js'
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("./dist/www/public/assests/libs"));
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    gulp.watch(["server/**/*.ts", 'www/**/*.ts'], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["www/**/*.css", "scss/**/*.scss"], ['sass']).on('change', function (e) {
        console.log('CSS file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["www/**/*.*"], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
});

gulp.task('build:core', ['sass', 'compile', 'resources'], function () {
    console.log("FINISHED build core SUCCESSFULLY");
});

gulp.task('build', ['build:core', 'libs'], function () {
    console.log("FINISHED build SUCCESSFULLY");
});

gulp.task('rebuild', ['clean'], function () {
    gulp.start('build');
});

gulp.task('default', ['build']);

gulp.task('serve', ['build:core', 'watch'], function () {
    nodemon({
        script: 'dist/server/server.js',
        ext: 'js',
    }).on('restart', function () {
        setTimeout(function () {
        }, 500);
    });
});

gulp.task('deploy',  function () {
    var remotePath = '/site/wwwroot/';

    var conn = ftp.create({
        host: 'waws-prod-ch1-009.ftp.azurewebsites.windows.net',
        user: 'Coretracking\\deploy_user1',
        pass: 'Core@123',
        port: 21,
        secure:true,
        log: gutil.log
    });
    gulp.src(['dist/www/**/*.*'])
        .pipe(conn.newer(remotePath))
        .pipe(conn.dest(remotePath));
});