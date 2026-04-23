class Personagem {
  constructor (id, nome, imagem, descricao) {
    this.id = id;
    this.nome = nome;
    this.imagem = imagem;
    this.descricao = descricao;
    this.pontos = 0;
  }
}

const personagens = [
  new Personagem ("chaves", "Chaves", "img/Chaves.jpg" , "Um menino órfão que vive na vila dentro de um barril, embora isso às vezes seja mais simbólico do que literal. Extremamente ingênuo, interpreta tudo ao pé da letra, o que gera muitas confusões. Está quase sempre com fome, especialmente atrás de um sanduíche de presunto. Apesar das trapalhadas, é generoso, sensível e dificilmente guarda mágoa. Representa a inocência e a simplicidade, sendo o coração emocional da série."),
  new Personagem ("seu_madruga","Seu Madruga", "img/SeuMadruga.jpg", " Um homem desempregado que vive fugindo do aluguel e tentando evitar trabalho a todo custo. Tem um jeito relaxado e muitas desculpas prontas, mas também é muito perspicaz e dono de um humor sarcástico marcante. Frequentemente entra em conflito com Dona Florinda e Seu Barriga. Apesar da aparência de desleixo, demonstra valores como amizade, lealdade e até orgulho pessoal em alguns momentos. Sua relação com a filha Chiquinha revela um lado mais humano e afetuoso." ),
  new Personagem ("chiquinha", "Chiquinha", "img/Chiquinha.jpg", "Filha do Seu Madruga, é uma das personagens mais inteligentes da vila. Usa sua esperteza para manipular situações a seu favor, muitas vezes enganando os outros com facilidade. É extremamente expressiva: alterna rapidamente entre risadas, birras e choros estratégicos. Gosta de confusão e raramente perde uma oportunidade de aprontar. Ao mesmo tempo, demonstra carinho pelo pai e certa vulnerabilidade por trás de suas armações."),
  new Personagem ("quico","Quico", "img/Quico.jpg", "Menino rico e mimado, criado pela mãe Dona Florinda, que o protege excessivamente. Orgulha-se de seus brinquedos e gosta de se sentir superior aos outros, especialmente ao Chaves. Seu comportamento é marcado por risadas debochadas e choros exagerados quando algo não sai como quer. Apesar disso, sua ingenuidade e dependência emocional mostram que ele também é, no fundo, apenas uma criança insegura tentando chamar a atenção."),
  new Personagem ("girafales","Professor Girafales", "img/Girafales.jpg", " Professor da escola da turma, é conhecido por sua postura formal, educação impecável e linguagem mais sofisticada. Tenta ensinar disciplina e bons modos às crianças, embora frequentemente perca a paciência com as confusões. Mantém um relacionamento romântico com Dona Florinda, marcado por visitas frequentes e gestos gentis, como levar flores. Representa a figura de autoridade, mas também traz humor através de seu contraste com o caos da vila." )
];


class Pergunta {
  constructor ({texto, opcoes}) {
    this.texto = texto;
    this.opcoes = opcoes;
  }
}

