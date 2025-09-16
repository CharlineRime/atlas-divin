const menuIcon = document.querySelector(".navigation-icon");
const menuBurger = document.querySelector(".navigation-burger");

menuIcon.addEventListener("click", () => {
  menuBurger.classList.toggle("navigation-hidden");
});

const toggleDarkModeBtn = document.querySelector("#switch-mode-dark-btn");
const toggleLightModeBtn = document.querySelector("#switch-mode-light-btn");

toggleDarkModeBtn.addEventListener("click", function () {
  document.querySelector("html").setAttribute("data-theme", "dark");
});

toggleLightModeBtn.addEventListener("click", function () {
  document.querySelector("html").setAttribute("data-theme", "light");
});
