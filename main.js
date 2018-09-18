var loop = setInterval(function() {
    var clone = $(".items li:first").clone(true);
    $(".items li:first").animate({
    marginLeft : "-500px"
    }, {
    duration : 500,
    complete : function() {
        $(".items li:first").remove();
        clone.clone(true).insertAfter($(".items li:last"));
    }
    });
}, 1500);
