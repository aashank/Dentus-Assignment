// Importing all the required css,template and components
import headerHtml from "./template.htm";
import "./style.css";
import util from "../../helper/handlebarUtility";
import CartComponent from "../cart/index";
// Component for header section
const HeaderComponent = {
  init: function () {
    const _appName = "Bookstore";
    util.generateCompileHTMLNode("div", "header", headerHtml({ appName: _appName }));
    CartComponent.init();
  }
}
export default HeaderComponent;