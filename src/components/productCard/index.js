// Importing all the required css,template and components
import productCardHtml from "./template.htm";
import CartComponent from "../cart/index";
import util from "../../helper/handlebarUtility";
import "./style.css";
// Component for each product card
const ProductCardComponent = {
    isAddedToCart: false,
    product: {},
    init: function (product) {
        this.product = product;
        this.product.addBtnId = "addToCartBtn-".concat(product.id);
        this.product.removeBtnId = "removeCartBtn-".concat(product.id);
        this.product.productCardId="productCard-".concat(product.id);
        const productCardContent = document.createElement("div");
        productCardContent.className = "col-lg-3 col-md-4 col-mb-12 card-group p-lg-2 pb-4 shadow-lg p-3 mb-4 bg-white rounded ";
        productCardContent.innerHTML = productCardHtml(this.product);
        document.getElementById('productList').appendChild(productCardContent);
    },
    // Method for adding product into the cart.Showing and hiding addtoCart label.
    addToCartBtnHandler: function (product, e) {
        e.stopImmediatePropagation();
        const addToCartBtnElement = document.getElementById(e.currentTarget.getAttribute('id'));
        addToCartBtnElement.style.display = 'none';
        document.getElementById('productCard-'.concat(e.currentTarget.getAttribute('name'))).style.border='2px solid brown';
        const removeCartBtnElement = document.getElementById('removeCartBtn-'.concat(e.currentTarget.getAttribute('name')));
        removeCartBtnElement.style.display = 'block';
        CartComponent.updateCart(product, true);
    },
    // Method for removing into the cart.Showing and Hiding remove label
    removeCartBtnHandler: function (product, e) {
        e.stopImmediatePropagation();
        const addToCartBtnElement = document.getElementById(e.currentTarget.getAttribute('id'));
        addToCartBtnElement.style.display = 'none';
        document.getElementById('productCard-'.concat(e.currentTarget.getAttribute('name'))).style.border='1px solid rgba(0,0,0,.125)'; 
        const removeCartBtnElement = document.getElementById('addToCartBtn-'.concat(e.currentTarget.getAttribute('name')));
        removeCartBtnElement.style.display = 'block';
        CartComponent.updateCart(product, false);
    },
    // Method for binding click events to all add to cart and remove buttons
    bindEventHandler: function () {
        const addButtons = document.querySelectorAll('.add-to-cart-cls');
        const self = this;
        addButtons.forEach(function (currentBtn) {
            currentBtn.addEventListener('click', self.addToCartBtnHandler.bind(null, self.product), false);
        });
        const removeButtons = document.querySelectorAll('.remove-to-cart-cls');
        removeButtons.forEach(function (currentBtn) {
            currentBtn.addEventListener('click', self.removeCartBtnHandler.bind(null, self.product), false);
        });
    },
    // Method for unbinding click events.
    unBindEventHandler: function () {
        const addButtons = document.querySelectorAll('.add-to-cart-cls');
        addButtons.forEach(function (currentBtn) {
            currentBtn.removeEventListener('click', function () { }, false);
        });
        const removeButtons = document.querySelectorAll('.remove-to-cart-cls');
        removeButtons.forEach(function (currentBtn) {
            currentBtn.removeEventListener('click', function () { }, false);
        });
    }

}
export default ProductCardComponent;