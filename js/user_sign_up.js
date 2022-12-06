// sign up

let signUpForm = document.querySelector("#sign-up-form");
let signUpP = document.querySelectorAll("#sign-up-form p");
let signUpUsername = document.querySelector("#sign-up-form > #username");
let signUpPwd = document.querySelector("#sign-up-form > #password");

// Sign up form
signUpForm.addEventListener("submit", function (event) {
  event.preventDefault();

  fetch(
    "https://greenvelvet.alwaysdata.net/kwick/api/signup/" +
      signUpUsername.value +
      "/" +
      signUpPwd.value
  )
    .then((response) => response.json())
    .then(function (result) {
      console.log(result.result);
      // if it didn't worked
      if (result.result.status === "failure") {
        console.log("failure");
      }
      // if it worked
      else if (result.result.status === "done") {
        console.log(result);
        document.location = "sign_in.html";
      }
    })
    .catch((error) => console.log("error", error));
});
