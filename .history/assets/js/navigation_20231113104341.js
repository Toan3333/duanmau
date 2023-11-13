const link = document.querySelectorAll(".app-fixed-link");
const list = document.querySelectorAll(".app-fixed-list");
link.addEventListener("click", function () {
  list.classList.class("active");
});
