import { getSVGs, Loading } from "./utilities/util";
import { commonController } from "./libraries/CommonController";
declare var Swiper:any;
declare var $:any;
declare var YT:any;
declare var moment:any;
declare var anime:any;


// const initFullpage = () => {
// 	var player: any;
// 	// Init Youtube Video API
// 	var script = document.createElement('script');
// 	script.onload = function() {
// 		console.log("Script loaded and ready");
// 	};
// 	if(document.querySelector(".youtube-video")) {
// 		script.src = `https://www.youtube.com/iframe_api`;
// 		script.setAttribute("async", "");
// 		script.setAttribute("defer", "");
// 		document.getElementsByTagName('head')[0].appendChild(script);
// 		var youtuID = document.querySelector(".youtube-video").getAttribute("data-youtube-id");
// 	}
	
// 	(<any>window).YT.ready(function() {
// 		player = new (<any>window).YT.Player("VYT", {
	
// 		  videoId: `${youtuID}`,
// 		  playerVars: {
//             // playlist: 'z1Ev1Z0cCG4,FG0fTKAqZ5g',
//             // autoplay: 1,
// 			controls: 0,
// 			playsinline: 1,
// 			loop: 0,
// 			cc_load_policy: 1,
// 			color: "white",
// 			rel: 0,
//         },
// 		  events: {
// 			'onReady': onPlayerReady,
// 		  	'onStateChange': onPlayerStateChange
// 		  }
// 		});
// 	  });
// 	   function onPlayerReady(event:any) {
// 		var time_update_interval:any;   
// 		// Update the controls on load
// 		updateTimerDisplay();
	
// 		// Clear any old interval.
// 		clearInterval(time_update_interval);
	
// 		// Start interval to update elapsed time display and
// 		// the elapsed part of the progress bar every second.
// 		time_update_interval = setInterval(function () {
// 			updateTimerDisplay();
// 		}, 1000)
//       }

    
//       var done = false;
//       function onPlayerStateChange(event:any) {
//         if (event.data == YT.PlayerState.PLAYING ) {
//           document.querySelector(".bg-video").classList.add("hide")
//           document.querySelector(".control-youtube .play-button").classList.remove("show")
//           document.querySelector(".control-youtube .play-button").classList.add("hide")
//         } else {
// 			document.querySelector(".bg-video").classList.remove("hide")
// 			document.querySelector(".control-youtube .play-button").classList.remove("hide")
// 			document.querySelector(".control-youtube .play-button").classList.add("show")
		
// 		}
//       }
//       function stopVideo() {
//         player.stopVideo();
// 	  }
// 	  $('#play-big').on('click', function () {
	
// 		player.playVideo();
// 	});
// 	  $('#play').on('click', function () {
	
// 		player.playVideo();
// 	});
	
// 	$('#pause').on('click', function () {
		
// 		player.pauseVideo();
// 	});
// 	function updateTimerDisplay() {
// 		// Update current time text display.
// 		$('#current-time').text(formatTime(player.getCurrentTime()));
// 		$('#duration').text(formatTime(player.getDuration()));
// 	}

// 	function formatTime(time: any) {
// 		return moment(0).add(moment.duration({'seconds': time})).format('mm:ss');
// 	}

// 	// INIT FULLPAGE
// 	function loadFullpage () {
// 		if(window.innerWidth > 1100) {
// 			let homePattern = document.querySelector("#home");
// 			if(homePattern){
// 				translateHomeText();
// 				// gridPattern(homePattern, 40, 20);	
// 			}
// 			const fpOptions: FullpageOptions = {
// 				prevEl: ".fp-prev",
// 				nextEl: ".fp-buttons__wrapper",
// 				speed: 800,
// 				slideClass: ".fp-slide",
// 				dots: true,
// 				on: {
// 					// event is fired before slide start transition
// 					beforeSlideChange: function (
// 						currentSlide,
// 						nextSlide,
// 						currentIndex,
// 						nextIndex,
// 					) {

// 						currentSlide.querySelector(".setting-section").classList.remove("show-content")
// 						if(currentSlide.querySelector(".youtube-video")) {
// 							player.pauseVideo();
// 						}

// 						if(currentIndex == 1) {
// 							document.querySelector("header").classList.remove("changed")
// 							document.querySelector(".fp-socials .fp-links__wrapper").classList.remove("changed")
// 						}
// 					},
// 					// event is fired after slide end transition
// 					afterSlideChange: function (currentSlide, currentIndex) {
// 						if(document.querySelector(".index-page")) {
// 							currentSlide.querySelector(".setting-section").classList.add("show-content")
// 								return new Promise((resolve, reject) => {
// 									if(currentSlide.querySelector(".youtube-video")) {
// 										player.playVideo();
// 									}
// 									// console.log(currentSlide, currentIndex);
// 									if(currentIndex != 0) {
// 										// show and hide navigation bar when slide
// 										document.querySelector(".fp-dots").classList.remove("hide");
// 										document.querySelector(".fp-dots").classList.add("show");
// 										//show and hide logo when slide
// 										document.querySelector(".header__wrapper .logo").classList.remove("hide");
// 										document.querySelector(".header__wrapper .logo").classList.add("show")
// 									} else {
// 										document.querySelector(".fp-dots").classList.remove("show");
// 										document.querySelector(".fp-dots").classList.add("hide");
// 										//show and hide logo when slide
// 										document.querySelector(".header__wrapper .logo").classList.remove("show");
// 										document.querySelector(".header__wrapper .logo").classList.add("hide")
// 									}

