import { useState } from "react";
// title price quantity
const AddForm = ({ onSubmit }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const toggleForm = () => {
    setShowForm(!showForm);
  }

  const resetInputs = () => {
    setTitle("");
    setPrice("");
    setQuantity("");
    toggleForm();
  }

  const handleAddButton = (e) => {
    e.preventDefault();
    const priceInt = parseFloat(price).toFixed(2);
    const quantityInt = parseInt(quantity);
    const newProduct = {
      title, price:priceInt, quantity:quantityInt,
    }
    onSubmit(newProduct, resetInputs);

  }


  return (
    <div className = { showForm ? "add-form visible" : "add-form" }>
      <p>
        <a className="button add-product-button" onClick={toggleForm}>Add A Product</a>
        </p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" value={ title } onChange={(event) => {
            setTitle(event.target.value);
          } }/>
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text" id="product-price" value={ price } onChange={(event) => {
            setPrice(event.target.value);
          }}/>
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={ quantity } onChange={(event) => {
            setQuantity(event.target.value);
          }}/>
        </div>

        <div className="actions form-actions">
          <a className="button" onClick={ handleAddButton }>Add</a>
          <a className="button" onClick={toggleForm}>Cancel</a>
        </div>
      </form>
    </div>
  );
}

module.exports = AddForm;