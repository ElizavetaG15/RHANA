$(function() {

    $('.banner__wrapper').slick({

        prevArrow: '<button type="button" class="slick-btn slick-prev banner-prev"> <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M10 18L2 10L10 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' +
            '</svg>',
        nextArrow: '<button type="button" class="slick-btn slick-next banner-prev"> <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M2 2L10 10L2 18" stroke="#2EA6FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' +
            '</svg></button>',

    })
});

$(function() {

    $('.special__wrapper').slick({
        slidesToShow: 4,

        prevArrow: '<button type="button" class="slick-btn slick-prev special-prev"> <img src="images/special-slick-prev.svg" alt=""> </button>',
        nextArrow: '<button type="button" class="slick-btn slick-next special-next"> <img src="images/special-slick-next.svg" alt=""> </button>',

    })
});

$(function() {

    $('.bestsellers__wrapper').slick({
        slidesToShow: 4,

        prevArrow: '<button type="button" class="slick-btn slick-prev special-prev"> <img src="images/special-slick-prev.svg" alt=""> </button>',
        nextArrow: '<button type="button" class="slick-btn slick-next special-next"> <img src="images/special-slick-next.svg" alt=""> </button>',

    })
});

$(function() {

    $('.brands__wrapper').slick({
        slidesToShow: 5,

        prevArrow: '<button type="button" class="slick-btn slick-prev special-prev"> <img src="images/special-slick-prev.svg" alt=""> </button>',
        nextArrow: '<button type="button" class="slick-btn slick-next special-next"> <img src="images/special-slick-next.svg" alt=""> </button>',

    })
});