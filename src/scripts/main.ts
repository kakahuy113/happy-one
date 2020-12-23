import { getSVGs, Loading } from "./utilities/util";
import { commonController } from "./libraries/CommonController";
declare var Swiper:any;
declare var $: any;
declare var YT:any;
declare var moment:any;
declare var anime:any;
declare var grecaptcha:any;
declare var fullpage_api:any;
var checkScriptExist: number;
declare global {
    interface Window {
        onloadCallback:any;
    }
}
		 

const initFullpage = () => {
	// var player: any;
	// // Init Youtube Video API
	// var script = document.createElement('script');
	// script.onload = function() {
	// 	console.log("Script loaded and ready");
	// };
	// if(document.querySelector(".youtube-video")) {
	// 	script.src = `https://www.youtube.com/iframe_api`;
	// 	script.setAttribute("async", "");
	// 	script.setAttribute("defer", "");
	// 	document.getElementsByTagName('head')[0].appendChild(script);
	// 	var youtuID = document.querySelector(".youtube-video").getAttribute("data-youtube-id");
	// }
	
	// (<any>window).YT.ready(function() {
	// 	player = new (<any>window).YT.Player("VYT", {
	// 	  videoId: `${youtuID}`,
	// 	  playerVars: {
    //         // playlist: 'z1Ev1Z0cCG4,FG0fTKAqZ5g',
    //         // autoplay: 1,
	// 		controls: 0,
	// 		playsinline: 1,
	// 		loop: 0,
	// 		cc_load_policy: 1,
	// 		color: "white",
	// 		rel: 0,
    //     },
	// 	  events: {
	// 		'onReady': onPlayerReady,
	// 	  	'onStateChange': onPlayerStateChange
	// 	  }
	// 	});
	//   });
	//    function onPlayerReady(event:any) {
	// 	var time_update_interval:any;   
	// 	// Update the controls on load
	// 	updateTimerDisplay();
	
	// 	// Clear any old interval.
	// 	clearInterval(time_update_interval);
	
	// 	// Start interval to update elapsed time display and
	// 	// the elapsed part of the progress bar every second.
	// 	time_update_interval = setInterval(function () {
	// 		updateTimerDisplay();
	// 	}, 1000)
    //   }

    
    //   var done = false;
    //   function onPlayerStateChange(event:any) {
    //     if (event.data == YT.PlayerState.PLAYING ) {
	// 		$(".youtube-video").on("click" , function() {
	// 			player.pauseVideo();
	// 		})
    //       document.querySelector(".bg-video").classList.add("hide")
    //       document.querySelector(".control-youtube .play-button").classList.remove("show")
    //       document.querySelector(".control-youtube .play-button").classList.add("hide")
    //     } else {
	// 		$(".youtube-video").on("click" , function() {
	// 			player.playVideo();
	// 		})
	// 		document.querySelector(".bg-video").classList.remove("hide")
	// 		document.querySelector(".control-youtube .play-button").classList.remove("hide")
	// 		document.querySelector(".control-youtube .play-button").classList.add("show")
		
	// 	}
    //   }
	//   $('#play-big').on('click', function () {
	// 	player.playVideo();
	// });
	//   $('#play').on('click', function () {
	
	// 	player.playVideo();
	// });
	
	// $('#pause').on('click', function () {
	// 	player.pauseVideo();
	// });
	
	// function updateTimerDisplay() {
	// 	// Update current time text display.
	// 	$('#current-time').text(formatTime(player.getCurrentTime()));
	// 	$('#duration').text(formatTime(player.getDuration()));
	// }

	// function formatTime(time: any) {
	// 	return moment(0).add(moment.duration({'seconds': time})).format('mm:ss');
	// }
	const playerYoutube = () => {
		var player: any;
		// Init Youtube Video API
		if(!document.querySelector("#VYT iframe")) {
			var script = document.createElement('script');
		
			if(document.querySelector(".youtube-video")) {
				script.src = `https://www.youtube.com/iframe_api`;
				script.setAttribute("async", "");
				script.setAttribute("defer", "");
				document.getElementsByTagName('head')[0].appendChild(script);
			}
			var youtuID = document.querySelector(".youtube-video").getAttribute("data-youtube-id");
		
			(<any>window).YT.ready(function() {
				player = new (<any>window).YT.Player("VYT", {
				videoId: `${youtuID}`,
				playerVars: {
					// playlist: 'z1Ev1Z0cCG4,FG0fTKAqZ5g',
					autoplay: 1,
					controls: 0,
					playsinline: 1,
					loop: 0,
					cc_load_policy: 1,
					color: "white",
					rel: 0,
				},
				events: {
					'onReady': function(event:any) {
						event.target.playVideo();

						$('#play-big').on('click', function () {
							event.target.playVideo();
						});
						$('#play').on('click', function () {
							event.target.playVideo();
						});
						
						$('#pause').on('click', function () {
							event.target.pauseVideo();
						});

						var time_update_interval:any;   
						// Update the controls on load
						// Update current time text display.
						$('#current-time').text(moment(0).add(moment.duration({'seconds': player.getCurrentTime()})).format('mm:ss'));
						$('#duration').text(moment(0).add(moment.duration({'seconds': player.getDuration()})).format('mm:ss'));
					
						// Clear any old interval.
						clearInterval(time_update_interval);
					
						// Start interval to update elapsed time display and
						// the elapsed part of the progress bar every second.
						time_update_interval = setInterval(function () {
							// Update current time text display.
							$('#current-time').text(moment(0).add(moment.duration({'seconds': player.getCurrentTime()})).format('mm:ss'));
							$('#duration').text(moment(0).add(moment.duration({'seconds': player.getDuration()})).format('mm:ss'));
						}, 1000)
					},
					'onStateChange': function(event:any) {
						if (event.data == YT.PlayerState.PLAYING ) {
							$(".youtube-video").on("click" , function() {
								player.pauseVideo();
							})
						document.querySelector(".bg-video").classList.add("hide")
						document.querySelector(".control-youtube .play-button").classList.remove("show")
						document.querySelector(".control-youtube .play-button").classList.add("hide")
						} else {
							$(".youtube-video").on("click" , function() {
								player.playVideo();
							})
							document.querySelector(".bg-video").classList.remove("hide")
							document.querySelector(".control-youtube .play-button").classList.remove("hide")
							document.querySelector(".control-youtube .play-button").classList.add("show")
						
						}
					}
				}
				});
			});
		}
	}
	if ($(window).width() > 1100) {
		if(document.querySelector("#fullpage")) {
			$('#fullpage').fullpage({
				anchors: ['slider-home', 'slider-introduce', 'slider-video', 'slider-location', 'slider-utilities', 'slider-news', 'slider-contact'],
				menu: '#menu',
				lazyLoad: true,
				keyboardScrolling: true,
				recordHistory: false,
				lockAnchors: true,
				lazyLoading: true,
				afterLoad: (origin:any, destination:any, direction:any) => {
					if(destination == 1) {
						document.querySelector(".fp-dots").classList.remove("show")
						document.querySelector(".fp-dots").classList.add("hide")
					} else {
						document.querySelector(".fp-dots").classList.remove("hide")
						document.querySelector(".fp-dots").classList.add("show")
					
					}
					if(destination == 7 || destination == 1) {
						//Show logo
						document.querySelector('.header__wrapper .menu .logo').classList.remove("show")
						document.querySelector('.header__wrapper .menu .logo').classList.add("hide")
					} else {
						document.querySelector('.header__wrapper .menu .logo').classList.remove("hide")
					}
					// play video
					if(destination == 3 ) {
						playerYoutube();
					} 
					// Change text Color section introduce
					if(destination == 2) {
						document.querySelector("header").classList.add("changed")
						document.querySelector(".fp-socials .fp-links__wrapper").classList.add("changed")
					} else {
						document.querySelector("header").classList.remove("changed")
						document.querySelector(".fp-socials .fp-links__wrapper").classList.remove("changed")
					}
				},
				onLeave: (origin:any, destination:any, direction:any) => {
					
					if(destination == 1) {
						document.querySelector(".fp-dots").classList.remove("show")
						document.querySelector(".fp-dots").classList.add("hide")
					} else {
						document.querySelector(".fp-dots").classList.remove("hide")
						document.querySelector(".fp-dots").classList.add("show")
					}

					if(destination == 7 || destination == 1) {
						//Show logo
						document.querySelector('.header__wrapper .menu .logo').classList.remove("show")
						document.querySelector('.header__wrapper .menu .logo').classList.add("hide")
					}else {
						document.querySelector('.header__wrapper .menu .logo').classList.remove("hide")
					}
					// playvideo
					if(destination == 3 ) {
						playerYoutube();
					} 
					// Change text Color section introduce

					if(destination == 2) {
						document.querySelector("header").classList.add("changed")
						document.querySelector(".fp-socials .fp-links__wrapper").classList.add("changed")
					} else {
						document.querySelector("header").classList.remove("changed")
						document.querySelector(".fp-socials .fp-links__wrapper").classList.remove("changed")
					}
					// Reset Animation
					let currentSection = $(document).find(".section")[destination - 1];
					$(currentSection).find("section>div").css("display", "none");
					setTimeout(()=>{
						$(currentSection).find("section>div").css("display", "table");
					}, 10)
				}
			});
		}
		// introduce Fullpage
		if(document.querySelector("#fullpage-introduce")) {
			$('#fullpage-introduce').fullpage({
				anchors: ['introduce--1' , 'introduce--2', 'introduce--3'],
				menu: '#menu',
				lazyLoad: true,
				keyboardScrolling: true,
				recordHistory: false,
				lockAnchors: true,
				afterLoad: (origin:any, destination:any, direction:any) => {
				
				},
				onLeave: (origin:any, destination:any, direction:any) => {
					let currentSection = $(document).find(".section")[destination - 1];
					$(currentSection).find("section>div").css("display", "none");
					setTimeout(()=>{
						$(currentSection).find("section>div").css("display", "table");
					}, 10)
				}
			});
		}
		// utilities detail Fullpage
		if(document.querySelector("#fullpage-utilities-detail")) {
			$('#fullpage-utilities-detail').fullpage({
				anchors: ['utilities-1' , 'utilities-2', 'utilities-3' ,'utilities-4'],
				menu: '#menu',
				lazyLoad: true,
				keyboardScrolling: true,
				recordHistory: false,
				lockAnchors: true,
				afterLoad: (origin:any, destination:any, direction:any) => {
				
				},
				onLeave: (origin:any, destination:any, direction:any) => {
					let currentSection = $(document).find(".section")[destination - 1];
					$(currentSection).find("section>div").css("display", "none");
					setTimeout(()=>{
						$(currentSection).find("section>div").css("display", "table");
					}, 10)
				}
			});
		}
	}
	else {
		if ($('#VYT').isInViewport()) {
			playerYoutube()
		}
		$(window).on('resize scroll', function() {
			if ($('#VYT').isInViewport()) {
				playerYoutube()
			}
		});
	}
	//click to slide
	$(document).on("click", ".fp-dots .fp-dot-item" , function() {
		const anchor = $(this).attr("data-menuanchor")
		$.fn.fullpage.moveTo(`${anchor}`)
	})
	//click to opent menu
	$(document).on("click", "#left-menu .nav-item a", () => {
		console.log("click");
		$(".hambuger--menu").click(); 
	})
}

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};


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
			delay: 2000,
			disableOnInteraction: false,
		  },
		  loop: true,
		speed: 1500,
		lazy: true,
		slidesPerView: 3,
		breakpoints: {
			300: {
				slidesPerView: 1,
				
			},
			767.98: {
				slidesPerView: 3,
			},
			1025: {
				slidesPerView: 3,
			}
		}
	});

	// $('.intro--swiper .swiper-container').on('mouseenter', function () {
	// 	newsSlider.autoplay.stop();
	// })
	// $('.intro--swiper .swiper-container').on('mouseleave', function () {
	// 	newsSlider.autoplay.start();
	// })
}


