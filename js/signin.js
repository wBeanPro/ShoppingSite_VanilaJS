document.querySelector("form").addEventListener("submit", signIn);
var regUser = JSON.parse(localStorage.getItem("fraazoUserDatabase"));
function signIn(event) {
  event.preventDefault;
  var count = 0;
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  for (var i = 0; i < regUser.length; i++) {
    if (regUser[i].emailAdd == email && regUser[i].pass == password) {
      count++;
    }
  }
  if (count > 0) {
    window.location.href = "index.html";
    window.alert("Your Login Successful.!");
  } else {
    window.alert("Invalid Login Credentials");
  }
}
