function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function submit() {
  var inputEmail = document.getElementById("email");
  var inputPassword = document.getElementById("password");
  localStorage.setItem("email", inputEmail.value);
  localStorage.setItem("password", inputPassword.value);

  alert("You successfully signed up with Calendly");
  window.location.href = "./login.html";
}
