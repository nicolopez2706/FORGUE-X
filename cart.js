// ========================================
// FORGUE X — CARRITO
// ========================================

let cart = JSON.parse(localStorage.getItem("forgeXCart")) || [];


// GUARDAR CARRITO
function saveCart() {
    localStorage.setItem("forgeXCart", JSON.stringify(cart));
}


// AGREGAR PRODUCTO
function addToCart(id, name, price, quantity = 1) {

    const existingProduct = cart.find(product => product.id === id);

    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            quantity: quantity
        });
    }

    saveCart();

    alert(`${name} fue agregado al carrito 🛒`);
}


// CANTIDAD TOTAL
function getCartQuantity() {

    return cart.reduce(
        (total, product) => total + product.quantity,
        0
    );
}


// TOTAL
function getCartTotal() {

    return cart.reduce(
        (total, product) =>
            total + product.price * product.quantity,
        0
    );
}
function updateCartCount() {

    const cartCount =
        document.getElementById("cart-count");

    if (!cartCount) return;

    cartCount.textContent = getCartQuantity();
}

updateCartCount();