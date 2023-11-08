// Product Detail
const idDetail = document.getElementById("iddetail");
const policy = document.getElementById("policy");
const comment = document.getElementById("comment");
const detailContent = document.querySelector(".detail-policy");
const detailContent2 = document.querySelector(".detail-content-2");
const detailComment = document.querySelector(".detail-content-comment");
const detailTab = document.querySelectorAll(".detail-tab__link");
[...detailTab].forEach((item) => item.addEventListener("click"), handleDetailTab);
function handleDetailTab(event) {
  [...detailTab].forEach((item) => item.classList.remove("active"));
}
policy.addEventListener("click", showPolicy);
function showPolicy() {
  detailContent.style.display = "none";
  detailComment.style.display = "none";
  detailContent2.style.display = "block";
}

comment.addEventListener("click", showComment);
function showComment() {
  detailContent.style.display = "none";
  detailContent2.style.display = "none";
  detailComment.style.display = "block";
}

idDetail.addEventListener("click", showIdDetail);
function showIdDetail() {
  detailComment.style.display = "none";
  detailContent2.style.display = "none";
  detailContent.style.display = "block";
}
