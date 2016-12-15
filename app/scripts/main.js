require.config({
    paths: {
        'jquery': 'vendor/jquery/dist/jquery',
        'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
        'html5shiv': 'vendor/html5shiv/dist/html5shiv',
        'respond': 'vendor/respond/dest/respond.src'
    },
    shim: {
       jquery: {
            exports: '$'
        },
        bootstrap: {
            exports: "Bootstrap",
            deps: ['jquery']
        }
    },
    deps: ['jquery', 'bootstrap','html5shiv', 'respond']
});

/*require(['./views/app'], function(AppView) {
    new AppView;
});*/