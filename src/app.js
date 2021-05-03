// Importing all the required css and components
import "./app.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComponent from "./components/footer/index";
import HeaderComponent from "./components/header/index";
import ProductSearchComponent from "./components/productSearch";
import ProductResultComponent from "./components/productResult";

// Load all the components on once document loaded 
document.addEventListener("DOMContentLoaded", function () {
    HeaderComponent.init();//Initialize Header Component
    ProductSearchComponent.init();//Initialize ProductSearch Component
    ProductResultComponent.init();//Initialize ProductResult Component
    FooterComponent.init();//Initialize Footer Component
});