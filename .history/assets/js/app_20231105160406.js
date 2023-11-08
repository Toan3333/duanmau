$(document).ready(function () {
  $(".hero-slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    dots: true,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>`,
  });
});
