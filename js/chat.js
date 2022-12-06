// user list
let user_list = document.querySelector("#user-list");
let user_nb = document.querySelector("#user-nb");

let userToken = localStorage.getItem("userToken");
let userUrl =
  "http://greenvelvet.alwaysdata.net/kwick/api/user/logged/" + userToken;

console.log(userUrl);

let user_fetch = fetch(userUrl)
  .then((response) => response.json())
  .then(function (result) {
    user_nb.innerHTML = `(${result.result.user.length})`;
    for (const user of result.result.user) {
      let li = document.createElement("li");
      li.innerText = user;
      user_list.appendChild(li);
    }
  })
  .catch((error) => console.log("error", error));

user_fetch;

// chat list

let chat_list = document.querySelector("#chat-list");

let chat_fetch = fetch()
  .then((response) => response.json())
  .then(function (result) {})
  .catch((error) => console.log("error", error));
