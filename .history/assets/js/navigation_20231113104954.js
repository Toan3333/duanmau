const list = document.querySelectorAll(".app-fixed-list");
console.log(list);
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click"), activeLink);
