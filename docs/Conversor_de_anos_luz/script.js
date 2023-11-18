const anosLuz = 9.461;
const userValue = document.querySelector("#req");
const resultado = document.querySelector(".resultado");

userValue.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    conversao();
  }
});

const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

console.log(userValue);

function conversao() {
  const calculo = (userValue.value * anosLuz).toFixed(3);

  if (userValue.value == 0) {
    resultado.innerHTML =
      "Parece que você tentou converter 0, porém 0 convertido é 0.";
  } else if (userValue.value == 1) {
    resultado.innerHTML = `${userValue.value} ano convertido é de: ${calculo} trilhões de anos luz`;
  } else {
    resultado.innerHTML = `${userValue.value} anos convertidos é de: ${calculo} trilhões de anos luz`;
  }
}