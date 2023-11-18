function adicionarFilme() {
  const listaConteudoUser = [
    /* {
          nome: "homem aranha",
          url: "https://sm.ign.com/ign_br/screenshot/default/image1_2jjv.jpg",
        },
        {
          nome: "homem aranha 2",
          url: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/PRfYtTZQsuj3ALrBXGL8MjAH.jpg",
        }, */
  ];

  var nomeDoFilme = document.getElementById("nomeDoFilme").value;
    var filmeUrl = document.getElementById("filme").value;
    var trailer = document.getElementById("trailer").value;

  const validarExtensao = (link) => {
    const extensao = link.substring(link.lastIndexOf(".") + 1).toLowerCase();
    const extensoesPermitidas = ["jpg", "jpeg", "jpe", "png", "svg", "webp"];

    if (extensoesPermitidas.includes(extensao)) {
      return true;
    } else {
      return false;
    }
  };

  const listaFilmes = document.getElementById("listaFilmes");

  if (nomeDoFilme == "" || filmeUrl == "" || trailer == "") {
    document.querySelector(
      ".page-subtitle"
    ).innerHTML = `<h3 style="color: red;"> Está faltando alguns dados </h3>`;
  } else if (validarExtensao(filmeUrl)) {
    document.querySelector(
      ".page-subtitle"
    ).innerHTML = ` Qual seu filme favorito? `;

    listaConteudoUser.push({ nome: nomeDoFilme, url: filmeUrl, trailer: trailer });

    console.log(listaConteudoUser);

    for (const i of listaConteudoUser) {
      const filmePronto = document.createElement("div"); // Cria um novo elemento div para cada filme
      filmePronto.innerHTML = `<h2>${i.nome}</h2> <a href="${i.trailer}" target="_blank"> <img src="${i.url}"/> </a>`;
      listaFilmes.appendChild(filmePronto); // Adiciona o novo elemento ao elemento pai listaFilmes
    }

    document.getElementById("nomeDoFilme").value = "";
    document.getElementById("filme").value = "";
  } else {
    document.querySelector(
      ".page-subtitle"
    ).innerHTML = `<h3 style="color: red;"> Parece que a url está quebrada... </h3>`;
  }
}

document.getElementById("filme").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    adicionarFilme();
  }
});
document
  .getElementById("nomeDoFilme")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      adicionarFilme();
    }
  });
