const link = document.querySelectorAll(".app-fixed-link");
const list = document.querySelectorAll(".app-fixed-list");
link.forEach((item) => {
  item.addEventListener("click", function () {
    list.forEach((item) => {
      item.classList.add("active");
    });
  });
});
