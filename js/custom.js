$(function(){

	// preeload
	$(window).load(function(){
		$('.preloader').delay(100).fadeOut(500);
	});

	// back to top
	$('.bktp i').click(function(){
		$('html, body').animate({
		scrollTop:0
		}, 500 );
	});

	// back to top show and hide
	$(window).scroll(function(){
		var btpShowHide = $(this).scrollTop();
	
		if (btpShowHide > 20) {
		$('.bktp i').fadeIn(500);
		} else {
		$('.bktp i').fadeOut(500);
		}
	});

	// banner slider
	$('.banner_main').slick({
		autoplay: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '.ban_prev',
		nextArrow: '.ban_next',
		dots: true,
	  });

	$(".typed").typed({
		strings: ["Designers", " Developers"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 60,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 50,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 100,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});

	// video plugin
	new VenoBox({
		selector: '.press_video',
	});
  
	// template slider
	$('.tpl_slider').slick({
		autoplay: true,
		centerMode: true,
		centerPadding: '150px',
		slidesToShow: 1,
		prevArrow: '.tpl_prev',
		nextArrow: '.tpl_next',
		dots: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1
			}
		}
		]
	});

	// mixitup
	var mixer = mixitup('.mixitup_uuid');

	// count up
	$('.counter').counterUp();

	// recent post slider
	$('.recent_slider').slick({
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '.recent_prev',
		nextArrow: '.recent_next'
	  });

	// brand logo slider
	
	$('.brand_main').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '.brnd_prev',
		nextArrow: '.brnd_next',
		dots: true,
	});

});