import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS = () => {
  let cartProducts = localStorage.getItem("cartProductLS");
  if (!cartProducts) {
    return [];
  }
  cartProducts = JSON.parse(cartProducts);   //parse the data from localStorage to array because we have data in form of string and we need to convert it into array therefore we use JSON.parse

  //update the cart button value
  updateCartValue(cartProducts);

  return cartProducts;
};