const menuIcon = document.querySelector(".navigation-icon");
const menuBurger = document.querySelector(".navigation-spacing");

menuIcon.addEventListener("click", () => {
  menuBurger.classList.toggle("navigation-hidden");
});

const toggleDarkModeBtn = document.querySelector("#dark-mode-btn");
const toggleLightModeBtn = document.querySelector("#light-mode-btn");

toggleDarkModeBtn.addEventListener("click", function () {
  document.querySelector("html").setAttribute("data-theme", "dark");
});

toggleLightModeBtn.addEventListener("click", function () {
  document.querySelector("html").setAttribute("data-theme", "light");
});
