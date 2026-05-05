let baralhoAtual = "cigano";
let cartasSorteio = [];

// Função para definir qual baralho usar
function mudarBaralho(tipo) {
    baralhoAtual = tipo;
    console.log("Baralho alterado para: " + tipo);
    reiniciarMesa();
}

// Limpa a mesa para uma nova jogada
function reiniciarMesa() {
    const mesa = document.getElementById('mesa');
    mesa.innerHTML = ""; 
    document.getElementById('titulo-carta').innerText = "Mentalize sua pergunta e escolha 3 cartas";
    document.getElementById('desc-carta').innerText = "";
    gerarVersosDasCartas();
}

// Cria visualmente as cartas viradas para baixo
function gerarVersosDasCartas() {
    const mesa = document.getElementById('mesa');
    
    // Seleciona a lista de dados correta
    const dados = baralhoAtual === "cigano" ? baralhoCigano : tarot;
    
    // Embaralha a lista completa
    cartasSorteio = [...dados].sort(() => Math.random() - 0.5);

    // Cria 3 slots de cartas na mesa
    for (let i = 0; i < 3; i++) {
        const cartaDiv = document.createElement('div');
        cartaDiv.classList.add('carta');
        cartaDiv.dataset.index = i;
        cartaDiv.onclick = function() { virarCarta(this, i); };
        mesa.appendChild(cartaDiv);
    }
}

// Função executada ao clicar na carta
function virarCarta(elemento, index) {
    if (elemento.classList.contains('revelada')) return; // Impede clicar duas vezes

    const informacao = cartasSorteio[index];

    // Adiciona classe para estilo e mostra a imagem
    elemento.classList.add('revelada');
    
    // Define o caminho da pasta
    const pastaImg = baralhoAtual === "cigano" ? "cigano" : "tarot";
    
    // O código busca o nome da imagem declarada no arquivo cartas.js
    elemento.style.backgroundImage = `url('img/${pastaImg}/${informacao.imagem}')`;
    elemento.style.backgroundColor = "white"; 

    // Exibe o significado abaixo
    document.getElementById('titulo-carta').innerText = informacao.nome;
    document.getElementById('desc-carta').innerText = informacao.significado;
}

// Inicia o site com o Baralho Cigano por padrão
window.onload = reiniciarMesa;