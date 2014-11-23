var viewportHeight = window.innerHeight;
var percentOffset = viewportHeight * 55 / 100;
var bgimgHeight = viewportHeight + percentOffset + 20;
var bgimgTop = -percentOffset;
$(document).ready(function(){
	//smooth scrolling
	ssc_init();

  	//resize divs according to viewport
  	// $("#part1").height(window.innerHeight);
  	$(".slide").height(viewportHeight);

	//Fade out title
	// var titleTop = parseInt($('#titleContainer').css('top').replace('px', ''));
	// $(window).scroll(function(){
	// 	var viewportTop = $(window).scrollTop();
	// 	if (viewportTop > titleTop && $('.char1').css('visibility') == 'visible') {
	// 		$('#title').textillate('out');
	// 	}
	// 	else if (viewportTop <= titleTop && $('.char1').css('visibility') == 'hidden'){
	// 		$('#title').textillate('in');
	// 	}
	// });

	//parallax scrolling effects

	$(".backgroundImg").height(bgimgHeight);
	$(".backgroundImg").css('top', bgimgTop);
	// when top of element at the bottom of the viewport
	$(".backgroundImg").attr("data-bottom-top","-webkit-transform: translateY(" + (bgimgTop) + "px)");
	// $(".backgroundImg").attr("data-top-top","transform: translateY(0px)");
	// when bottom of element at the top of viewport
	$(".backgroundImg").attr("data-top-bottom", "-webkit-transform: translateY(" + percentOffset + "px)");
	$("#part3 .backgroundImg").removeAttr("data-top-bottom");
	$("#part3 .backgroundImg").attr("data-top-top","-webkit-transform: translateY(0px)");
	// $(".navBar").attr("data-bottom-bottom", "background-color: rgba(0,0,0,0.1)");
	// $(".navBar").attr("data-top-top", "background-color: rgba(0,0,0,0.5)");
	// $("p").attr("data-bottom-center", "-webkit-transform: translateX(0px); opacity: 0;");
	// $("p").attr("data-center-center", "-webkit-transform: translateX(50px); opacity: 1;");
	// $(".navBar").attr("data-1-top-top", "position:fixed;");
	var s = skrollr.init({
		// forceHeight: true,
		smoothScrolling: true
	});
	
	//set nav bar to top when its top touches the top of viewport
	$(window).scroll(function(){
		if ($(this).scrollTop() > viewportHeight - $("#navigationBar").height()) {
			$('.navBar').css({"position":"fixed", "top":"0px"});
		} else {
			$('.navBar').removeAttr("top");
			$('.navBar').css({"position":"absolute", "top":"auto", "bottom":"0px"});
		}
	});

	//Click event to scroll to top
	$('#scrollUp').click(function(){
		$('html, body').animate({scrollTop : 0},2000);
		return false;
	});
	//Click event to scroll bottom
	$('#scrollDown').click(function(){
		$('html, body').animate({scrollTop : $(document).height()-viewportHeight},8000);
		return false;
	});
	$('footer').show();
});


$(function () {
	$('#title').textillate();
	// $('p').css({'display':'inline'});
})

$(function(){
				jQuery('.social-icon').on( 'mouseenter', function(e){
					jQuery(this).closest('.social').addClass('open');
				} );
				jQuery('.social-icon').on( 'click', function(e){
					e.preventDefault();
					if( jQuery(this).closest('.social').hasClass('clicked') ){
						console.log('neil');
						jQuery(this).closest('.social').removeClass('clicked');
					}else{
						jQuery(this).closest('.social').addClass('clicked');
					}
				} );
				jQuery('.social').on( 'mouseleave', function(){
					jQuery(this).closest('.social').removeClass('open');
				} )
			})