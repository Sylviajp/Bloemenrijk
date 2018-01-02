jQuery(document).ready(function () {
	jQuery('.menu-trigger').click(function () {
		jQuery('.navMenu').slideToggle(400, function () {
			jQuery(this).toggleClass('nav-expanded').css('display', '');
		});
	});
});

$('#pag').on('click', function () {
	$('body, html').animate({
		scrollTop: $('#overOns').offset().top
	}, 1200);
});

$('#arrow2').on('click', function () {
	$('body, html').animate({
		scrollTop: $('#pag1').offset().top
	}, 1200);
});


$('#arrow3').on('click', function () {
	$('body, html').animate({
		scrollTop: $('#contact').offset().top
	}, 1200);
});

$('#gaToHome').click(function () {
	$('body, html').animate({
		scrollTop: 0
	}, 1200, 'linear');
});


function doorgaan(idPag) {
	$("html, body").animate({
		scrollTop: $(idPag).offset().top
	}, 1200);
};

$(function () {
	$("a[href^='#']").click(function () {
		var anchor = $(this).attr("href");
		doorgaan(anchor);

	});
})
