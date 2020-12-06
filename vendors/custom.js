jQuery('#fullpage').fullpage({
    anchors: ['slider-home', 'slider-introduce', 'slider-video', 'slider-location', 'slider-utilities', 'slider-apartment', 'slider-news', 'slider-contact'],
    menu: '#menu',
    lazyLoad: true
});

jQuery(document).on("click", "#left-menu .nav-item a", ()=>{
    console.log("click");
    jQuery(".hambuger--menu").click();
})