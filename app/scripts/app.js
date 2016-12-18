var WikiApp = {

    Views: {},
    Models: {},
    Collections: {},
    Router: {}
};

$(document).ready(function(){
    WikiApp.Router.Instance = new WikiApp.Router();
    Backbone.history.start();
});