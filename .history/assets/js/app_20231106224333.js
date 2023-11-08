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
const listVal = document.querySelector(".list-val");
const listValMenu = document.querySelector(".list-val-menu");
const toggle = document.querySelector(".updown-toggle");

toggle.addEventListener("click", function (event) {
  event.target.classList.toggle("fa-angle-up");
  event.target.classList.toggle("fa-angle-down");
  listValMenu.classList.toggle("active");
});

[...tabItem].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(event) {
  // console.log(event.target);
  [...tabItem].forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");
}

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
