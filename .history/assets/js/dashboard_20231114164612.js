const iconBar = document.querySelector(".icon-bar");
const menu = document.querySelector(".dashboard-menu");
const dashboardLeft = document.querySelector(".dashboard-left");
iconBar.addEventListener("click", handleShowMenu);
function handleShowMenu() {
  dashboardLeft.classList.toggle("active");
  //   menu.classList.toggle("is-show");
}