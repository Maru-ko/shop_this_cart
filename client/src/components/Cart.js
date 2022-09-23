const Cart = ({ cart, onClickCheckout }) => {
  const total = cart.reduce((accum, item) => {
    return accum + (item.price * item.quantity);
  }, 0).toFixed(2);

  const handleCheckout = async(e) => {
    e.preventDefault();
    onClickCheckout();
  }
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <table className="cart-items">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => {
            return (
              <tr key={`${item._id}`}>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>{`$${item.price}`}</td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="total">Total: ${total}</td>
          </tr>
        </tfoot>
      </table>
      <a className="button checkout" onClick={handleCheckout}>Checkout</a>
    </div>
  )
}

module.exports = Cart;