const swiperNews = () => {
	const swiper = new Swiper(".news-swiper .swiper-container" , {
		slidesPerView: 3.5,
		speed: 2000,
		loop: true,
		spaceBetween: 20,
		lazy: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		  },
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
	if (1100 < $(window).width()) {
		$(".section-location .map-svg svg g[id^=Point_Hover_]").hover(
			// Mouse in
			function(t: any) {
					$(".show-box").removeClass("showup");
					const urlImage = $(".box-circle").attr("data-url-img");
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
			}, 
			// Mouse out
			function(t: any) {
				$(".show-box").removeClass("showup");
			}
		)
		
	} else {
		$(".section-location .map-svg svg g[id^=Point_Hover_]").each(function(i: any , v:any){
			// $(".show-box").removeClass("showup");
			const urlImage = $(".box-circle").attr("data-url-img");
			var e = $(this).attr("id");
			const imagceSrc = `${urlImage}/${e}.png`;
			// $(".box-circle .show-box img").attr("src" , `${imagceSrc}`)
			var iconNames = "";
			$(".section-location .map-svg svg text[id=" + 
				e.split("_")[0] + "_name_" + e.split("_")[2] 
				+ "] tspan").each((i: number, element: any) => {
				iconNames += $(element).text() + " "
			});
			$(".box-circle").append(`<div class="show-box" data-box-id="sample" data-url-img="./assets/img/location"><img src="${urlImage}/Group_4314.png" alt="">
			<h3>${iconNames}</h3>
		</div>`)
		})
	}
}

const hoverApartment = () => {
	document.querySelectorAll("#apartment-svg g").forEach((element : any) => {
		var dataActive = element.getAttribute("data-active");
		if (dataActive != null) {
			// Only PC has hover animation
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
			// Click event
			element.addEventListener('click', function() {
				window.location.href = $("#apartment .link p")[Number(dataActive) - 1].innerHTML
			})
		}
	});
}

const hoverApartmentRoom = () =>
{	
	var width = window.innerWidth;
	$(".section-apartment-detail .map-svg svg .hover-room").hover(

		// Mouse in
		function(t: any) {
			const e = $(this).attr("id"),
			i = t.clientX,
			o = t.clientY;
			let link = "";
			$(".show-box").removeClass("showup");
			$(".show-box").each(function(event:any) {
				if($(this).find(".id")[0].innerHTML == e) {
					link = $(this).attr("href")
					$(this).css({
						left: i - 150,
						top: o - 30
					})
					$(this).addClass("showup");
				}
			})
		$(this).on("click" , function() {
				window.location.pathname = link;
			})
		}, 
		// Mouse out
		function(t: any) {
			const e = $(this).attr("id");
			$(".show-box").each(function(event:any) {
				if($(this).find(".id")[0].innerHTML == e) {
					$(this).removeClass("showup");
				}
			})
			// const e = $(this).attr("id")
			// $(`.show-box[id=${e}]`).removeClass("showup");
		}
	)
	
	$(".apartment-detail__wrapper .show-box").on("click" , function() {
		window.location.pathname = $(this).attr("href")
	})
}

const loadApartmentSvg = () => {
	var width = window.innerWidth;
	var height = window.innerHeight;
	if (document.querySelector("#apartment-svg")){
		if(width > 1100) {
			document.querySelector("#apartment-svg").setAttribute("viewBox", `${width < 1600? 250 : 0} ${height < 900 ? 100 : 0} ${width} ${height}`)
		}
		if(width < 1100) {
			document.querySelector("#apartment-svg").setAttribute("viewBox", `0 0 1920 1080`)
		}
		if(width < 1100) {
			document.querySelector("#apartment-svg").setAttribute("viewBox", `250 0 1500 1080`)
		}
		if(width < 575.98) {
			document.querySelector("#apartment-svg").setAttribute("viewBox", `250 0 750 1080`)
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
			window.history.pushState({}, "", href);
		}, 1000);
	})
	if(window.location.pathname != href) {
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

	$("#news-detail--1 .btn--see-more a").on("click" , function(e:any) {
		e.preventDefault();
		const url_news = $(this).attr("href")
		$.ajax({
			url: url_news,
			type: "get",
			success: function(res:any) {
				$(".column-box-news .news-text").html(`${res}`)
				$(".column-box-news").addClass("show");
				$(".section-news--1__wrapper").addClass("level-index-out");
			},
			complete: function(res:any) {
				window.history.pushState({}, "", url_news);
			}
		})
	})
}

