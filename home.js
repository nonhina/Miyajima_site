var windowWidth = $(window).width();
var windowSm = 640;
if (windowWidth <= windowSm) {
  var loop = setInterval(function() {
      var clone = $(".photo li:first").clone(true);
      $(".photo li:first").animate({
      marginLeft : "-150px"
      }, {
      duration : 1000,
      complete : function() {
          $(".photo li:first").remove();
          clone.clone(true).insertAfter($(".photo li:last"));
      }
      });
  }, 2500);

} else {
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
  }, 2500);

}
