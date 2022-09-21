const axios = require("axios");

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

  const handleAddProduct = async (newProduct, callback) => { // try/catch
    const returnedProduct = await axios.post("/api/products", newProduct);
    setProducts(products.concat(returnedProduct.data));
    if (callback) { // \*contingent on request //chain calls
      callback();
    }
  }


  // const handleEditProduct
  
  
  return (
    <main>
      <Products products={products} />
      <AddForm onSubmit={handleAddProduct} />
    </main>
  )
}

module.exports = Main;