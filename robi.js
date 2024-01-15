document.addEventListener("DOMContentLoaded", function () {
  const images = ["img/benedict2.jpg", "img/prof_22.jpg"];
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

document.addEventListener("DOMContentLoaded", function () {
  // Membuat elemen cursor kustom
  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  document.body.appendChild(cursor);

  // Membuat elemen partikel
  const particlesContainer = document.createElement("div");
  particlesContainer.id = "particles-js";
  document.body.appendChild(particlesContainer);

  // Konfigurasi Particles.js

  // Mengikuti pergerakan cursor
  document.addEventListener("mousemove", function (e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });
});
