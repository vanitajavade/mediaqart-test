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
                items:4
            },
            992:{
                items:6
            }
        }
    });

    $('.menu_btn').click(function(){
        $('.menu').slideToggle(200);
    });
});