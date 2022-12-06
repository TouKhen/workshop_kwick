// sign in
let signInForm = document.querySelector("#sign-in-form");
let signInP = document.querySelector("#sign-in-form p");
let signInUsername = document.querySelector("#sign-in-form > #username");
let signInPwd = document.querySelector("#sign-in-form > #password");

// Sign in form
signInForm.addEventListener("submit", function (event) {
  event.preventDefault();

  fetch(
    "https://greenvelvet.alwaysdata.net/kwick/api/login/" +
      signInUsername.value +
      "/" +
      signInPwd.value
  )
    .then((response) => response.json())
    .then(function (result) {
      console.log(result.result);
      // If the users is not in the server database
      if (result.result.status === "failure") {
        signInP.classList.remove("hidden");
        console.log("failure");
      }
      // if it's in the server database
      else if (result.result.status === "done") {
        let userId = result.result.id;
        let userToken = result.result.token;

        // we put every data of the user in the localstorage
        localStorage.setItem("userId", userId);
        localStorage.setItem("userToken", userToken);
        localStorage.setItem("userUsername", signInUsername.value);
        console.log("success. token : " + userToken + " . id : " + userId);

        document.location = "chat.html";
      }
    })
    .catch((error) => console.log("error", error));
});
