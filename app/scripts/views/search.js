WikiApp.Views.Search = Backbone.View.extend({

    initialize: function(options) {},

    template: "<input type='text' placeholder='search'> \
               <button>Search</button> \
               <ul id='wiki-list'></ul>",

    getWikis: function() {

        var keywords = this.$el.find('input').val();
        var wikis = new WikiApp.Collections.Wikis({keywords: keywords});

        wikis.fetch();
    },

    events: {
        'click button' : 'getWikis'
    },

    render: function()
    {
        this.$el.html(this.template);
        return this;
    }
});