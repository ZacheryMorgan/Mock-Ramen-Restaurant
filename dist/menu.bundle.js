/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/all-menu.js":
/*!*************************!*\
  !*** ./src/all-menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printAllMenu)
/* harmony export */ });
function printAllMenu() {
    const test = document.createElement('div');
    test.textContent = 'Test'

    return test
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMenu)
/* harmony export */ });
/* harmony import */ var _ramen_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ramen-menu.js */ "./src/ramen-menu.js");
/* harmony import */ var _all_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-menu.js */ "./src/all-menu.js");
/* harmony import */ var _sushi_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sushi-menu.js */ "./src/sushi-menu.js");




function printMenu() {

    function reset(a) {
        sushiAll.style.color = 'white'
        ramenAll.style.color = 'white'
        //drinksAll.style.color = 'white'
        a.style.color = 'orange';
    }

    const wrapper = document.createElement('div');

    const nav = document.createElement('div');
    nav.classList.add('main-nav');

    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');

    const menuAll = document.createElement('li');
    menuAll.textContent = 'All';
    menuAll.addEventListener('click', (e) => {
        while (wrapper.firstChild) {
            wrapper.removeChild(wrapper.firstChild);
        }
        wrapper.append(nav, (0,_all_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])())
    })

    const ramenAll = document.createElement('li');
    ramenAll.textContent = 'Ramen';
    ramenAll.addEventListener('click', (e) => {
        while (wrapper.firstChild) {
            wrapper.removeChild(wrapper.firstChild);
        }
        wrapper.append(nav, (0,_ramen_menu_js__WEBPACK_IMPORTED_MODULE_0__["default"])())
        reset(ramenAll);
    })

    const sushiAll = document.createElement('li');
    sushiAll.textContent = 'Sushi';
    sushiAll.classList.add('sushi-menu')
    sushiAll.addEventListener('click', (e) => {
        while (wrapper.firstChild) {
            wrapper.removeChild(wrapper.firstChild);
        }
        wrapper.append(nav, (0,_sushi_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])())
        reset(sushiAll);
    })

    const drinksAll = document.createElement('li');
    drinksAll.textContent = 'Drinks';

    const hr = document.createElement('hr');

    menuList.append(menuAll, ramenAll, sushiAll, drinksAll);
    nav.append(menuList, hr);
    wrapper.append(nav, (0,_all_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])())

    return wrapper
}

/***/ }),

/***/ "./src/ramen-menu.js":
/*!***************************!*\
  !*** ./src/ramen-menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printRamenMenu)
/* harmony export */ });
/* harmony import */ var _img_ramen1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/ramen1.png */ "./src/img/ramen1.png");
/* harmony import */ var _img_ramen2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/ramen2.png */ "./src/img/ramen2.png");



function printRamenMenu() {
    const ramenMenuWrapper = document.createElement('div');
    ramenMenuWrapper.classList.add('ramen-wrapper');

    const ramen1 = document.createElement('div');
    ramen1.classList.add('ramen-item')
    const ramen2 = document.createElement('div');
    ramen2.classList.add('ramen-item')
    ramen2.setAttribute('id', 'ramen-item2')
    const ramen3 = document.createElement('div');
    ramen3.classList.add('ramen-item')
    const ramen4 = document.createElement('div');
    ramen4.classList.add('ramen-item')

    const hr = document.createElement('hr');

    const ramen1Img = new Image();
    ramen1Img.classList.add('ramen-img')
    ramen1Img.src = _img_ramen1_png__WEBPACK_IMPORTED_MODULE_0__;

    const ramen2Img = new Image();
    ramen1Img.classList.add('ramen-img')
    ramen2Img.src = _img_ramen2_png__WEBPACK_IMPORTED_MODULE_1__;

    const ramen1Label = document.createElement('div');
    ramen1Label.classList.add('ramen-label')
    const ramen2Label = document.createElement('div');
    ramen2Label.classList.add('ramen-label')

    const ramen1Name = document.createElement('span');
    const ramen1Description = document.createElement('span');
    ramen1Name.classList.add('ramen-name')

    const ramen2Name = document.createElement('span');
    const ramen2Description = document.createElement('p');
    ramen2Name.classList.add('ramen-name')
    ramen2Description.setAttribute('id', 'ramen-description2')

    ramen1Name.textContent = 'Shoyu';
    ramen2Name.textContent = 'Miso';

    ramen1Description.textContent = 'Shoyu is the Japanese word for soy sauce, and this lighter-style ramen\­­—which can appear clear-brown or darker and cloudy—is flavored with exactly that.';
    ramen2Description.textContent = 'As its name suggests, miso ramen is flavored with the fermented soy bean paste of the same name, which can be made from soybeans, rice, or miso, and colored white or red.';

    ramen1Label.append(ramen1Name, ramen1Description);
    ramen2Label.append(ramen2Name, ramen2Description);

    ramen1.append(ramen1Img, ramen1Label);
    ramen2.append(ramen2Label, ramen2Img);

    ramenMenuWrapper.append(ramen1, ramen2, ramen1.cloneNode(true), ramen2.cloneNode(true), ramen1.cloneNode(true), ramen2.cloneNode(true))

    return ramenMenuWrapper;

}

