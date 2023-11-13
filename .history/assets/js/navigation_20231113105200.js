const link = document.querySelectorAll(".app-fixed-link");
link.forEach((item) => {
  item.addEventListener("click", function () {
    console.log(link);
  });
});
