# makeup-floating-label

<p>
    <a href="https://travis-ci.org/makeup-js/makeup-floating-label"><img src="https://api.travis-ci.org/makeup-js/makeup-floating-label.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/makeup-js/makeup-floating-label?branch=master'><img src='https://coveralls.io/repos/makeup-js/makeup-floating-label/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
    <a href="https://david-dm.org/makeup-js/makeup-floating-label"><img src="https://david-dm.org/makeup-js/makeup-floating-label.svg" alt="Dependency status" /></a>
    <a href="https://david-dm.org/makeup-js/makeup-floating-label#info=devDependencies"><img src="https://david-dm.org/makeup-js/makeup-floating-label/dev-status.svg" alt="devDependency status" /></a>
</p>

Module for creating an accessible, progressively enhanced floating label.

## Experimental

This module is still in an experimental state, until it reaches v1.0.0 you must consider all minor releases as breaking changes. Patch releases may introduce new features, but will be backwards compatible.

## Install

```js
// via npm
npm install makeup-floating-label

// via yarn
yarn add makeup-floating-label
```

## Example

```js
// require the module
const FloatingLabel = require('makeup-floating-label');

// get NodeList
const widgetEls = document.querySelectorAll('.floating-label');

// assign next id to each element
widgetEls.forEach(function(el) {
    var widget = new FloatingLabel(el);
});
```

Markup:

```html
<div class="floating-label">
    <label class="floating-label__label" for="input-1">Input 1</label>
    <input class="floating-label__textbox" id="input-1" name="input-1" />
</div>
```

## Methods

* `refresh()`: call this after form autofill or reset to refresh the label state

## Custom Events        

* None

## Dependencies

* None

## Development

* `npm start`
* `npm test`
* `npm run lint`
* `npm run fix`
* `npm run build`
* `npm run clean`

The following hooks exist, and do not need to be invoked manually:

* `npm prepublishOnly` cleans, lints, tests and builds on every `npm publish` command
* `pre-commit` cleans, lints, tests and builds on every `git commit` command

## Test Reports

Each test run will generate the following reports:

* `/reports/coverage` contains Istanbul code coverage report
* `/reports/html` contains HTML test report

## CI Build

https://travis-ci.org/makeup-js/makeup-floating-label

## Code Coverage

https://coveralls.io/github/makeup-js/makeup-floating-label
