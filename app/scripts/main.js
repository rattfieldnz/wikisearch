require.config({
    paths: {
        'jquery': './vendor/jquery/dist/jquery',
        'bootstrap': './vendor/bootstrap/dist/js/bootstrap',
    },
    shim: {
        jquery: {
            exports: '$'
        },
        bootstrap: {
            deps: ['jquery']
        }
    },
    deps: ['jquery', 'bootstrap']
});
