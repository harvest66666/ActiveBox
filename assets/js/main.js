$(document).ready(function () {

	//! header fixed  
	let header = $("#header");
	let intro = $("#intro");
	let introHeight;
	let nav = $("#nav");
	let navToggle = $("#navToggle");


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

		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset - 70
		});

	});


	//! Nav Toggle

	navToggle.on("click", function (event) {
		event.preventDefault();

		nav.toggleClass("show");
	});


	// slick slider
	let slider = $("#clients-Slider");

	slider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: true
	});
});