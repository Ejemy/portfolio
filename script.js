import * as mathjs from "https://cdn.skypack.dev/mathjs@11.6.0";
$(document).ready(function () {
  $("#works").click(function (event) {
    event.stopPropagation();

    switch (event.target.id) {
      case "one" && truthy:
        window.open(
          "https://GroceryList-with-users.ejemy1.repl.co",
          "_blank",
          "noreferrer"
        );
        break;
      case "two" && truthy:
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
      
      
      if(half < -200){
       $(this).css({
        "filter": "blur(2px)",
        "opacity": "0.5"
    });
      $(this).siblings("p").css({
        "visibility":"visible",
        "top": "-20em",
        "padding": "2em"
      });
      } else{
        $(this).css({
          "filter": "blur(0px)",
          "opacity": "0.5"
      });
        $(this).siblings("p").css({
          "visibility":"hidden",
          "top": "0em",
          "padding": "0em"
        })
      }
    })
    
    
  });
  var truthy = true;
  $(".wrapper2").click(function (e) {
    $(".contact-me").addClass("show-me");
    $("body >*:not(.contact-me)").addClass("blur");
    truthy = false;
    
  });
  
  $("#close, body >*").not("nav, .contact-me*").on("click", function (e) {

    if($(!truthy)){
      $(".contact-me").removeClass("show-me");
      $("body >*:not(.contact-me)").removeClass("blur");
      truthy = true;
    }
    
  });
  var fields = {};
  $("form").on("submit", function(e){
    e.preventDefault();
    fields.name = $("name");
    fields.email = $("email");
    fields.message = $("message");


    const isValid = function(){
      if(!notEmpty(fields)){
        $("#returnmessage").text("No empty fields please!");
        return false;
      }
      else if(!validEmail(fields.email)){
        $("#returnmessage").text("Email is invalid!");
        return false;
      }
      else{
        $("#returnmessage").text("Sending!");
        return true
      }

    }
    const validEmail = function(email){
      let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      console.log("valid email?")
      regex.test(String.email.toLowerCase());
    }
    const notEmpty = function(value){
      console.log("not empty?")
      if(value.name == "" || value.message == ""){
        return false;
      } else {
        return true;
      }
    }

    if(isValid){
      var formData = $("form").serialize();
      console.log(formData)
      $.ajax({
        type: 'POST',
        data: formData
    })
    .done(function(res){
      $("#email").val(" ");
      $("#name").val(" ");
      $("#message").val(" ");
    })
    }
  })
  

});
