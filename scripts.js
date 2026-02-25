const galleryImgs = document.getElementsByClassName("gallery-img");
const galleryImgViewer = document.getElementById("image-viewer");
const selectedImg = document.getElementById("selected-image");

for (const img of galleryImgs) {
    img.addEventListener("click", () => {
        galleryImgViewer.style.height = document.documentElement.scrollHeight + "px";
        galleryImgViewer.style.visibility = "visible";
        selectedImg.src = img.src;
    });
}

galleryImgViewer.addEventListener("click", () => {
    galleryImgViewer.style.visibility = "hidden";
});

selectedImg.addEventListener("click", (e) => {
    e.stopPropagation();
});