<<<<<<< HEAD
const images = document.querySelectorAll("#lesson-content img"); // 自动包含1.png、2.png、3.png（无需修改，自动兼容）
const imagePopup = document.getElementById("image-popup");
const popupImage = document.getElementById("popup-image");
const closePopup = document.getElementById("close-popup");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
// 原有：获取“点名”文字元素
const rollcallText = document.getElementById("rollcall-text");
// 新增：获取“课堂朗读”文字元素（核心修改点1）
const readText = document.getElementById("read-text");

let currentIndex = 0;
let currentRotation = 0;

// 原有弹窗功能函数（无需修改，完全保留）
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

// 原有：给所有图片绑定弹窗事件（自动兼容3.png，无需修改）
images.forEach((img, index) => {
  img.addEventListener("click", () => openImagePopup(index));
});

// 原有：给“点名”文字绑定跳转事件（无需修改）
if (rollcallText) {
  rollcallText.addEventListener("click", () => {
    // 跳转路径：对应 D:\history-learning-website\4\4-20\点名.html
    window.location.href = "4/4-20/点名.html";
    // 若想在新窗口打开，替换为：window.open("4/4-20/点名.html", "_blank");
  });
}

// 新增：给“课堂朗读”文字绑定跳转事件（核心修改点2）
if (readText) {
  readText.addEventListener("click", () => {
    // 跳转路径：对应 D:\history-learning-website\4\4-20\课堂朗读.html（同目录直接写文件名）
    window.location.href = "课堂朗读.html";
    // 若想在新窗口打开，替换为：window.open("课堂朗读.html", "_blank");
  });
}

// 原有弹窗交互事件（无需修改，完全保留）
closePopup.addEventListener("click", closeImagePopup);
prevButton.addEventListener("click", showPrevImage);
nextButton.addEventListener("click", showNextImage);
popupImage.addEventListener("click", rotateImage);
=======
// 等待DOM完全加载，避免元素未获取
document.addEventListener('DOMContentLoaded', function() {
  // ========== 原有图片弹窗功能（完整保留，图片点击正常放大/切换） ==========
  const lessonContent = document.getElementById('lesson-content');
  const imagePopup = document.getElementById('image-popup');
  const popupImage = document.getElementById('popup-image');
  const closePopup = document.getElementById('close-popup');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');

  let imageElements = [];
  let currentImageIndex = 0;

  // 图片点击绑定弹窗
  if (lessonContent) {
    imageElements = Array.from(lessonContent.querySelectorAll('img'));
    imageElements.forEach((img, index) => {
      // 仅图片触发弹窗，文字不触发
      img.addEventListener('click', function() {
        currentImageIndex = index;
        popupImage.src = this.src;
        imagePopup.style.display = 'block';
      });
    });
  }

  // 关闭弹窗
  if (closePopup) {
    closePopup.addEventListener('click', function() {
      imagePopup.style.display = 'none';
    });
  }

  // 点击弹窗外部关闭
  window.addEventListener('click', function(e) {
    if (e.target === imagePopup) {
      imagePopup.style.display = 'none';
    }
  });

  // 上一张/下一张图片切换
  if (prevButton) {
    prevButton.addEventListener('click', function() {
      currentImageIndex = (currentImageIndex - 1 + imageElements.length) % imageElements.length;
      popupImage.src = imageElements[currentImageIndex].src;
    });
  }
  if (nextButton) {
    nextButton.addEventListener('click', function() {
      currentImageIndex = (currentImageIndex + 1) % imageElements.length;
      popupImage.src = imageElements[currentImageIndex].src;
    });
  }

  // ========== 点名文字跳转（仅文字点击触发，精准匹配需求） ==========
  const rollcallText = document.getElementById('rollcall-text');
  // 确保元素获取成功
  if (rollcallText) {
    rollcallText.addEventListener('click', function() {
      // 仅点击“点名”文字时，跳转到点名.html
      window.location.href = '点名.html';
      // 若需新窗口打开，替换为：window.open('点名.html', '_blank');
    });
  }
});
>>>>>>> ab9c8bdc37121b2313b4dd3bf6008e538395e821
