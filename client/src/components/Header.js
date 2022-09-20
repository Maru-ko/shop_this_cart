 const Header = () => {
  return (
    <header>
      <h1>The Shop!</h1>
      <div class="cart">
        <h2>Your cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <a class="button checkout disabled">Checkout</a>
      </div>
    </header>
  );
}

module.exports = Header;