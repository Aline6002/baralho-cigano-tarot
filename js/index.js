let baralhoAtual = [];
let nomeBaralhoSelecionado = '';
let cartasSorteadas = [];
let cartasReveladasCount = 0;

// Banco de conectores linguísticos altamente personalizado por tipo de tiragem
const conectoresMisticos = {
    tiragem1: {
        introducoes: [
            "A energia central imediata que se manifesta para você é trazida por",
            "O portal se abre revelando uma força única e urgente através de",
            "Como um farol para o seu momento atual, o oráculo evoca a presença de",
            "A resposta que ecoa do plano sutil se concentra diretamente em"
        ],
        conclusoes: [
            "Ancore este conselho no seu dia a dia e aja com foco absoluto nessa verdade.",
            "Deixe que essa única e poderosa mensagem ecoe em suas decisões nas próximas horas.",
            "Silencie a mente e permita que a clareza dessa revelação direcione os seus passos.",
            "Não há necessidade de buscar respostas complexas; a chave está em absorver essa força agora."
        ]
    },
    tiragem3: {
        introducoes: [
            "Os fios do tempo se alinham: sua trajetória mostra que o passado foi marcado pela energia de",
            "Olhando para a sua linha evolutiva, vemos que os alicerces do seu passado trazem os reflexos de",
            "A leitura de sua história revela que o seu ponto de partida foi influenciado pelas forças de"
        ],
        presente: [
            "atualmente, esse cenário se desdobra diretamente sob a ação de",
            "no momento presente, essas memórias ganham novos contornos com a chegada de",
            "essa bagagem agora se manifesta no seu dia a dia através do impacto de"
        ],
        futuro: [
            "caminhando adiante, as correntes do destino convergem para as tendências de",
            "olhando para o horizonte, o amanhã abre espaço para os desdobramentos de",
            "por fim, a sua jornada aponta para um portal futuro regido pelos mistérios de"
        ],
        conclusoes: [
            "Medite sobre essa linha do tempo. A clareza que você busca está na compreensão dessa transição.",
            "Não force os acontecimentos futuros; confie na maturação natural que essa sequência aponta.",
            "Esteja pronto para assumir as rédeas, ancorando o aprendizado do passado para brilhar no amanhã."
        ]
    },
    tiragem4: {
        introducoes: [
            "A estrutura desta análise baseia-se em quatro pilares fundamentais. A fundação de tudo inicia com",
            "O portal de quatro direções se abre mostrando que a base oculta do seu momento provém de",
            "Analisando a cruz elemental do seu momento, a raiz primária é governada por"
        ],
        transicoes: [
            "Avançando na leitura, deparamo-nos com o bloco de desafios ou caminhos cruzados por",
            "Essa dinâmica ganha novos contornos emocionais e mentais quando surge",
            "Como vetor de resolução e evolução, manifesta-se a força de"
        ],
        conclusoes: [
            "Considere esses quatro pilares como um mapa de sustentação. O equilíbrio exige atenção a cada quadrante.",
            "Esta quadratura oracular pede solidez, discernimento e pés no chão para estabilizar as forças em movimento.",
            "Equilibre estas quatro forças internas para que o caminho se abra sem resistência."
        ]
    },
    tiragem5: {
        introducoes: [
            "Para esta análise profunda, o panorama revela que a raiz oculta da sua questão nasce em",
            "Iniciando esta jornada de revelação, percebe-se que a base invisível de tudo se ancora em",
            "O primeiro véu se desfaz mostrando que a energia primordial que rege esta busca pertence a"
        ],
        transicoes: [
            "Logo em seguida, essa fundação cruza o caminho e ganha o peso de",
            "Somando-se a isso, vemos o impacto lateral gerado por",
            "Essa atmosfera expande-se e ganha contornos complexos quando surge",
            "Mais profundamente, revelam-se as forças aliadas trazidas por"
        ],
        conclusoes: [
            "Esta combinação rara e complexa exige paciência e sabedoria profunda. As engrenagens universais estão se movendo.",
            "Analise cada ponto desta teia mística. O equilíbrio virá através do autoconhecimento e da visão estratégica.",
            "O oráculo desenhou um mapa completo; agora cabe a você alinhar essas cinco forças para transformar sua realidade."
        ]
    },
    tiragem10: {
        introducoes: [
            "A complexa engrenagem da Cruz Céltica se arma revelando que o coração da sua questão pulsa sob",
            "O labirinto do destino começa a se decodificar mostrando que seu momento presente encara"
        ],
        transicoes: [
            "Esta realidade é imediatamente tensionada e desafiada por",
            "No topo das suas aspirações conscientes, desenha-se a influência de",
            "Enquanto isso, nas profundezas silenciosas do seu inconsciente, opera",
            "Olhando para trás, os passos recentes foram pavimentados por",
            "O horizonte imediato e as próximas semanas abrem as portas para",
            "Sua postura íntima e a forma como você se enxerga revelam",
            "O ambiente ao seu redor, incluindo as forças de terceiros, projeta",
            "No limiar dos seus desejos, seus medos e esperanças debatem-se com"
        ],
        conclusoes: [
            "O desfecho desta Cruz Céltica é um chamado à evolução espiritual profunda; cada teste moldou sua resiliência.",
            "A décima carta coroa uma jornada de superação. Use o peso desse conhecimento para colher a vitória prometida.",
            "As dez forças estão perfeitamente mapeadas. Compreender o obstáculo é o primeiro passo para dominar o resultado."
        ]
    },
    tiragem12: {
        introducoes: [
            "A grande engrenagem da Mandala Astrológica começa a girar, revelando sua identidade cósmica através de",
            "O mapa do seu céu oracular se descortina. A Casa 1, que dita suas intenções pessoais, abre-se com"
        ],
        transicoes: [
            "Suas posses, finanças e segurança material encontram sustentação em",
            "Sua mente concreta, trocas intelectuais e comunicação cotidiana vibram sob",
            "As estruturas do seu lar, raízes familiares e sua ancestralidade evocam",
            "Sua criatividade, prazeres, romances e expressões de alegria ganham a luz de",
            "Suas rotinas diárias, deveres práticos e o templo da saúde alinham-se com",
            "As parcerias, espelhos de relacionamentos e casamentos ganham o peso de",
            "Os portais de crises, transformações inevitáveis e desapegos profundos são tocados por",
            "Sua filosofia de vida, expansão espiritual e longos caminhos são abençoados por",
            "O topo da sua carreira, reputação e missão de vida são coroados por",
            "Seus planos para o amanhã, amigos fiéis e conexões coletivas são guiados por",
            "Por fim, seus sacrifícios silenciosos, carmas e os mistérios ocultos recolhem-se em"
        ],
        conclusoes: [
            "Esta roda astrológica completa desenha os doze setores de sua vida. Busque a harmonia integrando o sutil ao terreno.",
            "O ciclo das doze casas completou-se. Você está diante de um mapa sistêmico que exige visão global e sabedoria interna.",
            "A mandala oracular reflete um ciclo perfeito de macrocosmos. Deixe que as doze forças dancem em equilíbrio."
        ]
    },
    tiragemGeral: { // Usado para 9, 15 cartas e Mesa Inteira
        introducoes: [
            "Diante desta grandiosa abertura cósmica, a tônica primordial e regente de toda a mesa inicia com",
            "A imensidão desta tiragem estende um tapete de mistérios onde o ponto focal absoluto aponta para"
        ],
        transicoes: [
            "Tecendo as conexões adjacentes, percebe-se o fluxo dinâmico de",
            "Em paralelo, ramificam-se as correntes trazidas por",
            "Somando camadas a este panorama abrangente, intercepta a jornada a força de",
            "Entrando nas esferas de desdobramentos profundos, encontramos a vibração de",
            "Esse vasto ecossistema ganha novos e surpreendentes rumos com"
        ],
        conclusoes: [
            "Esta grande tiragem panorâmica funciona como um espelho da alma. Estude as conexões sutis entre as cartas.",
            "O mapa completo de possibilidades foi estendido na mesa. Confie na sua intuição para integrar tamanha sabedoria.",
            "As grandes jornadas demandam leituras sistêmicas. Recolha cada ensinamento e deixe o destino fluir."
        ]
    }
};

