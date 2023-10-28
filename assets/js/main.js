(function ($) {
	"use strict";


	// shop -filter
	const shopFilterBtns = document.querySelectorAll('.shop-filter-btns button')
	const shopActiveSlider = document.querySelectorAll('.shop-active-slider')

	shopFilterBtns.forEach((btn, index) => {
		btn.addEventListener('click', ()=>{
			for (let i = 0; i < shopFilterBtns.length; i++) {
				shopFilterBtns[i].classList.remove('active')
			}
			for (let i = 0; i < shopActiveSlider.length; i++) {
				shopActiveSlider[i].classList.remove('active-tab')
			}

			btn.classList.add('active')
			shopActiveSlider[index].classList.add('active-tab')
		})
	});



	// side bar
	const bar = document.querySelector('.res-bars')
	const sidebarMenu = document.querySelector('.sidebar-menu')
	const sidebarMenuLink = document.querySelectorAll('.sidebar-menu .mainmenu ul li a')

	bar.addEventListener('click', ()=>{
		bar.classList.toggle('active')
		sidebarMenu.classList.toggle('active')
	})

	sidebarMenuLink.forEach(link => {
		link.addEventListener('click', ()=>{
			bar.classList.remove('active')
			sidebarMenu.classList.remove('active')
		})
	});






	// event tab
	const eventLink = document.querySelectorAll('.event-tab-link')
	const events = document.querySelectorAll('.event-item-wrap')

	eventLink.forEach((link, index) => {
		link.addEventListener('click', ()=>{
			for (let i = 0; i < eventLink.length; i++) {
				eventLink[i].classList.remove('active')
			}
			for (let i = 0; i < events.length; i++) {
				events[i].classList.remove('active')
			}

			link.classList.add('active')
			events[index].classList.add('active')
		})
	});


	// search box animation
	const searchInput = document.querySelector('.search-input input')
	const resSearchBtn = document.querySelector('.res-search-btn')
	const searchBox = document.querySelector('.search-box')

	searchInput.addEventListener('focus', ()=>{
		searchBox.classList.add('active')
	})
	searchInput.addEventListener('focusout', ()=>{
		if (searchInput.value == '') {
			searchBox.classList.remove('active')
		}
	})
	// responsive search icon
	resSearchBtn.addEventListener('click',()=>{
		resSearchBtn.classList.toggle('active')
		searchBox.classList.toggle('active-box')
	})




	/*=========================
	PRELOADER JS
	===========================*/
	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});

	// One Page Nav
	var top_offset = $('.header-area').height() - 170;
	$('.mainmenu ul, .sidebar-menu ul, .footer-menu ul').onePageNav({
		scrollOffset: top_offset,
	});


	// niceScroll
	$(".location-item-wrapper").niceScroll({
		cursorcolor:"var(--theme-color)",
		cursorwidth:"10px",
		background:"#fff",
		cursorborder:"1px solid var(--theme-color)",
		cursorborderradius: '10px'
	 }); 



	 
	/*=========================
	magnificPopup image JS
	===========================*/
	$('.play-video').magnificPopup({
		type: 'iframe'
	});

	// magnificPopup img view 
	$(".gallery-view").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});


 

	/*=========================
	Hero-slider SLIDER JS
	===========================*/
	function heroSlider() {
		var BasicSlider = $('.hero-active-slider');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-hero-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-hero-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: false,
			fade: true,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i>previous</button>',
			nextArrow: '<button type="button" class="slick-next">next<i class="fas fa-arrow-right"></i></button>',
			responsive: [{
				breakpoint: 1024,
				settings: {
				}
			},
			{
				breakpoint: 992,
				settings: {
					prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
					nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
				}
			}
		]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	heroSlider();


	/*=========================
	gallery-active-slider
	===========================*/
	 const galleryCounter = document.querySelector('.gallery-counter');
	 const gallerySlider = document.querySelector('.single-gallery-item').parentElement;
	 const galleryLength = document.querySelector('.gallery-length');
	 const indecator = document.querySelector('.indecator');
	
	 const gallerySliderChilds = gallerySlider.children.length;
	 const firstIndecatorWidth = 100 / gallerySliderChilds;

	 galleryLength.innerHTML = gallerySliderChilds;
	 indecator.style.width = `${firstIndecatorWidth}%`
	 
	$('.gallery-active-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		galleryCounter.innerHTML = nextSlide + 1;
		indecator.style.width = `${firstIndecatorWidth * (nextSlide + 1)}%`;
	 });
	 
	$('.gallery-active-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '20%',
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',

		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				centerPadding: '0px',
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				centerPadding: '0px',
			}
		}
	]
	});

	

	/*=========================
	about2-active-slider
	===========================*/
	$('.about2-active-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
	});


	/*=========================
	shop-active-slider
	===========================*/
	$('.shop-active-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
		
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	/*=========================
	category-active-slide
	===========================*/
	$('.category-active-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
		
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					arrows: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					arrows: true,
				}
			}
		]
	});






	// sticky
	var wind = $(window);
	var sticky = $('.header-area');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 100) {
			sticky.removeClass('sticky');
		} else {
			sticky.addClass('sticky');
		}
	});





	/*=========================
	SCROLL-UP JS
	===========================*/
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	/*=========================
	AOS JS
	===========================*/
	AOS.init({
		disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 1000, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
	});


	
})(jQuery);