/***/ }),

/***/ "./src/sushi-menu.js":
/*!***************************!*\
  !*** ./src/sushi-menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printSushiMenu)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");


function printSushiMenu() {
    const sushiMenuWrapper = document.createElement('div');
    sushiMenuWrapper.classList.add('sushi-wrapper');

    const makimonoName = document.createElement('span')
    makimonoName.textContent = 'Makimono'
    makimonoName.classList.add('makimono-ul-name')

    const makimono = document.createElement('ul');


    makimono.classList.add('makimono-li');


    const makimonoLi1 = document.createElement('li');
    makimonoLi1.textContent = 'Avocado'

    const makimonoLi2 = document.createElement('li');
    makimonoLi2.textContent = 'Salmon'

    const makimonoLi3 = document.createElement('li');
    makimonoLi3.textContent = 'Spider';
    const makimonoLi3Sub = document.createElement('span');
    makimonoLi3Sub.textContent = 'Tempura soft-shell crab, cucumber, avocado, and spicy mayo'

    makimonoLi3.appendChild(makimonoLi3Sub)

    /* const makimonoLi4 = document.createElement('li');
    const makimonoLi5 = document.createElement('li');
    const makimonoLi6 = document.createElement('li');
    const makimonoLi7 = document.createElement('li');
    const makimonoLi8 = document.createElement('li');
    const makimonoLi9 = document.createElement('li');
    const makimonoLi10 = document.createElement('li');
    const makimonoLi11 = document.createElement('li');
    const makimonoLi12 = document.createElement('li'); */

    const sushiName = document.createElement('span');
    sushiName.textContent = 'Sushi';
    sushiName.classList.add('sushi-ul-name')
    const sushi = document.createElement('ul');
    sushi.classList.add('sushi-li')

    const sushiLi1 = document.createElement('li');
    sushiLi1.textContent = 'Tuna';
    const sushiLi2 = document.createElement('li');
    sushiLi2.textContent = 'Salmon';
    const sushiLi3 = document.createElement('li');
    sushiLi3.textContent = 'Eeel';
    const sushiLi4 = document.createElement('li');
    sushiLi4.textContent = 'Shrimp';
    const sushiLi5 = document.createElement('li');
    sushiLi5.textContent = 'Roe';

    sushi.append(sushiLi1, sushiLi2, sushiLi3, sushiLi4, sushiLi5);

    makimono.append(makimonoLi1, makimonoLi2, makimonoLi3, makimonoLi1.cloneNode(true), makimonoLi2.cloneNode(true), makimonoLi3.cloneNode(true), makimonoLi1.cloneNode(true), makimonoLi2.cloneNode(true), makimonoLi3.cloneNode(true), makimonoLi1.cloneNode(true), makimonoLi2.cloneNode(true), makimonoLi3.cloneNode(true))
    sushiMenuWrapper.append(makimonoName, makimono, sushiName, sushi);

    return sushiMenuWrapper;



}

