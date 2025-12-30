// 一、原有图片弹窗功能（完整保留，确保图片放大/切换/关闭正常使用）
document.addEventListener('DOMContentLoaded', function() {
  // 获取相关元素
  const lessonContent = document.getElementById('lesson-content');
  const imagePopup = document.getElementById('image-popup');
  const popupImage = document.getElementById('popup-image');
  const closePopup = document.getElementById('close-popup');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');

  // 存储所有图片元素和当前图片索引
  let imageElements = [];
  let currentImageIndex = 0;

  // 初始化：获取所有图片并绑定点击事件
  if (lessonContent) {
    imageElements = Array.from(lessonContent.querySelectorAll('img'));
    
    imageElements.forEach((img, index) => {
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

  // 上一张图片
  if (prevButton) {
    prevButton.addEventListener('click', function() {
      currentImageIndex = (currentImageIndex - 1 + imageElements.length) % imageElements.length;
      popupImage.src = imageElements[currentImageIndex].src;
    });
  }

  // 下一张图片
  if (nextButton) {
    nextButton.addEventListener('click', function() {
      currentImageIndex = (currentImageIndex + 1) % imageElements.length;
      popupImage.src = imageElements[currentImageIndex].src;
    });
  }

  // 二、点名文字跳转功能（核心新增代码）
  const rollcallText = document.getElementById('rollcall-text');
  if (rollcallText) {
    rollcallText.addEventListener('click', function() {
      // 跳转到同一目录下的点名.html
      window.location.href = '点名.html';
      // 若需要在新窗口打开，替换上面一行为：
      // window.open('点名.html', '_blank');
    });
  }
});
