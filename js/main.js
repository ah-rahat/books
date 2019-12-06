$(window).on("scroll", function(){
	if ($(window).scrollTop()) {
		$('nav').addClass('black');
	}
	else{
		$('nav').removeClass('black');
	}
})
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
 