/***/ }),

/***/ "./src/img/ramen1.png":
/*!****************************!*\
  !*** ./src/img/ramen1.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a2c4a2279049e3a9931.png";

/***/ }),

/***/ "./src/img/ramen2.png":
/*!****************************!*\
  !*** ./src/img/ramen2.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca73e62f94cfda4b0e59.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHdDO0FBQ0o7QUFDSTtBQUN4QztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0RBQU87QUFDbkMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBEQUFTO0FBQ3JDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMERBQVM7QUFDckM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3REFBTztBQUMvQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RHlDO0FBQ0E7QUFDekM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNENBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRDQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pENkI7QUFDN0I7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2pFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF93ZWJwYWNrX3Jlc3RhdXJhbnQvLi9zcmMvYWxsLW1lbnUuanMiLCJ3ZWJwYWNrOi8vdG9wX3dlYnBhY2tfcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3RvcF93ZWJwYWNrX3Jlc3RhdXJhbnQvLi9zcmMvcmFtZW4tbWVudS5qcyIsIndlYnBhY2s6Ly90b3Bfd2VicGFja19yZXN0YXVyYW50Ly4vc3JjL3N1c2hpLW1lbnUuanMiLCJ3ZWJwYWNrOi8vdG9wX3dlYnBhY2tfcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3Bfd2VicGFja19yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3Bfd2VicGFja19yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9wX3dlYnBhY2tfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcF93ZWJwYWNrX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3Bfd2VicGFja19yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvcF93ZWJwYWNrX3Jlc3RhdXJhbnQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b3Bfd2VicGFja19yZXN0YXVyYW50L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b3Bfd2VicGFja19yZXN0YXVyYW50L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludEFsbE1lbnUoKSB7XHJcbiAgICBjb25zdCB0ZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0ZXN0LnRleHRDb250ZW50ID0gJ1Rlc3QnXHJcblxyXG4gICAgcmV0dXJuIHRlc3RcclxufSIsImltcG9ydCByYW1lbk1lbnUgZnJvbSAnLi9yYW1lbi1tZW51LmpzJztcclxuaW1wb3J0IGFsbE1lbnUgZnJvbSAnLi9hbGwtbWVudS5qcyc7XHJcbmltcG9ydCBzdXNoaU1lbnUgZnJvbSAnLi9zdXNoaS1tZW51LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50TWVudSgpIHtcclxuXHJcbiAgICBmdW5jdGlvbiByZXNldChhKSB7XHJcbiAgICAgICAgc3VzaGlBbGwuc3R5bGUuY29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgcmFtZW5BbGwuc3R5bGUuY29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgLy9kcmlua3NBbGwuc3R5bGUuY29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgYS5zdHlsZS5jb2xvciA9ICdvcmFuZ2UnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdtYWluLW5hdicpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIG1lbnVMaXN0LmNsYXNzTGlzdC5hZGQoJ21lbnUtbGlzdCcpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVBbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbWVudUFsbC50ZXh0Q29udGVudCA9ICdBbGwnO1xyXG4gICAgbWVudUFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgd2hpbGUgKHdyYXBwZXIuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKHdyYXBwZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kKG5hdiwgYWxsTWVudSgpKVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCByYW1lbkFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICByYW1lbkFsbC50ZXh0Q29udGVudCA9ICdSYW1lbic7XHJcbiAgICByYW1lbkFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgd2hpbGUgKHdyYXBwZXIuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKHdyYXBwZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kKG5hdiwgcmFtZW5NZW51KCkpXHJcbiAgICAgICAgcmVzZXQocmFtZW5BbGwpO1xyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBzdXNoaUFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBzdXNoaUFsbC50ZXh0Q29udGVudCA9ICdTdXNoaSc7XHJcbiAgICBzdXNoaUFsbC5jbGFzc0xpc3QuYWRkKCdzdXNoaS1tZW51JylcclxuICAgIHN1c2hpQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICB3aGlsZSAod3JhcHBlci5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQod3JhcHBlci5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmQobmF2LCBzdXNoaU1lbnUoKSlcclxuICAgICAgICByZXNldChzdXNoaUFsbCk7XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRyaW5rc0FsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBkcmlua3NBbGwudGV4dENvbnRlbnQgPSAnRHJpbmtzJztcclxuXHJcbiAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XHJcblxyXG4gICAgbWVudUxpc3QuYXBwZW5kKG1lbnVBbGwsIHJhbWVuQWxsLCBzdXNoaUFsbCwgZHJpbmtzQWxsKTtcclxuICAgIG5hdi5hcHBlbmQobWVudUxpc3QsIGhyKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kKG5hdiwgYWxsTWVudSgpKVxyXG5cclxuICAgIHJldHVybiB3cmFwcGVyXHJcbn0iLCJpbXBvcnQgcmFtZW4xcG5nIGZyb20gJy4vaW1nL3JhbWVuMS5wbmcnO1xyXG5pbXBvcnQgcmFtZW4ycG5nIGZyb20gJy4vaW1nL3JhbWVuMi5wbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRSYW1lbk1lbnUoKSB7XHJcbiAgICBjb25zdCByYW1lbk1lbnVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByYW1lbk1lbnVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3JhbWVuLXdyYXBwZXInKTtcclxuXHJcbiAgICBjb25zdCByYW1lbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJhbWVuMS5jbGFzc0xpc3QuYWRkKCdyYW1lbi1pdGVtJylcclxuICAgIGNvbnN0IHJhbWVuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmFtZW4yLmNsYXNzTGlzdC5hZGQoJ3JhbWVuLWl0ZW0nKVxyXG4gICAgcmFtZW4yLnNldEF0dHJpYnV0ZSgnaWQnLCAncmFtZW4taXRlbTInKVxyXG4gICAgY29uc3QgcmFtZW4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByYW1lbjMuY2xhc3NMaXN0LmFkZCgncmFtZW4taXRlbScpXHJcbiAgICBjb25zdCByYW1lbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJhbWVuNC5jbGFzc0xpc3QuYWRkKCdyYW1lbi1pdGVtJylcclxuXHJcbiAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XHJcblxyXG4gICAgY29uc3QgcmFtZW4xSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICByYW1lbjFJbWcuY2xhc3NMaXN0LmFkZCgncmFtZW4taW1nJylcclxuICAgIHJhbWVuMUltZy5zcmMgPSByYW1lbjFwbmc7XHJcblxyXG4gICAgY29uc3QgcmFtZW4ySW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICByYW1lbjFJbWcuY2xhc3NMaXN0LmFkZCgncmFtZW4taW1nJylcclxuICAgIHJhbWVuMkltZy5zcmMgPSByYW1lbjJwbmc7XHJcblxyXG4gICAgY29uc3QgcmFtZW4xTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJhbWVuMUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3JhbWVuLWxhYmVsJylcclxuICAgIGNvbnN0IHJhbWVuMkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByYW1lbjJMYWJlbC5jbGFzc0xpc3QuYWRkKCdyYW1lbi1sYWJlbCcpXHJcblxyXG4gICAgY29uc3QgcmFtZW4xTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IHJhbWVuMURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgcmFtZW4xTmFtZS5jbGFzc0xpc3QuYWRkKCdyYW1lbi1uYW1lJylcclxuXHJcbiAgICBjb25zdCByYW1lbjJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29uc3QgcmFtZW4yRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICByYW1lbjJOYW1lLmNsYXNzTGlzdC5hZGQoJ3JhbWVuLW5hbWUnKVxyXG4gICAgcmFtZW4yRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsICdyYW1lbi1kZXNjcmlwdGlvbjInKVxyXG5cclxuICAgIHJhbWVuMU5hbWUudGV4dENvbnRlbnQgPSAnU2hveXUnO1xyXG4gICAgcmFtZW4yTmFtZS50ZXh0Q29udGVudCA9ICdNaXNvJztcclxuXHJcbiAgICByYW1lbjFEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdTaG95dSBpcyB0aGUgSmFwYW5lc2Ugd29yZCBmb3Igc295IHNhdWNlLCBhbmQgdGhpcyBsaWdodGVyLXN0eWxlIHJhbWVuXFzCrcKt4oCUd2hpY2ggY2FuIGFwcGVhciBjbGVhci1icm93biBvciBkYXJrZXIgYW5kIGNsb3VkeeKAlGlzIGZsYXZvcmVkIHdpdGggZXhhY3RseSB0aGF0Lic7XHJcbiAgICByYW1lbjJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdBcyBpdHMgbmFtZSBzdWdnZXN0cywgbWlzbyByYW1lbiBpcyBmbGF2b3JlZCB3aXRoIHRoZSBmZXJtZW50ZWQgc295IGJlYW4gcGFzdGUgb2YgdGhlIHNhbWUgbmFtZSwgd2hpY2ggY2FuIGJlIG1hZGUgZnJvbSBzb3liZWFucywgcmljZSwgb3IgbWlzbywgYW5kIGNvbG9yZWQgd2hpdGUgb3IgcmVkLic7XHJcblxyXG4gICAgcmFtZW4xTGFiZWwuYXBwZW5kKHJhbWVuMU5hbWUsIHJhbWVuMURlc2NyaXB0aW9uKTtcclxuICAgIHJhbWVuMkxhYmVsLmFwcGVuZChyYW1lbjJOYW1lLCByYW1lbjJEZXNjcmlwdGlvbik7XHJcblxyXG4gICAgcmFtZW4xLmFwcGVuZChyYW1lbjFJbWcsIHJhbWVuMUxhYmVsKTtcclxuICAgIHJhbWVuMi5hcHBlbmQocmFtZW4yTGFiZWwsIHJhbWVuMkltZyk7XHJcblxyXG4gICAgcmFtZW5NZW51V3JhcHBlci5hcHBlbmQocmFtZW4xLCByYW1lbjIsIHJhbWVuMS5jbG9uZU5vZGUodHJ1ZSksIHJhbWVuMi5jbG9uZU5vZGUodHJ1ZSksIHJhbWVuMS5jbG9uZU5vZGUodHJ1ZSksIHJhbWVuMi5jbG9uZU5vZGUodHJ1ZSkpXHJcblxyXG4gICAgcmV0dXJuIHJhbWVuTWVudVdyYXBwZXI7XHJcblxyXG59IiwiaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50U3VzaGlNZW51KCkge1xyXG4gICAgY29uc3Qgc3VzaGlNZW51V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3VzaGlNZW51V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzdXNoaS13cmFwcGVyJyk7XHJcblxyXG4gICAgY29uc3QgbWFraW1vbm9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICBtYWtpbW9ub05hbWUudGV4dENvbnRlbnQgPSAnTWFraW1vbm8nXHJcbiAgICBtYWtpbW9ub05hbWUuY2xhc3NMaXN0LmFkZCgnbWFraW1vbm8tdWwtbmFtZScpXHJcblxyXG4gICAgY29uc3QgbWFraW1vbm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuXHJcbiAgICBtYWtpbW9uby5jbGFzc0xpc3QuYWRkKCdtYWtpbW9uby1saScpO1xyXG5cclxuXHJcbiAgICBjb25zdCBtYWtpbW9ub0xpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBtYWtpbW9ub0xpMS50ZXh0Q29udGVudCA9ICdBdm9jYWRvJ1xyXG5cclxuICAgIGNvbnN0IG1ha2ltb25vTGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIG1ha2ltb25vTGkyLnRleHRDb250ZW50ID0gJ1NhbG1vbidcclxuXHJcbiAgICBjb25zdCBtYWtpbW9ub0xpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBtYWtpbW9ub0xpMy50ZXh0Q29udGVudCA9ICdTcGlkZXInO1xyXG4gICAgY29uc3QgbWFraW1vbm9MaTNTdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBtYWtpbW9ub0xpM1N1Yi50ZXh0Q29udGVudCA9ICdUZW1wdXJhIHNvZnQtc2hlbGwgY3JhYiwgY3VjdW1iZXIsIGF2b2NhZG8sIGFuZCBzcGljeSBtYXlvJ1xyXG5cclxuICAgIG1ha2ltb25vTGkzLmFwcGVuZENoaWxkKG1ha2ltb25vTGkzU3ViKVxyXG5cclxuICAgIC8qIGNvbnN0IG1ha2ltb25vTGk0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IG1ha2ltb25vTGk1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IG1ha2ltb25vTGk2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IG1ha2ltb25vTGk3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IG1ha2ltb25vTGk4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IG1ha2ltb25vTGk5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IG1ha2ltb25vTGkxMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBtYWtpbW9ub0xpMTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgbWFraW1vbm9MaTEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTsgKi9cclxuXHJcbiAgICBjb25zdCBzdXNoaU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBzdXNoaU5hbWUudGV4dENvbnRlbnQgPSAnU3VzaGknO1xyXG4gICAgc3VzaGlOYW1lLmNsYXNzTGlzdC5hZGQoJ3N1c2hpLXVsLW5hbWUnKVxyXG4gICAgY29uc3Qgc3VzaGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgc3VzaGkuY2xhc3NMaXN0LmFkZCgnc3VzaGktbGknKVxyXG5cclxuICAgIGNvbnN0IHN1c2hpTGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIHN1c2hpTGkxLnRleHRDb250ZW50ID0gJ1R1bmEnO1xyXG4gICAgY29uc3Qgc3VzaGlMaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgc3VzaGlMaTIudGV4dENvbnRlbnQgPSAnU2FsbW9uJztcclxuICAgIGNvbnN0IHN1c2hpTGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIHN1c2hpTGkzLnRleHRDb250ZW50ID0gJ0VlZWwnO1xyXG4gICAgY29uc3Qgc3VzaGlMaTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgc3VzaGlMaTQudGV4dENvbnRlbnQgPSAnU2hyaW1wJztcclxuICAgIGNvbnN0IHN1c2hpTGk1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIHN1c2hpTGk1LnRleHRDb250ZW50ID0gJ1JvZSc7XHJcblxyXG4gICAgc3VzaGkuYXBwZW5kKHN1c2hpTGkxLCBzdXNoaUxpMiwgc3VzaGlMaTMsIHN1c2hpTGk0LCBzdXNoaUxpNSk7XHJcblxyXG4gICAgbWFraW1vbm8uYXBwZW5kKG1ha2ltb25vTGkxLCBtYWtpbW9ub0xpMiwgbWFraW1vbm9MaTMsIG1ha2ltb25vTGkxLmNsb25lTm9kZSh0cnVlKSwgbWFraW1vbm9MaTIuY2xvbmVOb2RlKHRydWUpLCBtYWtpbW9ub0xpMy5jbG9uZU5vZGUodHJ1ZSksIG1ha2ltb25vTGkxLmNsb25lTm9kZSh0cnVlKSwgbWFraW1vbm9MaTIuY2xvbmVOb2RlKHRydWUpLCBtYWtpbW9ub0xpMy5jbG9uZU5vZGUodHJ1ZSksIG1ha2ltb25vTGkxLmNsb25lTm9kZSh0cnVlKSwgbWFraW1vbm9MaTIuY2xvbmVOb2RlKHRydWUpLCBtYWtpbW9ub0xpMy5jbG9uZU5vZGUodHJ1ZSkpXHJcbiAgICBzdXNoaU1lbnVXcmFwcGVyLmFwcGVuZChtYWtpbW9ub05hbWUsIG1ha2ltb25vLCBzdXNoaU5hbWUsIHN1c2hpKTtcclxuXHJcbiAgICByZXR1cm4gc3VzaGlNZW51V3JhcHBlcjtcclxuXHJcblxyXG5cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21lbnUuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=