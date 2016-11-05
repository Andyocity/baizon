//Core.js

// Scroll to About
$(document).on("click","a[name='about']", function (e) {
    $('html, body').animate({
      scrollTop: ($('.about').first().offset().top)
    },700);
});

// Scroll to Projects
$(document).on("click","a[name='projects']", function (e) {
    $('html, body').animate({
      scrollTop: ($('.projects').first().offset().top)
    },700);
});

// Scroll to Education
$(document).on("click","a[name='education']", function (e) {
    $('html, body').animate({
      scrollTop: ($('.education').first().offset().top)
    },700);
});

// Scroll to Contact
$(document).on("click","a[name='contact']", function (e) {
    $('html, body').animate({
      scrollTop: ($('.contact').first().offset().top)
    },700);
});

//Scroll to Top
$(document).on("click","a[name='top']", function (e) {
    $('html, body').animate({
      scrollTop: ($('.siteBanner').first().offset().top)
    },700);
});

//Net
$(document).on("click","a[name='net']", function (e) {
  alert("My God. #TheNet");
});

//Animate Scroll In
$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      $('.topScroll').fadeIn();
    } else {
      $('.topScroll').fadeOut();
    }
  });
});
