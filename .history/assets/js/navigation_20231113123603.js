const list = document.querySelectorAll(".app-fixed-list");

function activelink() {
  list.forEach((item) => item.classList.remove("active"));
}