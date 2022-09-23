import Product from "./Product";
import useAsync from "../hooks/useAsync";


const Products = ({products, onClickUpdate, onClickDelete, setCart, onClickAddToCart }) => {
  const {data: serverProducts, isError: isErrorProducts, isLoading: isLoadingProducts} = useAsync("GET", "/api/products");
  if (isLoadingProducts) {
    return <h1>Products are loading, chill out</h1>
  } else if (isErrorProducts) {
    return <h1>The server will not respond, check your server</h1>
  } else if (serverProducts === "") {
    return <h1>server call hasn't started</h1> 
  }

  serverProducts.sort((a, b) => {
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