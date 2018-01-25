$(function(){

  var isAtBottom = false;
  var position = $(window).scrollTop();

  $(window).on("scroll", function() {  
    var scroll = $(window).scrollTop();

  	var scrollHeight = $(document).height();
  	var scrollPosition = $(window).height() + $(window).scrollTop();

    if (scroll > position) {
      console.log("down");
      if (((scrollHeight - scrollPosition) / scrollHeight === 0) && isAtBottom === false) {
        isAtBottom = true;
        console.log(isAtBottom);
        $( "footer" ).animate({ bottom: "+=50" }, 200, function() {
        });
      }
    } else {
      console.log("up" + isAtBottom);
      if (isAtBottom === true) {
        isAtBottom = false;
        $( "footer" ).animate({ bottom: "-=50" }, 200, function() {
        });
      }
    }
    position = scroll;
  });

});
