$(function(){

    // sidebar

    $('.info__btn').on('click', () => {
        $('.info__btn').toggleClass('info__btn--active');
        $('.info__items').toggleClass('info__items--active')
    })

    //search form

    $('.search__select').styler();



})