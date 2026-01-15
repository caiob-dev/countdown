const html = document.querySelector("html");
const btnPorto = document.querySelector(".app__card-button-porto-seguro");
const btnLencois = document.querySelector(".app__card-button-lencois");
const btnSP = document.querySelector(".app__card-button-sao-paulo");
const appImg = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const focoBtnActive = document.querySelector(".app__card-button-porto-seguro");
const botoes = document.querySelectorAll(".app__card-button");
const timer = document.querySelector(".timer");

const viagens = {
  viagemPorto: new Date("2026-01-20"),
  viagemLencois: new Date("2026-09-06"),
  viagemSP: new Date("2026-11-07"),
};

let viagemAtual = viagens.viagemPorto;

let intervalo = null;

btnPorto.addEventListener("click", () => {
  mudarAtributos("porto-seguro");
  btnPorto.classList.add("active");
  viagemAtual = viagens.viagemPorto;
  iniciarContagem();
});

btnLencois.addEventListener("click", () => {
  mudarAtributos("lencois");
  btnLencois.classList.add("active");
  viagemAtual = viagens.viagemLencois;
  iniciarContagem();
});

btnSP.addEventListener("click", () => {
  mudarAtributos("sao-paulo");
  btnSP.classList.add("active");
  viagemAtual = viagens.viagemSP;
  iniciarContagem();
});

function mudarAtributos(contexto) {
  botoes.forEach((botao) => {
    botao.classList.remove("active");
  });

  html.setAttribute("data-contexto", contexto);
  appImg.setAttribute("src", `./img/${contexto}.jpg`);

  switch (contexto) {
    case "porto-seguro":
      titulo.innerHTML = "Porto Seguro";
      break;

    case "lencois":
      titulo.innerHTML = "Lençois <br/> Maranhenses";
      break;

    case "sao-paulo":
      titulo.innerHTML = "São Paulo";
      break;

    default:
      break;
  }
}

function mostrarContagemRegressiva(viagem) {
  const agora = new Date().getTime();
  const tempoRestante = viagem - agora;

  if (tempoRestante <= 0) {
    clearInterval(intervalo);
    timer.textContent = "Chegou a viagem se divirta e vá com Jesus!";
    return;
  }

  const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
  const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

  timer.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

mostrarContagemRegressiva(viagemAtual);

function iniciarContagem() {
  if (intervalo) clearInterval(intervalo);

  intervalo = setInterval(() => {
    mostrarContagemRegressiva(viagemAtual);
  }, 1000);
}

iniciarContagem();

function copyright() {
    const p = document.querySelector(".footer__text");

    const data = new Date();
    const ano = data.getFullYear();

    p.textContent = `Todos os direitos reservados Caio © - ${ano}`
}

copyright();