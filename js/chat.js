// user list
let user_list = document.querySelector("#user-list");
let user_nb = document.querySelector("#user-nb");

let userToken = localStorage.getItem("userToken");
let userUrl =
  "https://greenvelvet.alwaysdata.net/kwick/api/user/logged/" + userToken;

console.log(userUrl);

// Get all the users connected
function user_fetch() {
  fetch(userUrl)
    .then((response) => response.json())
    .then(function (result) {
      // number of users
      user_nb.innerHTML = `(${result.result.user.length})`;
      // reset user list
      user_list.innerHTML = "";
      // users name
      for (const user of result.result.user) {
        let li = document.createElement("li");
        li.innerText = user;
        user_list.appendChild(li);
      }
    })
    .catch((error) => console.log("error", error));
}

user_fetch();

// chat list

let chat_list = document.querySelector("#chat-list");
let chatUrl = "https://greenvelvet.alwaysdata.net/kwick/api/talk/list/";
chatUrl = chatUrl + userToken + "/" + 1327171160;

// Get all the messages sent to the server
function msg_fetch() {
  fetch(chatUrl)
    .then((response) => response.json())
    .then(function (result) {
      // clear message history client side
      chat_list.innerHTML = "";
      // for each message
      for (const message of result.result.talk) {
        // msg div
        let msg = document.createElement("div");
        msg.classList.add("msg");
        // msg username
        let msg_username = document.createElement("p");
        msg_username.classList.add("msg-username");
        msg_username.innerText = message.user_name;
        // msg text
        let msg_text = document.createElement("p");
        if (localStorage.getItem("userUsername") === message.user_name) {
          msg_text.classList.add("msg-self");
        } else {
          msg_text.classList.add("msg-text");
        }
        msg_text.innerText = message.content;

        msg.appendChild(msg_username);
        msg.appendChild(msg_text);

        chat_list.appendChild(msg);

        // scroll to the bottom of the chat
        chat_list.scrollTo({
          top: chat_list.scrollHeight,
          left: 0,
          behavior: "auto",
        });
      }
    })
    .catch((error) => console.log("error", error));
}

msg_fetch();

// refresh every 3sec

let interval = 3000;

setInterval(() => {
  user_fetch();
  msg_fetch();
}, interval);

// send msg

let msg_form = document.querySelector("#msg-form");
let msg_form_input = document.querySelector("#msg-form input");
let userId = localStorage.getItem("userId");

// form to send the message
msg_form.addEventListener("submit", function (event) {
  event.preventDefault();

  // remove spaces before and after the message
  let msg_steralized = msg_form_input.value.trim();
  // limit the length to 140 characters
  msg_steralized = msg_steralized.substring(0, 140);
  // replace spaces to %20
  msg_steralized = msg_steralized.replace(" ", "%20");

  let msgUrl =
    "https://greenvelvet.alwaysdata.net/kwick/api/say/" +
    userToken +
    "/" +
    userId +
    "/" +
    msg_steralized;

  if (msg_steralized !== "") {
    fetch(msgUrl)
      .then((response) => response.json())
      .then(function (result) {
        msg_form_input.value = "";
        // refresh messages list
        msg_fetch();
      })
      .catch((error) => console.log("error", error));
  }
});
