const { useState, useEffect } = require("react");
let rawData = require("../../mockData/data");
rawData = rawData.default;
const AddForm = require("./AddForm");
const Products = require("./Products");

const Main = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(rawData);
  }, []);
  return (
    <main>
      <Products products={products} />
      <AddForm />
    </main>
  )
}

module.exports = Main;