const axios = require("axios");

const { useState, useEffect } = require("react");
let rawData = require("../../mockData/data");
rawData = rawData.default;
const AddForm = require("./AddForm");
const Products = require("./Products");

const Main = ({
    onClickUpdateProduct,
    onClickDeleteProduct,
    onClickAddProduct,
    products,
    setProducts,
    setCart,
    onClickAddToCart}) => {

  useEffect(() => {
    const getProducts = async () => {
      const initialProducts = await axios.get("/api/products");
      setProducts(initialProducts.data)
    }
    getProducts();
  }, []);
  
  return (
    <main>
      <Products 
        products={products}
        onClickUpdate={onClickUpdateProduct}
        onClickDelete={onClickDeleteProduct}
        setCart={setCart}
        onClickAddToCart={onClickAddToCart}
      />
      <AddForm onSubmit={onClickAddProduct} />
    </main>
  )
}

module.exports = Main;