const generateDots = () => {
	if ($(window).width() > 1100) {
		if ($(".fp-dots").length === 0) {
			let dotItemString = "";
			let utilitiesItemString = "";
			
			if(document.querySelector("#fullpage")) {
				$("#fullpage .section").each((idx:number, item:any)=>{
					dotItemString += `<li class="fp-dot-item" data-menuanchor="${$(item).attr("data-anchor")}">
						<a href="javascript:;">
							<span class="fp-number">0${idx}</span>
							<span class="fp-title">${$(item).attr("fp-title")}</span>
						</a>
					</li>`;
				}) 
				//Index
				let dotEl = `<ul class="fp-dots fp-dots-index" id="menu">${dotItemString}</ul>`;
				$('.fp-container').append(dotEl);
			}
			
			if(document.querySelector("#fullpage-utilities-detail")) {
				$("#fullpage-utilities-detail .section").each((idx:number, item:any)=>{
					utilitiesItemString += `<li class="fp-dot-item" data-menuanchor="${$(item).attr("data-anchor")}">
						<a href="#${$(item).attr("data-anchor")}">
							<span class="fp-floor">${$(item).attr("fp-title")}</span>
						</a>
					</li>`;
				}) 
				//Utilities
				let dotUtil = `<ul class="fp-dots fp-dots-utilities" id="menu">${utilitiesItemString}</ul>`;
				$('.fp-container').append(dotUtil);
			}
			
		}
	}
}


