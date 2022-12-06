// check if the user is not connected and try to connect to page he doesn't have acces to. It will redirect him to the sign in page
if (localStorage.getItem("userToken") === null) {
  document.location = "sign_in.html";
}
