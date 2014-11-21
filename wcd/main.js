

$(document).ready(function(){
  	//resize divs according to viewport
  	// $("#part1").height(window.innerHeight);
  	$(".slide").height(window.innerHeight);
  	

	//Fade out title
	var titleTop = parseInt($('#titleContainer').css('top').replace('px', ''));
	$(window).scroll(function(){
		var viewportTop = $(window).scrollTop();
		if (viewportTop > titleTop && $('.char1').css('visibility') == 'visible') {
			$('#title').textillate('out');
		}
		else if (viewportTop <= titleTop && $('.char1').css('visibility') == 'hidden'){
			$('#title').textillate('in');
		}
	});

	//background image parallax scrolling
	var viewportHeight = window.innerHeight;
	var percentOffset = window.innerHeight * 55 / 100;
	$(".backgroundImg").height(window.innerHeight + percentOffset + 10);
	$(".backgroundImg").css('top', -percentOffset);
	// when top of element at the bottom of the viewport
	$(".backgroundImg").attr("data-bottom-top","transform: translateY(" + (-percentOffset) + "px)");
	// $(".backgroundImg").attr("data-top-top","transform: translateY(0px)");
	// when bottom of element at the top of viewport
	$(".backgroundImg").attr("data-top-bottom", "transform: translateY(" + percentOffset + "px)");
	$("#part3 .backgroundImg").removeAttr("data-top-bottom");
	$("#part3 .backgroundImg").attr("data-top-top","transform: translateY(0px)");
	var s = skrollr.init({
		forceHeight: true,
		smoothScrolling: true
	});
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > window.innerHeight - document.getElementById("navigationBar").style.height) {
			$('.scrollToTop').fadeIn();
			$('.navBar').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
			$('.navBar').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});


$(function () {
	$('#title').textillate();

})