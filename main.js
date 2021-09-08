console.log("Hello Word")


var email = document.getElementById("mail");
var nome = document.getElementById("nome");
var tel = document.getElementById("fone");
var txt = document.getElementById("text");


email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Preencha o email, corretamente!");
  } else {
    email.setCustomValidity("");
  }
});