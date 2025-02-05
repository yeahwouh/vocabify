/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    display: flex; /* Use flexbox */\n    justify-content: center; /* Center horizontally */\n    height: 100vh; /* Full viewport height */\n}\n\n#main {\n    transition: margin-left .5s;\n    padding: 20px;\n    width: 100%; /* Allow full width */\n    max-width: 600px; /* Set a max width for the main content */\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Optional: add some shadow for better visibility */\n    background-color: #fff; /* Optional: background color */\n    border-radius: 8px; /* Optional: rounded corners */\n    margin-top: 20px; /* Optional: add some margin from the top */\n}\n\n.sidebar {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: #111;\n    overflow-x: hidden;\n    transition: 0.5s;\n    padding-top: 60px;\n}\n\n.sidebar a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 18px;\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n}\n\n.sidebar a:hover {\n    color: #f1f1f1;\n}\n\n.sidebar .closebtn {\n    position: absolute;\n    top: 0;\n    right: 25px;\n    font-size: 36px;\n    margin-left: 50px;\n    background: none;\n    border: none;\n    color: #818181;\n    cursor: pointer;\n}\n\n.openbtn {\n    font-size: 20px;\n    cursor: pointer;\n    background-color: #111;\n    color: white;\n    padding: 10px 15px;\n    border: none;\n    margin: 10px;\n}\n\n#main {\n    transition: margin-left .5s;\n    padding: 20px;\n}\n\n.view {\n    padding: 20px;\n}\n\n#searchBar {\n    width: 100%;\n    max-width: 400px;\n    padding: 10px;\n    margin: 20px 0;\n    font-size: 16px;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n}\n\n#validTranslations {\n    list-style-type: none;\n    padding: 0;\n}\n\n#validTranslations li {\n    padding: 10px;\n    border-bottom: 1px solid #ddd;\n    cursor: pointer;\n}\n\n#validTranslations li:hover {\n    background-color: #f5f5f5;\n}\n\n.add-flashcard-button {\n    background-color: #111; /* Black background */\n    color: white;           /* White text */\n    border: none;           /* No border */\n    padding: 10px 15px;    /* Padding */\n    cursor: pointer;        /* Pointer cursor on hover */\n    margin-top: 10px;      /* Margin on top */\n    font-size: 16px;       /* Font size */\n    transition: background-color 0.3s; /* Smooth transition */\n}\n\n.add-flashcard-button:hover {\n    background-color: #333; /* Darker background on hover */\n}\n\n.scheduled-btn {\n    background-color: #111;\n    color: white;\n    border: none;\n    padding: 10px 15px;\n    margin-bottom: 20px;\n    cursor: pointer;\n    font-size: 16px;\n    border-radius: 4px;\n}\n\n.scheduled-btn:hover {\n    background-color: #333;\n}\n\n.flashcards-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    gap: 20px;\n    padding: 20px 0;\n}\n\n.flashcard {\n    border: 1px solid #ddd;\n    border-radius: 8px;\n    height: 200px; /* Fixed height to maintain square shape */\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n}\n\n.flashcard-question, .flashcard-answer {\n    padding: 15px;\n    display: flex; /* Use flexbox */\n    justify-content: center; /* Center horizontally */\n    align-items: center; /* Center vertically */\n    text-align: center; /* Center text */\n    flex: 1; /* Allow both to take equal space */\n}\n\n.flashcard-question {\n    background-color: #f8f8f8;\n    border-bottom: 1px solid #ddd;\n}\n\n.flashcard-answer {\n    background-color: white;\n    display: flex; /* Use flexbox for centering */\n    justify-content: center; /* Center horizontally */\n    align-items: center; /* Center vertically */\n    flex: 1; /* Allow it to take up remaining space */\n    font-size: 18px; /* Adjust font size for visibility */\n    padding: 10px; /* Add some padding */\n    text-align: center; /* Center text */\n}\n\n.flashcard-next-review {\n    padding: 10px;\n    background-color: #e0f7fa; /* Light blue background */\n    text-align: center; /* Center the text */\n    font-size: 14px; /* Slightly smaller font size */\n    color: #00796b; /* Darker teal color for the text */\n    border-top: 1px solid #ddd; /* Divider line above */\n    position: relative; /* Ensure it stays within the card */\n}\n\n.delete-button {\n    background-color: #d9534f; /* Bootstrap danger color */\n    color: white;\n    border: none;\n    padding: 5px 10px;\n    cursor: pointer;\n    margin-top: 10px; /* Space above the button */\n    border-radius: 4px; /* Rounded corners */\n}\n\n.delete-button:hover {\n    background-color: #c9302c; /* Darker red on hover */\n}\n\n.review-card {\n    border: 1px solid #ddd;\n    border-radius: 8px;\n    padding: 20px;\n    margin: 20px auto;\n    max-width: 500px;\n    text-align: center;\n}\n\n.review-question {\n    font-size: 24px;\n    margin-bottom: 20px;\n}\n\n.review-answer {\n    font-size: 20px;\n    margin-bottom: 20px;\n    color: #2196F3;\n}\n\n.show-answer-btn {\n    background-color: #4CAF50;\n    color: white;\n    border: none;\n    padding: 10px 20px;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 16px;\n    margin-bottom: 10px;\n}\n\n.quality-buttons {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n    margin-top: 20px;\n}\n\n.quality-buttons button {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    border: none;\n    background-color: #2196F3;\n    color: white;\n    cursor: pointer;\n    font-size: 16px;\n}\n\n.quality-buttons button:hover {\n    background-color: #1976D2;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/flashcard.js":
/*!**************************!*\
  !*** ./src/flashcard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Item: () => (/* binding */ Item)\n/* harmony export */ });\nclass Item {\n    static items = [];\n\n    constructor(question, answer) {\n        this.question = question;\n        this.answer = answer;\n        this.eFactor = 2.5;  // Initial E-Factor\n        this.interval = 1;    // Initial interval (in days)\n        this.nextReview = new Date(Date.now()); // When initialized it is scheduled for today\n        Item.items.push(this);\n        Item.saveToLocalStorage(); // Save whenever a new item is created\n    }\n\n    update(quality) {\n        /** Update the item's E-Factor and next review date based on recall quality (0-5). */\n        if (quality < 3) {\n            this.interval = 1;  // Reset interval if recall is poor\n        } else {\n            this.interval = Math.round(this.interval * this.eFactor);\n        }\n\n        // Update E-Factor using SuperMemo formula\n        this.eFactor += (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));\n        this.eFactor = Math.max(1.3, this.eFactor);  // Ensure minimum value\n\n        // Schedule next review\n        this.nextReview = new Date(Date.now() + this.interval * 24 * 60 * 60 * 1000);\n        Item.saveToLocalStorage(); // Save whenever an item is updated\n    }\n\n    // Add static methods for localStorage handling\n    static saveToLocalStorage() {\n        const itemsToSave = Item.items.map(item => ({\n            ...item,\n            nextReview: item.nextReview.toISOString() // Convert Date to string for storage\n        }));\n        localStorage.setItem('flashcards', JSON.stringify(itemsToSave));\n    }\n\n    static loadFromLocalStorage() {\n        const savedItems = localStorage.getItem('flashcards');\n        if (savedItems) {\n            const parsedItems = JSON.parse(savedItems);\n            Item.items = parsedItems.map(item => {\n                const newItem = new Item(item.question, item.answer);\n                newItem.eFactor = item.eFactor;\n                newItem.interval = item.interval;\n                newItem.nextReview = new Date(item.nextReview);\n                return newItem;\n            });\n            Item.items.pop(); // Remove the duplicate item created by the constructor\n        }\n    }\n\n    toString() {\n        return `${this.question} (Next Review: ${this.nextReview.toDateString()}, E-Factor: ${this.eFactor})`;\n    }\n}\n\n// Load items when the module is imported\nItem.loadFromLocalStorage();\n\nconst exampleCards = [\n    new Item(\"What is the capital of Germany?\", \"Berlin\"),\n    new Item(\"What is 3 + 5?\", \"8\"),\n    new Item(\"What is the largest planet in our solar system?\", \"Jupiter\"),\n    new Item(\"What is the chemical symbol for water?\", \"H2O\"),\n    new Item(\"Who wrote 'Romeo and Juliet'?\", \"William Shakespeare\")\n];\n\n\n\n\n//# sourceURL=webpack:///./src/flashcard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _flashcard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flashcard.js */ \"./src/flashcard.js\");\n// index.js\n\n\n\nasync function translateText(text, targetLang = 'DE') {\n    try {\n        const API_KEY = \"15360195-cc33-4e48-95f5-086840252bab:fx\";\n        const url = `https://api-free.deepl.com/v2/translate?auth_key=${API_KEY}&text=${encodeURIComponent(text)}&target_lang=${targetLang}`;\n        \n        const response = await fetch(url);\n        \n        if (!response.ok) {\n            throw new Error(`HTTP error! status: ${response.status}`);\n        }\n        \n        const data = await response.json();\n        return data.translations[0].text;\n    } catch (error) {\n        console.error('Translation error:', error);\n        return text;\n    }\n}\n\nfunction toggleSidebar() {\n    const sidebar = document.getElementById(\"sidebar\");\n    const main = document.getElementById(\"main\");\n    \n    if (sidebar.style.width === \"250px\") {\n        sidebar.style.width = \"0\";\n        main.style.marginLeft = \"0\";\n    } else {\n        sidebar.style.width = \"250px\";\n        main.style.marginLeft = \"250px\";\n    }\n}\n\nfunction showView(viewId) {\n    const views = document.getElementsByClassName(\"view\");\n    for (let view of views) {\n        view.style.display = \"none\";\n    }\n    document.getElementById(viewId).style.display = \"block\";\n}\n\nfunction debounce(func, wait=250) {\n    let timeout;\n    return function(...args) {\n        // Clear the previous timeout to reset the wait time\n        clearTimeout(timeout);\n        // Set a new timeout to call the function after the specified wait time\n        timeout = setTimeout(() => func(...args), wait);\n    };\n}\n\nfunction searchTranslation() {\n    const searchInput = document.getElementById(\"searchBar\").value.toLowerCase();\n    const translationResult = document.getElementById(\"translationResult\");\n    const addButton = document.getElementById(\"addFlashcardButton\");\n    \n    translateText(searchInput, \"EN\").then(result => {\n        translationResult.textContent = result;\n\n        // Show the button to add the flashcard\n        addButton.style.display = \"block\";\n        addButton.onclick = () => {\n            // Check if the item already exists\n            const existingItem = _flashcard_js__WEBPACK_IMPORTED_MODULE_1__.Item.items.find(item => item.question.toLowerCase() === searchInput);\n            if (!existingItem) {\n                new _flashcard_js__WEBPACK_IMPORTED_MODULE_1__.Item(searchInput, result); // Create a new flashcard Item\n                console.log(_flashcard_js__WEBPACK_IMPORTED_MODULE_1__.Item.items);\n            } else {\n                alert(\"This flashcard already exists!\");\n            }\n        };\n        \n    }).catch(error => {\n        console.log('Error:', error);\n    });\n}\n\nconst debouncedSearch = debounce(searchTranslation, 300);\n\nfunction displayFlashcards(scheduled = false) {\n    const container = document.getElementById('flashcardsContainer');\n    container.innerHTML = ''; // Clear existing cards\n    \n    let cardsToShow = scheduled \n        ? _flashcard_js__WEBPACK_IMPORTED_MODULE_1__.Item.items.filter(item => item.nextReview <= new Date()) \n        : _flashcard_js__WEBPACK_IMPORTED_MODULE_1__.Item.items;\n\n    cardsToShow.forEach((item, index) => {\n        const card = document.createElement('div');\n        card.className = 'flashcard';\n        \n        const question = document.createElement('div');\n        question.className = 'flashcard-question';\n        question.textContent = item.question;\n        \n        const answer = document.createElement('div');\n        answer.className = 'flashcard-answer';\n        answer.textContent = item.answer;\n\n        const nextReview = document.createElement('div');\n        nextReview.className = 'flashcard-next-review';\n        nextReview.textContent = `Next Review: ${item.nextReview.toLocaleDateString()}`;\n        \n        // Create delete button\n        const deleteButton = document.createElement('button');\n        deleteButton.textContent = 'Delete';\n        deleteButton.className = 'delete-button';\n        deleteButton.onclick = () => {\n            _flashcard_js__WEBPACK_IMPORTED_MODULE_1__.Item.items.splice(index, 1); // Remove the item from the array\n            _flashcard_js__WEBPACK_IMPORTED_MODULE_1__.Item.saveToLocalStorage(); // Update local storage\n            displayFlashcards(scheduled); // Refresh the displayed flashcards\n        };\n\n        card.appendChild(question);\n        card.appendChild(answer);\n        card.appendChild(nextReview);\n        card.appendChild(deleteButton); // Add the delete button to the card\n        container.appendChild(card);\n    });\n}\n\nwindow.onload = function() {\n    debouncedSearch();\n    const showScheduledBtn = document.getElementById('showScheduledBtn');\n    let showingScheduled = false;\n    \n    showScheduledBtn.onclick = () => {\n        showingScheduled = !showingScheduled;\n        showScheduledBtn.textContent = showingScheduled ? 'View All Cards' : 'View Scheduled Cards';\n        displayFlashcards(showingScheduled);\n    };\n    \n    // Show all flashcards initially\n    displayFlashcards(false);\n};\n\nwindow.toggleSidebar = toggleSidebar;\nwindow.showView = showView;\nwindow.searchGroceries = debouncedSearch;\nwindow.startReviewQueue = startReviewQueue;\n\nlet currentReviewQueue = [];\nlet currentCard = null;\n\nfunction startReviewQueue() {\n    currentReviewQueue = _flashcard_js__WEBPACK_IMPORTED_MODULE_1__.Item.items\n        .filter(item => item.nextReview <= new Date())\n        .sort((a, b) => a.nextReview - b.nextReview);\n\n    if (currentReviewQueue.length === 0) {\n        document.getElementById('reviewCard').innerHTML = '<h3>No cards to review!</h3>';\n        return;\n    }\n\n    showNextCard();\n}\n\nfunction showNextCard() {\n    if (currentReviewQueue.length === 0) {\n        // If there are no cards left in the review queue, show a message and refresh the flashcards view\n        document.getElementById('reviewCard').innerHTML = '<h3>Review complete!</h3>';\n        \n        // Optionally, you can switch back to the flashcards view\n        showView('view2'); // Assuming 'view2' is the ID for the flashcards view\n        displayFlashcards(false); // Refresh the flashcards list\n        return;\n    }\n\n    currentCard = currentReviewQueue[0];\n    document.getElementById('reviewQuestion').textContent = currentCard.question;\n    document.getElementById('reviewAnswer').textContent = currentCard.answer;\n    document.getElementById('reviewAnswer').style.display = 'none'; // Hide answer initially\n    document.getElementById('showAnswerBtn').style.display = 'block'; // Show the button\n    document.getElementById('qualityButtons').style.display = 'none'; // Hide quality buttons\n}\n\nfunction showAnswer() {\n    document.getElementById('reviewAnswer').style.display = 'block';\n    document.getElementById('showAnswerBtn').style.display = 'none';\n    document.getElementById('qualityButtons').style.display = 'flex';\n}\n\nfunction rateCard(quality) {\n    currentCard.update(quality);\n    currentReviewQueue.shift();\n    showNextCard();\n}\n\n// Add to window object for HTML access\nwindow.rateCard = rateCard;\nwindow.showAnswer = showAnswer;\nwindow.Items = _flashcard_js__WEBPACK_IMPORTED_MODULE_1__.Item.items;\n\n//# sourceURL=webpack:///./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;