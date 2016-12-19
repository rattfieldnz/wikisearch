$(function($) {

    /*$("#keyword-phrase").keyup(function(){
     let q = $("#keyword-phrase").val();
     getData(q);
     });*/

    $("#wiki-search").submit(function(event){
        var q = $("#keyword-phrase").val();
        var quantityResults = $("#limit-results").val();
        getData(q, quantityResults);
        event.preventDefault();
    });


    function getData(query, quantityResults){
        $.getJSON("http://en.wikipedia.org/w/api.php?callback=?",
            {
                srsearch: query,
                format: "json",
                action: "query",
                list: "search",
                srlimit: quantityResults,
                srinterwiki: "1",
                prop: "images|extracts",
            },
            function(data) {
                $("#search-results").empty();
                if(data.query !== 'undefined' && data.query != null){
                    $("#search-results").append("<h2 class='results text-center'>Results for <span class='query'>" + query + "</span></h2>");
                    $("#search-results").append("<ol id='list'></ol>");

                    $.each(data.query.search, function(i,item){
                        var info;
                        if(item.extract !== 'undefined' && item.extract != null){
                            info = item.extract;
                        }
                        else{
                            info = item.snippet;
                        }
                        $("#list").append(
                            "<li><div><a href='http://en.wikipedia.org/wiki/" +
                            encodeURIComponent(item.title) +
                            "' target='_blank' title='"+ item.title +"'>" +
                            item.title + "</a><br>"
                            + info + " ... <small>(<a href='http://en.wikipedia.org/wiki/" +
                            encodeURIComponent(item.title) +
                            "' target='_blank' title='"+ "See more of \""
                            + item.title + "\"'>"+ "See more" + "</a>).</small><br><br></div></li>");
                    });
                }
            });
    }

});