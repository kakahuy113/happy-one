
declare var anime: any;

export const allAnimeFullpageIndex__0 = () => {
	typographyAnimateStyle__1('.section-homepage');
}


const typographyAnimateStyle__1 = (selector: any) => {
	// Wrap every letter in a span
	const texts = document.querySelectorAll(`${selector} .title p`);
	texts.forEach((item) => {
		item.innerHTML = item.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
	})
	anime.timeline()
		.add({
			targets: `${selector} .title p .letter`,
			scale: [4, 1],
			opacity: [0, 1],
			translateZ: 0,
			easing: "easeOutExpo",
			duration: 950,
			delay: (el:any, i:any) => 70 * i
		})
}