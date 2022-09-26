/**
 * @jest-environment jsdom
 */

 import "@testing-library/jest-dom";
 import { render, screen } from "@testing-library/react";
 import userEvent from "@testing-library/user-event";
 import Cart from './Cart'



const cart = [
    {
    "_id": "6331ec04ef5c14085de338f0",
    "title": "Burgers",
    "price": 5.99,
    "quantity": 2,
    "productId": "632dcb4181db9f15c1fed083",
    "createdAt": "2022-09-26T18:14:28.494Z",
    "updatedAt": "2022-09-26T18:14:33.577Z",
    "__v": 0
    },
    {
    "_id": "6331ec05ef5c14085de338f1",
    "title": "hat",
    "price": 5.99,
    "quantity": 2,
    "productId": "632ca6ea1d8217f26186aaa7",
    "createdAt": "2022-09-26T18:14:29.391Z",
    "updatedAt": "2022-09-26T18:14:32.216Z",
    "__v": 0
    },
    {
    "_id": "6331ec06ef5c14085de338f2",
    "title": "Coffee Pod",
    "price": 27.99,
    "quantity": 2,
    "productId": "632b4ef963b4447d2718e678",
    "createdAt": "2022-09-26T18:14:30.480Z",
    "updatedAt": "2022-09-26T18:14:31.505Z",
    "__v": 0
    }
  ]

 test("contains checkout button", () => {
  render( < Cart cart={ cart }/>);
  const button = screen.getByRole("link", { name: "Checkout" });
  expect(button).toBeInTheDocument();
 })

test("")






 // test("contains add button", () => {
//   render(<AddForm/>);
//   const button = screen.getByRole("link", { name: "Add A Product"});
//   // const button = screen.getByRole("heading", { name: "Add Product"});
//   expect(button).toBeInTheDocument();
// });