const list = document.querySelectorAll(".app-fixed-list");
list.forEach((item) => item.addEventListener("click"), activelink);
function activelink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}