function loadUtilitiesDetail () {
	
	// locations.forEach((item, index) => {
	// 	const locationEl = `<li class="location-item" data-anchor="${item.anchor}"><span>${item.anchor}</span><span>${item.name}</span></li>`;
	// 	$('.location-list').append(locationEl);
	// })
	
	$("#utilities-detail svg>g>g").each((index:number,item:any)=>{
		$(item).on("click", (event:any)=>{
			const anchor = $(event.currentTarget).find("text").text();
			const item = $(".location-list ").find(`.location-item[data-anchor="${anchor}"]`);
			if(item.length > 0){
				$(item).click();
			}
		})
	});

	$(document).on("click", ".location-list .location-item", (event:any) => {
		const anchor = $(event.currentTarget).attr("data-anchor");
		let detail:HTMLElement;
		
		$(".location-item").each(function(item:any ) {
			if($(this).find("span")[0].innerHTML == anchor) {
				detail = this
			}
		});
		if(detail) {
				// const slides = detail.images.reduce((arr, item) => arr + `<div class="swiper-slide" style="background-image:url(${item})"></div>`, '');
				const slides = detail.querySelector(".d-none").innerHTML;
				const title = detail.querySelectorAll("span")[1].innerHTML;
				
				$("#utilities-popup .gallery-top .swiper-wrapper").append(`${slides.toString()}`)
				$("#utilities-popup .gallery-thumbs .swiper-wrapper").append(`${slides.toString()}`)
				$("#utilities-popup .title")[0].innerHTML = `${title}`
				$("#utilities-popup").css({"opacity" : "1" , "pointer-events" : "auto" })
				var galleryThumbs = new Swiper('.gallery-thumbs', {
					spaceBetween: 10,
					slidesPerView: 2,
					loop: true,
					freeMode: true,
					loopedSlides: 5, 
					watchSlidesVisibility: true,
					watchSlidesProgress: true,
					breakpoints: {
						768: {
							slidesPerView: 3,
						}
					}
				  });
				  var galleryTop = new Swiper('.gallery-top', {
					spaceBetween: 10,
					loop: true,
					loopedSlides: 5, 
					navigation: {
					  nextEl: '.swiper-button-next',
					  prevEl: '.swiper-button-prev',
					},
					thumbs: {
					  swiper: galleryThumbs,
					},
				  });
				  $("#utilities-popup .btn-close").click(()=>{
					$("#utilities-popup").css({"opacity" : "0" , "pointer-events" : "none" })
				  })
		}
	})

	$("#utilities-detail svg>g").mouseover(function(event:any){
		var relX = (event.pageX - $(this).offset().left) - 200;
		var relY = (event.pageY - $(this).offset().top) - 150;
		if(event.target.tagName === "circle"){
			const anchor = $($(event.target).closest("g").find("text")[0]).text();
			let detail:HTMLElement;
			
			$(".location-item").each(function(item:any ) {
				
				if($(this).find("span")[0].innerHTML == anchor) {
					detail = this;
				}
			})

			
			const Images = detail.querySelector(".img img");
			const title = detail.querySelectorAll("span")[1].innerHTML;
			const items = $(".location-list").find(`.location-item[data-anchor="${anchor}"]`);
			if(items.length > 0){
				$(items).addClass("active");
			}
			
			const activeItems = $(".location-list").find(`.location-item.active`);
			if(activeItems.length > 0){
				$(activeItems).each((index:number, item:any) => {
					const anchorActive = $(item).attr("data-anchor");
					if(anchorActive !== anchor) {
						$(item).removeClass("active");
					}
				})
			}

			if(detail) {
				if(Images) {
					if(Images.getAttribute("src") != undefined || Images.getAttribute("src") != null) {
						$(this).parent().parent().find(".object").css("transform", `translate(${relX.toFixed()}px,${relY.toFixed()}px)`);
						$($(this).parent().parent().find(".object").find("img")[0]).css("display" , "block")
						$($(this).parent().parent().find(".object").find("img")[0]).attr("src", `${Images.getAttribute("src")}`);
					} else {
						$(this).parent().parent().find(".object").css("transform", `translate(${relX.toFixed()}px,${relY + 126}px)`);
						$($(this).parent().parent().find(".object").find("img")[0]).css("display" , "none")
					}
				} else {
					$(this).parent().parent().find(".object").css("transform", `translate(${relX.toFixed()}px,${relY.toFixed()}px)`);
					$($(this).parent().parent().find(".object").find("img")[0]).css("display", "none");
				}
				$($(this).parent().parent().find(".object").find("label")[0]).text( `${title}`|| '');
				$(this).parent().parent().find(".object").css("opacity", "1");
				// $(this).parent().parent().find(".object").css("pointer-events", "auto");
			}
		} else {
			$(this).parent().parent().find(".object").css("opacity", "0");
			// $(this).parent().parent().find(".object").css("pointer-events", "none");
			$($(this).parent().parent().find(".object").find("img")[0]).css("display", "block");
		}
	});
}


