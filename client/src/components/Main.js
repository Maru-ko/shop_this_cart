const axios = require("axios");
// const { set } = require("mongoose");

const { useState, useEffect } = require("react");
let rawData = require("../../mockData/data");
rawData = rawData.default;
const AddForm = require("./AddForm");
const Products = require("./Products");

const Main = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // setProducts(rawData);
    const getProducts = async () => {
      const initialProducts = await axios.get("/api/products");
      setProducts(initialProducts.data)
    }
    getProducts();
  }, []);
  const handleAddProduct = async (newProduct) => {
    const returnedProduct = await axios.post("/api/products", newProduct);
    setProducts(products.concat(returnedProduct.data));
  }
  return (
    <main>
      <Products products={products} />
      <AddForm onSubmit={handleAddProduct} />
    </main>
  )
}

module.exports = Main;