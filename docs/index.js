document.addEventListener('DOMContentLoaded', function() {
    var FloatingLabel = require('../index.js');

    function nodeListToArray(nodeList) {
        return Array.prototype.slice.call(nodeList);
    }

    function querySelectorAllToArray(selector) {
        return nodeListToArray(document.querySelectorAll(selector));
    }

    var widgetEls = querySelectorAllToArray('.floating-label');
    var autofillBtn = document.getElementById('autofill');
    var refreshBtn = document.getElementById('refresh');
    var widgets = [];

    widgetEls.forEach(function(el) {
        widgets.push(new FloatingLabel(el));
    });

    autofillBtn.addEventListener('click', function() {
        widgetEls.forEach(function(el) {
            el.querySelector('input').value = 'Autofill Text';
        });
    });

    refreshBtn.addEventListener('click', function() {
        widgets.forEach(function(el, index) {
            widgets[index].refresh();
        });
    });
});
