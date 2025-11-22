const cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.querySelector('h3').innerText;
        const productPrice = product.querySelector('p').innerText;
        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const div = document.createElement('div');
        div.innerText = `${item.name} - ${item.price}`;
        cartItems.appendChild(div);
    });
}
