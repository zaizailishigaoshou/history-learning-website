// 示例：点击按钮显示或隐藏某个部分
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "显示/隐藏中世纪历史";
    document.body.appendChild(toggleButton);

    const medievalSection = document.getElementById("medieval");

    toggleButton.addEventListener("click", () => {
        if (medievalSection.style.display === "none") {
            medievalSection.style.display = "block";
        } else {
            medievalSection.style.display = "none";
        }
    });
});
