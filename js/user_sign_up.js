// sign up

let signUpForm = document.querySelector("#sign-up-form");
let signUpP = document.querySelector("#sign-up-form p");
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
        signUpP.classList.remove("hidden");
        console.log("failure");
      }
      // if it worked
      else if (result.result.status === "done") {
        let userId = result.result.id;
        let userToken = result.result.token;
        console.log(result);
        // we put every data of the user in the localstorage
        localStorage.setItem("userId", userId);
        localStorage.setItem("userToken", userToken);
        localStorage.setItem("userUsername", signUpUsername.value);
        document.location = "chat.html";
      }
    })
    .catch((error) => console.log("error", error));
});
