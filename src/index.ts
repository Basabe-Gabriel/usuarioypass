let user = document.getElementById("Useringresado");
let pass = document.getElementById("Passingresado");

Aceptar.addEventListener("click", () => {
let user: string = "Gabriel";
let pass: string = "Basabe18..21";

let useringresado: string = dato1.value;
let passingresado: string = dato2.value;

if (user === useringresado && pass === passingresado) {
  console.log("Bienvenido");
} else {
  console.log("Fuerra intruso");
}
}