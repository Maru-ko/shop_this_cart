
      // return (<a className="button add-to-cart">Add to Cart</a>)
      // return (<a className="button add-to-cart disabled">Add to Cart</a>)

const { useState, useEffect } = require('react');


const Product = ({product}) => {
  const [ outOfStock, setOutOfStock ] = useState(false);
  useEffect(() => {
    if (product.quantity === 0) {

      setOutOfStock(true);
    } else {
      setOutOfStock(false);
    }
  }, []);

  function toggle() {

  }

  return(
    <div className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className="quantity">{product.quantity} left in stock</p>
        <div className="actions product-actions">
          <a className={ `button add-to-cart ${ outOfStock ? "disabled": "" }` }>Add to Cart</a>
          <a className="button edit">Edit</a>
        </div>
        <a className="delete-button"><span>X</span></a>
      </div>
    </div>
  );
}

module.exports = Product;