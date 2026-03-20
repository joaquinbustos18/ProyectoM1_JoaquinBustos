let btn = document.querySelectorAll(".buttons-group");
let oculto = document.querySelectorAll(".card-extra");
let card = document.querySelectorAll(".card");

let btnPaleta = document.getElementById("generar__paleta");
let hex = document.querySelectorAll(".card-hex");
let cardColor = document.querySelectorAll(".card-color");

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

btnPaleta.addEventListener("click", () => {
  generarPaleta();
});

function recorrerBtn(cantidad) {
  oculto.forEach((valor, index) => {
    valor.classList.add("oculto");

    if (index < cantidad) {
      valor.classList.remove("oculto");
    }
  });
}

function generarPaleta() {
  card.forEach((valor) => {
    let hex1 = valor.querySelector(".card-hex");
    let cardColor1 = valor.querySelector(".card-color");
    let hsl = valor.querySelector(".card-hsl");

    let h = Math.floor(Math.random() * 360);
    let s = Math.floor(Math.random() * 100);
    let l = Math.floor(Math.random() * 100);

    let hslColor = hslToHex(h, s, l);

    hex1.innerHTML = hslColor;
    cardColor1.style.background = `hsl(${h}, ${s}%, ${l}%)`;

    hsl.innerHTML = `HSL(${h}, ${s}%, ${l}%)`;
  });
}

function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
