const mix = require('laravel-mix');
mix
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .vue()
    .sourceMaps()
    .browserSync({
        proxy: 'http://localhost:8000',
        files: ['public/**/*', 'routes/**/*', 'app/**/*', 'resources/views/**/*.*'],
    });
