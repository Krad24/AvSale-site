$(function () {

    //swiper-reviews

    const reviews = new Swiper('.reviews__slider', {
        // Optional parameters
        slidesPerView: "1.3",
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        breakpoints: {
            375: {
                slidesPerView: "1.7",
                spaceBetween: 25,
            },

            480: {
                slidesPerView: "2",
            },

            540: {
                slidesPerView: "2.5",
            },

            680: {
                slidesPerView: "3",
            },

            769: {
                slidesPerView: "2.5",
            },

            900: {
                slidesPerView: "3",
            },

            1024: {
                slidesPerView: "3.5",
                spaceBetween: 20,
            },

            1200: {
                slidesPerView: "4",
                spaceBetween: 65,
            },
        }
    });

    //swiper-product

    const product = new Swiper('.product__slider', {
        // Optional parameters
        slidesPerView: "1",
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        breakpoints: {
            369: {
                slidesPerView: "1.2",
            },

            480: {
                slidesPerView: "1.4",
            },

            550: {
                slidesPerView: "1.7",
            },

            660: {
                slidesPerView: "2",
            },

            900: {
                slidesPerView: "2.4",
            },

            1100: {
                slidesPerView: "2.9",
            },
        }
    });

    //burger

    $('.header__burger-btn').on('click', () => {
        $('.header__burger-btn').toggleClass('header__burger-btn--active');
        $('.burger').toggleClass('burger--active');
        $('body').toggleClass('lock');
    });

    $('body').on('click', function (e) {
        if (e.target.className == 'body lock') {
            $('body').removeClass('lock');
            $('.burger').removeClass('burger--active');
            $('.header__burger-btn').removeClass('header__burger-btn--active');
        }
    });

    // sidemenu__bar
-   $('.menu__info-btn').on('click', () => {
        $('.menu__info-btn').toggleClass('menu__info-btn--active');
        $('.menu__info-items').toggleClass('menu__info-items--active')
    })

    //search form

    $('.search__select').styler();

    // reviews srats

    $(".review__stars").rateYo({
        starWidth: "16px",
        readOnly: true,
        starSvg: `<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1594 5.02786L8.95106 1.30902C8.65171 0.38771 7.3483 0.387701 7.04894 1.30902L5.84062 5.02786H1.93039C0.961671 5.02786 0.558885 6.26748 1.3426 6.83688L4.50604 9.13525L3.29772 12.8541C2.99837 13.7754 4.05284 14.5415 4.83656 13.9721L8 11.6738L11.1634 13.9721C11.9472 14.5415 13.0016 13.7754 12.7023 12.8541L11.494 9.13525L14.6574 6.83688C15.4411 6.26748 15.0383 5.02786 14.0696 5.02786L10.1594 5.02786Z" fill="#FFC85F" stroke="white"/>
            </svg>`,
    });

    // product tabs

    $('.product__tabs-btn--characteristic').on('click', () => {
        $('.tabs__btn').removeClass('tabs__btn--active');
        $('.product__tabs-btn--characteristic').addClass('tabs__btn--active');
        $('.product__content-item').removeClass('product__content-item--active');
        $('.product__content-item--characteristic').addClass('product__content-item--active');
    });

    $('.product__tabs-btn--info').on('click', () => {
        $('.tabs__btn').removeClass('tabs__btn--active');
        $('.product__tabs-btn--info').addClass('tabs__btn--active');
        $('.product__content-item').removeClass('product__content-item--active');
        $('.product__content-item--info').addClass('product__content-item--active');
    });

    $('.product__tabs-btn--video').on('click', () => {
        $('.tabs__btn').removeClass('tabs__btn--active');
        $('.product__tabs-btn--video').addClass('tabs__btn--active');
        $('.product__content-item').removeClass('product__content-item--active');
        $('.product__content-item--video').addClass('product__content-item--active');
    })

    var mixer = mixitup('.catalog');
})