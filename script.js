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
    new Personagem ("chaves", "Chaves", "" , "Um menino órfão que vive na vila dentro de um barril, embora isso às vezes seja mais simbólico do que literal. Extremamente ingênuo, interpreta tudo ao pé da letra, o que gera muitas confusões. Está quase sempre com fome, especialmente atrás de um sanduíche de presunto. Apesar das trapalhadas, é generoso, sensível e dificilmente guarda mágoa. Representa a inocência e a simplicidade, sendo o coração emocional da série."),
    new Personagem ("seu_madruga","Seu Madruga", "", " Um homem desempregado que vive fugindo do aluguel e tentando evitar trabalho a todo custo. Tem um jeito relaxado e muitas desculpas prontas, mas também é muito perspicaz e dono de um humor sarcástico marcante. Frequentemente entra em conflito com Dona Florinda e Seu Barriga. Apesar da aparência de desleixo, demonstra valores como amizade, lealdade e até orgulho pessoal em alguns momentos. Sua relação com a filha Chiquinha revela um lado mais humano e afetuoso." ),
    new Personagem ("chiquinha","chiquinha", "Chiquinha", "", "Filha do Seu Madruga, é uma das personagens mais inteligentes da vila. Usa sua esperteza para manipular situações a seu favor, muitas vezes enganando os outros com facilidade. É extremamente expressiva: alterna rapidamente entre risadas, birras e choros estratégicos. Gosta de confusão e raramente perde uma oportunidade de aprontar. Ao mesmo tempo, demonstra carinho pelo pai e certa vulnerabilidade por trás de suas armações."),
    new Personagem ("quico","Quico", "", "Menino rico e mimado, criado pela mãe Dona Florinda, que o protege excessivamente. Orgulha-se de seus brinquedos e gosta de se sentir superior aos outros, especialmente ao Chaves. Seu comportamento é marcado por risadas debochadas e choros exagerados quando algo não sai como quer. Apesar disso, sua ingenuidade e dependência emocional mostram que ele também é, no fundo, apenas uma criança insegura tentando chamar a atenção."),
    new Personagem ("girafales","Professor Girafales", "", " Professor da escola da turma, é conhecido por sua postura formal, educação impecável e linguagem mais sofisticada. Tenta ensinar disciplina e bons modos às crianças, embora frequentemente perca a paciência com as confusões. Mantém um relacionamento romântico com Dona Florinda, marcado por visitas frequentes e gestos gentis, como levar flores. Representa a figura de autoridade, mas também traz humor através de seu contraste com o caos da vila." )
];


class Pergunta {
    constructor ({texto, opcoes}) {
        this.texto = texto;
        this.opcoes = opcoes;
    }
}

