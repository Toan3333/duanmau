const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".app-fixed-link").forEach((link) => {
  console.log(link.href);
});
console.log(activePage);
document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll(".app-fixed-list");

  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Xóa lớp 'active' từ tất cả các mục
      menuItems.forEach(function (item) {
        item.classList.remove("active");
      });

      // Thêm lớp 'active' cho mục được nhấp
      item.classList.add("active");
    });
  });
});
