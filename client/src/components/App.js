import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import axios from "axios";
/*
product component be responsible for fetching the products
*/
const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async() => {
      const response = await axios.get('/api/cart');
      setCart(response.data);
    };
    getData();
  }, []);

  const handleAddProduct = async (newProduct, callback) => { // try/catch
    const returnedProduct = await axios.post("/api/products", newProduct);
    setProducts(products.concat(returnedProduct.data));
    if (callback) { // \*contingent on request //chain calls
      callback();
    }
  }
  
  const handleUpdateProduct = async (editedProduct, callback) => {
    const id = editedProduct._id;
    const returnedProduct = await axios.put(`/api/products/${id}`, editedProduct);
    setProducts(products.map(product => product._id === id ? returnedProduct.data : product));
    if (callback) {
      callback();
    }
  }
  
  const handleDeleteProduct = async (deletedProduct) => {
    const id = deletedProduct._id;
    await axios.delete(`/api/products/${id}`);
    setProducts(products.filter(product => product._id !== id));
  }

  const handleAddToCart = async (product) => {
    const productId = product._id;
    const sentObject = {
      productId
    }
    const response = await axios.post('/api/add-to-cart', sentObject);
    const {product: returnedProduct, item: returnedItem} = response.data;
    setProducts(products.map(currentProduct => currentProduct._id === returnedProduct._id ? returnedProduct: currentProduct));
    if (cart.some(item => item._id === returnedItem._id)) {
      setCart(cart.map(item => {
        return item._id === returnedItem._id ? returnedItem: item;
      }));
    } else {
      setCart(cart.concat(returnedItem));
    }


  }

  return(
    <div id="app">
      <Header cart={cart} />
      <Main 
        setCart={setCart} 
        onClickAddProduct={handleAddProduct}
        onClickUpdateProduct={handleUpdateProduct}
        onClickDeleteProduct={handleDeleteProduct}
        products={products}
        setProducts={setProducts}
        onClickAddToCart={handleAddToCart}
      />
    </div>
  )
}
//
module.exports = App;