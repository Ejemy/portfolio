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

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 300) {
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
