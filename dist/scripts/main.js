/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
	"all-files": "<svg viewBox=\"0 0 14 14\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M1.39.998C1.45.447 1.944 0 2.495 0h9.008c.55 0 1.046.446 1.107.998L13.5 9V13.001a.999.999 0 0 1-.999.999H1.5a.996.996 0 0 1-.999-.999V9L1.39.998z\" fill=\"#777\"/><path d=\"M1.5 11h2S4 12.5 7 12.5s3.5-1.5 3.5-1.5h2v2h-11v-2z\" fill=\"#828282\"/><path d=\"M2.945 1.497A.577.577 0 0 1 3.5 1h7c.276 0 .525.222.555.497L12 10h-2s0 1.5-3 1.5S4 10 4 10H2l.945-8.503z\" fill=\"#E7E7E7\"/><path fill=\"#8D8D8D\" d=\"M3 8h8v1H3zM3.5 6h7v1h-7zM3.5 4h7v1h-7zM3.5 2h7v1h-7z\"/></g></svg>",
	"camera": "<svg viewBox=\"0 0 32 32\"><path d=\"M29.4 7.6h-5.2l-3.1-3.1c-.5-.5-1.1-.8-1.8-.8h-6.5c-.8 0-1.4.3-1.9.8l-3 3.1H2.6C1.2 7.6 0 8.7 0 10.2v15.5c0 1.4 1.2 2.6 2.6 2.6h26.8c1.4 0 2.6-1.2 2.6-2.6V10.2c0-1.5-1.2-2.6-2.6-2.6zM16 24.4c-3.9 0-7.1-3.2-7.1-7.1 0-3.9 3.2-7.1 7.1-7.1 3.9 0 7.1 3.2 7.1 7.1 0 3.9-3.2 7.1-7.1 7.1zm12.9-12.7c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1z\"/><path d=\"M16 11.9c-3 0-5.4 2.4-5.4 5.4 0 3 2.4 5.4 5.4 5.4 3 0 5.4-2.4 5.4-5.4S19 11.9 16 11.9z\"/></svg>",
	"close": "<svg viewBox=\"0 0 50 50\"><path d=\"M9.016 40.837a1.001 1.001 0 0 0 1.415-.001l14.292-14.309 14.292 14.309a1 1 0 1 0 1.416-1.413L26.153 25.129 40.43 10.836a1 1 0 1 0-1.415-1.413L24.722 23.732 10.43 9.423a1 1 0 1 0-1.415 1.413l14.276 14.293L9.015 39.423a1 1 0 0 0 .001 1.414z\"/></svg>",
	"mac": "<svg viewBox=\"18 364 16 15\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(18 364)\"><path fill=\"#A8A8A8\" d=\"M5 14.5h6v.5H5z\"/><path fill=\"#D6D6D6\" d=\"M5.5 14h5v.5h-5z\"/><path fill=\"#BDBDBD\" d=\"M6 13h4v1H6z\"/><path fill=\"#9C9C9C\" d=\"M0 10.5h16V13H0z\"/><path fill=\"#E7E7E7\" d=\"M1 10.5h14V12H1z\"/><path fill=\"#D2D2D2\" d=\"M7.5 11h1v.5h-1z\"/><rect fill=\"#777\" width=\"16\" height=\"10.5\" rx=\"2\"/><path fill=\"#DCDCDC\" d=\"M1.5 1.5h13V9h-13z\"/></g></svg>",
	"pc": "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><rect id=\"a\" x=\"1\" y=\".5\" width=\"14\" height=\"12\" rx=\"1.867\"/><mask id=\"c\" x=\"0\" y=\"0\" width=\"14\" height=\"12\" fill=\"#fff\"><use xlink:href=\"#a\"/></mask><rect id=\"b\" x=\"2.5\" y=\"2\" width=\"11\" height=\"8.5\" rx=\"1\"/><mask id=\"d\" x=\"0\" y=\"0\" width=\"11\" height=\"8.5\" fill=\"#fff\"><use xlink:href=\"#b\"/></mask></defs><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M4.667 13s.952.556 1.428.556S3 15.5 3 15.5s2.62-.278 5-.278 5 .278 5 .278-3.57-1.944-3.095-1.944c.476 0 1.428-.556 1.428-.556H4.667z\" fill=\"#828282\"/><rect fill=\"#777\" x=\".5\" width=\"15\" height=\"13\" rx=\"2\"/><use stroke=\"#B6B6B6\" mask=\"url(#c)\" fill=\"#E7E7E7\" xlink:href=\"#a\"/><path fill=\"#7C7C7C\" d=\"M11.5 11h1v1h-1zm-6 0h1v1h-1zm-2 0h1v1h-1z\"/><use stroke=\"#777\" mask=\"url(#d)\" fill=\"#828282\" xlink:href=\"#b\"/></g></svg>"
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.onfocus = function(){ document.body.className = 'focused'; };
window.onblur = function(){ document.body.className = 'blurred'; };

var icons = __webpack_require__(0);

/**
 * Custom element: n-icon
 */

class NIcon extends HTMLElement {

  constructor() {
    super(); 
    this.icon = this.innerText;
    this.size = this.getAttribute('size');
  }

  connectedCallback() {
  	if (icons[this.icon]) this.innerHTML = `${icons[this.icon]}`;
  }
};

window.customElements.define('n-icon', NIcon);






/***/ })
/******/ ]);