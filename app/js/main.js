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

    //swiper-product-tabs

    const productTabs = new Swiper('.product__tabs-slider', {
        // Optional parameters
        slidesPerView: "auto",
    });

    //swiper-comments-tabs

    const commentsTabs = new Swiper('.comments__slider', {
        // Optional parameters
        slidesPerView: "auto",
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

    $('.menu__info-btn').on('click', () => {
        $('.menu__info-btn').toggleClass('menu__info-btn--active');
        $('.menu__info-items').toggleClass('menu__info-items--active')
    })

    //search form

    $('.search__select').styler();

    // reviews srats

    $(".review__stars").rateYo({
        starWidth: "16px",
        readOnly: true,
        numStars: 5,
        normalFill: "#E9E9E9",
        ratedFill: "#FFC85F",
        starSvg: `<svg viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1594 5.02786L8.95106 1.30902C8.65171 0.38771 7.3483 0.387701 7.04894 1.30902L5.84062 5.02786H1.93039C0.961671 5.02786 0.558885 6.26748 1.3426 6.83688L4.50604 9.13525L3.29772 12.8541C2.99837 13.7754 4.05284 14.5415 4.83656 13.9721L8 11.6738L11.1634 13.9721C11.9472 14.5415 13.0016 13.7754 12.7023 12.8541L11.494 9.13525L14.6574 6.83688C15.4411 6.26748 15.0383 5.02786 14.0696 5.02786L10.1594 5.02786Z"/>
            </svg>`,
    });

    // comments srats

    $(".comments__stars").rateYo({
        starWidth: "18px",
        readOnly: true,
        numStars: 5,
        normalFill: "#E9E9E9",
        ratedFill: "#FFC85F",
        starSvg: `<svg viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1594 5.02786L8.95106 1.30902C8.65171 0.38771 7.3483 0.387701 7.04894 1.30902L5.84062 5.02786H1.93039C0.961671 5.02786 0.558885 6.26748 1.3426 6.83688L4.50604 9.13525L3.29772 12.8541C2.99837 13.7754 4.05284 14.5415 4.83656 13.9721L8 11.6738L11.1634 13.9721C11.9472 14.5415 13.0016 13.7754 12.7023 12.8541L11.494 9.13525L14.6574 6.83688C15.4411 6.26748 15.0383 5.02786 14.0696 5.02786L10.1594 5.02786Z"/>
            </svg>`,
    });

    // comments rating

    $(".comments__rating").rateYo({
        starWidth: "24px",
        numStars: 5,
        rating: 5,
        normalFill: "#E9E9E9",
        fullStar: true,
        spacing: "10px",
        multiColor: {
            "startColor": "#FF0000", //RED
            "endColor": "#00FF00"  //GREEN
        },
        starSvg: `<svg viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1594 5.02786L8.95106 1.30902C8.65171 0.38771 7.3483 0.387701 7.04894 1.30902L5.84062 5.02786H1.93039C0.961671 5.02786 0.558885 6.26748 1.3426 6.83688L4.50604 9.13525L3.29772 12.8541C2.99837 13.7754 4.05284 14.5415 4.83656 13.9721L8 11.6738L11.1634 13.9721C11.9472 14.5415 13.0016 13.7754 12.7023 12.8541L11.494 9.13525L14.6574 6.83688C15.4411 6.26748 15.0383 5.02786 14.0696 5.02786L10.1594 5.02786Z"/>
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

    // comments tabs

    $('.comments__btn--video').on('click', () => {
        $('.tabs__btn').removeClass('tabs__btn--active');
        $('.comments__btn--video').addClass('tabs__btn--active');
        $('.comments__item').removeClass('comments__item--active');
        $('.comments__item--video').addClass('comments__item--active');
    });

    $('.comments__btn--network').on('click', () => {
        $('.tabs__btn').removeClass('tabs__btn--active');
        $('.comments__btn--network').addClass('tabs__btn--active');
        $('.comments__item').removeClass('comments__item--active');
        $('.comments__item--network').addClass('comments__item--active');
    });

    $('.comments__btn--speak').on('click', () => {
        $('.tabs__btn').removeClass('tabs__btn--active');
        $('.comments__btn--speak').addClass('tabs__btn--active');
        $('.comments__item').removeClass('comments__item--active');
        $('.comments__item--speak').addClass('comments__item--active');
    })

    // search extended btn 

    $('.search__extended-btn').on('click', ()=> {
        $('.search__extended-btn').toggleClass('search__extended-btn--active');
        $('.search__extended').toggleClass('search__extended--active');
    });

    // search стоимость
    let $rangePrice= $(".search__range-input--price"),
        $inputFromPrice = $(".search__from-input--price"),
        $inputToPrice = $(".search__to-input--price"),
        minPrice = $rangePrice.data.min,
        maxPrice = $rangePrice.data.max,
        fromPrice= $rangePrice.data.from;

    $rangePrice.ionRangeSlider({
        skin: "modern",
        type: "double",
        grid: true,
        min: minPrice,
        max: maxPrice,
        from: fromPrice,
        onStart: updateInputsPrice,
        onChange: updateInputsPrice,
    });
    instancePrice = $rangePrice.data("ionRangeSlider");

    function updateInputsPrice(data) {
        fromPrice = data.from;
        toPrice = data.to;

        $inputFromPrice.prop("value", fromPrice);
        $inputToPrice.prop("value", toPrice);
    }

    $inputFromPrice.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < minPrice) {
            val = minPrice;
        } else if (val > toPrice) {
            val = toPrice;
        }

        instancePrice.update({
            from: val
        });
    });

    $inputToPrice.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < fromPrice) {
            val = fromPrice;
        } else if (val > maxPrice) {
            val = maxPrice;
        }

        instancePrice.update({
            to: val
        });
    });

    // search пробег
    var $rangeDistance = $(".search__range-input--distance"),
        $inputFromDistance = $(".search__from-input--distance"),
        $inputToDistance = $(".search__to-input--distance"),
        minDistance = $rangeDistance.data.min,
        maxDistance = $rangeDistance.data.max,
        toDistance = $rangeDistance.data.to;

    $rangeDistance.ionRangeSlider({
        skin: "modern",
        type: "double",
        grid: true,
        min: minDistance,
        max: maxDistance,
        to: toDistance,
        onStart: updateInputsDistance,
        onChange: updateInputsDistance,
    });
    instanceDistance = $rangeDistance.data("ionRangeSlider");

    function updateInputsDistance(data) {
        fromDistance = data.from;
        toDistance = data.to;

        $inputFromDistance.prop("value", fromDistance);
        $inputToDistance.prop("value", toDistance);
    }

    $inputFromDistance.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < minDistance) {
            val = minDistance;
        } else if (val > toDistance) {
            val = toDistance;
        }

        instanceDistance.update({
            from: val
        });
    });

    $inputToDistance.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < fromDistance) {
            val = fromDistance;
        } else if (val > maxDistance) {
            val = maxDistance;
        }

        instanceDistance.update({
            to: val
        });
    });


var mixer = mixitup('.catalog');
})