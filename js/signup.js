document.querySelector("form").addEventListener("submit", signup);
var userData = JSON.parse(localStorage.getItem("fraazoUserDatabase")) || [];

function signup(event) {
  event.preventDefault();
  var email = document.querySelector("#email").value;
  var user = document.querySelector("#user").value;
  var password = document.querySelector("#password").value;

  var userCred = {
    emailAdd: email,
    userName: user,
    pass: password,
  };
  userData.push(userCred);
  localStorage.setItem("fraazoUserDatabase", JSON.stringify(userData));
  window.alert("You are Successfully Registered.!");
  window.location.reload();
}
