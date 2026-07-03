// 1. Tabela de preços dinâmicos por tipo de terreno
function obterPrecoPorTerreno(terreno) {
    if (terreno === "Terreno leve") return 100;
    if (terreno === "Terreno médio") return 200;
    if (terreno === "Terreno pesado") return 300;
    return 0;
}

// 2. Função que muda o preço exibido na tela na mesma hora
function atualizarPrecoAoMudar() {
    const tipoSelecionado = document.getElementById("tipo").value;
    const novoPreco = obterPrecoPorTerreno(tipoSelecionado);
    
    // Altera o texto do campo <p id="valorPreview">
    document.getElementById("valorPreview").innerText = `Valor: R$ ${novoPreco}`;
}

// 3. Função principal: Junta as informações e abre o WhatsApp
function processarEEnviar() {
    // Coleta o que está escrito nos campos
    const nomeCliente = document.getElementById("nome").value.trim() || "Não informado";
    const telefoneCliente = document.getElementById("telefone").value.trim() || "Não informado";
    const enderecoCliente = document.getElementById("endereco").value.trim() || "Não informado";
    const descricaoServico = document.getElementById("descricao").value.trim() || "Sem descrição adicional";
    const tipoTerreno = document.getElementById("tipo").value;

    // Busca o valor atualizado direto da interface da tela
    const textoDoPreco = document.getElementById("valorPreview").innerText;

    // Constrói a mensagem profissional com formatação do WhatsApp
    const textoMensagem = `🚀 *SOLICITAÇÃO DE ORÇAMENTO AUTOMÁTICO*

👤 *Cliente:* ${nomeCliente}
📞 *Contato:* ${telefoneCliente}
📍 *Endereço:* ${enderecoCliente}

🛠️ *Serviço solicitado:*
${descricaoServico}

📂 *Plano escolhido:* ${tipoTerreno}

💰 *${textoDoPreco}*

⚡ *PRÓXIMO PASSO:*
Responda com uma das opções abaixo:
1️⃣ Confirmar serviço
2️⃣ Quero ajustar o valor
3️⃣ Falar com atendente

✔️ _Atendimento rápido e direto_`;

    // Converte o texto para o formato de URL (troca espaços por códigos lidos pela internet)
    const textoProntoParaLink = encodeURIComponent(textoMensagem);

    // Cria a rota para o seu número com o prefixo 55 do Brasil
    const linkDoWhatsApp = `https://wa.me/5521991960469?text=${textoProntoParaLink}`;

    // Abre o aplicativo ou o site do WhatsApp com tudo preenchido
    window.open(linkDoWhatsApp, '_blank');
}
