let baralhoAtual = [];
let nomeBaralhoSelecionado = '';
let cartasSorteadas = [];
let cartasReveladasCount = 0;

// Banco de conectores linguísticos para gerar resumos orgânicos e dinâmicos
const conectoresMisticos = {
    introducoes: [
        "Os fios do destino se cruzam para nos revelar que",
        "A sabedoria sutil dos arcanos indica que",
        "O plano sutil se manifesta mostrando que",
        "Olhando profundamente para o panorama energético, percebe-se que"
    ],
    transicoes: [
        "Logo em seguida, esta força é complementada por",
        "Paralelamente, cruza o seu caminho a influência de",
        "Somando-se a isso, vemos o impacto de",
        "Essa atmosfera ganha novos contornos quando surge"
    ],
    conclusoes: [
        "O conselho central é agir com sabedoria, pois as correntes universais conspiram a seu favor.",
        "Medite sobre este panorama. A clareza que você busca virá através da intuição e do silêncio.",
        "Não force os acontecimentos; confie no tempo de maturação que o oráculo acaba de pontuar.",
        "Esteja pronto para assumir as rédeas da situação, ancorando essa combinação de forças no seu dia a dia."
    ]
};

// --- CONTROLE DE SELEÇÃO DOS BARALHOS ---
document.getElementById('btn-cigano').addEventListener('click', () => {
    baralhoAtual = baralhoCigano;
    nomeBaralhoSelecionado = 'Baralho Cigano';
    
    // Gerencia o estado visual ativo no menu
    document.getElementById('btn-cigano').classList.add('ativo');
    document.getElementById('btn-tarot').classList.remove('ativo');
    
    limparMesa();
});

document.getElementById('btn-tarot').addEventListener('click', () => {
    baralhoAtual = tarot;
    nomeBaralhoSelecionado = 'Tarot';
    
    // Gerencia o estado visual ativo no menu
    document.getElementById('btn-tarot').classList.add('ativo');
    document.getElementById('btn-cigano').classList.remove('ativo');
    
    limparMesa();
});

document.getElementById('btn-embaralhar').addEventListener('click', () => {
    if (baralhoAtual.length === 0) {
        alert('Por favor, selecione um baralho no topo do portal antes de continuar!');
        return;
    }
    embaralhar(baralhoAtual);
});

// --- LIMPEZA E REDEFINIÇÃO DA MESA ---
function limparMesa() {
    document.getElementById('mesa').innerHTML = '';
    cartasSorteadas = [];
    cartasReveladasCount = 0;

    document.getElementById('interpretacao').innerHTML = `
        <h2><i class="fa-solid fa-sparkles"></i> ${nomeBaralhoSelecionado} Selecionado</h2>
        <p>O portal de respostas foi aberto. Digite sua intenção e clique em "Embaralhar" para evocar os arcanos.</p>
        <div id="resumo-tiragem"></div>
    `;
}

// --- ALGORITMO DE DISTRIBUIÇÃO E SENSATIZADOR ---
function ajustarIniciaisMinisculas(texto) {
    if (!texto) return "";
    return texto.charAt(0).toLowerCase() + texto.slice(1);
}

function embaralhar(baralho) {
    const qtdSelect = document.getElementById('qtd-cartas').value;
    const quantidade = parseInt(qtdSelect);
    const pergunta = document.getElementById('input-pergunta').value.trim();

    if (quantidade > baralho.length) {
        alert('A quantidade escolhida ultrapassa o número de arcanos disponíveis.');
        return;
    }

    // Cria cópia e aplica o algoritmo de embaralhamento Fisher-Yates
    const baralhoEmbaralhado = [...baralho];
    for (let i = baralhoEmbaralhado.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [baralhoEmbaralhado[i], baralhoEmbaralhado[j]] = [baralhoEmbaralhado[j], baralhoEmbaralhado[i]];
    }

    cartasSorteadas = baralhoEmbaralhado.slice(0, quantidade);
    cartasReveladasCount = 0;

    const mesa = document.getElementById('mesa');
    mesa.innerHTML = '';

    let interpretacaoHTML = `<h2>Tiragem: ${nomeBaralhoSelecionado}</h2>`;

    if (pergunta) {
        interpretacaoHTML += `
            <div style="margin-bottom: 1.5rem; color: var(--primary-light); font-size: 1rem; font-style: italic;">
                <strong><i class="fa-solid fa-scroll"></i> Intenção firmada:</strong> "${pergunta}"
            </div>
        `;
    }

    interpretacaoHTML += `
        <p style="color: var(--text-muted); margin-bottom: 1rem;">Toque nas cartas manifestadas para revelar os mistérios ocultos.</p>
        <div id="container-interpretacoes"></div>
        <div id="resumo-tiragem"></div>
    `;

    document.getElementById('interpretacao').innerHTML = interpretacaoHTML;

    cartasSorteadas.forEach((carta, index) => {
        const cartaElemento = document.createElement('div');
        cartaElemento.classList.add('carta');

        cartaElemento.addEventListener('click', () => {
            if (!cartaElemento.classList.contains('revelada')) {
                revelarCarta(cartaElemento, carta, index);
            }
        });

        mesa.appendChild(cartaElemento);
    });
}

