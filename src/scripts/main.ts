import { getSVGs, Loading } from "./utilities/util";
import { Fullpage, FullpageOptions } from "./libraries/Fullpage";
import Axios from "axios";
import * as animation from "./animation/animation";
import { fstat } from "fs";

declare var Swiper:any;
declare var $:any;
declare var YT:any;
declare var moment:any;
declare var anime:any;


const initFullpage = () => {
	var player: any;
	// Init Youtube Video API
	var script = document.createElement('script');
	script.onload = function() {
		console.log("Script loaded and ready");
	};
	if(document.querySelector(".youtube-video")) {
		script.src = `https://www.youtube.com/iframe_api`;
		script.setAttribute("async", "");
		script.setAttribute("defer", "");
		document.getElementsByTagName('head')[0].appendChild(script);
		var youtuID = document.querySelector(".youtube-video").getAttribute("data-youtube-id");
	}
	
	(<any>window).YT.ready(function() {
		player = new (<any>window).YT.Player("VYT", {
	
		  videoId: `${youtuID}`,
		  playerVars: {
            // playlist: 'z1Ev1Z0cCG4,FG0fTKAqZ5g',
            // autoplay: 1,
			controls: 0,
			playsinline: 1,
			loop: 0,
			cc_load_policy: 1,
			color: "white",
			rel: 0,
        },
		  events: {
			'onReady': onPlayerReady,
		  	'onStateChange': onPlayerStateChange
		  }
		});
	  });
	   function onPlayerReady(event:any) {
		var time_update_interval:any;   
		// Update the controls on load
		updateTimerDisplay();
	
		// Clear any old interval.
		clearInterval(time_update_interval);
	
		// Start interval to update elapsed time display and
		// the elapsed part of the progress bar every second.
		time_update_interval = setInterval(function () {
			updateTimerDisplay();
		}, 1000)
      }

    
      var done = false;
      function onPlayerStateChange(event:any) {
        if (event.data == YT.PlayerState.PLAYING ) {
          document.querySelector(".bg-video").classList.add("hide")
          document.querySelector(".control-youtube .play-button").classList.remove("show")
          document.querySelector(".control-youtube .play-button").classList.add("hide")
        } else {
			document.querySelector(".bg-video").classList.remove("hide")
			document.querySelector(".control-youtube .play-button").classList.remove("hide")
			document.querySelector(".control-youtube .play-button").classList.add("show")
		
		}
      }
      function stopVideo() {
        player.stopVideo();
	  }
	  $('#play-big').on('click', function () {
	
		player.playVideo();
	});
	  $('#play').on('click', function () {
	
		player.playVideo();
	});
	
	$('#pause').on('click', function () {
		
		player.pauseVideo();
	});
	function updateTimerDisplay() {
		// Update current time text display.
		$('#current-time').text(formatTime(player.getCurrentTime()));
		$('#duration').text(formatTime(player.getDuration()));
	}

	function formatTime(time: any) {
		return moment(0).add(moment.duration({'seconds': time})).format('mm:ss');
	}

	// INIT FULLPAGE
	function loadFullpage () {
		if(window.innerWidth > 1100) {				
			let homePattern = document.querySelector("#home");
			if(homePattern){
				translateHomeText();
				// gridPattern(homePattern, 40, 20);	
			}
			const fpOptions: FullpageOptions = {
				prevEl: ".fp-prev",
				nextEl: ".fp-buttons__wrapper",
				speed: 800,
				slideClass: ".fp-slide",
				dots: true,
				on: {
					// event is fired before slide start transition
					beforeSlideChange: function (
						currentSlide,
						nextSlide,
						currentIndex,
						nextIndex,
					) {

						currentSlide.querySelector(".setting-section").classList.remove("show-content")
						if(currentSlide.querySelector(".youtube-video")) {
							player.pauseVideo();
						}

						if(currentIndex == 1) {
							document.querySelector("header").classList.remove("changed")
							document.querySelector(".fp-socials .fp-links__wrapper").classList.remove("changed")
						}
					},
					// event is fired after slide end transition
					afterSlideChange: function (currentSlide, currentIndex) {
						if(document.querySelector(".index-page")) {
							currentSlide.querySelector(".setting-section").classList.add("show-content")
							if(currentSlide.querySelector(".youtube-video")) {
								player.playVideo();
							}
							// console.log(currentSlide, currentIndex);
							if(currentIndex != 0) {
								// show and hide navigation bar when slide
								document.querySelector(".fp-dots").classList.remove("hide");
								document.querySelector(".fp-dots").classList.add("show");
								//show and hide logo when slide
								document.querySelector(".header__wrapper .logo").classList.remove("hide");
								document.querySelector(".header__wrapper .logo").classList.add("show")
							} else {
								document.querySelector(".fp-dots").classList.remove("show");
								document.querySelector(".fp-dots").classList.add("hide");
								//show and hide logo when slide
								document.querySelector(".header__wrapper .logo").classList.remove("show");
								document.querySelector(".header__wrapper .logo").classList.add("hide")
							}

							//
							if (currentIndex == 0) {
								setTimeout(() => {
									animation.allAnimeFullpageIndex__0();
								},  1500);
								// anime({
								// 	targets: '#home .block-animation-grid .square',
								// 	scale: [
								// 		{value: .1, easing: 'easeOutSine', duration: 500},
								// 		{value: 1, easing: 'easeInOutQuad', duration: 1200}
								// 	],
								// 	delay: anime.stagger(200, {grid: [40,40], from: 'center'}),
								// 	loop:true
								// });
								translateHomeText();
							}
							if(currentIndex == 1) {
								document.querySelector("header").classList.add("changed")
								document.querySelector(".fp-socials .fp-links__wrapper").classList.add("changed")
							}
						}

						// showPattern(currentIndex);
					},
				},
			};
			const fp = new Fullpage(".fp-container", fpOptions);
			// method slide to a slide with index
			fp.slideTo(0);
			// method allow or not allow scroll to slide fullpage: true = allow, false = not allow
			fp.canScroll(true);
			if(fp.getIndex() == 0 && document.querySelector(".index-page")) {
				document.querySelector(".fp-dots").classList.remove("show");
				document.querySelector(".fp-dots").classList.add("hide");
		
				//show and hide logo when slide
				document.querySelector(".header__wrapper .logo").classList.remove("show");
				document.querySelector(".header__wrapper .logo").classList.add("hide")

				animation.allAnimeFullpageIndex__0();
			}
			if(document.querySelector(".introduce-page")) {
					document.querySelector(".fp-dots").classList.add("hide")
			}

			const menuItems = document.querySelectorAll(".navigation .nav-item");
			menuItems.forEach((item) => {
				item.addEventListener("click", (e) => {
					e.preventDefault();
					const target = item.querySelector("a").getAttribute("fp-target");
					if(target){
						fp.scrollToSection(target);
						document.querySelector("header").classList.toggle("show");
					}
				})
			});

		}
	}
	loadFullpage();
	window.addEventListener('resize', function () {
		loadFullpage();
	})
}