const perguntas = [
  {
    texto: "1) Alguém te oferece algo pra beber… o que você escolhe?",
    opcoes: [
      {
        texto: "A) O que parece de groselha, mas é de tamarindo e tem gosto de limão",
        pontos: { quico: 3, chaves: 2, chiquinha: 2, girafales: 1, seu_madruga: 1 }
      },
      {
        texto: "B) Um cafezinho bem quente",
        pontos: { girafales: 3, seu_madruga: 2, chaves: 1, chiquinha: 1, quico: 1 }
      },
      {
        texto: "C) Qualquer coisa que tiver, desde que não precise pagar",
        pontos: { seu_madruga: 3, chaves: 2, chiquinha: 1, girafales: 1, quico: 1 }
      }
    ]
  },

  {
    texto: "2) Em um dia livre, o que você provavelmente faria?",
    opcoes: [
      {
        texto: "A) Ficaria tranquilo(a) descansando",
        pontos: { seu_madruga: 3, chaves: 1, chiquinha: 1, girafales: 1, quico: 1 }
      },
      {
        texto: "B) Procuraria algo divertido para fazer",
        pontos: { chiquinha: 3, chaves: 2, quico: 2, girafales: 1, seu_madruga: 1 }
      },
      {
        texto: "C) Aproveitaria pra fazer algo produtivo",
        pontos: { girafales: 3, chaves: 1, chiquinha: 1, quico: 1, seu_madruga: 1 }
      }
    ]
  },

  {
    texto: "3) Você vê um sanduíche de presunto dando sopa… o que você faz?",
    opcoes: [
      {
        texto: "A) Fico só olhando com vontade, esperando alguém oferecer",
        pontos: { chaves: 3, chiquinha: 1, girafales: 1, quico: 1, seu_madruga: 1 }
      },
      {
        texto: "B) Dou um jeito de conseguir um pedaço",
        pontos: { chiquinha: 3, chaves: 1, girafales: 1, quico: 1, seu_madruga: 1 }
      },
      {
        texto: "C) Digo que é meu e não divido com ninguém",
        pontos: { quico: 3, chaves: 1, chiquinha: 1, girafales: 1, seu_madruga: 1 }
      }
    ]
  },

  {
    texto: "4) O que você mais valoriza na vida?",
    opcoes: [
      {
        texto: "A) Saber se virar",
        pontos: { seu_madruga: 3, chaves: 2, chiquinha: 1, girafales: 1, quico: 1 }
      },
      {
        texto: "B) Trabalhar de forma honesta",
        pontos: { girafales: 3, chaves: 2, chiquinha: 1, quico: 1, seu_madruga: 1 }
      },
      {
        texto: "C) Ter conforto e depender de alguém",
        pontos: { quico: 3, seu_madruga: 2, chaves: 1, chiquinha: 1, girafales: 1 }
      }
    ]
  },

  {
    texto: "5) Qual é a sua maior qualidade?",
    opcoes: [
      {
        texto: "A) Bondade",
        pontos: { chaves: 3, girafales: 2, chiquinha: 1, quico: 1, seu_madruga: 1 }
      },
      {
        texto: "B) Esperteza",
        pontos: { chiquinha: 3, quico: 2, seu_madruga: 2, chaves: 1, girafales: 1 }
      },
      {
        texto: "C) Atitude",
        pontos: { quico: 3, chiquinha: 2, girafales: 2, chaves: 1, seu_madruga: 1 }
      }
    ]
  },

  {
    texto: "6) Qual é o seu maior defeito?",
    opcoes: [
      {
        texto: "A) Ingenuidade",
        pontos: { chaves: 3, chiquinha: 1, girafales: 1, quico: 1, seu_madruga: 1 }
      },
      {
        texto: "B) Malandragem",
        pontos: { seu_madruga: 3, chiquinha: 2, chaves: 1, girafales: 1, quico: 1 }
      },
      {
        texto: "C) Orgulho",
        pontos: { quico: 3, chiquinha: 2, girafales: 2, chaves: 1, seu_madruga: 1 }
      }
    ]
  },

  {
    texto: "7) O que você não suporta?",
    opcoes: [
      {
        texto: "A) Ver alguém sendo injusto ou maldoso",
        pontos: { girafales: 3, chaves: 2, chiquinha: 1, quico: 1, seu_madruga: 1 }
      },
      {
        texto: "B) Ter que lidar com responsabilidade",
        pontos: { seu_madruga: 3, chaves: 1, chiquinha: 1, girafales: 1, quico: 1 }
      },
      {
        texto: "C) Não conseguir o que quer",
        pontos: { quico: 3, chiquinha: 2, chaves: 1, girafales: 1, seu_madruga: 1 }
      }
    ]
  },

  {
    texto: "8) Você faz algo errado sem querer…",
    opcoes: [
      {
        texto: "A) Fico mal e tento consertar",
        pontos: { chaves: 3, girafales: 2, chiquinha: 1, quico: 1, seu_madruga: 1 }
      },
      {
        texto: "B) Tento dar um jeitinho pra ninguém perceber",
        pontos: { seu_madruga: 3, chiquinha: 2, chaves: 1, girafales: 1, quico: 1 }
      },
      {
        texto: "C) Culpo outra pessoa",
        pontos: { quico: 3, chiquinha: 2, chaves: 1, girafales: 1, seu_madruga: 1 }
      }
    ]
  },

  {
    texto: "9) Quando você quer algo…",
    opcoes: [
      {
        texto: "A) Tento conseguir do jeito certo, mesmo que demore",
        pontos: { girafales: 3, chaves: 1, chiquinha: 1, quico: 1, seu_madruga: 1 }
      },
      {
        texto: "B) Dou um jeitinho ou aproveito uma oportunidade",
        pontos: { seu_madruga: 3, chaves: 2, chiquinha: 1, girafales: 1, quico: 1 }
      },
      {
        texto: "C) Faço birra ou insisto até conseguir",
        pontos: { quico: 3, chiquinha: 2, chaves: 1, girafales: 1, seu_madruga: 1 }
      }
    ]
  },

  {
    texto: "10) Quando você gosta de alguém…",
    opcoes: [
      {
        texto: "A) Fico atrapalhado(a) e não consigo nem falar direito",
        pontos: { seu_madruga: 3, chaves: 2, chiquinha: 1, girafales: 1, quico: 1 }
      },
      {
        texto: "B) Tento impressionar",
        pontos: { quico: 3, chiquinha: 2, chaves: 1, girafales: 1, seu_madruga: 1 }
      },
      {
        texto: "C) Tento ser romântico(a)",
        pontos: { girafales: 3, chaves: 1, chiquinha: 1, quico: 1, seu_madruga: 1 }
      }
    ]
  }
];

