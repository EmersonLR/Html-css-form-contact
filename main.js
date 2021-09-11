var email = document.getElementById("mail");
var box = document.querySelector(".contact-box")
var btnClose = document.querySelector(".uk-close")
var boxImg = document.querySelectorAll(".container")


email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch || email.v) {
    email.setCustomValidity("Preencha o email, corretamente!");
  } else {
    email.setCustomValidity("");
  }
});

btnClose.addEventListener("click", function (event) {
  box.style.display = "none";
  box.style.filter = "blur(0)";
})

/*------ Tirar X btn ----*/
var x = window.matchMedia("(max-width: 880px)")

function myFunction(x) {
  if (x.matches) { // If media query matches
    btnClose.style.display = "none";
  } else {
    btnClose.style.display = "block";
  }
}

myFunction(x)

x.addListener(myFunction)

