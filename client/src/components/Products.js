import Product from "./Product";
const Products = ({products, onClickUpdate, onClickDelete, setCart, onClickAddToCart }) => {
  
  products.sort((a, b) => {
    return b.quantity - a.quantity;
  });
  return(
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => (
        <Product
          key={product._id}
          product={product}
          onClickUpdate={onClickUpdate}
          onClickDelete={onClickDelete}
          setCart={setCart}
          onClickAddToCart={onClickAddToCart}
        />
      ))}
    </div>
  );
}

module.exports = Products;