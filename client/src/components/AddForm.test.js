/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddForm from './AddForm'

test("contains add button", () => {
  render(<AddForm/>);
  const button = screen.getByRole("link", { name: "Add"});
  // const button = screen.getByRole("heading", { name: "Add Product"});
  expect(button).toBeInTheDocument();
});

test("changes the input state when product name changes", async () => {
  const user = userEvent.setup();
  const onSubmit = jest.fn();
  render( < AddForm onSubmit={ onSubmit} />);
  const inputName = screen.getByRole("textbox", { name: "Product Name" });

  await user.type(inputName, "hats");
  expect(inputName).toHaveValue("hats");
})

test("changes the input state when product price changes", async () => {
  const user = userEvent.setup();
  const onSubmit = jest.fn();
  render( < AddForm onSubmit={ onSubmit} />);
  const inputName = screen.getByRole("textbox", { name: "Price" });

  await user.type(inputName, "34");
  expect(inputName).toHaveValue("34");
})

test("changes the input state when quantity changes", async () => {
  const user = userEvent.setup();
  const onSubmit = jest.fn();
  render( < AddForm onSubmit={ onSubmit} />);
  const inputName = screen.getByRole("textbox", { name: "Quantity" });

  await user.type(inputName, "500");
  expect(inputName).toHaveValue("500");
})

test("onSubmit is called when checkout is clicked", async () => {
  const user = userEvent.setup()
  const onSubmit = jest.fn();
  render( < AddForm onSubmit={ onSubmit }/>);
  const addProductButton = screen.getByRole("link", { name: "Add" });
  
  await user.click(addProductButton);

  expect(onSubmit.mock.calls.length).toBe(1);
})

test("New product is passed to the `onSubmit` function", async () => {
  const title = 'Cups'
  const price = '5.00'
  const quantity = '6'
  const user = userEvent.setup();
  const createProduct = {
    title, price: '5.00', quantity: 6
  }

  const onSubmit = jest.fn();
  render( < AddForm onSubmit={ onSubmit }/>);
  const addProductButton = screen.getByRole("link", { name: "Add" });
  
  const inputName = screen.getByRole("textbox", { name: "Product Name" });

  const inputPrice = screen.getByRole("textbox", { name: "Price" });
  const inputQuantity = screen.getByRole("textbox", { name: "Quantity" });

  await user.type(inputName, title);
  await user.type(inputPrice, price);
  await user.type(inputQuantity, quantity);

  await user.click(addProductButton);

  expect(onSubmit.mock.calls[0][0]).toEqual(createProduct);
})