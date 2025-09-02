const menuIcon = document.querySelector(".navigation-icon");
const menuBurger = document.querySelector(".navigation-burger");

menuIcon.addEventListener("click", () => {
  menuBurger.classList.toggle("navigation-hidden");
});
