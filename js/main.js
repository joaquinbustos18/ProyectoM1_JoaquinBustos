let btn = document.querySelectorAll(".buttons-group");
let oculto = document.querySelectorAll(".card-extra");
let card = document.querySelectorAll(".card");

btn.forEach((valor) => {
  valor.addEventListener("click", () => {
    if (valor.id === "btn-6") {
      recorrerBtn(0);
    }
    if (valor.id === "btn-8") {
      recorrerBtn(2);
    }
    if (valor.id === "btn-9") {
      recorrerBtn(3);
    }
  });
});

function recorrerBtn(cantidad) {
  oculto.forEach((valor, index) => {
    valor.classList.add("oculto");

    if (index < cantidad) {
      valor.classList.remove("oculto");
    }
  });
}
