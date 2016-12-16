require.config({
    paths: {
        'jquery': './vendor/jquery/dist/jquery',
        'bootstrap': './vendor/bootstrap/dist/js/bootstrap',
        'underscore': './vendor/underscore/underscore',
        'backbone': './vendor/backbone/backbone',
        'html5shiv': './vendor/html5shiv/dist/html5shiv',
        'respond': './vendor/respond/dest/respond.src'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },
        bootstrap: {
            exports: "Bootstrap",
            deps: ['jquery']
        }
    },
    deps: ['jquery', 'bootstrap', 'underscore', 'backbone', 'html5shiv', 'respond']
});