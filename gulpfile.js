var elixir = require('laravel-elixir');

var base         = '../../../',
    node_modules = base + 'node_modules/';

elixir(function (mix) {

    mix.sass([
        node_modules + 'normalize-css/normalize.css',
        base + 'scss/style.scss'
    ], 'css/app.min.css');

    mix.scripts([
        node_modules + 'jquery/dist/jquery.js',
        base + 'scripts/script.js'
    ], 'js/app.min.js');
});
