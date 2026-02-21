<<<<<<< HEAD
// 获取所有图片元素
const images = document.querySelectorAll('.gallery-image');

// 添加点击事件监听
images.forEach(image => {
    image.addEventListener('click', function () {
        if (this.classList.contains('zoomed')) {
            // 如果图片已经放大，点击后恢复原状
            this.classList.remove('zoomed');
        } else {
            // 如果图片没有放大，点击后放大并居中
            this.classList.add('zoomed');
        }
    });
});
=======
// 获取所有图片元素
const images = document.querySelectorAll('.gallery-image');

// 添加点击事件监听
images.forEach(image => {
    image.addEventListener('click', function () {
        if (this.classList.contains('zoomed')) {
            // 如果图片已经放大，点击后恢复原状
            this.classList.remove('zoomed');
        } else {
            // 如果图片没有放大，点击后放大并居中
            this.classList.add('zoomed');
        }
    });
});
>>>>>>> ab9c8bdc37121b2313b4dd3bf6008e538395e821
