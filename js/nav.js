const menuBurger = document.querySelector(".navbar-burger");
const dropdownMenu = document.querySelector(".dropdown-menu");

// Menu dropdown
menuBurger.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("hidden")) {
    dropdownMenu.classList.toggle("hidden");
  } else {
    dropdownMenu.classList.toggle("hidden");
  }
});

let logoutBtn = document.querySelector("#logout");
let signInBtn = document.querySelector("#sign-in-btn");
let signUpBtn = document.querySelector(".navbar-sign-up-btn");

// check if a user is logged in to display or not the logout button
if (localStorage.getItem("userToken") === null) {
  logoutBtn.style.display = "none";
} else {
  signUpBtn.style.display = "none";
  signInBtn.style.display = "none";
}

// logout user on click of the button
logoutBtn.addEventListener("click", function (event) {
  let userId = localStorage.getItem("userId");
  let userToken = localStorage.getItem("userToken");
  fetch(
    "http://greenvelvet.alwaysdata.net/kwick/api/logout/" +
      userToken +
      "/" +
      userId
  )
    .then((response) => response.json())
    .then(function (result) {
      localStorage.clear();
      document.location = "index.html";
    })
    .catch((error) => console.log("error", error));
});
