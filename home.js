var loop = setInterval(function() {
    var clone = $(".photo li:first").clone(true);
    $(".photo li:first").animate({
    marginLeft : "-300px"
    }, {
    duration : 1000,
    complete : function() {
        $(".photo li:first").remove();
        clone.clone(true).insertAfter($(".photo li:last"));
    }
    });
}, 2000);
