// ========================================
// BANCO DE PERGUNTAS
// ========================================

const perguntas = [
    {
        pergunta: "O que acontece com a identidade secreta de Peter Parker no início do filme?",
        resposta: "A identidade de Peter como Homem-Aranha é revelada ao mundo."
    },

    {
        pergunta: "Quem Peter procura para tentar fazer as pessoas esquecerem que ele é o Homem-Aranha?",
        resposta: "Peter procura o Doutor Estranho."
    },

    {
        pergunta: "O que acontece quando o feitiço do Doutor Estranho dá errado?",
        resposta: "O feitiço abre uma passagem para pessoas de outros universos."
    },

    {
        pergunta: "Por que vilões de outros universos aparecem no universo de Peter?",
        resposta: "Eles são atraídos para o universo de Peter por causa do feitiço que interfere no Multiverso."
    },

    {
        pergunta: "Qual é uma das grandes consequências das escolhas de Peter no final do filme?",
        resposta: "Peter enfrenta consequências que mudam profundamente sua vida e seu futuro."
    }
];


// ========================================
// ELEMENTOS DO SITE
// ========================================

const entrada = document.getElementById("entrada");

const iniciar = document.getElementById("iniciar");

const flashcards = document.getElementById("flashcards");

const aranhaAnimada = document.getElementById("aranhaAnimada");

const card = document.getElementById("card");

const pergunta = document.getElementById("pergunta");

const resposta = document.getElementById("resposta");

const numeroPergunta = document.getElementById("numeroPergunta");

const numeroResposta = document.getElementById("numeroResposta");

const contador = document.getElementById("contador");

const girar = document.getElementById("girar");

const voltar = document.getElementById("voltar");

const proximo = document.getElementById("proximo");


// ========================================
// CONTROLE DO CARD ATUAL
// ========================================

let cardAtual = 0;


// ========================================
// MOSTRAR PERGUNTA
// ========================================

function mostrarCard() {

    pergunta.textContent = perguntas[cardAtual].pergunta;

    resposta.textContent = perguntas[cardAtual].resposta;

    numeroPergunta.textContent = cardAtual + 1;

    numeroResposta.textContent = cardAtual + 1;

    contador.textContent = cardAtual + 1;

    // Sempre começa mostrando a pergunta
    card.classList.remove("virado");
}


// ========================================
// BOTÃO COMEÇAR
// ========================================

iniciar.addEventListener("click", function () {

    // Esconde a tela inicial
    entrada.style.display = "none";

    // Mostra os flashcards
    flashcards.classList.remove("escondido");

    // Coloca a aranha no início
    aranhaAnimada.classList.remove("descer");

    // Pequeno atraso para a animação começar
    setTimeout(function () {

        aranhaAnimada.classList.add("descer");

    }, 100);


    // Mostra o primeiro card
    mostrarCard();

});


// ========================================
// BOTÃO GIRAR
// ========================================

girar.addEventListener("click", function () {

    card.classList.toggle("virado");

});


// ========================================
// BOTÃO VOLTAR
// ========================================

voltar.addEventListener("click", function () {

    // Volta para a pergunta
    card.classList.remove("virado");

});


// ========================================
// BOTÃO PRÓXIMO
// ========================================

proximo.addEventListener("click", function () {

    // Se ainda não estamos no último card
    if (cardAtual < perguntas.length - 1) {

        cardAtual++;

        mostrarCard();

    } else {

        // Quando chegar ao último
        // volta para o primeiro

        cardAtual = 0;

        mostrarCard();

    }

});

