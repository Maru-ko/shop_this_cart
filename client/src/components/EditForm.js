const { useState } = require("react");

const EditForm = ({ onClickCancel, product, onClickUpdate }) => {
  const [ title, setTitle ] = useState(product.title);
  const [ price, setPrice ] = useState(product.price);
  const [ quantity, setQuantity ] = useState(product.quantity)

  const reset = () => {
    setTitle("");
    setPrice("");
    setQuantity("");
    onClickCancel();
  }

  const handleUpdateButton = (event) => {
    event.preventDefault();
    const priceFloat = parseFloat(price).toFixed(2);
    const quantityInt = parseInt(quantity);
    const editedProduct = {
      ...product,
      title : title,
      price : priceFloat,
      quantity : quantityInt
    }
    onClickUpdate(editedProduct, reset);
  }
  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" value={ title } onChange={ (e) => setTitle(e.target.value) } />
        </div>

        <div className="input-group">
          <label  htmlFor="product-price">Price</label>
          <input type="text" id="product-price" value={ price } onChange={ (e) => setPrice(e.target.value) }/>
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={ quantity } onChange={ (e) => setQuantity(e.target.value) }/>
        </div>

        <div className="actions form-actions">
          <a className="button" onClick={handleUpdateButton}>Update</a>
          <a className="button" onClick={ onClickCancel }>Cancel</a>
        </div>
      </form>
    </div>
  )
}
module.exports = EditForm;