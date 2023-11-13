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

function closeButton() {
  closeBtn.addEventListener("click", function () {
    hideAllTabs();
  });
}
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

size.addEventListener("click", showSize);
function showSize() {
  hideAllTabs();
  sizeContent.style.display = "block";
}
image.addEventListener("click", showImg);
function showImg() {
  hideAllTabs();
  uploadContent.style.display = "block";
}

upload.addEventListener("click", showUpload);
function showUpload() {
  hideAllTabs();
  uploadFileContent.style.display = "block";
}

history.addEventListener("click", showHistory);
function showHistory() {
  hideAllTabs();
  historyContent.style.display = "block";
}
