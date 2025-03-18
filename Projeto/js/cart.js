// cart.js
document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.btn');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            const productName = button.getAttribute('data-name');
            const productPrice = button.getAttribute('data-price');

            const product = {
                id: productId,
                name: productName,
                price: parseFloat(productPrice),
                quantity: 1
            };

            const existingProductIndex = cart.findIndex(item => item.id === productId);

            if (existingProductIndex >= 0) {
                cart[existingProductIndex].quantity += 1;
            } else {
                cart.push(product);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${productName} foi adicionado ao carrinho.`);
        });
    });
});