// Importing all the required css,template and components
import productSearchHtml from "./template.htm";
import ProductResultComponent from "../productResult/index";
import util from "../../helper/handlebarUtility";
import "./style.css";
// Components for Product Search section
const ProductSearchComponent = {
  init: function () {
    util.generateCompileHTMLNode("div", "productSearch", productSearchHtml({}));
    util.addHandlerHelper("inputSearchBox", "keyup", this.inputSearchHandler);
    util.addHandlerHelper("resetButton", "click", this.resetButtonHandler);
  },
  // Method for Product Search Action
  inputSearchHandler: function (e) {
    ProductResultComponent.filterProductList(e.currentTarget ? e.currentTarget.value : "");
  },
  // Method for Product reset action
  resetButtonHandler: function () {
    document.getElementById('inputSearchBox').value = "";
    ProductResultComponent.filterProductList("");
  }
}
export default ProductSearchComponent;