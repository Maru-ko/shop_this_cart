// function viewForm(event) {
//   event.preventDefault();
//   const element = document.querySelector(".add-form h3");
//   const element2 = document.querySelector(".add-form form ");
//   element.style.display = "block";
//   element2.style.display = "block";
// }

// function hideForm(event) {
//   event.preventDefault();
//   const element = document.querySelector(".add-form h3");
//   const element2 = document.querySelector(".add-form form ");
//   element.style.display = "none";
//   element2.style.display = "none";
// }
import { useState } from "react";

const AddForm = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  }
  return (
    <div className = { showForm ? "add-form visible" : "add-form" }>
      <p>
        <a className="button add-product-button" onClick={toggleForm}>Add A Product</a>
        </p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value=""/>
        </div>

        <div className="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value=""/>
        </div>

        <div className="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value=""/>
        </div>

        <div className="actions form-actions">
          <a className="button">Add</a>
          <a className="button" onClick={toggleForm}>Cancel</a>
        </div>
      </form>
    </div>
  );
}

module.exports = AddForm;