const tabItem = document.querySelectorAll(".design-mobile-item");
const tabContents = document.querySelectorAll(".design-mobile-content");
[...tabItem].forEach((item) => item.addEventListener("click", handleTab));
function handleTab(event) {
  const tabNumber = parseInt(event.target.dataset.tab);
  [...tabContents].forEach((item) => item.classList.remove("active"));
  [...tabContents][tabNumber].classList.add("active");
}
// const color = document.getElementById("color");
// const size = document.getElementById("size");
// const image = document.getElementById("image");
// const upload = document.getElementById("upload");
// const history = document.getElementById("history");
// const colorContent = document.querySelector(".design-mobile-content");
// const sizeContent = document.querySelector(".design-mobile-content-size");
// const uploadContent = document.querySelector(".design-mobile-content-upload");
// const uploadFileContent = document.querySelector(".design-mobile-content-upload-file");
// const historyContent = document.querySelector(".design-mobile-content-history");
// const closeBtn = document.querySelectorAll(".design-mobile-icon-close");
// console.log(closeBtn);
// function closeContent() {
//   closeBtn.forEach((item) => {
//     item.addEventListener("click", function () {
//       hideAllTabs();
//     });
//   });
// }
// function hideAllTabs() {
//   colorContent.style.display = "none";
//   sizeContent.style.display = "none";
//   uploadContent.style.display = "none";
//   uploadFileContent.style.display = "none";
//   historyContent.style.display = "none";
// }

// color.addEventListener("click", showColor);
// function showColor() {
//   hideAllTabs();
//   colorContent.style.display = "block";
//   closeContent();
// }

// size.addEventListener("click", showSize);
// function showSize() {
//   hideAllTabs();
//   sizeContent.style.display = "block";
//   closeContent();
// }
// image.addEventListener("click", showImg);
// function showImg() {
//   hideAllTabs();
//   uploadContent.style.display = "block";
//   closeContent();
// }

// upload.addEventListener("click", showUpload);
// function showUpload() {
//   hideAllTabs();
//   uploadFileContent.style.display = "block";
//   closeContent();
// }

// history.addEventListener("click", showHistory);
// function showHistory() {
//   hideAllTabs();
//   historyContent.style.display = "block";
//   closeContent();
// }
