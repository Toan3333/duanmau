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
const modalClose = document.querySelectorAll(".modal-close");
const modal = document.querySelector(".modal");
const modalUpdata = document.querySelector(".modal-update");
const edits = document.querySelectorAll(".edit");

// modalClose.addEventListener("click", handleCloseModal);
// function handleCloseModal() {
//   modal.classList.remove("active");
// }
function handleModalClose() {
  modal.classList.remove("active");
  modalUpdata.classList.remove("active");
}
addCategori.addEventListener("click", handleShowModal);
function handleShowModal() {
  modal.classList.add("active");
  handleModalClose();
}
edits.forEach((item) => item.addEventListener("click", handleAddCategori));
function handleAddCategori() {
  modalUpdata.classList.add("active");
}
modalClose.forEach((item) => item.addEventListener("click", handleModalClose));
