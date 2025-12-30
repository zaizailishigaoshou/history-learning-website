// 等待DOM完全加载后执行所有逻辑，避免元素未加载
document.addEventListener('DOMContentLoaded', function() {
  // ========== 原有图片弹窗功能（完整保留，无修改） ==========
  const lessonContent = document.getElementById('lesson-content');
  const imagePopup = document.getElementById('image-popup');
  const popupImage = document.getElementById('popup-image');
  const closePopup = document.getElementById('close-popup');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');

  let imageElements = [];
  let currentImageIndex = 0;

  // 初始化图片弹窗
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

  // 上一张/下一张图片
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

  // ========== 点名跳转功能（强化版，双重校验） ==========
  // 1. 强制获取元素，打印日志便于排查
  const rollcallText = document.getElementById('rollcall-text');
  console.log('点名元素是否获取到：', rollcallText); // 打开F12控制台可查看是否获取成功

  // 2. 双重判断，确保事件绑定成功
  if (rollcallText && typeof rollcallText.addEventListener === 'function') {
    rollcallText.addEventListener('click', function() {
      console.log('点名文字被点击了，开始跳转...'); // 点击后可在控制台查看是否触发
      // 强制跳转，兼容所有浏览器
      window.location.href = '点名.html';
      // 若想强制在当前窗口跳转，可追加：
      // window.location.replace('点名.html');
    });
  } else {
    console.error('未获取到点名元素，或元素不支持事件绑定！');
  }
});
