webpackHotUpdate("static/development/pages/baba.js",{

/***/ "./components/figure/index.js":
/*!************************************!*\
  !*** ./components/figure/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./components/figure/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader */ "./components/loader/index.js");

var _jsxFileName = "/Users/ilmente/Dev/ilmente/helen/components/figure/index.js";




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var src = _ref.src,
      caption = _ref.caption;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      source = _useState2[0],
      setSource = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      isLoaded = _useState4[0],
      setLoaded = _useState4[1];

  if (true) {
    var image = new Image();

    image.onload = function () {
      setSource(src);
      setLoaded(true);
    };

    image.src = src;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_2___default.a.figure,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: source,
    className: _style_css__WEBPACK_IMPORTED_MODULE_2___default.a.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_loader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    visible: !isLoaded,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figcaption", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_2___default.a.caption,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, caption)));
});

/***/ })

})
//# sourceMappingURL=baba.js.906060573cce7e0ff1b7.hot-update.js.map