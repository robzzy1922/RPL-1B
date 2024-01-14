document.addEventListener("DOMContentLoaded", function () {
  const images = ["img/guntur-1.jpg", "img/guntur-2.jpg", "img/guntur-3.jpg", "img/guntur-4.jpg", "img/guntur-5.jpg"];
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

  setInterval(nextImage, 2000); // Auto transition every 3 seconds
});

var errorMessage = document.getElementById("errorMessage");

// Setelah 5 detik, atur opacity tulisan menjadi 0
setTimeout(function () {
  errorMessage.style.opacity = 0;
}, 5000);

const colorfulShadow = document.querySelector(".colorful-shadow");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeShadowColor() {
  colorfulShadow.style.background = getRandomColor();
  setTimeout(changeShadowColor, 1000); // Ganti warna setiap 1 detik
}

// Panggil fungsi untuk memulai perubahan warna
changeShadowColor();
