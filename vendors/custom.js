jQuery('#fullpage').fullpage({
    anchors: ['slider-home', 'slider-introduce', 'slider-video', 'slider-location', 'slider-utilities', 'slider-apartment', 'slider-news', 'slider-contact'],
    menu: '#menu',
    lazyLoad: true,
    afterLoad: (origin, destination, direction) => {},
    onLeave: (origin, destination, direction) => {
        let currentSection = jQuery(document).find(".section")[destination - 1];
        jQuery(currentSection).find("section>div").css("display", "none");
        setTimeout(()=>{
            jQuery(currentSection).find("section>div").css("display", "table");
        }, 10)
    }

});

jQuery(document).on("click", "#left-menu .nav-item a", () => {
    console.log("click");
    jQuery(".hambuger--menu").click();
})