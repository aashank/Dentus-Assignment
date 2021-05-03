// Importing all the required css,template and components
import productResultHtml from "./template.htm";
import ProductCardComponent from "../productCard/index";
import util from "../../helper/handlebarUtility";
import "./style.css";
let productLimit = 10;
let productList = [];
const URL="https://fakestoreapi.com/products?limit=";
// Components for showing list of product
const ProductResultComponent = {
  init: function () {
    util.generateCompileHTMLNode("div", "productResult", productResultHtml({}));
    const self = this;
    // Fetching first 10 records from server
    fetch(URL.concat(productLimit))
      .then(res => res.json())
      .then(products => {
        self.hideSpinner();
        productList = products;
        // Rendering each product card component
        products.forEach(product => {
          ProductCardComponent.init(product);
        });
        ProductCardComponent.bindEventHandler();
      });
    // Binding load more btn action
    util.addHandlerHelper("loadMoreBtn", "click", this.loadMoreBtnHandler.bind(null, this));
  },
  // Method for hiding the spinner
  hideSpinner: function () {
    document.getElementById('spinner').style.display = 'none';
  },
  // Method for loading next 10 records
  loadMoreBtnHandler: function (compState, e) {
    e.stopPropagation();
    document.getElementById('spinner').style.display = 'block';
    productLimit = productLimit + 10;
    // Fetching next 10 records
    fetch(URL.concat(productLimit))
      .then(res => res.json())
      .then(products => {
        compState.hideSpinner();
        productList = products;
        // Rendering next 10 product card components
        products.forEach((product, index) => {
          if (index >= productLimit - 10 && index <= productLimit - 1) {
            ProductCardComponent.init(product);
            if (index === 19) {
              const loadMoreBtnElement = document.getElementById('loadMoreBtn');
              util.removeHandlerHelper("loadMoreBtn", "click", function () { });
              loadMoreBtnElement.className = "d-none";
              document.getElementById('inputSearchBox').value = "";
            }
          }

        });
        ProductCardComponent.unBindEventHandler();
        ProductCardComponent.bindEventHandler();
      });
  },
  // Method for refining product list based on search text
  filterProductList: function (searchText) {
    let filteredProduct = [];
    if (searchText !== "") {
      filteredProduct = productList.filter(product => {
        if (product && searchText && product.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
          return product;
        }
      });
    }
    else {
      filteredProduct = productList;
    }
    const productResultContent = document.createElement("div");
    productResultContent.innerHTML = productResultHtml({});
    if (document.getElementById('productResult')) {
      document.getElementById('productResult').replaceChildren(productResultContent);
      // Updating Product Result with filtered record
      filteredProduct.forEach(product => {
        ProductCardComponent.init(product);
      });
      ProductCardComponent.unBindEventHandler();
      ProductCardComponent.bindEventHandler();
    }
    this.hideSpinner();
    util.addHandlerHelper("loadMoreBtn", "click", this.loadMoreBtnHandler.bind(null, this));
  },

}

export default ProductResultComponent;