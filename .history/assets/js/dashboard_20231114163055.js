const iconBar = document.querySelector(".icon-bar");
const menu = document.querySelector(".dashboard-menu");
const dashboardLeft = document.querySelector(".dashboard-left");
iconBar.addEventListener("click", handleShowMenu);
function handleShowMenu() {
  dashboardLeft.style.display = "block";
  dashboardLeft.style.display = "none";
  menu.classList.toggle("is-show");
}
