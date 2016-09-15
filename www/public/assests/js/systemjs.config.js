/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
// // (function (global) {
// //     // map tells the System loader where to look for things
// //     var map = {
// //         'app': 'client', // 'dist',
// //         '@angular': 'assests/libs/@angular',
// //         'angular2-in-memory-web-api': 'assests/libs/angular2-in-memory-web-api',
// //         'rxjs': 'assests/libs/rxjs',
// //         'moment': 'assests/libs/moment/moment.js'        
// //     };
// //     // packages tells the System loader how to load when no filename and/or no extension
// //     var packages = {
// //         'app': { main: 'main.js', defaultExtension: 'js' },
// //         'rxjs': { defaultExtension: 'js' },
// //         'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
// //     };
// //     var ngPackageNames = [
// //         'common',
// //         'compiler',
// //         'core',
// //         'forms',
// //         'http',
// //         'platform-browser',
// //         'platform-browser-dynamic',
// //         'router',
// //         'router-deprecated',
// //         'upgrade',
// //     ];
// //     // Individual files (~300 requests):
// //     function packIndex(pkgName) {
// //         packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
// //     }
// //     // Bundled (~40 requests):
// //     function packUmd(pkgName) {
// //         packages['@angular/' + pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
// //     }
// //     // Most environments should use UMD; some (Karma) need the individual index files
// //     var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
// //     // Add package entries for angular packages
// //     ngPackageNames.forEach(setPackageConfig);
// //     var config = {
// //         map: map,
// //         packages: packages
// //     };
// //     System.config(config);
// // })(this);


/**
* System configuration for Angular 2 samples
* Adjust as necessary for your application needs.
*/
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'libs:': 'assests/libs/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'client',
            // angular bundles
            '@angular/core': 'libs:@angular/core/bundles/core.umd.js',
            '@angular/common': 'libs:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'libs:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'libs:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'libs:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'libs:@angular/http/bundles/http.umd.js',
            '@angular/router': 'libs:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'libs:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs': 'libs:rxjs',
            'angular2-in-memory-web-api': 'libs:angular2-in-memory-web-api',
            'moment': 'libs:moment/moment.js',
            //'ng2-charts':                 'npm:ng2-charts'
            // ag libraries
            'ag-grid-ng2': 'libs:ag-grid-ng2',
            'ag-grid': 'libs:ag-grid',
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'ag-grid-ng2': {
                defaultExtension: "js"
            },
            'ag-grid': {
                defaultExtension: "js"
            },
            // 'ng2-charts': {
            //     defaultExtension: 'js'
            // }
        }
    });
})(this);
