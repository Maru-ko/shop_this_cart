import Product from "./Product";
const Products = ({products}) => {
  products.sort((a, b) => {
    return b.quantity - a.quantity;
  });
  return(
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => (
        <Product key={product.id} product={product}/>
      ))}
    </div>
  );
}

module.exports = Products;