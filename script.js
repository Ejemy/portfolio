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

  $("img").each(function(index, ele){
    var arr = [];
    arr.push($(ele).position().top);
    console.log(arr)
    //console.log($(ele).position().top)

  })


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

    $("img").each(function(index, ele){
      var arr = [];
      //console.log(index)
      //arr[index].push($(ele).position().top);
      //console.log(arr)
      //console.log($(ele).position().top)
      if($(document).scrollTop() - $(ele).position().top >= -300){
      $("img").css("filter", "blur(3px)");
      $(".work p").css({"top": "-30%",
        "opacity": 1,
        "padding": "2em"});
      } else{
        $("img").css("filter", "blur(0)");
        $(".work p").css({"top": "-20%",
        "opacity": 0,
        "padding": "1em"});
      }
    })
    
    
  });

  $(".wrapper2").click(function (e) {
    $(".contact-me").addClass("show-me");
    $("html, body").addClass("blur");
    $(".contact-me").removeClass("blur");
  });
  $("#close").on("click", function (e) {
    $(".contact-me").removeClass("show-me");
    $("html, body").removeClass("blur");
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
