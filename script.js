import * as mathjs from "https://cdn.skypack.dev/mathjs@11.6.0";
$(document).ready(function () {
  var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
  $("#works").click(function (event) {
    event.stopPropagation();
    /*
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
    */
  });
  var pswitch = true;
  $(".work").click(function(e){
    var anchor = $(this).children("a");
    if(!$(e.target).is(anchor)) {
      pswitch = !pswitch
    }
    if(!pswitch){
      
      $(this).children("p").css({
        "opacity":"1",
        "top": "-20em",
        "padding": "2em"
      });
    } else {
      
      $(this).children("p").css({
        "opacity":"0",
        "top": "0",
        "padding": "0"
      });
    }
  })

  $("body").on("scroll", function (e) {
    if($("body").scrollTop() > 100){
      $(".fa-arrow-down").addClass("d-none")
    } else {
      $(".fa-arrow-down").removeClass("d-none")
    }
    if ($("body").scrollTop() > 300) {
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

    /*
    $(".about-works img").each(function(){

      var screenhalf = $(window).height()/2;
      var imgtop =$(this).offset().top - $(document).scrollTop();
      var half = imgtop - screenhalf;
      var blurstrength = (half / -50) / 2;
      var screenW = $(window).width();
      

      if(half < -200 && screenW > 600){
       $(this).css({
        "filter": "blur(2px)",
        "opacity": "0.5"
    });
      $(this).siblings("p").css({
        "visibility":"visible",
        "top": "-20em",
        "padding": "2em"
      });
      } else if (half >= -200 && screenW > 600){
        $(this).css({
          "filter": "blur(0px)",
          "opacity": "0.5"
      });
        $(this).siblings("p").css({
          "visibility":"hidden",
          "top": "0em",
          "padding": "0em"
        })
      } else {
        $(this).siblings("p").css({
          "visibility": "visible"
        })
      } 
    })
    */
  
  });
 
  $(".wrapper2").click(function (e) {
    if($(this).attr("id") == "contact"){
      $(".contact-me").addClass("show-me");
      $("body >*:not(.contact-me)").addClass("blur");
      $("body").css("overflow", "hidden");
    } else{
      window.open(
        "https://github.com/Ejemy/",
        "_blank",
        "noreferrer"
      )
    }
  });
  var globedisplay = true;
  $("#globe").click(function(e){
    if(globedisplay){
      $(this).siblings("ul").css({"display": "block"})
    } else{
      $(this).siblings("ul").css({"display": "none"})
    }
    globedisplay = !globedisplay
  })
  
  $(".lang").click(function(e){
    let japanese = document.querySelectorAll("#jp");
    let english = document.querySelectorAll("#en");
    if($(this).attr("id") == "jpli"){
      japanese.forEach(item=>{
        item.style.display = "block"
      })
      english.forEach(item =>{
        item.style.display = "none"
      })
    } else if($(this).attr("id")=="enli"){
      japanese.forEach(item=>{
        item.style.display = "none"
      })
      english.forEach(item =>{
        item.style.display = "block"
      })
    }
  })

  $("#close, body >*").not("nav, .contact-me*").on("click", function (e) {
      $(".contact-me").removeClass("show-me");
      $("body >*:not(.contact-me)").removeClass("blur");
      $("body").css("overflow", "auto");

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