function showPattern (currentIndex:Number) { 
	var dotsGridPatternEl = document.querySelectorAll('.block-animation-grid');
	
	[].forEach.call(dotsGridPatternEl, function(grid:any) {
		grid.innerHTML = '';
	});

	switch (currentIndex) {
		case 0:					
			let homePattern = document.querySelector("#home");
			if(homePattern){
				gridPattern(homePattern, 40, 20);
			}
			break;
		case 1:					
			let introducePattern = document.querySelector("#introduce");
			if(introducePattern){
				gridPattern(introducePattern, 40, 20);
			}
			break;
		case 4:					
			let utilitiesPattern = document.querySelector("#utilities");
			if(utilitiesPattern){
				gridPattern(utilitiesPattern, 40, 20);
			}
			break;
		case 7:					
			let contactPattern = document.querySelector("#contact");
			if(contactPattern){
				gridPattern(contactPattern, 40, 20);
			}
			break;
	
		default:
			break;
	}
}

// SETBACKGROUND IMAGE
const setBackgroundImageSection = () => {
	// PARAMS HERE !!!
	const datas = document.querySelectorAll("[fp-bg]");
	// ACTION !!!
	datas.forEach((item) => {
		const link = item.getAttribute("fp-bg");
		item.setAttribute("style", `background-image:url(${link})`);
	});
};

