function scrollTo(element) {
	$("html, body").animate({scrollTop : $(element).offset().top - 45}, 700);
}