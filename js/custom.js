$(document).ready(function(){
    $('.company .owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        autoplay:true, 
        autoplayTimeout: 4000,
        autoplaySpeed: 1500,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            992:{
                items:6
            }
        }
    });
});