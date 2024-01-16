document.addEventListener("DOMContentLoaded", function () {
  var errorMessage = document.getElementById("errorMessage");

  // Setelah 5 detik, atur opacity tulisan menjadi 0
  setTimeout(function () {
    errorMessage.style.opacity = 0;
  }, 5000);
});
