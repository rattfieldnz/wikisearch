var Wikis = Backbone.Collection.extend({

    initialize: function(options){
        if (options.keywords){
            this.keywords = options.keywords;
        }
    },

    url: function()
    {
        return "https://en.wikipedia.org/w/api.php?" +
            "format=json&action=query&generator=search" +
            "&gsrnamespace=0&gsrlimit=&prop=pageimages|extracts" +
            "&pilimit=max&exintro&explaintext&exsentences=1" +
            "&exlimit=max&gsrsearch="+this.keywords;
    },

    parse: function(response)
    {
        return response.query;
    }
}); 