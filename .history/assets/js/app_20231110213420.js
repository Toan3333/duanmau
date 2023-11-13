$(document).ready(function () {
  $(".hero-slider").slick({
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,

    dots: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
    // prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>`,
    // nextArrow: `<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>`,
  });
});

const tabItem = document.querySelectorAll(".account-link");
const accountRight = document.querySelector(".account-right");
const orderHistoryContent = document.querySelector(".order-history");
const orderHistory = document.getElementById("history-order");
const historyLink = document.getElementById("history");
const myAccount = document.getElementById("myaccount");
const accountHistory = document.querySelector(".account-history");
[...tabItem].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(event) {
  // console.log(event.target);
  [...tabItem].forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");
}

historyLink.addEventListener("click", showHistory);
function showHistory() {
  accountHistory.style.display = "inline-flex";

  accountRight.style.display = "none";
  orderHistoryContent.style.display = "none";
}

myAccount.addEventListener("click", showMyaccount);
function showMyaccount() {
  accountRight.style.display = "inline-flex";
  accountHistory.style.display = "none";
  orderHistoryContent.style.display = "none";
}

orderHistory.addEventListener("click", showHistoryOder);
function showHistoryOder() {
  accountRight.style.display = "none";
  accountHistory.style.display = "none";
  orderHistoryContent.style.display = "inline-flex";
}