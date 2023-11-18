const mugiwarasList = [
  {
    nome: "Luffy",
    fruta: "Gomu Gomu no Mi",
    funcao: "Capitão",
    imagem:
      "https://ovicio.com.br/wp-content/uploads/2021/11/20211119-ovicio-one-piece-cosplay-luffy.jpg",
  },
  {
    nome: "Zoro",
    fruta: "Não tem",
    funcao: "Espadachim",
    imagem:
      "https://i.pinimg.com/originals/23/31/bf/2331bf4032f0237bc4ce5e0f876cfd2a.jpg",
  },
  {
    nome: "Nami",
    fruta: "Não tem",
    funcao: "Navegadora",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/blob_z8c5.jpg",
  },
  {
    nome: "Usopp",
    fruta: "Não tem",
    funcao: "Atirador",
    imagem: "https://geekdama.com.br/wp-content/uploads/2021/09/one-piece-usopp-postcover.jpg",
  },
  {
    nome: "Sanji",
    fruta: "Não tem",
    funcao: "Cozinheiro",
    imagem: "https://geekdama.com.br/wp-content/uploads/2021/02/one-piece-sanji-postcover.jpg",
  },
  {
    nome: "Tony Tony Chopper",
    fruta: "Hito Hito no Mi",
    funcao: "Médico",
    imagem: "https://t.ctcdn.com.br/Be0q56ijx3BptW5x4fPk7O7pLjY=/640x360/smart/i799243.jpeg",
  },
  {
    nome: "Nico Robin",
    fruta: "Hana Hana no Mi",
    funcao: "Arqueóloga",
    imagem: "https://nerdhits.com.br/wp-content/uploads/2022/07/nico-robin.jpg",
  },
  {
    nome: "Franky",
    fruta: "Não tem",
    funcao: "Carpinteiro",
    imagem: "https://onepiecelendas.files.wordpress.com/2012/08/franky.jpg",
  },
  {
    nome: "Brook",
    fruta: "Yomi Yomi no Mi",
    funcao: "Músico",
    imagem: "https://criticalhits.com.br/wp-content/uploads/2020/05/brook.jpg",
  },
  {
    nome: "Jinbe",
    fruta: "Não tem",
    funcao: "Timioneiro",
    imagem: "https://geekdama.com.br/wp-content/uploads/2021/06/one-piece-jinbe-postcover.jpg",
  },
];

const mugiwaras = document.querySelector(".mugiwaras");

for (const membro of mugiwarasList) {
  const perfilDiv = document.createElement("div");
  perfilDiv.innerHTML = `
  <h2>${membro.nome}</h2>
  <h4>Função: ${membro.funcao}</h4>
  <h4>Fruta: ${membro.fruta}</h4>
  <img src="${membro.imagem}">
  `;
  mugiwaras.appendChild(perfilDiv);
}
