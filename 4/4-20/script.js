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
