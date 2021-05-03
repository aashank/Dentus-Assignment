// Importing all the required css,template and components
import cartHtml from "./template.htm";
import util from "../../helper/handlebarUtility";
import "./style.css";
let cartList = [];
// Cart component responsible for cart action
const CartComponent = {
  init: function () {
    util.generateCompileHTMLNode("span", "cartIcon", cartHtml({}));
  },
  // Method to update cart value
  updateCart: function (product, isAddedToCart) {
    isAddedToCart ? cartList.push(product) : cartList.pop();
    document.getElementById('cartValue').innerText = cartList.length === 0 ? "" : cartList.length;
  }
}
export default CartComponent;