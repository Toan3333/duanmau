const iconBar = document.querySelector(".icon-bar");
const menu = document.querySelector(".dashboard-menu");
const dashboardLeft = document.querySelector(".dashboard-left");
iconBar.addEventListener("click", handleShowMenu);
function handleShowMenu() {
  dashboardLeft.classList.toggle("active");
  menu.classList.toggle("is-show");
}
const tabLinkItem = document.querySelectorAll(".dashboard-menu-link");
[...tabLinkItem].forEach((item) => item.addEventListener("click", tablink));
function tablink(event) {
  console.log(event.target);
  event.target.classList.add("active");
  [...tabLinkItem].forEach((item) => item.classList.remove("active"));
}
