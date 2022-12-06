// sign in
let signInForm = document.querySelector("#sign-in-form");
let signInP = document.querySelectorAll("#sign-in-form p");
let signInUsername = document.querySelector("#sign-in-form > #username");
let signInPwd = document.querySelector("#sign-in-form > #password");

signInForm.addEventListener("submit", function (event) {
  event.preventDefault();

  fetch(
    "http://greenvelvet.alwaysdata.net/kwick/api/login/" +
      signInUsername.value +
      "/" +
      signInPwd.value
  )
    .then((response) => response.json())
    .then(function (result) {
      console.log(result.result);
      if (result.result.status === "failure") {
        for (let i = 0; i <= signInP.length; i++) {
          signInP[i].classList.remove("hidden");
        }
        console.log("failure");
      } else if (result.result.status === "done") {
        let userId = result.result.id;
        let userToken = result.result.token;

        localStorage.setItem("userId", userId);
        localStorage.setItem("userToken", userToken);
        console.log("success. token : " + userToken + " . id : " + userId);

        document.location = "chat.html";
      }
    })
    .catch((error) => console.log("error", error));
});