// 									//
									
// 									if(currentIndex == 1) {
// 										document.querySelector("header").classList.add("changed")
// 										document.querySelector(".fp-socials .fp-links__wrapper").classList.add("changed")
// 									}
// 									resolve();
// 								});
							
							
// 						}

// 						// showPattern(currentIndex);
// 					},
// 				},
// 			};
// 			const fp = new Fullpage(".fp-container", fpOptions);
// 			// method slide to a slide with index
// 			fp.slideTo(0);
// 			// method allow or not allow scroll to slide fullpage: true = allow, false = not allow
// 			fp.canScroll(true);
// 			if(fp.getIndex() == 0 && document.querySelector(".index-page")) {
// 				document.querySelector(".fp-dots").classList.remove("show");
// 				document.querySelector(".fp-dots").classList.add("hide");
		
// 				//show and hide logo when slide
// 				document.querySelector(".header__wrapper .logo").classList.remove("show");
// 				document.querySelector(".header__wrapper .logo").classList.add("hide")
	
// 				animation.allAnimeFullpageIndex__0();
// 			}
// 			if(document.querySelector(".introduce-page")) {
// 					document.querySelector(".fp-dots").classList.add("hide")
// 			}
	
// 			document.querySelector(".fp-dots").classList.add("hide")
// 			}

// 			// const menuItems = document.querySelectorAll(".navigation .nav-item");
// 			// menuItems.forEach((item) => {
// 			// 	item.addEventListener("click", (e) => {
// 			// 		e.preventDefault();
// 			// 		const target = item.querySelector("a").getAttribute("fp-target");
// 			// 		if(target){
// 			// 			fp.scrollToSection(target);
// 			// 			document.querySelector("header").classList.toggle("show");
// 			// 		}
// 			// 	})
// 			// });

