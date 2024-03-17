import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector('#productContainer');
const productTemplate = document.querySelector('#productTemplate');


export const showProductContainer = (products) => {
    if(!products) 
    return false;

    products.forEach((curProd) => {
        const { brand, category, description, id, image, name, price, stock } =
          curProd;
        //   here i have destructured each element
    
        const productClone = document.importNode(productTemplate.content, true);
    
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        //to give unique identity to each card so that when user clicks on increment product on a card we can identify which card is clicked 
    
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productPrice").textContent = `RS. ${price}`;
        productClone.querySelector(".productActualPrice").textContent = `RS. ${
          price * 4
        }`;
    
        productClone
          .querySelector(".stockElement")
          .addEventListener("click", (event) => {
            homeQuantityToggle(event, id, stock);
          });
    
        productClone
          .querySelector(".add-to-cart-button")
          .addEventListener("click", (event) => {
            addToCart(event, id, stock);
          });
    
        productContainer.append(productClone);
      });
    };