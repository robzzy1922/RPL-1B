document.addEventListener("DOMContentLoaded", function () {
  const images = ["img/robi-1.jpg", "img/robi-2.jpg", "img/robi-3.jpg", "img/robi-4.jpg", "img/robi-5.jpg"];
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

document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#292929",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "##292929",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/parikel.png",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
});
