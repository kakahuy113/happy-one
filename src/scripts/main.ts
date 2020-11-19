import { getSVGs, Loading } from "./utilities/util";
import { Fullpage, FullpageOptions } from "./libraries/Fullpage";
import Axios from "axios";

declare var Swiper:any;
declare var $:any;
declare var YT:any;

const initFullpage = () => {
	const fpOptions: FullpageOptions = {
		prevEl: ".fp-prev",
		nextEl: ".fp-next",
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
				console.log(currentSlide, nextSlide, currentIndex, nextIndex);
			},
			// event is fired after slide end transition
			afterSlideChange: function (currentSlide, currentIndex) {
				console.log(currentSlide, currentIndex);
			},
		},
	};
	const fp = new Fullpage(".fp-container", fpOptions);
	// method slide to a slide with index
	fp.slideTo(0);
	// method get current index of fullpage
	fp.getIndex();
	// method allow or not allow scroll to slide fullpage: true = allow, false = not allow
	fp.canScroll(true);
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
		slidesPerView: 3,
		spaceBetween: 20,
		
		speed: 1000,
		// breakpoints: {
		// 	575: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 5,
		// 	},
		// 	767.98: {
		// 		slidesPerView: 3,
		// 		spaceBetween: 5,
		// 	},
		// 	1025: {
		// 		slidesPerView: 3,
		// 		spaceBetween: 27,
		// 	}
		// }
	})
}

const swiperUtil = () => {
	const swiper = new Swiper(".content-main-right .desc .swiper-container" , {
		// slidesPerView: 4,
		// slidesPerColumn: 4,
		slidesPerView: 4,
		spaceBetween: 70,
		direction: 'vertical',
		speed: 1000
	})
}

const swiperNews = () => {
	const swiper = new Swiper(".news-swiper .swiper-container" , {
		slidesPerView: 3.5,
		speed: 1000,
		loop: true
	})
}

const toogleMenu = () => {
	document.querySelector(".hambuger--menu").addEventListener("click" , (e) => {
		document.querySelector("header").classList.toggle("show");
	})
}



const youtubeApiController = () => {
	var script = document.createElement('script');
	script.onload = function() {
		console.log("Script loaded and ready");
	};
	if(document.querySelector(".youtube-video")) {
		script.src = `https://www.youtube.com/iframe_api`;
		script.setAttribute("async", "");
		script.setAttribute("defer", "");
		document.getElementsByTagName('head')[0].appendChild(script);
	}
	const player = new (<any>window).YT.Player('VYT', {
		videoId: 'bS7q40KlgzA',
		events: {
		  'onReady': onPlayerReady,
		  'onStateChange': onPlayerStateChange
		}
	  });
	   // 4. The API will call this function when the video player is ready.
	   function onPlayerReady(event:any) {
		   console.log(event);
		   
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event:any) {
		  console.log(event);
		  
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
}
document.addEventListener("DOMContentLoaded", async () => {
	getSVGs(".svg");
	Loading();
	initFullpage();
	setBackgroundImageSection();
	swiperIntro();
	swiperUtil();
	swiperNews();
	toogleMenu();
	youtubeApiController();
});