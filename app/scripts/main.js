require.config({
    paths: {
<<<<<<< HEAD
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
=======
        'jquery': 'vendor/jquery/dist/jquery',
        'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
        'html5shiv': 'vendor/html5shiv/dist/html5shiv',
        'respond': 'vendor/respond/dest/respond.src'
    },
    shim: {
       jquery: {
            exports: '$'
        },
>>>>>>> b069eddeebaee950347a3ec4d93af8e63386dfae
        bootstrap: {
            exports: "Bootstrap",
            deps: ['jquery']
        }
    },
<<<<<<< HEAD
    deps: ['jquery', 'bootstrap', 'underscore', 'backbone', 'html5shiv', 'respond']
});
=======
    deps: ['jquery', 'bootstrap','html5shiv', 'respond']
});

/*require(['./views/app'], function(AppView) {
    new AppView;
});*/
>>>>>>> b069eddeebaee950347a3ec4d93af8e63386dfae
