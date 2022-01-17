$(function () {

    // sidebar

    $('.info__btn').on('click', () => {
        $('.info__btn').toggleClass('info__btn--active');
        $('.info__items').toggleClass('info__items--active')
    })

    //search form

    $('.search__select').styler();

    // reviews srats

    $(".reviews__stars").rateYo({
        starWidth: "16px",
        readOnly: true,
        starSvg: `<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1594 5.02786L8.95106 1.30902C8.65171 0.38771 7.3483 0.387701 7.04894 1.30902L5.84062 5.02786H1.93039C0.961671 5.02786 0.558885 6.26748 1.3426 6.83688L4.50604 9.13525L3.29772 12.8541C2.99837 13.7754 4.05284 14.5415 4.83656 13.9721L8 11.6738L11.1634 13.9721C11.9472 14.5415 13.0016 13.7754 12.7023 12.8541L11.494 9.13525L14.6574 6.83688C15.4411 6.26748 15.0383 5.02786 14.0696 5.02786L10.1594 5.02786Z" fill="#FFC85F" stroke="white"/>
            </svg>`,
    });


    var mixer = mixitup('.catalog');



})