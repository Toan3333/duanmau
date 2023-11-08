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
const tabItem = document.querySelectorAll(".account-link");
const accountRight = document.querySelector(".account-right");
const historyLink = document.getElementById("history");
const myAccount = document.getElementById("myaccount");
const accountHistory = document.querySelector(".account-history");

historyLink.addEventListener("click", showHistory);
function showHistory() {
  accountRight.style.display = "none";
  accountHistory.style.display = "inline-flex";
}

myAccount.addEventListener("click", showMyaccount);
function showMyaccount() {
  accountRight.style.display = "inline-flex";
  accountHistory.style.display = "none";
}

// historyLink.addEventListener("click", function () {
//   accountRight.style.display = "none";
//   accountHistory.style.display = "inline-flex";
// });

// myAccount.addEventListener("click", function () {
//   accountRight.style.display = "inline-flex";
//   accountHistory.style.display = "none";
// });
