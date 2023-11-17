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
const classNames = {
  dashboardAdd: ".dashboard-add",
  modalClose: ".modal-close",
  modal: ".modal",
  modalButton: ".modal-button",
  modalUpdate: ".modal-update",
  modalAddPro: ".modal-addpro",
  modalEditPro: ".modal-editpro",
  edit: ".edit",
};

const addCategori = document.querySelectorAll(classNames.dashboardAdd);
const modalClose = document.querySelectorAll(classNames.modalClose);
const modal = document.querySelector(classNames.modal);
const modalButton = document.querySelectorAll(classNames.modalButton);
const modalUpdate = document.querySelector(classNames.modalUpdate);
const modalAddPro = document.querySelector(classNames.modalAddPro);
const modalEditPro = document.querySelector(classNames.modalEditPro);
const edits = document.querySelectorAll(classNames.edit);

function addClass(element, className) {
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}
addCategori.forEach((item) => item.addEventListener("click", themdanhmuc));
modalClose.forEach((item) => item.addEventListener("click", modalCloses));
edits.forEach((item) => item.addEventListener("click", handleAddCategori));
modalButton.forEach((item) => item.addEventListener("click", handleModalButton));

function themdanhmuc() {
  addClass(modal, "active");
  addClass(modalAddPro, "active");
}

function modalCloses() {
  removeClass(modal, "active");
  removeClass(modalUpdate, "active");
  removeClass(modalAddPro, "active");
  removeClass(modalEditPro, "active");
}

function handleAddCategori() {
  addClass(modalUpdate, "active");
  addClass(modalEditPro, "active");
}

function handleModalButton() {
  // modalClose.forEach((item) => removeClass(item, "active"));
  removeClass(element, className);
}
// const addCategori = document.querySelectorAll(".dashboard-add");
// const modalClose = document.querySelectorAll(".modal-close");
// const modal = document.querySelector(".modal");
// const modalButton = document.querySelectorAll(".modal-button");
// const modalUpdata = document.querySelector(".modal-update");
// const modalPro = document.querySelector(".modal-addpro");
// const modalEditPro = document.querySelector(".modal-editpro");
// const edits = document.querySelectorAll(".edit");

// addCategori.forEach((item) => item.addEventListener("click", themdanhmuc));
// function themdanhmuc() {
//   modal.classList.add("active");
//   modalPro.classList.add("active");
// }

// modalClose.forEach((item) => item.addEventListener("click", modalCloses));
// function modalCloses() {
//   modal.classList.remove("active");
//   modalUpdata.classList.remove("active");
//   modalPro.classList.remove("active");
//   modalEditPro.classList.remove("active");
// }

// edits.forEach((item) => item.addEventListener("click", handleAddCategori));
// function handleAddCategori() {
//   modalUpdata.classList.add("active");
//   modalEditPro.classList.add("active");
// }
// // chức năng lưu
// modalButton.forEach((item) => item.addEventListener("click", handleModalButton));
// function handleModalButton() {
//   modal.classList.remove("active");
//   modalUpdata.classList.remove("active");
//   modalPro.classList.remove("active");
//   modalEditPro.classList.remove("active");
// }
