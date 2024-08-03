function showSummary() {
    const urlParams = new URLSearchParams(window.location.search);
    const resumo = urlParams.get('resumo');

    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;

    const resumoDiv = document.getElementById('resumo');
    resumoDiv.textContent = `Nome: ${nome}\nEndereço: ${endereco}\n\nResumo do Pedido:\n${decodeURIComponent(resumo) || "Nenhum resumo disponível."}`;

    let message = `Nome: ${nome}\nEndereço: ${endereco}\n\nResumo do Pedido:\n${decodeURIComponent(resumo) || "Nenhum resumo disponível."}`;
    alert(message);

    return false;
}
