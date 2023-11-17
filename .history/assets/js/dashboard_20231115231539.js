const tabLinkItem = document.querySelectorAll(".dashboard-menu-link");
const tabContents = document.querySelectorAll(".dashboard-content");
[...tabLinkItem].forEach((item) => item.addEventListener("click", tablink));
function tablink(event) {
  [...tabLinkItem].forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");
  const tabNumber = parseInt(event.target.dataset.tab);
  [...tabContents].forEach((item) => item.classList.remove("active"));
  [...tabContents][tabNumber - 1].classList.add("active");
}
const iconBar = document.querySelector(".icon-bar");
const navigation = document.querySelector(".navigation");
const main = document.querySelector(".main");
iconBar.addEventListener("click", handelToggleMenu);
function handelToggleMenu(event) {
  event.target.classList.toggle("fa-angle-right");
  event.target.classList.toggle("fa-angle-left");
  navigation.classList.toggle("active");
  main.classList.toggle("active");
}
const addCategori = document.querySelector(".dashboard-add");
const modalClose = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");
addCategori.addEventListener("click", handleShowModal);
modalClose.addEventListener("click", handleCloseModal);
function handleCloseModal() {
  modal.classList.add("active");
}
