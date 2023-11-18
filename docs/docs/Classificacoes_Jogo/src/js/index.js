const adicionarNovoJogador = document.getElementById("adicionarNovoJogador");
  const resetarJogadoresButton = document.getElementById("resetarJogadores");
  let jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
  let countJogador = jogadores.length + 1;

  adicionarNovoJogador.addEventListener('click', function () {
    const novoNome = `Jogador ${countJogador}`;
    countJogador++;

    const novoJogador = {
      nome: novoNome,
      k: 0,
      d: 0,
      a: 0,
      victory: 0,
      defeat: 0,
    };

    jogadores.push(novoJogador);
    salvarJogadoresNoLocalStorage();
    exibirNaTela();
  });

  resetarJogadoresButton.addEventListener('click', function () {
    if (confirm("Tem certeza de que deseja resetar todos os jogadores?")) {
      jogadores = [];
      salvarJogadoresNoLocalStorage();
      window.location.reload();
      exibirNaTela();
    }
  });

  function salvarJogadoresNoLocalStorage() {
    localStorage.setItem("jogadores", JSON.stringify(jogadores));
  }

  function exibirNaTela() {
    const tabelaJogadores = document.getElementById("tabelaJogadores");
    let tabelaHTML = "";

    for (const jogador of jogadores) {
      tabelaHTML += `
        <tr>
          <td>${jogador.nome}</td>
          <td>${jogador.k}</td>
          <td>${jogador.d}</td>
          <td>${jogador.a}</td>
          <td>${jogador.victory}</td>
          <td>${jogador.defeat}</td>
          <td><button onclick="adicionarAtributo('k', ${jogadores.indexOf(jogador)})">Kill</button></td>
          <td><button onclick="adicionarAtributo('d', ${jogadores.indexOf(jogador)})">Death</button></td>
          <td><button onclick="adicionarAtributo('a', ${jogadores.indexOf(jogador)})">Assistence</button></td>
          <td><button onclick="adicionarAtributo('victory', ${jogadores.indexOf(jogador)})">Victory</button></td>
          <td><button onclick="adicionarAtributo('defeat', ${jogadores.indexOf(jogador)})">Defeat</button></td>
        </tr>
      `;
    }

    tabelaJogadores.innerHTML = tabelaHTML;
  }

  function adicionarAtributo(atributo, index) {
    const jogador = jogadores[index];

    switch (atributo) {
      case 'k':
        jogador.k++;
        break;
      case 'd':
        jogador.d++;
        break;
      case 'a':
        jogador.a++;
        break;
      case 'victory':
        jogador.victory++;
        break;
      case 'defeat':
        jogador.defeat++;
        break;
      default:
        console.error("Atributo inválido");
    }

    salvarJogadoresNoLocalStorage();
    exibirNaTela();
  }

  // Chame exibirNaTela ao carregar a página para exibir os jogadores armazenados no localStorage
  exibirNaTela();