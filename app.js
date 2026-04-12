const cenarios = {
    "1": [
        { id: "1_1", text: "(URGENTE) O banco de dados principal de prontuários médicos caiu. Os médicos não conseguem acessar alergias na UTI (Risco de Vida Iminente).", type: "URGENTE" },
        { id: "1_2", text: "O sistema de agendamento do ambulatório está lento. As recepcionistas estão demorando 1 min por paciente, gerando fila.", type: "PERFORMANCE" },
        { id: "1_3", text: "Um estagiário deletou acidentalmente uma tabela de registros de 2010. Não afeta a operação atual, mas fere regras legais do Ministério.", type: "INTEGRIDADE" },
        { id: "1_4", text: "O ar-condicionado do rack de servidores está fazendo um ruído metálico. A temperatura continua normal (20°C).", type: "OUTRO" },
        { id: "1_5", text: "O backup da última madrugada falhou silenciosamente, mas o de ontem está OK. Operação segue, mas sem rede de segurança recente.", type: "SEGURANCA" },
        { id: "1_6", text: "Um médico residente esqueceu a senha para entrar no portal de artigos de pesquisa.", type: "OUTRO" }
    ],
    "2": [
        { id: "2_1", text: "(URGENTE) Clientes relatam que o saldo de suas contas está mudando de valor sozinho após transferências PIX. (Corrupção ativa de dados).", type: "INTEGRIDADE" },
        { id: "2_2", text: "O aplicativo mobile do banco está demorando quase 30 segundos para carregar o extrato. Reclamações nas redes sociais subindo.", type: "PERFORMANCE" },
        { id: "2_3", text: "Detectamos um acesso administrativo com privilégios master vindo de um IP desconhecido do exterior às 3 da manhã. Sessão ativa.", type: "SEGURANCA" },
        { id: "2_4", text: "O relatório mensal gerencial de impostos precisa ser gerado até amanhã às 18h para enviar à contabilidade.", type: "OUTRO" },
        { id: "2_5", text: "Uma tabela de 'Cidades' cadastrou nomes com grafia incorreta (ex: 'Sãu Paulo'). Não afeta saldos, mas atrapalha envios de correspondência.", type: "INTEGRIDADE" },
        { id: "2_6", text: "O departamento de RH pediu a lista de funcionários da agência que fazem aniversário hoje para uma confraternização.", type: "OUTRO" }
    ],
    "3": [
        { id: "3_1", text: "(URGENTE) Nosso monitoramento detectou que um bot está testando 10.000 senhas por minuto na tabela de clientes. (Ataque Bruteforce).", type: "SEGURANCA" },
        { id: "3_2", text: "O banco de dados apenas das imagens de produtos caiu. O site está no ar e as compras finalizam, mas nenhuma foto de produto carrega.", type: "OUTRO" },
        { id: "3_3", text: "O cálculo do frete no carrinho está demorando 10 segundos, fazendo com que 40% dos clientes abandonem as compras (Queda grave de vendas).", type: "PERFORMANCE" },
        { id: "3_4", text: "O servidor atingiu 98% de espaço no disco! Se chegar a 100%, todos os sistemas de venda pararão imediatamente.", type: "SEGURANCA" },
        { id: "3_5", text: "Um fornecedor abriu um ticket pedindo para atualizar o preço de custo de 500 itens dele de uma só vez para o mês que vem.", type: "OUTRO" },
        { id: "3_6", text: "A equipe de design informou que o logo da empresa no rodapé do portal administrativo está com a cor ligeiramente errada.", type: "OUTRO" }
    ],
    "4": [
        { id: "4_1", text: "(URGENTE) O servidor principal do banco de dados literalmente queimou! Precisamos restaurar as rotas no sistema de backup emergencial.", type: "SEGURANCA" },
        { id: "4_2", text: "O GPS dos caminhões está guardando os dados no banco com 2 minutos de atraso devido ao 4G, mas os caminhões seguem viagem normal.", type: "OUTRO" },
        { id: "4_3", text: "Um dos 50 motoristas terceirizados relata que não consegue se logar com a biometria para receber os novos trajetos do dia.", type: "OUTRO" },
        { id: "4_4", text: "O painel do RH está extramamente lento pois está gerando o PDF pesadíssimo da folha de pagamento de todos os motoristas de uma só vez.", type: "PERFORMANCE" },
        { id: "4_5", text: "O arquivo de log de transações do disco C: ultrapassou o limite e precisamos purgá-lo antes que cause problemas de corrupção amanhã.", type: "INTEGRIDADE" },
        { id: "4_6", text: "O endereço de cobrança de uma das filiais foi alterado no mundo real e precisa ser ajustado no banco de dados até sexta-feira.", type: "OUTRO" }
    ],
    "5": [
        { id: "5_1", text: "(URGENTE) Problema de Lock: Dois motoboys diferentes conseguiram 'aceitar' a mesma corrida e estão indo buscar o mesmo lanche simultaneamente.", type: "INTEGRIDADE" },
        { id: "5_2", text: "O mapa em tempo real dos entregadores sumiu da tela de 3 restaurantes por 5 minutos, embora os pedidos cheguem normalmente.", type: "OUTRO" },
        { id: "5_3", text: "O banco de dados contendo o histórico antigo de pedidos (Janeiro a Março) está inacessível. Pedidos atuais acontecem sem problemas.", type: "INTEGRIDADE" },
        { id: "5_4", text: "O dono do restaurante 'Pizzaria do Zé' pediu para a equipe alterar manualmente o horário de fechamento do estabelecimento dele no banco.", type: "OUTRO" },
        { id: "5_5", text: "O servidor de banco de dados está a 95% de uso de Memória RAM devido a pesquisas não otimizadas, tornando a navegação no app pesada.", type: "PERFORMANCE" },
        { id: "5_6", text: "A equipe de marketing quer que você execute uma query (Select massivo) para extrair e-mails e enviar um cupom para 1 milhão de clientes agora.", type: "OUTRO" }
    ],
    "6": [
        { id: "6_1", text: "(URGENTE) O log mostra que um ex-diretor, demitido por justa causa ontem, ainda tem acesso total e está rodando consultas na base agora mesmo.", type: "SEGURANCA" },
        { id: "6_2", text: "A impressora térmica da fábrica, que lê os códigos de barra do banco, travou o rolo mecânico e precisa de assistência no local.", type: "OUTRO" },
        { id: "6_3", text: "Houve uma falha de query e o relatório diário de uso de produtos químicos gravou duas vezes (duplicidade) os itens consumidos (Estoque incorreto).", type: "INTEGRIDADE" },
        { id: "6_4", text: "O sistema de controle de ponto na catraca dos lavadores está lento. A fila gigante na troca de turno está gerando irritação nos funcionários.", type: "PERFORMANCE" },
        { id: "6_5", text: "O backup em nuvem alertou falha nas últimas 4 noites por 'falta de pagamento' da licença. Se o servidor principal parar, tudo será perdido.", type: "SEGURANCA" },
        { id: "6_6", text: "A Dona Sônia (Dona da empresa) abriu um chamado altíssima prioridade reclamando que a barra superior do sistema está azul em vez de rosa bebê.", type: "OUTRO" }
    ]
};

