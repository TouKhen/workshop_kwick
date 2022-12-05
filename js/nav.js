const menuBurger = document.querySelector(".navbar-burger");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuBurger.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("hidden")) {
    dropdownMenu.classList.toggle("hidden");
  } else {
    dropdownMenu.classList.toggle("hidden");
  }
});
