new Swiper ('.comment__swiper', {
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
        
    },
    keyboard:{
        enabled:true,
        onlyInViewport:true,
    },

    autoHeight: true,
});

$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__right, header').toggleClass('active');
        // $('body').toggleClass('lock');
    });
});