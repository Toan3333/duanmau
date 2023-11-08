// Product Detail
const idDetail = document.getElementById("iddetail");
const policy = document.getElementById("policy");
const comment = document.getElementById("comment");
const detailContent = document.querySelector(".detail-content");
const detailContent2 = document.querySelector(".detail-content-2");
const detailComment = document.querySelector(".detail-content-comment");
policy.addEventListener("click", showPolicy);
function showPolicy() {
  detailContent.style.display = "none";
}
