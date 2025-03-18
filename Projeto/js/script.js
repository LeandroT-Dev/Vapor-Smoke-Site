
// Clear localStorage on page load
//window.onload = function() {
  //  localStorage.clear();
//};

function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../Projeto/img/menu_white_36dp.svg"
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../Projeto/img/close_white_36dp.svg"
    }

}

document.addEventListener("DOMContentLoaded", function() {
    var sideItems = document.querySelectorAll('#side-items .side-item');

    sideItems.forEach(function(item) {
        item.addEventListener("click", function() {
            // Remover a classe 'active' de todos os itens
            sideItems.forEach(function(item) {
                item.classList.remove("active");
            });
            // Adicionar a classe 'active' ao item clicado
            this.classList.add("active");
        });
    });

document.addEventListener("click", function(event){
    var targetElement = event.target;
 
    var isClickedOutside = true;
    sideItems.forEach(function(item){
        if (item.contains(targetElement)){
            isClickedOutside = false;
        }
    });
     
    if(isClickedOutside) {
        sideItems.forEach(function(item){
            item.classList.remove("active");
        }
    )};

    });

});


document.addEventListener("DOMContentLoaded", function() {
    var cardOk = document.querySelectorAll(".products-container, .card");

    cardOk.forEach(function(item) {
        item.addEventListener("click", function(event) {
            event.stopPropagation(); // Impede que o clique no item se propague para o documento
            // Remover a classe 'active' de todos os itens
            cardOk.forEach(function(item) {
                item.classList.remove("active");
            });
            // Adicionar a classe 'active' ao item clicado
            this.classList.add("active");
        });
    });

    // Adicionar ouvinte de evento de clique ao documento
    document.addEventListener("click", function(event) {
        var targetElement = event.target; // Elemento clicado

        // Verificar se o clique não ocorreu dentro de nenhum dos itens
        var isClickedOutside = true;
        cardOk.forEach(function(item) {
            if (item.contains(targetElement)) {
                isClickedOutside = false;
            }
        });

        // Se o clique ocorreu fora do item, remover a classe 'active' de todos os itens
        if (isClickedOutside) {
            cardOk.forEach(function(item) {
                item.classList.remove("active")
            
            });
        }
    
    });
});


// Array to store cart items
let cart = [];

// Function to add item to cart
function addToCart(productName, productPrice) {
    // Check if the item is already in the cart
    let item = cart.find(item => item.name === productName);
    if (item) {
        // Increase quantity if item exists
        item.quantity++;
    } else {
        // Add new item to the cart
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    updateCartDisplay();
}

// Function to update cart display
function updateCartDisplay() {
    let cartItemsContainer = document.querySelector('.check-items');
    let cartQuantityContainer = document.querySelector('.check-qtd');
    let cartValueContainer = document.querySelector('.check-valor');
    
    cartItemsContainer.innerHTML = '<p>ITEMS</p>';
    cartQuantityContainer.innerHTML = '<p>QTD</p>';
    cartValueContainer.innerHTML = '<p>VALOR</p>';
    
    cart.forEach(item => {
        cartItemsContainer.innerHTML += `<p>${item.name}</p>`;
        cartQuantityContainer.innerHTML += `<p>${item.quantity}</p>`;
        cartValueContainer.innerHTML += `<p>R$${(item.price * item.quantity).toFixed(2)}</p>`;
    });
}

// Event listeners for add to cart buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (event) => {
        let productCard = event.target.closest('.card');
        let productName = productCard.querySelector('h3').innerText;
        let productPrice = parseFloat(productCard.querySelector('.bold').innerText.replace(',', '.'));
        addToCart(productName, productPrice);
    });
});


// Function to add item to cart
function addToCart(productName, productPrice) {
    // Get cart from localStorage or initialize a new array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the item is already in the cart
    let item = cart.find(item => item.name === productName);
    if (item) {
        // Increase quantity if item exists
        item.quantity++;
    } else {
        // Add new item to the cart
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    alert('Produto adicionado ao carrinho!');
}

// Event listeners for add to cart buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (event) => {
        let productCard = event.target.closest('.card');
        let productName = productCard.querySelector('h3').innerText;
        let productPrice = parseFloat(productCard.querySelector('.bold').innerText.replace(',', '.'));
        addToCart(productName, productPrice);
    });
});




