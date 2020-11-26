import { getSVGs, Loading } from "./utilities/util";
import { Fullpage, FullpageOptions } from "./libraries/Fullpage";
import Axios from "axios";
import * as animation from "./animation/animation";

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
if(window.innerWidth > 1100) {

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
							animation.allAnimeFullpageIndex__0();
							// anime({
							// 	targets: '#home .block-animation-grid .square',
							// 	scale: [
							// 		{value: .1, easing: 'easeOutSine', duration: 500},
							// 		{value: 1, easing: 'easeInOutQuad', duration: 1200}
							// 	],
							// 	delay: anime.stagger(200, {grid: [40,40], from: 'center'}),
							// 	loop:true
							// });
						}
					}
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
	const news = new Swiper('.intro--swiper .swiper-container', {
		spaceBetween: 20,
		autoplay: {
			delay: 2000,
		  },
		speed: 1000,
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

			}
		}
	})
}


const swiperNews = () => {
	const swiper = new Swiper(".news-swiper .swiper-container" , {
		slidesPerView: 3.5,
		speed: 2000,
		loop: true,
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

document.addEventListener("DOMContentLoaded", async () => {
	getSVGs(".svg");
	Loading()
	initFullpage();
	setBackgroundImageSection();
	swiperIntro();
	swiperNews();
	toogleMenu();
	swiperDetailNews();
});