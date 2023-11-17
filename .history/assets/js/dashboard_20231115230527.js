const tabLinkItem = document.querySelectorAll(".dashboard-menu-link");
const tabContents = document.querySelectorAll(".dashboard-content");
[...tabLinkItem].forEach((item) => item.addEventListener("click", tablink));
function tablink(event) {
  console.log(event.target);
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

const modalClose = document.querySelector(".modal-close");
modalClose.addEventListener("click", handleCloseModal);
function handleCloseModal(event) {
  console.log(event.target);
  if (event.target.matches(".modal-close")) {
    const modal = event.target.parentNode.parentNode.parentNode;
    modal.classList.remove("modal");
  }
}
