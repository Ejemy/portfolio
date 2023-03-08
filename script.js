import * as mathjs from "https://cdn.skypack.dev/mathjs@11.6.0";
$(document).ready(function () {
  $("#works").click(function (event) {
    event.stopPropagation();

    switch (event.target.id) {
      case "one":
        window.open(
          "https://GroceryList-with-users.ejemy1.repl.co",
          "_blank",
          "noreferrer"
        );
        break;
      case "two":
        window.open(
          "https://github.com/Ejemy/it_ticketing_system",
          "_blank",
          "noreferrer"
        );
    }
  });
  

  $(document).on("scroll", function (e) {
    var top = $("#image").position().top;

   



    if ($(document).scrollTop() > 300) {
      $(".wrapper").addClass("show");
    } else {
      $(".wrapper").removeClass("show");
    }
    $("#top").on("click", function (e) {
      e.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: 0
        },
        "300"
      );
    });




    $(".about-works img").each(function(){

      var screenhalf = $(window).height()/2;
      var imgtop =$(this).offset().top - $(document).scrollTop();
      var half = imgtop - screenhalf;
      var blurstrength = (half / -50) / 2;
      
      
      if(half < -100){
       $(this).css({
        "filter": "blur(3px)",
        "opacity": "0.5"
    });;
      $(this).siblings("p").css({"top": "-30%",
        "opacity": 1,
        "padding": "2em"});
      } else{
        $(this).css({
          "filter": "blur(0px)",
          "opacity": "0.5"
      });
        $(this).siblings("p").css({"top": "-20%",
        "opacity": 0,
        "padding": "1em"});
      }
    })
    
    
  });

  $(".wrapper2").click(function (e) {
    $(".contact-me").addClass("show-me");
    $("body >*:not(.contact-me)").addClass("blur");
    
  });
  $("#close").on("click", function (e) {
    $(".contact-me").removeClass("show-me");
    $("body >*:not(.contact-me)").removeClass("blur");
  });

  /*setInterval(() => {
    var x = ($(".work h3").position().top / $(".work").height()) * 100;

    console.log(x);
    if (x >= 149) {
      $(".work h3")
        .css("text-decoration", "underline");
    } else {
      $(".work h3").css("text-decoration", "none");
    }
  }, 20);
  */
});
