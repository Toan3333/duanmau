const list = document.querySelectorAll(".app-fixed-list li");
console.log(list);
function activelink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click"), activelink);
