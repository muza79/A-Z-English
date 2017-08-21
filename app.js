$(document).ready(function(){

  var  header = $("header");
  var hamburgerMenu = $(".hamburger__menu");
  var hamburger = $(".hamburger");
  var menu = $(".menu")
  var cross = $(".cross")

  //nav border-bottom appear

$(window).on("scroll", function() {

if (($(document).scrollTop()) > 5) {
  header.css("borderBottom", "2px solid #17264f");
} else {
  header.css("borderBottom", "0");
}

});

//----------------------------- nav border-bottom appear

//hamburger

hamburger.on("click", function() {

  hamburgerMenu.slideToggle("slow", function () {
    hamburger.hide();
    cross.show();
  });
});

cross.on("click", function() {

  hamburgerMenu.slideToggle("slow", function () {
    cross.hide();
    hamburger.show();
  });
});


if ($(window).width()>1200) {

  hamburgerMenu.toggleClass("menu")

}

//-------------------------------- hamburger


});//FINITO
