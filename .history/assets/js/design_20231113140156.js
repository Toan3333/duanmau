const color = document.getElementById("color");
const size = document.getElementById("size");
const image = document.getElementById("image");
const upload = document.getElementById("upload");
const history = document.getElementById("history");
const colorContent = document.querySelector(".design-mobile-content");
const sizeContent = document.querySelector(".design-mobile-content-size");
const uploadContent = document.querySelector(".design-mobile-content-upload");
const uploadFileContent = document.querySelector(".design-mobile-content-upload-file");
const historyContent = document.querySelector(".design-mobile-content-history");
const closeBtn = document.querySelector(".design-mobile-icon-close");

function hideAllTabs() {
  colorContent.style.display = "none";
  sizeContent.style.display = "none";
  uploadContent.style.display = "none";
  uploadFileContent.style.display = "none";
  historyContent.style.display = "none";
}

color.addEventListener("click", showColor);
function showColor() {
  hideAllTabs();
  colorContent.style.display = "block";
}

// size.addEventListener("click", showSize);
// function showSize() {
//   sizeContent.style.display = "block";
//   colorContent.style.display = "none";
//   uploadContent.style.display = "none";
//   uploadFileContent.style.display = "none";
//   historyContent.style.display = "none";
//   closeBtn.addEventListener("click", function () {
//     sizeContent.style.display = "none";
//   });
// }
