require.config({
    paths: {
        'jquery': 'vendor/jquery/dist/jquery',
        'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
        'underscore': 'vendor/underscore/underscore',
        'backbone': 'vendor/backbone/backbone',
        'backbone.babysitter': 'vendor/backbone.babysitter/lib/backbone.babysitter.js',
        'backbone.wreqr': 'vendor/backbone.wreqr/lib/backbone.wreqr.js',
        'backbone.marionette': 'vendor/backbone.marionette/lib/backbone.marionette.js',
        'html5shiv': 'vendor/html5shiv/dist/html5shiv',
        'respond': 'vendor/respond/dest/respond.src'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },
        marionette: {
            exports: 'Backbone.Marionette',
            deps: ['backbone']
        },
        bootstrap: {
            exports: "Bootstrap",
            deps: ['jquery']
        }
    },
    deps: ['jquery', 'bootstrap', 'underscore', 'backbone', 'html5shiv', 'respond']
});

require(['./views/app'], function(AppView) {
    new AppView;
});