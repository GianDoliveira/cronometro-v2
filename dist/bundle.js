/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/style.css":
/*!**************************!*\
  !*** ./public/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://assets/./public/style.css?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("const relogio = document.querySelector('.relogio');\r\nlet hr = 00;\r\nlet min = 00;\r\nlet seg = 00;\r\nlet cron;\r\nlet clique;\r\n\r\nstart = () => {\r\n    relogio.classList.remove('pausado');\r\n    if (clique == 'start') {\r\n        return\r\n    } if (clique = 'start') {\r\n        cron = setInterval(() => {timer();}, 1000);\r\n    }\r\n};\r\n\r\npause = () =>{\r\n    relogio.classList.add('pausado');\r\n    clique = 'pause';\r\n    clearInterval(cron);\r\n};\r\n\r\nreset = () =>{ \r\n    relogio.classList.remove('pausado');\r\n    clique = 'reset';\r\n    clearInterval(cron);\r\n    hr = 00;\r\n    min = 00;\r\n    seg = 00;\r\n\r\n    document.querySelector('.relogio').innerHTML = '00:00:00'    \r\n};\r\n\r\ntimer = () =>{\r\n    seg++\r\n    \r\n    if (seg == 60) {\r\n        seg = 0;\r\n        min++;\r\n       }\r\n        if (min == 60) {\r\n        min = 0;\r\n        hr++;\r\n       }\r\n\r\n    let format = (hr < 10 ? '0' + hr : hr) + ':' + (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg);\r\n    document.querySelector('.relogio').innerHTML = format\r\n};\r\n\n\n//# sourceURL=webpack://assets/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/main.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/style.css"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;