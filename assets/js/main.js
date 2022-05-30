$(document).ready(function () {

	//! header fixed  
	let header = $("#header");
	let intro = $("#intro");
	let introHeight;

	$(window).on("scroll load resize", function () {
		let introHeight = intro.innerHeight();
		if ($(this).scrollTop() > introHeight) {
			header.addClass('fixed');
		} else {
			header.removeClass('fixed');
		}
	});

	//! smooth scroll 
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		let elementId = $(this).data("scroll");
		let elementOffset = $(elementId).offset().top;

		$("html, body").animate({
			scrollTop: elementOffset - 100
		});

	});
});