const swiperRoomDetail = () => {
	const roomDetail = new Swiper(".image-house .swiper-container" , {
		speed: 1000,
		slidesPerView: 1,
		mousewheel: true,
		navigation: {
			nextEl: '.image-house .swiper-button-next',
			prevEl: '.image-house .swiper-button-prev',
		},
		breakpoints: {
			300: {
				spaceBetween: 0,
				direction: 'horizontal',
			},
			1100: {
				direction: 'vertical',
			}
		}
	})
}

const recaptcha = () => {
	var script = document.createElement('script');
	script.onload = function() {
		console.log("Script loaded and ready");
	};
	if(document.querySelector(".g-recaptcha")) {
		const sitekey = document.querySelector(".g-recaptcha").getAttribute("data-sitekey");
		script.src = `https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=${sitekey}`;
		script.setAttribute("async", "");
		script.setAttribute("defer", "");
		document.getElementsByTagName('head')[0].appendChild(script);
	}
}

window.onloadCallback = function() {
	var button = document.createElement("button")
	button.classList.add("fake-button-recaptcha")
	button.onclick = (e:any) => {
		e.preventDefault();
		grecaptcha.ready(function () {
			const recaptcha: HTMLInputElement =document.querySelector('.g-recaptcha');
			const sitekey = recaptcha.getAttribute("data-sitekey")
			grecaptcha.execute(`${sitekey}`, { action: 'HappyOne' }).then(function (token: any) {
				recaptcha.value = token
			});
		});
	}
	document.querySelector('#popup-info form').appendChild(button);
	button.click();
}

