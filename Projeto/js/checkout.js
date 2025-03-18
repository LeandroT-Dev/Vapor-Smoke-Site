// checkout.js
document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartQuantity = document.getElementById('cart-quantity');
    const cartTotal = document.getElementById('cart-total');

    let totalQuantity = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('check-item');
        itemElement.innerHTML = `
            <p class="i-1">${item.name}</p>
            <p class="q-1">${item.quantity}</p>
            <p class="v-1">R$ ${(item.price * item.quantity).toFixed(2)}</p>
            
        `;
        cartItemsContainer.appendChild(itemElement);

        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
    });

    cartQuantity.textContent = totalQuantity;
    cartTotal.textContent = `R$ ${totalPrice.toFixed(2)}`;
    
});

// Function to display cart items
function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsContainer = document.querySelector('.check-items');
    let cartQuantityContainer = document.querySelector('.check-qtd');
    let cartValueContainer = document.querySelector('.check-valor');
    
    cartItemsContainer.innerHTML = '<span>ITEMS</span>';
    cartQuantityContainer.innerHTML = '<span>QTD</span>';
    cartValueContainer.innerHTML = '<span>VALOR</span>';
    
    cart.forEach(item => {
        cartItemsContainer.innerHTML += `<p>${item.name}</p>`;
        cartQuantityContainer.innerHTML += `<p>${item.quantity}</p>`;
        cartValueContainer.innerHTML += `<p>R$${(item.price * item.quantity).toFixed(2)}</p>`;
    });
}

// Call the function to display cart items when the page loads
document.addEventListener('DOMContentLoaded', displayCartItems);