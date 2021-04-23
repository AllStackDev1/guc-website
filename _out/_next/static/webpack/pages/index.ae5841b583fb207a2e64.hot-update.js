webpackHotUpdate_N_E("pages/index",{

/***/ "./context/app.js":
/*!************************!*\
  !*** ./context/app.js ***!
  \************************/
/*! exports provided: AppContextProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppContextProvider\", function() { return AppContextProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/mrceo63/Desktop/DevWrk/guc/website/context/app.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\nvar AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\nvar AppContextProvider = function AppContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isMobileMenuOpen = _useState[0],\n      setMobileMenuOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('enroll'),\n      modalType = _useState2[0],\n      setModalType = _useState2[1];\n\n  var _useDisclosure = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useDisclosure\"])(),\n      isOpen = _useDisclosure.isOpen,\n      onOpen = _useDisclosure.onOpen,\n      onClose = _useDisclosure.onClose;\n\n  var toggleMobleMenu = function toggleMobleMenu() {\n    setMobileMenuOpen(!isMobileMenuOpen);\n  };\n\n  var handleModal = function handleModal(type) {\n    onOpen();\n    setModalType(type);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AppContext.Provider, {\n    value: {\n      isOpen: isOpen,\n      onOpen: onOpen,\n      onClose: onClose,\n      modalType: modalType,\n      handleModal: handleModal,\n      toggleMobleMenu: toggleMobleMenu,\n      isMobileMenuOpen: isMobileMenuOpen\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AppContextProvider, \"VS8KU4eT6H+MU7J5YtWmqTpY+Ag=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useDisclosure\"]];\n});\n\n_c = AppContextProvider;\nAppContextProvider.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired\n};\n\nvar useApp = function useApp() {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(AppContext);\n};\n\n_s2(useApp, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"AppContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9hcHAuanM/MTYwMyJdLCJuYW1lcyI6WyJBcHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkFwcENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJpc01vYmlsZU1lbnVPcGVuIiwic2V0TW9iaWxlTWVudU9wZW4iLCJtb2RhbFR5cGUiLCJzZXRNb2RhbFR5cGUiLCJ1c2VEaXNjbG9zdXJlIiwiaXNPcGVuIiwib25PcGVuIiwib25DbG9zZSIsInRvZ2dsZU1vYmxlTWVudSIsImhhbmRsZU1vZGFsIiwidHlwZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwidXNlQXBwIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsZ0JBQUdDLDJEQUFhLEVBQWhDO0FBRU8sSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDSkMsc0RBQVEsQ0FBQyxLQUFELENBREo7QUFBQSxNQUMzQ0MsZ0JBRDJDO0FBQUEsTUFDekJDLGlCQUR5Qjs7QUFBQSxtQkFFaEJGLHNEQUFRLENBQUMsUUFBRCxDQUZRO0FBQUEsTUFFM0NHLFNBRjJDO0FBQUEsTUFFaENDLFlBRmdDOztBQUFBLHVCQUlkQyxzRUFBYSxFQUpDO0FBQUEsTUFJMUNDLE1BSjBDLGtCQUkxQ0EsTUFKMEM7QUFBQSxNQUlsQ0MsTUFKa0Msa0JBSWxDQSxNQUprQztBQUFBLE1BSTFCQyxPQUowQixrQkFJMUJBLE9BSjBCOztBQU1sRCxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUJQLHFCQUFpQixDQUFDLENBQUNELGdCQUFGLENBQWpCO0FBQ0QsR0FGRDs7QUFJQSxNQUFNUyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxJQUFJLEVBQUk7QUFDMUJKLFVBQU07QUFDTkgsZ0JBQVksQ0FBQ08sSUFBRCxDQUFaO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRSxxRUFBQyxVQUFELENBQVksUUFBWjtBQUNFLFNBQUssRUFBRTtBQUNMTCxZQUFNLEVBQU5BLE1BREs7QUFFTEMsWUFBTSxFQUFOQSxNQUZLO0FBR0xDLGFBQU8sRUFBUEEsT0FISztBQUlMTCxlQUFTLEVBQVRBLFNBSks7QUFLTE8saUJBQVcsRUFBWEEsV0FMSztBQU1MRCxxQkFBZSxFQUFmQSxlQU5LO0FBT0xSLHNCQUFnQixFQUFoQkE7QUFQSyxLQURUO0FBQUEsY0FXR0Y7QUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQTlCTTs7R0FBTUQsa0I7VUFJeUJPLDhEOzs7S0FKekJQLGtCO0FBZ0NiQSxrQkFBa0IsQ0FBQ2MsU0FBbkIsR0FBK0I7QUFDN0JiLFVBQVEsRUFBRWMsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURJLENBQS9COztBQUlBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUE7O0FBQUEsU0FBTUMsd0RBQVUsQ0FBQ3JCLFVBQUQsQ0FBaEI7QUFBQSxDQUFmOztJQUFNb0IsTTs7QUFFU0EscUVBQWYiLCJmaWxlIjoiLi9jb250ZXh0L2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgdXNlRGlzY2xvc3VyZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuZXhwb3J0IGNvbnN0IEFwcENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2lzTW9iaWxlTWVudU9wZW4sIHNldE1vYmlsZU1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbW9kYWxUeXBlLCBzZXRNb2RhbFR5cGVdID0gdXNlU3RhdGUoJ2Vucm9sbCcpXG5cbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpXG5cbiAgY29uc3QgdG9nZ2xlTW9ibGVNZW51ID0gKCkgPT4ge1xuICAgIHNldE1vYmlsZU1lbnVPcGVuKCFpc01vYmlsZU1lbnVPcGVuKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTW9kYWwgPSB0eXBlID0+IHtcbiAgICBvbk9wZW4oKVxuICAgIHNldE1vZGFsVHlwZSh0eXBlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgaXNPcGVuLFxuICAgICAgICBvbk9wZW4sXG4gICAgICAgIG9uQ2xvc2UsXG4gICAgICAgIG1vZGFsVHlwZSxcbiAgICAgICAgaGFuZGxlTW9kYWwsXG4gICAgICAgIHRvZ2dsZU1vYmxlTWVudSxcbiAgICAgICAgaXNNb2JpbGVNZW51T3BlblxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbkFwcENvbnRleHRQcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXG59XG5cbmNvbnN0IHVzZUFwcCA9ICgpID0+IHVzZUNvbnRleHQoQXBwQ29udGV4dClcblxuZXhwb3J0IGRlZmF1bHQgdXNlQXBwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/app.js\n");

/***/ })

})