const list = document.querySelectorAll(".app-fixed-menu li");
function activelink() {
  list.forEach((item) => item.classList.add("active"));
}
list.forEach((item) => item.addEventListener("click"), activelink);
