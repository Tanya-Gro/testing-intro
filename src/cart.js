function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

function addToCart(cart, product, count) {
  if (count === 0 || product.stock < count) throw new RangeError();

  const productInCart = cart.find((p) => p.id === product.id);
  if (productInCart) {
    return changeQuantity(
      cart,
      productInCart.id,
      productInCart.quantity + count,
    );
  }

  return [...cart, { ...product, quantity: count }];
}

function changeQuantity(cart, id, qua) {
  const product = cart.find((p) => p.id === id);

  if (!product) return cart;

  if (qua === 0 || product.stock < qua) throw new RangeError();

  return cart.map((p) => (p.id === id ? { ...p, quantity: qua } : p));
}

function removeFromCart(cart, id) {
  return cart.filter((p) => p.id !== id);
}

function calculateCartSubtotal(cart) {
  return cart.reduce((acc, p) => (acc += p.quantity * p.price), 0);
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
