var elixir = require('laravel-elixir');

var base         = '../../../',
    node_modules = base + 'node_modules/';

elixir(function (mix) {

    mix.sass([
        node_modules + 'normalize-css/normalize.css',
        node_modules + 'font-awesome/css/font-awesome.css',
        base + 'scss/style.scss'
    ], 'css/app.min.css');

    mix.scripts([
        node_modules + 'jquery/dist/jquery.js',
        base + 'scripts/script.js'
    ], 'js/app.min.js');

    mix.copy(node_modules + 'font-awesome/fonts', 'fonts');
});
