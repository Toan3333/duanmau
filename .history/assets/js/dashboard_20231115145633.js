const iconBar = document.querySelector(".icon-bar");
const navigation = document.querySelector(".navigation");
const main = document.querySelector(".main");
iconBar.addEventListener("click", function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
});
