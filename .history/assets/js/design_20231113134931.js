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
color.addEventListener("click", showColor);
function showColor() {
  colorContent.style.display = "block";
  closeBtn.addEventListener("click", function () {
    colorContent.style.display = "none";
  });
}

size.addEventListener("click", showColor);
function showColor() {
  sizeContentContent.style.display = "block";
  closeBtn.addEventListener("click", function () {
    sizeContentContent.style.display = "none";
  });
}