//console.log(perguntas);

function mostrarPergunta(indice) {
  const pergunta = perguntas[indice];

  document.getElementById("texto").textContent = pergunta.texto;

  const opcoes = document.getElementById("opcoes");
  opcoes.innerHTML = "";

  pergunta.opcoes.forEach((opcao, i) => {
    const botao = document.createElement("button");
    botao.classList.add("btn", "resposta");
    botao.textContent = opcao.texto;
    botao.onclick = () => Jogo.selecionarResposta(i);

    if (respostasUsuario[indice] === i) {
      botao.classList.add("selecionada");
    }

    opcoes.appendChild(botao);
  });

  respostaSelecionada = respostasUsuario[indice];
}

let perguntaAtual = 0;
let respostaSelecionada = null;
const respostasUsuario = Array(perguntas.length).fill(null);

mostrarPergunta(0);

function zerarPontuacoes() {
  personagens.forEach((personagem) => {
    personagem.pontos = 0;
  });
}

function recalcularPontuacaoFinal() {
  zerarPontuacoes();

  respostasUsuario.forEach((resposta, indicePergunta) => {
    if (resposta === null) {
      return;
    }

    const opcao = perguntas[indicePergunta].opcoes[resposta];

    for (let personagemId in opcao.pontos) {
      const personagem = personagens.find((p) => p.id === personagemId);
      if (personagem) {
        personagem.pontos += opcao.pontos[personagemId];
      }
    }
  });
}

function construirCardResultado(personagem, tituloResultado) {
  const imagemHtml = personagem.imagem
    ? `<img class="resultado-imagem" src="${personagem.imagem}" alt="${personagem.nome}">`
    : `<div class="resultado-imagem resultado-imagem-placeholder">Sem imagem</div>`;

  return `
    <div class="card resultado-card">
      <h2 class="resultado-titulo">${tituloResultado}</h2>
      <div class="resultado-conteudo">
        ${imagemHtml}
        <div class="resultado-textos">
          <h3 class="resultado-nome">${personagem.nome}</h3>
          <p class="resultado-descricao">${personagem.descricao}</p>
        </div>
      </div>
    </div>
  `;
}

function exibirResultadoFinal() {
  recalcularPontuacaoFinal();

  const ranking = [...personagens].sort((a, b) => b.pontos - a.pontos);
  const vencedor = ranking[0];
  const houveEmpate = ranking.length > 1 && ranking[0].pontos === ranking[1].pontos;

  const tituloResultado = houveEmpate
    ? "Voce tem energia de mais de um personagem!"
    : "Voce seria o...";

  const personagemResultado = document.getElementById("personagem-resultado");
  personagemResultado.innerHTML = construirCardResultado(vencedor, tituloResultado);
}

class Jogo {
    static iniciar() {
        document.getElementById("tela-inicio").style.display = "none";
        const tela = document.getElementById("tela-questionario");
        tela.style.display = "block";
    }

    static reiniciar() {
        location.reload();
    }

    static selecionarResposta(indice) {}
}


Jogo.selecionarResposta = function(indice) {
  respostaSelecionada = indice;
  respostasUsuario[perguntaAtual] = indice;

  document.querySelectorAll(".resposta").forEach(btn =>
    btn.classList.remove("selecionada")
  );

  const botoes = document.querySelectorAll(".resposta");
  if (botoes[indice]) {
    botoes[indice].classList.add("selecionada");
  }
}

Jogo.proximaPergunta = function() {
  if (respostaSelecionada === null) {
    alert("Selecione uma resposta!");
    return;
  }

  perguntaAtual++;

  if (perguntaAtual < perguntas.length) {
    mostrarPergunta(perguntaAtual);
  } else {
    exibirResultadoFinal();
    document.getElementById("tela-questionario").style.display = "none";
    document.getElementById("tela-resultado").style.display = "block";
  }
}

Jogo.perguntaAnterior = function() {
  if (perguntaAtual > 0) {
    perguntaAtual--;
    respostaSelecionada = null;
    mostrarPergunta(perguntaAtual);
  }
}

document.getElementById("botao-proximo").onclick = () => Jogo.proximaPergunta();
document.getElementById("botao-anterior").onclick = () => Jogo.perguntaAnterior();
