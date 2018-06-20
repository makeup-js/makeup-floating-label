var FloatingLabel = require('../index.js');

function nodeListToArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}

function querySelectorAllToArray(selector) {
    return nodeListToArray(document.querySelectorAll(selector));
}

var widgetEls = querySelectorAllToArray('.floating-label');

widgetEls.forEach(function(el) {
    console.log(new FloatingLabel(el));
});
