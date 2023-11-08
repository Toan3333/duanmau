$(document).ready(function () {
  $(".hero-slider").slick({
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,

    dots: true,
    cssEase: "linear",
    // prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>`,
    // nextArrow: `<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>`,
  });
});
const accountRight = document.querySelector(".account-right");
const historyLink = document.getElementById("history");
const myAccount = document.getElementById("myaccount");
const accountHistory = document.querySelector(".account-history");

historyLink.addEventListener("click", function () {
  accountRight.style.display = "none";
  accountHistory.style.display = "block";
});

myAccount.addEventListener("click", function () {
  accountRight.style.display = "block";
  accountHistory.style.display = "none";
});