const perguntas = [
  {
    texto: "Alguém te oferece algo pra beber… o que você escolhe?",
    opcoes: [
      {
        texto: "O que parece de groselha, mas é de tamarindo e tem gosto de limão",
        pontos: { chaves: 3, quico: 2, chiquinha: 2, seu_madruga: 1, girafales: 1 }
      },
      {
        texto: "Um cafezinho bem quente",
        pontos: { girafales: 3, quico: 2, seu_madruga: 2, chiquinha: 1, chaves: 1 }
      },
      {
        texto: "Qualquer coisa desde que não precise pagar",
        pontos: { seu_madruga: 3, chiquinha: 3, chaves: 2, quico: 1, girafales: 1 }
      }
    ]
  },

  {
    texto: "O que você mais gosta de fazer no tempo livre?",
    opcoes: [
      {
        texto: "Ficar tranquilo, comer ou descansar",
        pontos: { chaves: 3, seu_madruga: 2, girafales: 2, quico: 1, chiquinha: 1 }
      },
      {
        texto: "Inventar coisas ou se divertir",
        pontos: { chiquinha: 3, seu_madruga: 3, chaves: 2, girafales: 1, quico: 1 }
      },
      {
        texto: "Fazer algo do seu jeito",
        pontos: { quico: 3, chiquinha: 2, girafales: 2, seu_madruga: 1, chaves: 1 }
      }
    ]
  },

  {
    texto: "Você vê um sanduíche de presunto dando sopa…",
    opcoes: [
      {
        texto: "Fico esperando alguém oferecer",
        pontos: { chaves: 3, seu_madruga: 2, girafales: 1, quico: 1, chiquinha: 1 }
      },
      {
        texto: "Dou um jeito de conseguir",
        pontos: { seu_madruga: 3, chiquinha: 3, chaves: 2, quico: 1, girafales: 1 }
      },
      {
        texto: "Digo que é meu e não divido",
        pontos: { quico: 3, chiquinha: 2, girafales: 2, seu_madruga: 1, chaves: 1 }
      }
    ]
  },

  {
    texto: "O que você mais valoriza na vida?",
    opcoes: [
      {
        texto: "Saber se virar com pouco",
        pontos: { seu_madruga: 3, chiquinha: 3, chaves: 2, girafales: 1, quico: 1 }
      },
      {
        texto: "Trabalhar honestamente",
        pontos: { chaves: 3, girafales: 3, seu_madruga: 1, quico: 1, chiquinha: 1 }
      },
      {
        texto: "Ter conforto",
        pontos: { quico: 3, chaves: 1, seu_madruga: 2, chiquinha: 1, girafales: 1 }
      }
    ]
  },

  {
    texto: "Qual é sua maior qualidade?",
    opcoes: [
      {
        texto: "Bondade",
        pontos: { chaves: 3, girafales: 3, seu_madruga: 2, quico: 1, chiquinha: 1 }
      },
      {
        texto: "Esperteza",
        pontos: { seu_madruga: 3, chiquinha: 3, quico: 2, chaves: 1, girafales: 1 }
      },
      {
        texto: "Atitude",
        pontos: { quico: 3, chiquinha: 2, girafales: 1, seu_madruga: 1, chaves: 1 }
      }
    ]
  },

  {
    texto: "Qual é seu maior defeito?",
    opcoes: [
      {
        texto: "Ingenuidade",
        pontos: { chaves: 3, girafales: 1, seu_madruga: 1, quico: 1, chiquinha: 1 }
      },
      {
        texto: "Malandragem",
        pontos: { seu_madruga: 3, chiquinha: 2, quico: 2, chaves: 1, girafales: 1 }
      },
      {
        texto: "Orgulho",
        pontos: { quico: 3, chiquinha: 3, girafales: 2, seu_madruga: 1, chaves: 1 }
      }
    ]
  },

  {
    texto: "O que você não suporta?",
    opcoes: [
      {
        texto: "Injustiça",
        pontos: { chaves: 2, girafales: 3, seu_madruga: 2, quico: 1, chiquinha: 1 }
      },
      {
        texto: "Responsabilidade",
        pontos: { seu_madruga: 3, chiquinha: 1, quico: 2, chaves: 1, girafales: 1 }
      },
      {
        texto: "Não conseguir o que quer",
        pontos: { quico: 3, chiquinha: 3, girafales: 1, seu_madruga: 1, chaves: 1 }
      }
    ]
  },

  {
    texto: "Você faz algo errado sem querer…",
    opcoes: [
      {
        texto: "Tento consertar",
        pontos: { chaves: 3, girafales: 3, seu_madruga: 1, quico: 1, chiquinha: 1 }
      },
      {
        texto: "Escondo",
        pontos: { seu_madruga: 3, chiquinha: 3, quico: 2, chaves: 1, girafales: 1 }
      },
      {
        texto: "Culpo alguém",
        pontos: { chiquinha: 3, quico: 3, girafales: 2, seu_madruga: 1, chaves: 1 }
      }
    ]
  },

  {
    texto: "Quando você quer algo…",
    opcoes: [
      {
        texto: "Faço do jeito certo",
        pontos: { chaves: 3, girafales: 3, seu_madruga: 1, quico: 1, chiquinha: 1 }
      },
      {
        texto: "Dou um jeitinho",
        pontos: { seu_madruga: 3, chiquinha: 2, quico: 1, chaves: 2, girafales: 1 }
      },
      {
        texto: "Insisto até conseguir",
        pontos: { quico: 3, chiquinha: 2, girafales: 1, seu_madruga: 1, chaves: 1 }
      }
    ]
  },

  {
    texto: "Quando você gosta de alguém…",
    opcoes: [
      {
        texto: "Fico tímido",
        pontos: { chaves: 3, girafales: 2, seu_madruga: 2, quico: 1, chiquinha: 1 }
      },
      {
        texto: "Tento impressionar",
        pontos: { quico: 3, chiquinha: 3, girafales: 2, seu_madruga: 1, chaves: 1 }
      },
      {
        texto: "Finjo que não ligo",
        pontos: { chiquinha: 3, seu_madruga: 2, quico: 2, girafales: 1, chaves: 1 }
      }
    ]
  }
];

console.log(perguntas);


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
        opcoes.appendChild(botao);
    });
}

mostrarPergunta(0);

let perguntaAtual = 0;

class Jogo {
    static iniciar() {
        document.getElementById("tela-inicio").style.display = "none";
        const tela = document.getElementById("tela-questionario");
        tela.style.display = "block";
    }

    static reiniciar() {
        location.reload();
    }

    static selecionarResposta(indice) {

    }
}