const descricoesContexto = {
    "1": "Atenção Hospital de Clínicas: Sua prioridade absoluta é garantir a disponibilidade de sistemas vitais que afetam a saúde dos pacientes (Vida).",
    "2": "Atenção Banco de Investimentos: Sua prioridade é zelar pela Integridade dos Valores transacionados e auditoria de saldos financeiros estritos.",
    "3": "Atenção E-commerce Global: A proteção contra vazamento de dados de clientes e ataques coordenados ao portal de vendas é sua missão.",
    "4": "Atenção Transportadora Logística: Seu foco deve recair na resiliência e estabilidade infraestrutural no caso de queima em servidores da matriz e rodovias.",
    "5": "Atenção App de Delivery: Evite ao máximo que problemas de concorrência ou colisão sujem os dados causando insatisfação na ponta com motoqueiros.",
    "6": "Atenção Lavanderia Industrial: O controle de pessoas não autorizadas e a governança rígida de logins evitam espionagem e fraudes corporativas internas."
};

let currentGroup = "";
let currentTeam = "";
let timerInterval = null;
let currentLoss = 0;

const views = document.querySelectorAll('.view');
const startForm = document.getElementById('start-form');
const groupSelect = document.getElementById('group-select');
const teamNames = document.getElementById('team-names');
const groupFocusBox = document.getElementById('group-focus-box');
const groupFocusText = document.getElementById('group-focus-text');

const displayGroup = document.getElementById('display-group');
const displayLoss = document.getElementById('loss-counter');
const incidentList = document.getElementById('incident-list');
const btnFinish = document.getElementById('btn-finish');

const finalTeamNames = document.getElementById('final-team-names');
const finalGroup = document.getElementById('final-group');
const finalLoss = document.getElementById('final-loss');
const verdictBox = document.getElementById('verdict-box');
const verdictText = document.getElementById('verdict-text');
const verdictReason = document.getElementById('verdict-reason');
const finalOrderList = document.getElementById('final-order-list');
const btnPrint = document.getElementById('btn-print');
const btnRestart = document.getElementById('btn-restart');

