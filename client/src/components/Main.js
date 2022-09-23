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
    setCart,
    onClickAddToCart}) => {
  
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