// --- CONTROLE DE SELEÇÃO DOS BARALHOS ---
document.getElementById('btn-cigano').addEventListener('click', () => {
    baralhoAtual = baralhoCigano;
    nomeBaralhoSelecionado = 'Baralho Cigano';
    
    document.getElementById('btn-cigano').classList.add('ativo');
    document.getElementById('btn-tarot').classList.remove('ativo');
    
    limparMesa();
});

document.getElementById('btn-tarot').addEventListener('click', () => {
    baralhoAtual = tarot;
    nomeBaralhoSelecionado = 'Tarot';
    
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
    let quantidade = 0;

    if (qtdSelect === "mesa") {
        quantidade = baralho.length;
    } else {
        quantidade = parseInt(qtdSelect);
    }

    const pergunta = document.getElementById('input-pergunta').value.trim();

    if (quantidade > baralho.length) {
        alert('A quantidade escolhida ultrapassa o número de arcanos disponíveis.');
        return;
    }

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

    let contextoPosicao = `Mentalidade ${index + 1}`;
    const total = cartasSorteadas.length;

    if (total === 1) {
        contextoPosicao = "Conselho Direto";
    } else if (total === 3) {
        const posicoes = ["Influência do Passado", "Situação no Presente", "Tendência de Futuro"];
        contextoPosicao = posicoes[index];
    } else if (total === 4) {
        const posicoes = ["O Ponto de Partida", "O Obstáculo", "O Caminho", "O Desfecho"];
        contextoPosicao = posicoes[index];
    } else if (total === 5) {
        const posicoes = ["Raiz Primária", "Passado de Sustentação", "Momento Presente", "Desafio Imediato", "Futuro Potencial"];
        contextoPosicao = posicoes[index];
    } else if (total === 9) {
        const posicoes = ["Raiz Oculta", "Passado Recente", "Influência Externa", "Presente Central", "Foco do Pensamento", "Desejos do Coração", "Futuro Próximo", "Fator Inesperado", "Síntese Suprema"];
        contextoPosicao = posicoes[index];
    } else if (total === 10) {
        const posicoes = [
            "1. Momento Presente", 
            "2. O Obstáculo Cruzado", 
            "3. Alvo Consciente", 
            "4. Base Inconsciente", 
            "5. Passado Recente", 
            "6. Futuro Imediato", 
            "7. Fator Interno (Você)", 
            "8. Fator Externo (Ambiente)", 
            "9. Esperanças ou Temores", 
            "10. Resultado Final"
        ];
        contextoPosicao = posicoes[index];
    } else if (total === 12) {
        const posicoes = [
            "Casa I: Personalidade", "Casa II: Finanças", "Casa III: Comunicação", 
            "Casa IV: Lar e Família", "Casa V: Romances e Brilho", "Casa VI: Trabalho/Saúde", 
            "Casa VII: Parcerias", "Casa VIII: Transformações", "Casa IX: Conhecimento", 
            "Casa X: Carreira", "Casa XI: Projetos/Amigos", "Casa XII: Desafios Ocultos"
        ];
        contextoPosicao = posicoes[index];
    } else if (total > 12) {
        contextoPosicao = index === 0 ? "Arcano Regente" : index === total - 1 ? "Último Desdobramento" : `Elo de Ligação ${index + 1}`;
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

    if (cartasReveladasCount === total) {
        mostrarMensagemFinal();
    }
}

// --- CONSTRUÇÃO DO RESUMO DINÂMICO E EXPORTAÇÃO ---
function mostrarMensagemFinal() {
    const pergunta = document.getElementById('input-pergunta').value.trim();
    const extrairAleatorio = (lista) => lista[Math.floor(Math.random() * lista.length)];
    const qtdCartas = cartasSorteadas.length;

    let corpoResumo = "";
    let conclusaoFinal = "";

    // --- MONTAGEM DA NARRATIVA TEXTUAL DINÂMICA COMPLETA ---
    if (qtdCartas === 1) {
        const banco = conectoresMisticos.tiragem1;
        corpoResumo = `${extrairAleatorio(banco.introducoes)} ${cartasSorteadas[0].nome} (${ajustarIniciaisMinisculas(cartasSorteadas[0].significado)}).`;
        conclusaoFinal = extrairAleatorio(banco.conclusoes);
    } 
    else if (qtdCartas === 3) {
        const banco = conectoresMisticos.tiragem3;
        corpoResumo = `${extrairAleatorio(banco.introducoes)} ${cartasSorteadas[0].nome} (${ajustarIniciaisMinisculas(cartasSorteadas[0].significado)}). ` +
                      `${extrairAleatorio(banco.presente)} ${cartasSorteadas[1].nome}, apontando para ${ajustarIniciaisMinisculas(cartasSorteadas[1].significado)}. ` +
                      `${extrairAleatorio(banco.futuro)} ${cartasSorteadas[2].nome}, trazendo à tona ${ajustarIniciaisMinisculas(cartasSorteadas[2].significado)}.`;
        conclusaoFinal = extrairAleatorio(banco.conclusoes);
    } 
    else if (qtdCartas === 4) {
        const banco = conectoresMisticos.tiragem4;
        corpoResumo = `${extrairAleatorio(banco.introducoes)} ${cartasSorteadas[0].nome} (${ajustarIniciaisMinisculas(cartasSorteadas[0].significado)}). `;
        for (let i = 1; i < qtdCartas; i++) {
            corpoResumo += `${extrairAleatorio(banco.transicoes)} ${cartasSorteadas[i].nome}, refletindo ${ajustarIniciaisMinisculas(cartasSorteadas[i].significado)}. `;
        }
        conclusaoFinal = extrairAleatorio(banco.conclusoes);
    } 
    else if (qtdCartas === 5) {
        const banco = conectoresMisticos.tiragem5;
        corpoResumo = `${extrairAleatorio(banco.introducoes)} ${cartasSorteadas[0].nome} (${ajustarIniciaisMinisculas(cartasSorteadas[0].significado)}). `;
        for (let i = 1; i < qtdCartas; i++) {
            corpoResumo += `${extrairAleatorio(banco.transicoes)} ${cartasSorteadas[i].nome}, que evoca ${ajustarIniciaisMinisculas(cartasSorteadas[i].significado)}. `;
        }
        conclusaoFinal = extrairAleatorio(banco.conclusoes);
    } 
    else if (qtdCartas === 10) {
        const banco = conectoresMisticos.tiragem10;
        corpoResumo = `${extrairAleatorio(banco.introducoes)} ${cartasSorteadas[0].nome} (${ajustarIniciaisMinisculas(cartasSorteadas[0].significado)}). `;
        for (let i = 1; i < qtdCartas; i++) {
            let conectorEspecial = banco.transicoes[i - 1] || "Paralelamente, soma-se a força de";
            corpoResumo += `${conectorEspecial} ${cartasSorteadas[i].nome} (${ajustarIniciaisMinisculas(cartasSorteadas[i].significado)}). `;
        }
        conclusaoFinal = extrairAleatorio(banco.conclusoes);
    }
    else if (qtdCartas === 12) {
        const banco = conectoresMisticos.tiragem12;
        corpoResumo = `${extrairAleatorio(banco.introducoes)} ${cartasSorteadas[0].nome} (${ajustarIniciaisMinisculas(cartasSorteadas[0].significado)}). `;
        for (let i = 1; i < qtdCartas; i++) {
            let conectorEspecial = banco.transicoes[i - 1] || "Por conseguinte, a roda passa por";
            corpoResumo += `${conectorEspecial} ${cartasSorteadas[i].nome} (${ajustarIniciaisMinisculas(cartasSorteadas[i].significado)}). `;
        }
        conclusaoFinal = extrairAleatorio(banco.conclusoes);
    }
    else { // Tratamento para 9, 15 ou Mesa Inteira
        const banco = conectoresMisticos.tiragemGeral;
        corpoResumo = `${extrairAleatorio(banco.introducoes)} ${cartasSorteadas[0].nome} (${ajustarIniciaisMinisculas(cartasSorteadas[0].significado)}). `;
        
        for (let i = 1; i < qtdCartas; i++) {
            if (i % 3 === 0) {
                corpoResumo += `Além disso, a mesa expõe a influência sutil de ${cartasSorteadas[i].nome} (${ajustarIniciaisMinisculas(cartasSorteadas[i].significado)}). `;
            } else {
                corpoResumo += `${extrairAleatorio(banco.transicoes)} ${cartasSorteadas[i].nome}, vibrando em ${ajustarIniciaisMinisculas(cartasSorteadas[i].significado)}. `;
            }
        }
        conclusaoFinal = extrairAleatorio(banco.conclusoes);
    }

    let introPergunta = pergunta 
        ? `A análise oracular para a sua questão — "${pergunta}" — revela um padrão claro: `
        : `Para a sua jornada atual em busca de autoconhecimento, as energias mostram: `;

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
document.addEventListener('DOMContentLoaded', () => {
    const botaoTema = document.getElementById('btn-tema');
    
    if (botaoTema) {
        const alternarEnergia = (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const body = document.body;
            const icone = botaoTema.querySelector('i');
            
            body.classList.toggle('modo-solar');
            
            if (body.classList.contains('modo-solar')) {
                icone.className = 'fa-solid fa-sun';
            } else {
                icone.className = 'fa-solid fa-moon';
            }
        };

        botaoTema.addEventListener('touchstart', alternarEnergia, { passive: false });
        botaoTema.addEventListener('click', alternarEnergia);
    }
});