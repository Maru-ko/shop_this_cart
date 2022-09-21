const { useState, useEffect } = require('react');
const EditForm = require('./EditForm');


const Product = ({product}) => {
  const [ outOfStock, setOutOfStock ] = useState(false);
  const [ showEditForm, setShowEditForm ] = useState(false);
  
  useEffect(() => {
    if (product.quantity === 0) {
      setOutOfStock(true);
    } else {
      setOutOfStock(false);
    }
  }, []);

  const viewEditForm = (e) => {
    e.preventDefault();
    setShowEditForm(true)
  }

  const hideEditForm = (e) => {
    e.preventDefault();
    setShowEditForm(false);
  }

  return(
    <div className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className="quantity">{product.quantity} left in stock</p>
        <div className="actions product-actions">
          <a className={ `button add-to-cart ${ outOfStock ? "disabled": "" }` }>Add to Cart</a>
          <a className="button edit" onClick={viewEditForm}>Edit</a>
          {showEditForm ? <EditForm onClickCancel={ hideEditForm } product={ product }/> : <></>}
        </div>
        <a className="delete-button"><span>X</span></a>
      </div>

      
    </div>
  );
}

module.exports = Product;