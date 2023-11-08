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

// Product Detail
const idDetail = document.getElementById("iddetail");
const policy = document.getElementById("policy");
const comment = document.getElementById("comment");
const detailContent = document.querySelector(".detail-content");
const detailContent2 = document.querySelector(".detail-content-2");
const detailComment = document.querySelector(".detail-content-comment");

policy.addEventListener("click", showPolicy);
function showPolicy() {
  detailContent.style.display = "none";
  detailComment.style.display = "none";
  detailContent2.style.display = "block";
}

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