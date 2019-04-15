/*
*           Custom code javaScript
*           Место для твоего кода  
*/



$(function(){
    $('.carousel').carousel({
        interval: 10000,
    });
    $('.carousel').on('slide.bs.carousel', function (event) {       
        $('[data-slide-to="'+ event.from +'"]').removeClass('active');
        $('[data-slide-to="'+ event.to  +'"]').addClass('active');
        
    });

    $('.scroll').on('click', function() {
        $('html, body').animate({
            scrollTop: $('.popular-bike').offset().top,
        }, 1000);
    })

});
