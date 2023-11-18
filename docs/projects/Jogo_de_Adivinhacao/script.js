const numeroSecreto = parseInt(Math.random() * 1001);
const userValue = document.getElementById("req");
const resultado = document.querySelector(".resultado");
const dica = document.querySelector(".dica");
let tentativasUser = document.querySelector(".tentativas");
const calcular = document.getElementById("calcular");

const reload = document.querySelector(".reload");
const form = document.getElementById("form");
const txtDica = document.querySelector("#txtDica");
const botaoDica = document.querySelector(".botaoDica");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  calcular.click();
});

calcular.disabled = false;
let nuser = 1;



function jogarDenovo() {
  window.location.reload();
}

function resposta() {
  if (userValue.value == numeroSecreto) {
    resultado.innerHTML = `<p style="color:green"> Você acertou o número secreto, parabéns. </p>`;

    calcular.disabled = true;
    dica.classList.add("dnone");
    reload.classList.remove("dnone");

    tentativasUser.innerHTML = `Parabéns, você acertou em ${nuser++} tentativas.`;
  } else if (userValue.value > numeroSecreto) {
    dica.classList.remove("dnone");

    resultado.innerHTML = `<p> Você <span style="color:red"> errou! </span> o número é <span style="color:yellow"> menor</span>, continue tentando! </p>`;

    tentativasUser.innerHTML = `Você tentou ${nuser++} vezes`;
  } else if (userValue.value < numeroSecreto) {
    dica.classList.remove("dnone");

    resultado.innerHTML = `<p> Você <span style="color:red"> errou! </span> o número é <span style="color:yellow"> maior</span>, continue tentando!  </p>`;

    tentativasUser.innerHTML = `Você tentou ${nuser++} vezes`;
  }
}

botaoDica.addEventListener("click", function() {
    txtDica.innerHTML = `Use busca binária, comece dividindo 1000 por 2 que é igual a 500, em seguida, você deve achar a metade entre os numeros restantes.`;
});