 const Cart = require("./Cart");
 const Header = ({ cart, onClickCheckout }) => {
  return (
    <header>
      <h1>Suandaland Shop!</h1>
      <Cart cart={cart} onClickCheckout={onClickCheckout}/>
      {/* <div className="cart">
        <h2>Your cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <a className="button checkout disabled">Checkout</a>
      </div> */}
    </header>
  );
}

module.exports = Header;