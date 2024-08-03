function showCart() {
    let cartMessage = "";
    let total = 0;
    const items = [
        { id: "hamburguer", name: "Hamburguer", quantityId: "quantidade-hamburguer", price: 29.90 },
        { id: "salgados", name: "Salgados", quantityId: "quantidade-salgados", price: 15.60 },
        { id: "bebidas", name: "Bebidas", quantityId: "quantidade-bebidas", price: 6.90 }
    ];

    items.forEach(item => {
        const checkbox = document.getElementById(item.id);
        const quantityInput = document.getElementById(item.quantityId);

        if (checkbox.checked) {
            const quantity = quantityInput.value;
            const itemTotal = item.price * quantity;
            cartMessage += `${item.name}: ${quantity} x R$${item.price.toFixed(2)} = R$${itemTotal.toFixed(2)}\n`;
            total += itemTotal;
        }
    });

    const pagamento = [];
    const paymentOptions = document.querySelectorAll('input[name="pagamento"]:checked');
    paymentOptions.forEach(option => pagamento.push(option.value));

    if (cartMessage === "") {
        cartMessage = "Nenhum item selecionado.";
    } else {
        cartMessage += `\nTotal: R$${total.toFixed(2)}`;
    }

    if (pagamento.length > 0) {
        cartMessage += `\nForma de pagamento: ${pagamento.join(", ")}`;
    } else {
        cartMessage += `\nForma de pagamento: Não selecionada.`;
    }

    // Atualiza o campo oculto com o resumo do pedido
    document.getElementById('resumo').value = encodeURIComponent(cartMessage);
}

function updateForm() {
    showCart();
    return true;
}
