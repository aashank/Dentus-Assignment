const generateCompileHTMLNode = function (eleName, eleId, unCompiledHtml) {
    const htmlContent = document.createElement(eleName);
    htmlContent.innerHTML = unCompiledHtml;
    document.getElementById(eleId).appendChild(htmlContent);
};

const addHandlerHelper = function (id, eventName, handler) {
    const ele = document.getElementById(id);
    ele.addEventListener(eventName, handler);
}
const removeHandlerHelper = function (id, eventName, handler) {
    const ele = document.getElementById(id);
    ele.removeEventListener(eventName, handler);
}

export default { generateCompileHTMLNode, addHandlerHelper, removeHandlerHelper };
