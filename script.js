document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("img");
    
    const btnNext = document.getElementById("next");
    const btnPrev = document.getElementById("prev");

    const images = ["Asset/image2.jpeg", "Asset/image3.jpeg", "Asset/image4.jpeg", "Asset/image5.jpeg"];
    let currentImgIndex = 0;

    function nextImage() {
        currentImgIndex++;
        if (currentImgIndex >= images.length) {
            currentImgIndex = 0; // Wrap around to the first image
        }
        image.src = images[currentImgIndex];
    }

    function prevImage() {
        currentImgIndex--;
        if (currentImgIndex < 0) {
            currentImgIndex = images.length - 1; // Wrap around to the last image
        }
        image.src = images[currentImgIndex];
    }

    btnNext.onclick = nextImage;
    btnPrev.onclick = prevImage;
});
