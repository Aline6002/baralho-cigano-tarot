let baralhoAtual = [];
let nomeBaralhoSelecionado = '';
let cartasSorteadas = [];
let cartasReveladasCount = 0;

document.getElementById('btn-cigano').addEventListener('click', () => {
    baralhoAtual = baralhoCigano;
    nomeBaralhoSelecionado = 'Baralho Cigano';
    limparMesa();
});

document.getElementById('btn-tarot').addEventListener('click', () => {
    baralhoAtual = tarot;
    nomeBaralhoSelecionado = 'Tarot';
    limparMesa();
});

document.getElementById('btn-embaralhar').addEventListener('click', () => {
    if (baralhoAtual.length === 0) {
        alert('Por favor, selecione um baralho primeiro!');
        return;
    }
    embaralhar(baralhoAtual);
});

function limparMesa() {
    document.getElementById('mesa').innerHTML = '';
    cartasSorteadas = [];
    cartasReveladasCount = 0;

    document.getElementById('interpretacao').innerHTML = `
        <h2>${nomeBaralhoSelecionado} Selecionado</h2>
        <p>Baralho pronto. Digite sua pergunta e clique no botão abaixo para sortear as cartas.</p>
        <div id="resumo-tiragem"></div>
    `;
}

function embaralhar(baralho) {
    const qtdSelect = document.getElementById('qtd-cartas').value;
    const quantidade = parseInt(qtdSelect);
    const pergunta = document.getElementById('input-pergunta').value.trim();

    if (quantidade > baralho.length) {
        alert('Quantidade de cartas maior que o baralho disponível!');
        return;
    }

    // Cria uma cópia, embaralha e corta pelo tamanho escolhido
    const baralhoEmbaralhado = [...baralho].sort(() => Math.random() - 0.5);
    cartasSorteadas = baralhoEmbaralhado.slice(0, quantidade);
    cartasReveladasCount = 0;

    const mesa = document.getElementById('mesa');
    mesa.innerHTML = '';

    // Prepara a área de interpretação para aguardar as seleções
    let interpretacaoHTML = `<h2>Tiragem: ${nomeBaralhoSelecionado}</h2>`;

    if (pergunta) {
        interpretacaoHTML += `
            <div style="margin-bottom: 1rem; color: #c084fc; font-size: 0.95rem; font-style: italic;">
                <strong>Pergunta:</strong> "${pergunta}"
            </div>
        `;
    }

    interpretacaoHTML += `
        <p style="color: #c4b5fd;">Clique nas ${quantidade} carta(s) na mesa para revelá-las.</p>
        <div id="container-interpretacoes"></div>
        <div id="resumo-tiragem"></div>
    `;

    document.getElementById('interpretacao').innerHTML = interpretacaoHTML;

    // Cria as cartas na mesa viradas para baixo
    cartasSorteadas.forEach((carta, index) => {
        const cartaElemento = document.createElement('div');
        cartaElemento.classList.add('carta');

        // Adiciona um evento de clique para revelar a carta
        cartaElemento.addEventListener('click', () => {
            if (!cartaElemento.classList.contains('revelada')) {
                revelarCarta(cartaElemento, carta, index);
            }
        });

        mesa.appendChild(cartaElemento);
    });
}

function revelarCarta(elemento, carta, index) {
    // Revela a carta na mesa
    elemento.classList.add('revelada');
    elemento.style.backgroundImage = `url('${carta.imagem}')`;

    cartasReveladasCount++;

    // Adiciona a interpretação da carta revelada
    const container = document.getElementById('container-interpretacoes');
    const itemCarta = document.createElement('div');
    itemCarta.classList.add('item-carta');
    itemCarta.innerHTML = `
        <strong>${index + 1}. ${carta.nome}</strong><br>
        <span style="color: #ddd6fe; font-size: 0.95rem;">${carta.significado}</span>
    `;
    container.appendChild(itemCarta);

    // Se todas as cartas foram reveladas, mostra a mensagem geral
    if (cartasReveladasCount === cartasSorteadas.length) {
        mostrarMensagemFinal();
    }
}

function mostrarMensagemFinal() {
    const pergunta = document.getElementById('input-pergunta').value.trim();

    // Cria um resumo dinâmico combinando o significado das cartas sorteadas
    let resumoSignificados = cartasSorteadas.map((c, index) => {
        return `O arcano ${index + 1} (${c.nome}) traz a energia de ${c.significado.toLowerCase()}.`;
    }).join(' ');

    let mensagemGeral = `Para a sua questão sobre "${pergunta || 'a sua jornada atual'}", a leitura nos revela o seguinte: ${resumoSignificados} A energia combinada destes arcanos sugere que você avalie o cenário atual com calma e confiança. Lembre-se de que os caminhos estão abertos para que você tome as melhores decisões com base no que foi revelado.`;

    // Exibe o resumo na tela
    document.getElementById('resumo-tiragem').innerHTML = `
        <div class="mensagem-final" style="margin-top: 1.5rem; padding-top: 1.2rem; border-top: 1px solid rgba(139, 92, 246, 0.4);">
            <h3 style="color: #8b5cf6; margin-bottom: 0.5rem; text-align: center;">Resumo e Mensagem da Tiragem</h3>
            <p style="font-style: italic; color: #cbd5e1; text-align: center; font-size: 1.05rem;">
                ${mensagemGeral}
            </p>
        </div>
    `;
}