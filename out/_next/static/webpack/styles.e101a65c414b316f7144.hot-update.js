webpackHotUpdate("styles",{

/***/ "./components/figure/style.css":
/*!*************************************!*\
  !*** ./components/figure/style.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"figure":"_2bb82JoQRvO93IrAIW2MXJ","image":"_2UB56TyqVVM-q83MRBLgiP","isLoaded":"_3_DAsCS6dLyoExGsFNVTYO","isHidden":"Zw0AqzmBA7-al4Rm8-XY2"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1552485330109");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.e101a65c414b316f7144.hot-update.js.map