groupSelect.addEventListener('change', (e) => {
    const unitId = e.target.value;
    if(descricoesContexto[unitId]) {
        groupFocusText.innerText = descricoesContexto[unitId];
        groupFocusBox.style.display = 'block';
    } else {
        groupFocusBox.style.display = 'none';
    }
});

function switchView(viewId) {
    views.forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
}

startForm.addEventListener('submit', (e) => {
    e.preventDefault();
    currentGroup = groupSelect.value;
    currentTeam = teamNames.value;

    const groupText = groupSelect.options[groupSelect.selectedIndex].text;
    displayGroup.innerText = `UNIDADE: ${groupText.split(':')[0]}`;
    
    loadIncidents(currentGroup);
    startTimer();
    switchView('simulation-screen');
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function loadIncidents(groupId) {
    incidentList.innerHTML = '';
    const incidents = [...cenarios[groupId]];
    
    shuffleArray(incidents);

    incidents.forEach(inc => {
        const li = document.createElement('li');
        li.classList.add('sortable-item');
        li.setAttribute('draggable', 'true');
        li.dataset.type = inc.type;
        li.dataset.id = inc.id;

        li.innerHTML = `
            <span class="drag-handle">☰</span>
            <span class="item-text">${inc.text}</span>
        `;
        incidentList.appendChild(li);

        li.addEventListener('dragstart', () => {
            li.classList.add('dragging');
        });

        li.addEventListener('dragend', () => {
            li.classList.remove('dragging');
        });
    });

    incidentList.addEventListener('dragover', e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(incidentList, e.clientY);
        const draggable = document.querySelector('.dragging');
        if (afterElement == null) {
            incidentList.appendChild(draggable);
        } else {
            incidentList.insertBefore(draggable, afterElement);
        }
    });
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.sortable-item:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function startTimer() {
    currentLoss = 0;
    if(timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        const increment = Math.random() * 35 + 10;
        currentLoss += increment;
        
        displayLoss.innerText = currentLoss.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }, 500);
}

btnFinish.addEventListener('click', () => {
    clearInterval(timerInterval);
    evaluateResult();
    switchView('result-screen');
});

function evaluateResult() {
    const sortedItems = [...incidentList.querySelectorAll('.sortable-item')];
    
    finalTeamNames.innerText = currentTeam;
    finalGroup.innerText = groupSelect.options[groupSelect.selectedIndex].text;
    finalLoss.innerText = displayLoss.innerText;

    finalOrderList.innerHTML = '';
    
    const orderedTypes = [];
    
    sortedItems.forEach(item => {
        orderedTypes.push(item.dataset.type);
        const li = document.createElement('li');
        li.innerText = item.querySelector('.item-text').innerText;
        finalOrderList.appendChild(li);
    });

    let fired = false;
    let reason = "Análise concluída com sucesso. Prioridades respeitadas adequadamente.";

    const performanceIndices = [];
    orderedTypes.forEach((type, index) => {
        if(type === 'PERFORMANCE') performanceIndices.push(index);
    });

    const criiticalIndices = [];
    orderedTypes.forEach((type, index) => {
        if(type === 'SEGURANCA' || type === 'INTEGRIDADE') criiticalIndices.push(index);
    });

    for(let pIdx of performanceIndices) {
        for(let cIdx of criiticalIndices) {
            if(cIdx > pIdx) {
                fired = true;
                reason = "FALHA CRÍTICA: Você priorizou problemas de Performance enquanto deixava chamados de Segurança ou Integridade aguardando. Isso expôs o banco a riscos irreparáveis ou corrupção de dados.";
                break;
            }
        }
        if(fired) break;
    }

    if(fired) {
        verdictBox.className = 'verdict-box demitido';
        verdictText.innerText = "VEREDITO: DEMITIDO.";
        verdictReason.innerText = reason;
        document.getElementById('result-title').innerText = "[ FALHA NA OPERAÇÃO ]";
    } else {
        verdictBox.className = 'verdict-box aprovado';
        verdictText.innerText = "VEREDITO: APROVADO / TRIAGEM BEM SUCEDIDA.";
        verdictReason.innerText = "Você priorizou corretamente os pilares de Segurança e Integridade antes da Performance ou outras chamadas neutras. O prejuízo foi contido a tempo.";
        document.getElementById('result-title').innerText = "[ OPERAÇÃO CONCLUÍDA ]";
    }
}

btnPrint.addEventListener('click', () => {
    window.print();
});

btnRestart.addEventListener('click', () => {
    switchView('start-screen');
    startForm.reset();
});