const ajaxSubcribe = () => {
	$('#popup-info .btn-submit').on('click', function(e:any) {
		e.preventDefault();
		const _thisBtn = $(this);
		const url = _thisBtn.attr('data-url');
		const formData = new FormData();
		const responserRecaptcha: HTMLInputElement = document.querySelector(".g-recaptcha")
		const valueToken = responserRecaptcha.value;
		const nameRecaptcha = document.querySelector(".g-recaptcha").getAttribute("name");
		$('.info input').each(function() {
			const name = $(this).attr('name');
			const value = $(this).val();
			formData.append(name, value);
		});
		$('.info .context textarea').each(function() {
			const name = $(this).attr('name');
			const value = $(this).val();
			formData.append(name, value);
		});
		formData.append(nameRecaptcha,valueToken);
		if ($('#popup-info form').valid() === true) {
			$.ajax({
				url: url,
				type: 'post',
				data: formData,
				processData: false,
				contentType: false,
				beforeSend: function() {
					_thisBtn.attr('disabled', 'disabled');
				},
				success: function(res:any) {
					alert(`${res.Message}`);
					window.location.reload();
					_thisBtn.removeAttr('disabled');
				},
			});
		}
	});
}

const toogle360 = () => {
	$(".fp-socials__wrapper .fp-link-item:last-child").on("click" , function() {
		$(this).toggleClass("active")
	})
}

window.onload = function () {
	loadApartmentSvg();
	loadDetailLocationSvg();
	loadUtilitiesDetail();
}
window.addEventListener('resize', function () {
	// Loading()
	// initFullpage();
	loadApartmentSvg();
	loadDetailLocationSvg();
	// generateDots();
});

document.addEventListener("DOMContentLoaded", async () => {
	getSVGs(".svg");
	Loading();
	commonController();
	generateDots();
	if(document.querySelector(".apartment-detail__wrapper")) {
		const box = document.querySelector(".apartment-detail__wrapper .info-room .box-circle");
		$(".apartment-detail__wrapper").append(box.outerHTML);
		document.querySelector(".apartment-detail__wrapper .info-room .box-circle").remove();
	}
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
	swiperRoomDetail();
	ajaxSubcribe();
	toogle360();
	document.querySelector("a[data-src='#popup-info']").addEventListener("click", function() {
		recaptcha();
	})
});
