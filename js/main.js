

const boton = document.getElementById("botonInteractivo");

boton.addEventListener("click", function (event) {
  event.target.style.backgroundColor = "purple";
  event.target.style.color = "white";
  event.target.textContent = "Color cambiado!";
});