const swiperIntro = () => {
	const newsSlider = new Swiper('.intro--swiper .swiper-container', {
		spaceBetween: 20,
		autoplay: {
			delay: 400,
			disableOnInteraction: false,
		},
		speed: 1500,
		loop:true,

		breakpoints: {
			300: {
				slidesPerView: 1,
				autoplay: {
					delay: 2000,
				  },
				  loop: true,
			},
			767.98: {
				slidesPerView: 3,
				loop: false,
				autoplay: false,
			},
			1025: {
				slidesPerView: 3,
				loop: false,
				autoplay: false,
			}
		}
	});

	$('.intro--swiper .swiper-container').on('mouseenter', function () {
		newsSlider.autoplay.stop();
	})
	$('.intro--swiper .swiper-container').on('mouseleave', function () {
		newsSlider.autoplay.start();
	})
}


const swiperNews = () => {
	const swiper = new Swiper(".news-swiper .swiper-container" , {
		slidesPerView: 3.5,
		speed: 2000,
		loop: true,
		spaceBetween: 20,
		breakpoints:{
			300: {
				centeredSlides: true,
				slidesPerView: 1.5,
			},
			600: {
				centeredSlides: true,
				slidesPerView: 2.5
			},
			1100: {
				centeredSlides: false
			}
		}
	})
}

const toogleMenu = () => {
	document.querySelector(".hambuger--menu").addEventListener("click" , (e) => {
		document.querySelector("header").classList.toggle("show");
		setTimeout(() => {
			anime({
				targets: ".navigation .nav-item",
				translateX: 5,
				opacity: 1,
				delay: anime.stagger(100 , {start: 500})
			})
			anime({
				targets: ".navigation .language",
				translateX: 5,
				opacity: 1,
				delay: anime.stagger(100 , {start: 500})
			})
		}, 300);
		
	})
}

const swiperDetailNews = () => {
	const swiper = new Swiper(".content--slide .swiper-container" , {
		direction: 'vertical',
		spaceBetween: 20,
		speed: 1000,
		slidesPerView: 5
	})
}

const translateHomeText = () => {
	if(document.querySelector("#home .title")){
		anime.timeline({
			easing: 'easeOutExpo',
		})
			.add({
				targets: '#home .title',
				opacity: [0,1],
				duration: 1000,
				easing: "easeOutExpo",
				delay: 400
			})
			.add({
				targets: '#home .title p:first-child',
				translateX: [-40,40],
				translateZ: 0,
				opacity: [0,1],
				easing: "easeOutExpo",
				duration: 1200,
				delay: 400
			})
			.add({
				targets: '#home .title p:last-child',
				translateX: [-40,40],
				translateZ: 0,
				opacity: [0,1],
				easing: "easeOutExpo",
				duration: 1000,
				delay: 100
			})
	}
}

const gridPattern = (sectionEl: any, col:Number, row:Number) => {  
	var elementID = sectionEl.getAttribute("id");
	var gridPatternEl = sectionEl.querySelector('.grid-pattern');
	var dotsGridPatternEl = gridPatternEl.querySelector('.block-animation-grid');
	var squareFragment = document.createDocumentFragment();
	var grid: any = [col, row];
	var numberOfElements = grid[0] * grid[1];
	var animation:any;
	var paused = true;

	if(!dotsGridPatternEl.querySelector('.square')){
	  
		for (var i = 0; i < numberOfElements; i++) {
		  var squareEl = document.createElement('div');
		  squareEl.classList.add('square');
		  squareFragment.appendChild(squareEl);
		}
	  
		dotsGridPatternEl.appendChild(squareFragment);
	  
		var index = anime.random(0, numberOfElements-1);
		var nextIndex = 0;
	  
		const play = () => {
	  
		  paused = false;
		  if (animation) animation.pause();
	  
		  nextIndex = anime.random(0, numberOfElements-1);
	  
		  animation = anime.timeline({
			easing: 'easeInOutQuad',
			complete: play
		  })
		  .add({
			targets: `#${elementID} .block-animation-grid .square`,
			keyframes: [
			  {
				translateX: anime.stagger('-2px', {grid: grid, from: index, axis: 'x'}),
				translateY: anime.stagger('-2px', {grid: grid, from: index, axis: 'y'}),
				duration: 100
			  }, {
				translateX: anime.stagger('4px', {grid: grid, from: index, axis: 'x'}),
				translateY: anime.stagger('4px', {grid: grid, from: index, axis: 'y'}),
				scale: anime.stagger([1.8, 1], {grid: grid, from: index}),
				duration: 225
			  }, {
				translateX: 0,
				translateY: 0,
				scale: 1,
				duration: 1200,
			  }
			],
			delay: anime.stagger(80, {grid: grid, from: index})
		  }, 30)
	  
		  index = nextIndex;
	  
		}
	  
		play();
	}
}


