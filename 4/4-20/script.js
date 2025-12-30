const images = document.querySelectorAll("#lesson-content img"); // 包含1.png和2.png（2.png仅显示，不弹窗）
const imagePopup = document.getElementById("image-popup");
const popupImage = document.getElementById("popup-image");
const closePopup = document.getElementById("close-popup");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
// 新增：获取“点名”文字元素
const rollcallText = document.getElementById("rollcall-text");

let currentIndex = 0;
let currentRotation = 0;

// 原有弹窗功能函数（无需修改）
function openImagePopup(index) {
  currentIndex = index;
  const imgSrc = images[index].src;
  popupImage.src = imgSrc;
  imagePopup.style.display = "flex";
}

function closeImagePopup() {
  imagePopup.style.display = "none";
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  popupImage.src = images[currentIndex].src;
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  popupImage.src = images[currentIndex].src;
}

function rotateImage() {
  currentRotation = (currentRotation + 90) % 360;
  popupImage.style.transform = `rotate(${currentRotation}deg)`;
}

// 原有：给所有图片绑定弹窗事件（若你不想2.png弹窗，可注释此段，仅1.png弹窗不受影响）
images.forEach((img, index) => {
  img.addEventListener("click", () => openImagePopup(index));
});

// 新增：给“点名”文字绑定跳转事件，跳转至指定路径的点名.html
if (rollcallText) {
  rollcallText.addEventListener("click", () => {
    // 跳转路径：对应 D:\history-learning-website\4\4-20\点名.html
    // 相对路径解析：当前HTML在根目录，直接指向4/4-20/点名.html
    window.location.href = "4/4-20/点名.html";
    // 若想在新窗口打开，替换为：window.open("4/4-20/点名.html", "_blank");
  });
}

// 原有弹窗交互事件（无需修改）
closePopup.addEventListener("click", closeImagePopup);
prevButton.addEventListener("click", showPrevImage);
nextButton.addEventListener("click", showNextImage);
popupImage.addEventListener("click", rotateImage);
