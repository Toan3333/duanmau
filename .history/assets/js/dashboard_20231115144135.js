const tabLinkItem = document.querySelectorAll(".dashboard-menu-link");
const tabContents = document.querySelectorAll(".dashboard-content");
[...tabLinkItem].forEach((item) => item.addEventListener("click", tablink));
function tablink(event) {
  console.log(event.target);
  [...tabLinkItem].forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");
  const tabNumber = parseInt(event.target.dataset.tab);
  [...tabContents].forEach((item) => item.classList.remove("active"));
  [...tabContents][tabNumber - 1].classList.add("active");
}
const iconBar = document.querySelector(".icon-bar");
const navigation = document.querySelector(".navigation");
const main = document.querySelector(".main");
iconBar.addEventListener("click", function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
});
