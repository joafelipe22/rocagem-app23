// 1. Tabela de preços dinâmicos por tipo de terreno
function obterPrecoPorTerreno(terreno) {
    if (terreno === "Terreno leve") return 100;
    if (terreno === "Terreno médio") return 200;
    if (terreno === "Terreno pesado") return 300;
    return 0;
}

// 2. Atualiza o preço exibido na tela na mesma hora que o usuário muda a opção
function atualizarPrecoAoMudar() {
    const tipoSelecionado = document.getElementById("tipo").value;
    const novoPreco = obterPrecoPorTerreno(tipoSelecionado);
    document.getElementById("valorPreview").innerText = `Valor: R$ ${novoPreco}`;
}

// 3. Função Principal: Captura TUDO exatamente como foi digitado e envia
function processarEEnviar() {
    // Captura os valores exatos dos campos de texto (puxando o .value)
    const nomeCliente = document.getElementById("nome").value;
    const telefoneCliente = document.getElementById("telefone").value;
    const enderecoCliente = document.getElementById("endereco").value;
    const descricaoServico = document.getElementById("descricao").value;
    const tipoTerreno = document.getElementById("tipo").value;

    // Busca o valor que está calculado na tela dentro do <p id="valorPreview">
    const textoDoPreco = document.getElementById("valorPreview").innerText;

    // Monta o esqueleto da mensagem usando as variáveis acima
    // O texto vai exatamente com o que o usuário escreveu nos campos
    const textoMensagem = `🚀 *SOLICITAÇÃO DE ORÇAMENTO AUTOMÁTICO*

👤 *Cliente:* ${nomeCliente}
📞 *Contato:* ${telefoneCliente}
📍 *Endereço:* ${enderecoCliente}

🛠️ *Serviço solicitado (Descrição do local):*
${descricaoServico}

📂 *Plano/Tipo de Terreno selecionado:* ${tipoTerreno}

💰 *${textoDoPreco}*

⚡ *PRÓXIMO PASSO:*
Responda com uma das opções abaixo para darmos andamento:
1️⃣ Confirmar serviço
2️⃣ Quero ajustar o valor
3️⃣ Falar com atendente

✔️ _Atendimento rápido e direto_`;

    // Transforma todo o texto digitado em um formato seguro para links de internet
    const textoProntoParaLink = encodeURIComponent(textoMensagem);

    // Gera o link apontando para o seu número real com o código do país (55)
    const linkDoWhatsApp = `https://wa.me/5521991960469?text=${textoProntoParaLink}`;

    // Abre o WhatsApp abrindo uma nova aba com todas as informações digitadas prontas!
    window.open(linkDoWhatsApp, '_blank');
}
