window.onunload = function() {};
function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}

sizecheck();
$(function () {
  if (w > 750) {
} else { 
  $("header .drawer").click(function(){
  $('body').toggleClass('nav-open');
  $('.menu-wrapper').fadeToggle(200);
    });
  $("menu-wrapper__list__item a").click(function(){
  $('body').toggleClass('nav-open');
  $('.menu-wrapper').fadeToggle(200);
    });
  }
}); 