const hoverLocationDot = () =>
{
	$(".section-location .map-svg svg g[id^=Point_Hover_]").hover(
		// Mouse in
		function(t: any) {
			if (1100 < $(window).width()) {
				$(".show-box").removeClass("showup");
				const urlImage = $(".box-circle .show-box").attr("data-url-img");
				var e = $(this).attr("id"),
					i = t.clientX,
					o = t.clientY;
				const imageSrc = `${urlImage}/${e}.png`;
				$(".box-circle .show-box img").attr("src" , `${imageSrc}`)
				$(".show-box").css({
					left: i - 300,
					top: o - 30
				})

				var iconNames = "";
				$(".section-location .map-svg svg text[id=" + 
					e.split("_")[0] + "_name_" + e.split("_")[2] 
					+ "] tspan").each((i: number, element: any) => {
					iconNames += $(element).text() + " "
				});
				$(".show-box h3").text(iconNames);
				setTimeout(() => {
					$(".show-box").addClass("showup");
				}, 300)
			}
		}, 
		// Mouse out
		function(t: any) {
			$(".show-box").removeClass("showup");
		}
	)
}

const hoverApartment = () => {
	document.querySelectorAll("#apartment-svg g").forEach((element : any) => {
		var dataActive = element.getAttribute("data-active");
		if (dataActive != null) {
			$("#apartment-svg g[data-active=" + dataActive + "]").hover(
			// Hover in
			function() {
				$("#apartment-svg g[data-active=" + dataActive + "]").css("opacity","unset")
				$("#apartment-svg g .area").css("animation","dash 0.6s linear alternate, fillColor 1.2s linear alternate")
				$("#apartment-svg g.info[data-active=" + dataActive + "] .box").css("opacity","1")
			},
			// Hover out
			function() {
				$("#apartment-svg g[data-active=" + dataActive + "]:not(.info)").css("opacity","0")
				$("#apartment-svg g .area").css("animation","unset")
				$("#apartment-svg g.info[data-active=" + dataActive + "] .box").css("opacity","0.5")
			})
		}
	});
}

const hoverApartmentRoom = () =>
{
	$(".section-location .map-svg svg g[id^=Point_Hover_]").hover(
		// Mouse in
		function(t: any) {
			if (1100 < $(window).width()) {
				$(".show-box").removeClass("showup");
				var e = $(this).attr("id"),
					i = t.clientX,
					o = t.clientY;
				$(".show-box").css({
					left: i - 300,
					top: o - 60
				})
				$(".show-box").addClass("showup");
				
			}
		}, 
		// Mouse out
		function(t: any) {
			$(".show-box").removeClass("showup");
		}
	)
}

const loadApartmentSvg = () => {
	var width = window.innerWidth;
	var height = window.innerHeight;
	if (document.querySelector("#apartment-svg")){
		if(width > 575.98) {
			document.querySelector("#apartment-svg").setAttribute("viewBox", `0 0 ${width} ${height}`)
		}
		if(width < 575.98) {
			document.querySelector("#apartment-svg").setAttribute("viewBox", `${width - 200} 0 ${width} ${height}`)
		}
		
		hoverApartment();
	}
	if(document.querySelector("#apartment-detail-svg")) {
		hoverApartmentRoom()
	}
}

const loadDetailLocationSvg = () => {
	var width = window.innerWidth;
	var height = window.innerHeight;
	if (document.querySelector("#detail-location-svg")){
		//document.querySelector("#detail-location-svg").setAttribute("viewBox", `0 0 ${width} ${height}`)
		hoverLocationDot()
	}
}

