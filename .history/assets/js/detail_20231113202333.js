// Product Detail
const idDetail = document.getElementById("iddetail");
const policy = document.getElementById("policy");
const comment = document.getElementById("comment");
const detailContent = document.querySelector(".detail-policy");
const detailContent2 = document.querySelector(".detail-content-2");
const detailComment = document.querySelector(".detail-content-comment");
const detailTab = document.querySelectorAll(".detail-tab__link");
const sizeItems = document.querySelectorAll(".detail-size__item");
[...sizeItems].forEach(item=> item.addEventListener("click", handleSizeClick))

[...detailTab].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(event) {
  // console.log(event.target);
  [...detailTab].forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");
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
