// 1. Função inteligente que calcula o valor somando todas as variáveis selecionadas
function calcularOrcamentoTotal(tamanho, mato, poda) {
    let valorBase = 0;

    // Definição de preço por tamanho do terreno
    if (tamanho === "Pequeno (Até 100m²)") valorBase += 100;
    else if (tamanho === "Médio (Até 300m²)") valorBase += 200;
    else if (tamanho === "Grande (Acima de 300m²)") valorBase += 350;

    // Adicional se o mato estiver alto
    if (mato === "Mato Alto") {
        valorBase += 50; // Adiciona R$ 50 se for mato alto
    }

    // Adicional por tamanho da árvore na poda
    if (poda === "Árvore Pequena") valorBase += 80;
    else if (poda === "Árvore Grande") valorBase += 150;

    return valorBase;
}

// 2. Atualiza o preço exibido na tela em tempo real com base nas 3 seleções
function atualizarPrecoAoMudar() {
    const tamanho = document.getElementById("tamanhoTerreno").value;
    const mato = document.getElementById("estadoMato").value;
    const poda = document.getElementById("podaArvore").value;

    const precoFinal = calcularOrcamentoTotal(tamanho, mato, poda);
    document.getElementById("valorPreview").innerText = `Valor Estimado: R$ ${precoFinal}`;
}

// 3. Função Principal: Puxa todos os dados novos e envia para o WhatsApp
function processarEEnviar() {
    const nomeCliente = document.getElementById("nome").value.trim() || "Não informado";
    const telefoneCliente = document.getElementById("telefone").value.trim() || "Não informado";
    const enderecoCliente = document.getElementById("endereco").value.trim() || "Não informado";
    const descricaoServico = document.getElementById("descricao").value.trim() || "Sem observações adicionais";
    
    // Captura os novos campos dinâmicos
    const tamanhoTerreno = document.getElementById("tamanhoTerreno").value;
    const estadoMato = document.getElementById("estadoMato").value;
    const podaArvore = document.getElementById("podaArvore").value;

    const textoDoPreco = document.getElementById("valorPreview").innerText;

    // Monta a mensagem completa contendo todas as especificações
    const textoMensagem = `🚀 *SOLICITAÇÃO DE ORÇAMENTO AUTOMÁTICO*

👤 *Cliente:* ${nomeCliente}
📞 *Contato:* ${telefoneCliente}
📍 *Endereço:* ${enderecoCliente}

📐 *Tamanho do Terreno:* ${tamanhoTerreno}
🌿 *Estado da Vegetação:* ${estadoMato}
🌳 *Poda de Árvore:* ${podaArvore}

🛠️ *Observações do Local:*
${descricaoServico}

💰 *${textoDoPreco}*

⚡ *PRÓXIMO PASSO:*
Responda com uma das opções abaixo para agendamento:
1️⃣ Confirmar serviço
2️⃣ Quero ajustar o valor
3️⃣ Falar com atendente

✔️ _Atendimento rápido e direto_`;

    const textoProntoParaLink = encodeURIComponent(textoMensagem);
    const linkDoWhatsApp = `https://wa.me/5521991960469?text=${textoProntoParaLink}`;

    window.open(linkDoWhatsApp, '_blank');
}
