const iconBar = document.querySelector(".icon-bar");
const menu = document.querySelector(".dashboard-menu");
iconBar.addEventListener("click", handleShowMenu);
function handleShowMenu() {
  menu.classList.add("is-show");
}