// --- APRESENTAÇÃO INDIVIDUAL DE CADA ARCANO ---
function revelarCarta(elemento, carta, index) {
    elemento.classList.add('revelada');
    elemento.style.backgroundImage = `url('${carta.imagem}')`;

    cartasReveladasCount++;

    const container = document.getElementById('container-interpretacoes');
    const itemCarta = document.createElement('div');
    itemCarta.classList.add('item-carta');

    // Atribui títulos dinâmicos baseados na posição clássica se a tiragem for de 3 cartas
    let contextoPosicao = `Carta ${index + 1}`;
    if (cartasSorteadas.length === 3) {
        const posicoes = ["Influência do Passado", "Situação no Presente", "Tendência de Futuro"];
        contextoPosicao = posicoes[index];
    }

    itemCarta.innerHTML = `
        <strong style="color: var(--primary-light); font-family: var(--font-btn); text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px;">
            [${contextoPosicao}]
        </strong><br>
        <strong style="font-size: 1.1rem; color: var(--text-light); display: inline-block; margin: 4px 0;">
            ${carta.nome}
        </strong><br>
        <span style="color: var(--text-main); font-size: 0.95rem;">${carta.significado}</span>
    `;
    container.appendChild(itemCarta);

    if (cartasReveladasCount === cartasSorteadas.length) {
        mostrarMensagemFinal();
    }
}

// --- CONSTRUÇÃO DO RESUMO DINÂMICO E EXPORTAÇÃO ---
function mostrarMensagemFinal() {
    const pergunta = document.getElementById('input-pergunta').value.trim();
    const extrairAleatorio = (lista) => lista[Math.floor(Math.random() * lista.length)];

    let corpoResumo = "";

    // Construção inteligente do texto interpretativo
    if (cartasSorteadas.length === 3) {
        corpoResumo = `Sua trajetória mostra que o passado foi marcado pela energia de ${cartasSorteadas[0].nome} (${ajustarIniciaisMinisculas(cartasSorteadas[0].significado)}). Atualmente, este cenário se desdobra sob a ação de ${cartasSorteadas[1].nome}, apontando para ${ajustarIniciaisMinisculas(cartasSorteadas[1].significado)}. Caminhando adiante, a tendência futura converge para os reflexos de ${cartasSorteadas[2].nome}, trazendo à tona ${ajustarIniciaisMinisculas(cartasSorteadas[2].significado)}.`;
    } else {
        corpoResumo = cartasSorteadas.map((c, index) => {
            if (index === 0) {
                return `${extrairAleatorio(conectoresMisticos.introducoes)} ${c.nome} (${ajustarIniciaisMinisculas(c.significado)}).`;
            } else {
                return `${extrairAleatorio(conectoresMisticos.transicoes)} ${c.nome}, que evoca ${ajustarIniciaisMinisculas(c.significado)}.`;
            }
        }).join(' ');
    }

    let introPergunta = pergunta 
        ? `A análise oracular para a sua questão — "${pergunta}" — revela um padrão claro: `
        : `Para a sua jornada atual em busca de autoconhecimento, as energias mostram: `;

    let conclusaoFinal = extrairAleatorio(conectoresMisticos.conclusoes);
    let mensagemExibidaHTML = `${introPergunta}${corpoResumo} <br><br><strong>Conselho do Oráculo:</strong> ${conclusaoFinal}`;

    document.getElementById('resumo-tiragem').innerHTML = `
        <div class="mensagem-final" style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px dashed var(--glass-border); display: flex; flex-direction: column;">
            <h3 style="color: var(--primary-light); font-family: var(--font-display); margin-bottom: 1rem; text-align: center; letter-spacing: 1px;">
                <i class="fa-solid fa-wand-magic-sparkles"></i> Síntese Interpretativa
            </h3>
            <p style="color: var(--text-main); text-align: left; font-size: 1rem; line-height: 1.8;">
                ${mensagemExibidaHTML}
            </p>
            <button class="btn-copiar" id="btn-copiar-texto">
                <i class="fa-solid fa-copy"></i> Copiar Registro da Jornada
            </button>
        </div>
    `;

    // Ação do Botão Copiar (Limpa tags HTML da cópia)
    document.getElementById('btn-copiar-texto').addEventListener('click', () => {
        let textoCartas = cartasSorteadas.map((c, i) => `Carta ${i + 1}: ${c.nome}`).join('\n');
        let textoLimpoParaCopiar = `--- PORTAL ORÁCULO DE CARTAS ---\n\n${introPergunta}\n\n[Cartas Reveladas]\n${textoCartas}\n\n${corpoResumo}\n\nConselho Final: ${conclusaoFinal}`;
        
        navigator.clipboard.writeText(textoLimpoParaCopiar).then(() => {
            const botao = document.getElementById('btn-copiar-texto');
            botao.innerHTML = `<i class="fa-solid fa-check"></i> Copiado com Sucesso!`;
            setTimeout(() => {
                botao.innerHTML = `<i class="fa-solid fa-copy"></i> Copiar Registro da Jornada`;
            }, 2500);
        });
    });
}

// --- ALTERNADOR DE ENERGIAS CORES DO PORTAL (LUNAR / SOLAR) ---
document.getElementById('btn-tema').addEventListener('click', () => {
    const body = document.body;
    const icone = document.querySelector('#btn-tema i');
    
    body.classList.toggle('modo-solar');
    
    if (body.classList.contains('modo-solar')) {
        icone.className = 'fa-solid fa-sun';
    } else {
        icone.className = 'fa-solid fa-moon';
    }
});