import * as mathjs from "https://cdn.skypack.dev/mathjs@11.6.0";
$(document).ready(function () {
  $("#works").click(function (event) {
    event.stopPropagation();
    if(!$(".contact-me").hasClass("show-me")){
      switch(event.target.id){
        case "one":window.open(
        "https://github.com/Ejemy/GroceryList",
        "_blank",
        "noreferrer"
      )
      break;
      case "two": window.open(
        "https://github.com/Ejemy/it_ticketing_system",
        "_blank",
        "noreferrer"
      )
      break;
      case "three": window.open(
        "https://github.com/Ejemy/portfolio",
        "_blank",
        "noreferrer"
      )
      break;
      case "four": window.open(
        "https://github.com/Ejemy/PhotoShare",
        "_blank",
        "noreferrer"
      )
      break;
      }
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
  $(".wrapper2").click(function (e) {
    $(".contact-me").addClass("show-me");
    $("body >*:not(.contact-me)").addClass("blur");
    
  });
  
  $("#close, body >*").not("nav, .contact-me*").on("click", function (e) {
      $(".contact-me").removeClass("show-me");
      $("body >*:not(.contact-me)").removeClass("blur");
    
  });
  $("form").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(document.getElementById("form"));
    console.log(formData)
    var fields = {};
    for(const [key, value] of formData){
      fields[key] = value;
    }
    console.log(fields)
    const isValid = function(obj){
      if(validEmail(obj.email) && notEmpty(obj)){
        $("#returnmessage").text("Sending!");
        return true
      }
    }
    const validEmail = function(email){
      console.log(email)
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      console.log("valid email?")
      if(!regex.test(email.toLowerCase())){
        $("#returnmessage").text("Email is invalid!");
        return false;
      } 
      console.log("email good")
      return true;
      
    }
    const notEmpty = function(value){
      console.log("not empty?")
      if(value.name == "" || value.message == ""){
        $("#returnmessage").text("No empty fields please!");
        return false
      } 
      console.log("no empty fields OK")
      return true;
    }

    if(isValid(fields)){
      fetch(e.target.action,{
        method: form.method,
        body: JSON.stringify(fields),
        headers: {
            'Accept': 'application/json'
        }
      })
    .then(response =>{
      if(response.ok){
        document.getElementById("form").reset();
      } else{
        response.json().then(data=>{data})
      }
    })
    }
  })
  

});
