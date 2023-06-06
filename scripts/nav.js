const toggle_button = document.getElementById("mobile_nav_toggle");
const close_button = document.getElementById("mobile_nav_close");
toggle_button.addEventListener("click", function () {
  const nav = document.getElementById("mobile_nav");
  nav.classList.toggle("mobile-nav-active");
});

close_button.addEventListener("click", function () {
  const nav = document.getElementById("mobile_nav");
  nav.classList.toggle("mobile-nav-active");
});
