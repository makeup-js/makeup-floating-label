'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultOptions = {
    labelElementAnimateModifier: 'floating-label__label--animate',
    labelElementInlineModifier: 'floating-label__label--inline'
};

function hasValue(input) {
    return input.value.length > 0;
}

function _onBlur() {
    if (!hasValue(this.textboxEl)) {
        this.labelEl.classList.add(this.options.labelElementInlineModifier);
    }
}

function _onFocus() {
    this.labelEl.classList.add(this.options.labelElementAnimateModifier);
    this.labelEl.classList.remove(this.options.labelElementInlineModifier);
}

module.exports = function () {
    function _class(el, userOptions) {
        _classCallCheck(this, _class);

        this.options = _extends({}, defaultOptions, userOptions);

        this.rootEl = el;
        this.labelEl = this.rootEl.querySelector('label');
        this.textboxEl = this.rootEl.querySelector('input');

        this._onBlurListener = _onBlur.bind(this);
        this._onFocusListener = _onFocus.bind(this);

        this.textboxEl.addEventListener('blur', this._onBlurListener);
        this.textboxEl.addEventListener('focus', this._onFocusListener);

        if (!hasValue(this.textboxEl)) {
            this.labelEl.classList.add(this.options.labelElementInlineModifier);
        }
    }

    return _class;
}();
