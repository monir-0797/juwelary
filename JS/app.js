$(function(){
    $(`.item-slider`).slick({
        slidesToShow:3,
        prevArrow:false,
        nextArrow:false,
        autoplay:true,
        autoplaySpeed:1500,
    });
    $(`.feed-slider`).slick({
        prevArrow:false,
        nextArrow:false,
        autoplay:true,
        autoplaySpeed:2000,
    })
});