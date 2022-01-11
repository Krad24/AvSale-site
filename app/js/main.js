$(function(){

    $('.menu__btn').on('click', function(){
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu__info').toggleClass('menu__info--active')
    })

})