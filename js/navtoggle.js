//responsive navbar toggle
$(document).ready(function(){
  //onclick of the mobile menu button (google calls it hanburger button)
  $('.hamburger-button').click(function() {
    $('.nav').addClass('nav-active');
    $('.mask').addClass('mask-visible');
  });
  //onclick of the mask (outside of the side navigation bar)
  $('.mask').click(function() {
    if($('.nav').hasClass('nav-active')) {
      $('.nav').removeClass('nav-active');
      $('.mask').removeClass('mask-visible');
    }
  });
});