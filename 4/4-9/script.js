const images = document.querySelectorAll("#lesson-content img");
const imagePopup = document.getElementById("image-popup");
const popupImage = document.getElementById("popup-image");
const closePopup = document.getElementById("close-popup");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let currentIndex = 0;
let currentRotation = 0;

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

images.forEach((img, index) => {
  img.addEventListener("click", () => openImagePopup(index));
});

closePopup.addEventListener("click", closeImagePopup);
prevButton.addEventListener("click", showPrevImage);
nextButton.addEventListener("click", showNextImage);

// 点击图片顺时针旋转90度
popupImage.addEventListener("click", rotateImage);