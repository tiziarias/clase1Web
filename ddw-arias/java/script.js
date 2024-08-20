document.addEventListener('DOMContentLoaded', () => {
    const cartTotalElement = document.getElementById('cart-total');
    let cartTotal = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const price = parseFloat(button.getAttribute('data-price'));
            cartTotal += price;
            cartTotalElement.textContent = cartTotal.toFixed(2);
        });
    });
});