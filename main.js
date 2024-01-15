function closeNavbar() {
  var navbarToggle = document.querySelector(".navbar-toggler");
  var navbarCollapse = document.querySelector(".navbar-collapse");
  navbarCollapse.classList.remove("show");
}

document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", function (e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });
});