// 		}
// }

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
	if ($(window).width() > 1100) {
		$('#fullpage').fullpage({
			anchors: ['slider-home', 'slider-introduce', 'slider-video', 'slider-location', 'slider-utilities', 'slider-news', 'slider-contact'],
			menu: '#menu',
			lazyLoad: true,
			keyboardScrolling: true,
			afterLoad: (origin:any, destination:any, direction:any) => {
				if(destination == 1) {
					document.querySelector(".fp-dots").classList.remove("show")
					document.querySelector(".fp-dots").classList.add("hide")
				} else {
					document.querySelector(".fp-dots").classList.remove("hide")
					document.querySelector(".fp-dots").classList.add("show")
				}
				if(destination == 3 ) {
					player.playVideo();
				}
				if(destination == 2) {
					document.querySelector("header").classList.add("changed")
					document.querySelector(".fp-socials .fp-links__wrapper").classList.add("changed")
				} else {
					document.querySelector("header").classList.remove("changed")
					document.querySelector(".fp-socials .fp-links__wrapper").classList.remove("changed")
				}
			},
			onLeave: (origin:any, destination:any, direction:any) => {
				console.log(origin , destination, direction);
				
				if(destination == 1) {
					document.querySelector(".fp-dots").classList.remove("show")
					document.querySelector(".fp-dots").classList.add("hide")
				} else {
					document.querySelector(".fp-dots").classList.remove("hide")
					document.querySelector(".fp-dots").classList.add("show")
				}
				if(destination == 3 ) {
					player.playVideo();
				}
				if(destination == 2) {
					document.querySelector("header").classList.add("changed")
					document.querySelector(".fp-socials .fp-links__wrapper").classList.add("changed")
				} else {
					document.querySelector("header").classList.remove("changed")
					document.querySelector(".fp-socials .fp-links__wrapper").classList.remove("changed")
				}
				let currentSection = $(document).find(".section")[destination - 1];
				$(currentSection).find("section>div").css("display", "none");
				setTimeout(()=>{
					$(currentSection).find("section>div").css("display", "table");
				}, 10)
			}
		});
	}
	$(document).on("click", "#left-menu .nav-item a", () => {
		console.log("click");
		$(".hambuger--menu").click(); 
	})

	$(document).on("click", "ul.location-list li.location-item", () => {
		let slider = `
		<div class="swiper-container gallery-top">
			<div class="swiper-wrapper">
				<div class="swiper-slide" style="background-image:url(./assets/img/utilities-detail/u-11.jpg)"></div>
				<div class="swiper-slide" style="background-image:url(./assets/img/utilities-detail/u-12.jpg)"></div>
				<div class="swiper-slide" style="background-image:url(./assets/img/utilities-detail/u-13.jpg)"></div>
				<div class="swiper-slide" style="background-image:url(./assets/img/utilities-detail/u-14.jpg)"></div>
				<div class="swiper-slide" style="background-image:url(./assets/img/utilities-detail/u-11.jpg)"></div>
				<div class="swiper-slide" style="background-image:url(./assets/img/utilities-detail/u-12.jpg)"></div>
				<div class="swiper-slide" style="background-image:url(./assets/img/utilities-detail/u-13.jpg)"></div>
				<div class="swiper-slide" style="background-image:url(./assets/img/utilities-detail/u-14.jpg)"></div>
			</div>
		</div>
		<!-- Add Arrows -->
		<div class="swiper-button-next swiper-button-white" style="background-image:url(./assets/img/utilities-detail/arrow-right.svg)"></div>
		<div class="swiper-button-prev swiper-button-white" style="background-image:url(./assets/img/utilities-detail/arrow-left.svg)"></div>
		<label class="title">Sảnh đón Hetia</label>
		<div class="swiper-container gallery-thumbs">
			<div class="swiper-wrapper">
				<div class="swiper-slide" style="background-image:url(./assets/img/utilities-detail/u-11.jpg)"></div>
				<div class="swiper-slide" style="background-image:url(./assets/img/utilities-detail/u-12.jpg)"></div>
				<div class="swiper-slide" style="background-image:url(./assets/img/utilities-detail/u-13.jpg)"></div>
				<div class="swiper-slide" style="background-image:url(./assets/img/utilities-detail/u-14.jpg)"></div>
				<div class="swiper-slide" style="background-image:url(./assets/img/utilities-detail/u-11.jpg)"></div>
				<div class="swiper-slide" style="background-image:url(./assets/img/utilities-detail/u-12.jpg)"></div>
				<div class="swiper-slide" style="background-image:url(./assets/img/utilities-detail/u-13.jpg)"></div>
				<div class="swiper-slide" style="background-image:url(./assets/img/utilities-detail/u-14.jpg)"></div>
			</div>
		</div>
		`;
		const utilitiesPopup = "<div id='utilities-popup'><button class='btn-close' style='background-image:url(./assets/img/utilities-detail/btn-close.svg)'></button><div class='container'>"+slider+"<div></div>";
		$('main').after(utilitiesPopup);
		var galleryThumbs = new Swiper('.gallery-thumbs', {
			spaceBetween: 10,
			slidesPerView: 4,
			loop: true,
			freeMode: true,
			loopedSlides: 5, 
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
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
			$("#utilities-popup").remove();
		  })
	})
}
function loadUtilitiesDetail () {
	$("#utilities-detail svg>g>g").each((index:number,item:any)=>{
		console.log(item, index);
		$(item).on("click", (e:any)=>{
			const anchor = $(e.currentTarget).find("text").text();
			const item = $("ul.location-list ").find(`li.location-item[data-anchor="${anchor}"]`);
			if(item.length>0){
				$(item).click();
			}
		})
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
			delay: 2000,
			disableOnInteraction: false,
		  },
		  loop: true,
		speed: 1500,
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
	$(".section-apartment-detail .map-svg svg .hover-room").hover(
		// Mouse in
		function(t: any) {
			if (1100 < $(window).width()) {
				$(".show-box").removeClass("showup");
				const e = $(this).attr("id"),
					i = t.clientX,
					o = t.clientY;
			$(`.show-box[id=${e}]`).css({
				left: i - 30,
				top: o - 30
			})
				$(`.show-box[id=${e}]`).addClass("showup");
				
			}
		}, 
		// Mouse out
		function(t: any) {
			const e = $(this).attr("id")
			$(`.show-box[id=${e}]`).removeClass("showup");
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

window.onload = function () {
	loadApartmentSvg();
	loadDetailLocationSvg();
	loadUtilitiesDetail();
}
window.addEventListener('resize', function () {
	// Loading()
	loadApartmentSvg();
	loadDetailLocationSvg();
	generateDots();
});

function generateDots() {
	if ($(window).width() > 1100) {
		if ($(".fp-dots").length === 0) {
			let dotItemString = "";
			$("#fullpage .section").each((idx:number, item:any)=>{
				dotItemString += `<li class="fp-dot-item" data-menuanchor="slider-${$(item).attr("id")}">
					<a href="#slider-${$(item).attr("id")}">
						<span class="fp-number">0${idx}</span>
						<span class="fp-title">${$(item).attr("fp-title")}</span>
					</a>
				</li>`;
			}) 
			let dotEl = `<ul class="fp-dots" id="menu">${dotItemString}</ul>`;
			$('.fp-container').append(dotEl);
		}
	}

}

document.addEventListener("DOMContentLoaded", async () => {
	getSVGs(".svg");
	Loading();
	commonController();
	generateDots();
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