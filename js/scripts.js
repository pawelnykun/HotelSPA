//initialize map
function initMap() {
	var location = {
		lat: 49.723108,
		lng: 19.064395
	};

	var settings = {
		zoom: 11,
		center: location
	}

	var map_icon = 'img/map_marker.png';

	var map = new google.maps.Map(document.getElementById("map"), settings);
	var marker = new google.maps.Marker({
		position: location,
		icon: map_icon,
		map: map
	});
}

$(document).ready(function() {
	/* packets slider */
	$('.packets-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		arrows: true,
		prevArrow: "<img class='slick-prev' src='img/section_packets_arrow_left.png' alt='Previous' />",
		nextArrow: "<img class='slick-next' src='img/section_packets_arrow_right.png' alt='Next' />",
		responsive: [
			{
				breakpoint: 1420,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					autoplay: true
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true
				}
			}
		]
	});
	/* spa slider */
	$('.spa-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		arrows: true,
		prevArrow: "<div class='slick-prev prev-btn'><img src='img/left_button.png' alt='Previous' /></div>",
		nextArrow: "<div class='slick-next next-btn'><img src='img/right_button.png' alt='Next' /></div>"
	});

	$('.spa-slider').append("<div class='pause-btn'><img src='img/pause_button.png' alt='Pause' /></div>");
	$('.spa-slider > .pause-btn').on('click', function() {
		if ($(this).hasClass('pulse')) {
			$(this).removeClass('pulse');
			$('.spa-slider').slick('slickPlay');
		} else {
			$(this).addClass('pulse');
			$('.spa-slider').slick('slickPause');
		}
	});
	/* conferences slider */
	$('.conf-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		arrows: true,
		prevArrow: "<div class='slick-prev prev-btn'><img src='img/left_button.png' alt='Previous' /></div>",
		nextArrow: "<div class='slick-next next-btn'><img src='img/right_button.png' alt='Next' /></div>"
	});

	$('.conf-slider').append("<div class='pause-btn'><img src='img/pause_button.png' alt='Pause' /></div>");
	$('.conf-slider > .pause-btn').on('click', function() {
		if ($(this).hasClass('pulse')) {
			$(this).removeClass('pulse');
			$('.conf-slider').slick('slickPlay');
		} else {
			$(this).addClass('pulse');
			$('.conf-slider').slick('slickPause');
		}
	});

	//scrollTo#
	$('a').click(function() {
		var href = $(this).attr("href");
    	$('html, body').animate({
      		scrollTop: $(href).offset().top
    	}, 500);
    return false;
	});

	//scrollTopButton
	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
			$('.scrollTopButton').addClass('show');
		} else {
			$('.scrollTopButton').removeClass('show');
		}
	});
 
	$('.scrollTopButton').click(function() {
		$('html, body').animate({scrollTop: 0}, 400, 'linear');
	});

	//Hamburger
	(function hamburger () {
	    var toggleMenu = $('.toggle-menu'), 
	    	hamburger = $('.hamburger'),
	    	nav = $('nav');

	    toggleMenu.click(function() {
	        if ( hamburger.hasClass('hamburger clicked') || nav.hasClass('open') ) {
	            hamburger.removeClass('clicked');
	            nav.removeClass('open');
	        } else if ( hamburger.hasClass('hamburger') || nav.hasClass('menu') ) {
	            hamburger.addClass('clicked');
	            nav.addClass('open');
	        }
	    });
	})();

	//Fade menu effect
	var previousScroll = 0;

  	$(window).scroll(function() {
  		var currentScroll = $(this).scrollTop();
  		if (!$('nav').hasClass('open') && currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){
  			if (currentScroll > previousScroll) {
	        	window.setTimeout(hideNav, 300);
	  		} else {
	  			window.setTimeout(showNav, 300);
	  		}
	  		previousScroll = currentScroll;
	  	}
  	});

  	function hideNav() {
	    $('nav').fadeOut();
	}

	function showNav() {
		$('nav').fadeIn();
	}
});