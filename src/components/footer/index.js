// Importing all the required css,template and components
import footerHtml from "./template.htm";
import util from "../../helper/handlebarUtility";
// Component for footer Section
const FooterComponent = {
  init: function () {
    const footerName = "@Copyright 2021 - Akshay Shankariya <akshayshankariya@gmail.com>";
    util.generateCompileHTMLNode("div", "footer", footerHtml({ footerName: footerName }));
  }
}
export default FooterComponent;