const newsAjax = () => {
	const href = $("#checkurl").val();
	$(".close-news").on("click" , function() {
		$(".column-box-news .news-content").addClass("show")
		setTimeout(() => {
			$(".column-box-news").removeClass("show");
			$(".section-news--1__wrapper").removeClass("level-index-out");
			$(".column-box-news .news-content").removeClass("show")
		}, 1000);
	})
	if(window.location.href != href) {
		$(".column-box-news").addClass("show");
		$(".section-news--1__wrapper").addClass("level-index-out");
		const url = window.location.href;
		$.ajax({
			url: url,
			type: "get",
			success: function(res:any) {
				$(".column-box-news .news-text").html(`${res}`);
			}
		})
	}

	const url_news = $("#news-detail--1 .btn--see-more a").attr("href")

	$("#news-detail--1 .btn--see-more").on("click" , function(e:any) {
		e.preventDefault();
		$.ajax({
			url: url_news,
			type: "get",
			success: function(res:any) {
				$(".column-box-news .news-text").html(`${res}`)
			},
			complete: function(res:any) {
				window.history.pushState({}, "", url_news);
			}
		})
	})
	
	// const currentPathnameAfterReload = window.location.pathname;
	// $(".about-nav nav a").each(function () {
	// 	const navPathname = $(this).attr("href");

	// 	if (currentPathnameAfterReload.indexOf(navPathname) >= 0) {
	// 		$(this).addClass("active");
	// 		$(".about-nav nav a").not(this).removeClass("active");
	// 	}

	// 	if ($(".about-5--2").length > 0) {
	// 		$(".about-nav nav a").each(function () {
	// 			if ($(this).attr("href").indexOf("/giai-phap") >= 0) {
	// 				$(this).addClass("active");
	// 				$(".about-nav nav a").not(this).removeClass("active");
	// 			}
	// 		});
	// 	}
	// 	$(this).on("click", (e) => {
	// 		e.preventDefault();
	// 		const url = $(this).attr("href");
	// 		$(this).addClass("active");
	// 		$(".about-nav nav a").not(this).removeClass("active");
	// 		$.ajax({
	// 			url: url,
	// 			type: "get",
	// 			success: function (res) {
	// 				if (url.indexOf("du-an") >= 0) {
	// 					$(".about-ajax").html(
	// 						`<div class="container"><div class="row row-custom about-project"><div class="col-lg-11 col-xl-10">${$(
	// 							res
	// 						)
	// 							.find(".project-list .container")
	// 							.html()}</div></div></div>`
	// 					);
	// 					$(".about-project .description").removeClass("d-none");
	// 					$(".about-project .row").eq(0).addClass("row-custom");
	// 					$(".about-project .col-lg-4").each(function () {
	// 						$(this).addClass("col-6 col-md-4 about-4--item--col");
	// 						$(this).removeClass("col-lg-4");
	// 					});
	// 					const fullUrl = `${window.location.origin}${url}`;
	// 					window.history.pushState({}, "", fullUrl);
	// 				} else {
	// 					$(".about-ajax").html($(res).find(".about-ajax").html());
	// 					const fullUrl = `${window.location.origin}${url}`;
	// 					if ($(".about-ajax").find(".about-1--4 .clients-slider")) {
	// 						about2slider();
	// 					}
	// 					window.history.pushState({}, "", fullUrl);
	// 				}
	// 			},
	// 		});
	// 	});
	// });
}
window.onload = function () {
	loadApartmentSvg();
	loadDetailLocationSvg();
}
window.addEventListener('resize', function () {
	loadApartmentSvg();
	loadDetailLocationSvg();
});

document.addEventListener("DOMContentLoaded", async () => {
	getSVGs(".svg");
	Loading()
	initFullpage();
	loadApartmentSvg();
	loadDetailLocationSvg();
	setBackgroundImageSection();
	swiperIntro();
	swiperNews();
	toogleMenu();
	swiperDetailNews(); 
	hoverLocationDot();
	hoverApartmentRoom();
	newsAjax();
});