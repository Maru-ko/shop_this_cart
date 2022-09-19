import React from "react";
import ReactDOM from "react-dom/client";
import rawData from "../mockData/data";

const App = () => {
  return React.createElement("main", null, [
    React.createElement('div', { className: 'product-listing'}, [
      React.createElement('h2', null, 'products'),
      rawData.map(product => {
        return cartItem({ key: product.id, title: product.title, price: product.price, quantity: product.quantity })
      }) 
    ])])
}

const cartItem = ({ title, price, quantity }) => {
  return React.createElement('div', { className: 'product'}, [
    React.createElement('div', { className: 'product-details'}, [
      React.createElement('h3', null, title),
      React.createElement('p', { className: 'price'}, `$${price}`),
      React.createElement('p', {className: 'quantity'}, `${quantity} left in stock`), 
      React.createElement('div', { className:"actions product-actions"}, [
        React.createElement('a', { className: "button add-to-cart" }, 'Add to Cart'),
        React.createElement('a', { className: "button edit"}, 'Edit')
      ]),
      React.createElement('a', { className: 'delete-button'}, [
        React.createElement('span', null, 'X')
      ])
    ])
  ])
}



const root = document.getElementById("root");
ReactDOM.createRoot(root).render(App());
