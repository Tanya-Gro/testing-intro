function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

function addToCart(cart, product, count) {
  if (count === 0 || product.stock < count) throw new RangeError();

  const productInCart = cart.find((p) => p.id === product.id);
  if (productInCart) {
    if (product.stock < productInCart.quantity + count) throw new RangeError();
    return cart.map((p) =>
      p.id === product.id ? { ...p, quantity: p.quantity + count } : p,
    );
  }

  return [...cart, { ...product, quantity: count }];
}

function changeQuantity() {
  return notImplemented();
}
function removeFromCart() {
  return notImplemented();
}
function calculateCartSubtotal() {
  return notImplemented();
}
function calculateOrderTotal() {
  return notImplemented();
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;
