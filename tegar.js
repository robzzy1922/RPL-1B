document.addEventListener("DOMContentLoaded", function () {
  const images = ["img/tegar-1.jpg", "img/tegar-2.jpg"];
  const sliderImg = document.querySelector(".slider-img");
  let currentImageIndex = 0;

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    changeImage();
  }

  function changeImage() {
    sliderImg.style.opacity = 0;
    setTimeout(() => {
      sliderImg.src = images[currentImageIndex];
      sliderImg.style.opacity = 1;
    }, 500);
  }

  setInterval(nextImage, 3000); // Auto transition every 3 seconds
});

var errorMessage = document.getElementById("errorMessage");

// Setelah 5 detik, atur opacity tulisan menjadi 0
setTimeout(function () {
  errorMessage.style.opacity = 0;
}, 5000);
