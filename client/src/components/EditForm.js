const { useState } = require("react");

const EditForm = ({ onClickCancel, product }) => {
  const [ title, setTitle ] = useState(product.title);
  const [ price, setPrice ] = useState(product.price);
  const [ quantity, setQuantity ] = useState(product.quantity)

  return (
    <div class="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div class="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value={ title } onChange={ (e) => setTitle(e.target.value) } />
        </div>

        <div class="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value={ price } onChange={ (e) => setPrice(e.target.value) }/>
        </div>

        <div class="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={ quantity } onChange={ (e) => setQuantity(e.target.value) }/>
        </div>

        <div class="actions form-actions">
          <a class="button">Update</a>
          <a class="button" onClick={ onClickCancel }>Cancel</a>
        </div>
      </form>
    </div>
  )
}
module.exports = EditForm;