webpackHotUpdate_N_E("pages/_app",{

/***/ "./theme/theme.js":
/*!************************!*\
  !*** ./theme/theme.js ***!
  \************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"theme\", function() { return theme; });\n/* harmony import */ var _Users_mrceo63_Desktop_DevWrk_guc_website_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_mrceo63_Desktop_DevWrk_guc_website_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar breakpoints = ['22.5em', '30em', '48em', '62em', '80em', '90em']; // aliases\n\nbreakpoints.xs = breakpoints[0]; // 360\n\nbreakpoints.sm = breakpoints[1]; // 480\n\nbreakpoints.md = breakpoints[2]; // 768\n\nbreakpoints.lg = breakpoints[3]; // 992\n\nbreakpoints.xl = breakpoints[4]; // 1280\n\nbreakpoints.xxl = breakpoints[5]; // 1440\n\nvar theme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"extendTheme\"])(_objectSpread(_objectSpread({\n  styles: {\n    global: function global() {\n      return {\n        'html, body': {\n          fontFamily: '\"Montserrat\", sans-serif',\n          fontWeight: 400\n        },\n        body: {\n          lineHeight: 'tall',\n          color: 'gray.700',\n          fontSize: 'md',\n          fontWeight: 400\n        }\n      };\n    }\n  }\n}, breakpoints), {}, {\n  fonts: {\n    heading: '\"TRYVesterbro\", sans-serif',\n    body: '\"Montserrat\", sans-serif',\n    quote: '\"PlayfairDisplay\", sans-serif'\n  },\n  colors: {\n    gcu: {\n      100: '#C82B38',\n      200: '#2E3748',\n      300: '#9B0D39',\n      350: 'rgba(200, 43, 56, 0.03)',\n      400: '#049F9B',\n      450: 'rgba(0, 0, 0, 0.5)',\n      500: '#6A7986'\n    },\n    gcuButton: {\n      500: '#C82B38',\n      600: '#C82B38'\n    },\n    gcuLG: {\n      100: 'linear-gradient(91deg, rgba(0, 0, 0, 0.78) 10.74%, rgba(0, 0, 0, 0) 116.89%)'\n    }\n  },\n  space: {\n    14: '3.5rem',\n    60: '15rem',\n    66: '17.5rem',\n    70: '18rem',\n    80: '20rem',\n    82: '21rem',\n    85: '23rem',\n    90: '25rem',\n    95: '26rem',\n    108: '27rem',\n    110: '30rem',\n    115: '32rem',\n    120: '35rem',\n    121: '36rem',\n    122: '37rem',\n    123: '40rem',\n    124: '42rem',\n    125: '45rem',\n    127: '48rem',\n    129: '50rem',\n    130: '55rem',\n    135: '60rem',\n    137: '65rem',\n    140: '70rem',\n    143: '72rem',\n    145: '76rem',\n    150: '80rem',\n    155: '90rem'\n  },\n  sizes: {\n    14: '3.5rem',\n    60: '15rem',\n    66: '17.5rem',\n    70: '18rem',\n    80: '20rem',\n    82: '21rem',\n    85: '23rem',\n    90: '25rem',\n    95: '26rem',\n    108: '27rem',\n    109: '28rem',\n    110: '30rem',\n    115: '32rem',\n    120: '35rem',\n    122: '37rem',\n    123: '40rem',\n    124: '42rem',\n    124.5: '43rem',\n    125: '45rem',\n    127: '48rem',\n    129: '50rem',\n    129.5: '50.25rem',\n    130: '55rem',\n    135: '60rem',\n    137: '65rem',\n    138: '65.438rem',\n    140: '70rem',\n    143: '72rem',\n    145: '76rem',\n    150: '80rem',\n    155: '90rem'\n  }\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdGhlbWUvdGhlbWUuanM/YWIyMSJdLCJuYW1lcyI6WyJicmVha3BvaW50cyIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJ4eGwiLCJ0aGVtZSIsImV4dGVuZFRoZW1lIiwic3R5bGVzIiwiZ2xvYmFsIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJib2R5IiwibGluZUhlaWdodCIsImNvbG9yIiwiZm9udFNpemUiLCJmb250cyIsImhlYWRpbmciLCJxdW90ZSIsImNvbG9ycyIsImdjdSIsImdjdUJ1dHRvbiIsImdjdUxHIiwic3BhY2UiLCJzaXplcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLENBQUMsUUFBRCxFQUFXLE1BQVgsRUFBbUIsTUFBbkIsRUFBMkIsTUFBM0IsRUFBbUMsTUFBbkMsRUFBMkMsTUFBM0MsQ0FBcEIsQyxDQUNBOztBQUNBQSxXQUFXLENBQUNDLEVBQVosR0FBaUJELFdBQVcsQ0FBQyxDQUFELENBQTVCLEMsQ0FBZ0M7O0FBQ2hDQSxXQUFXLENBQUNFLEVBQVosR0FBaUJGLFdBQVcsQ0FBQyxDQUFELENBQTVCLEMsQ0FBZ0M7O0FBQ2hDQSxXQUFXLENBQUNHLEVBQVosR0FBaUJILFdBQVcsQ0FBQyxDQUFELENBQTVCLEMsQ0FBZ0M7O0FBQ2hDQSxXQUFXLENBQUNJLEVBQVosR0FBaUJKLFdBQVcsQ0FBQyxDQUFELENBQTVCLEMsQ0FBZ0M7O0FBQ2hDQSxXQUFXLENBQUNLLEVBQVosR0FBaUJMLFdBQVcsQ0FBQyxDQUFELENBQTVCLEMsQ0FBZ0M7O0FBQ2hDQSxXQUFXLENBQUNNLEdBQVosR0FBa0JOLFdBQVcsQ0FBQyxDQUFELENBQTdCLEMsQ0FBaUM7O0FBRTFCLElBQU1PLEtBQUssR0FBR0Msb0VBQVc7QUFDOUJDLFFBQU0sRUFBRTtBQUNOQyxVQUFNLEVBQUU7QUFBQSxhQUFPO0FBQ2Isc0JBQWM7QUFDWkMsb0JBQVUsRUFBRSwwQkFEQTtBQUVaQyxvQkFBVSxFQUFFO0FBRkEsU0FERDtBQUtiQyxZQUFJLEVBQUU7QUFDSkMsb0JBQVUsRUFBRSxNQURSO0FBRUpDLGVBQUssRUFBRSxVQUZIO0FBR0pDLGtCQUFRLEVBQUUsSUFITjtBQUlKSixvQkFBVSxFQUFFO0FBSlI7QUFMTyxPQUFQO0FBQUE7QUFERjtBQURzQixHQWUzQlosV0FmMkI7QUFnQjlCaUIsT0FBSyxFQUFFO0FBQ0xDLFdBQU8sRUFBRSw0QkFESjtBQUVMTCxRQUFJLEVBQUUsMEJBRkQ7QUFHTE0sU0FBSyxFQUFFO0FBSEYsR0FoQnVCO0FBcUI5QkMsUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILFdBQUssU0FERjtBQUVILFdBQUssU0FGRjtBQUdILFdBQUssU0FIRjtBQUlILFdBQUsseUJBSkY7QUFLSCxXQUFLLFNBTEY7QUFNSCxXQUFLLG9CQU5GO0FBT0gsV0FBSztBQVBGLEtBREM7QUFVTkMsYUFBUyxFQUFFO0FBQ1QsV0FBSyxTQURJO0FBRVQsV0FBSztBQUZJLEtBVkw7QUFjTkMsU0FBSyxFQUFFO0FBQ0wsV0FBSztBQURBO0FBZEQsR0FyQnNCO0FBdUM5QkMsT0FBSyxFQUFFO0FBQ0wsUUFBSSxRQURDO0FBRUwsUUFBSSxPQUZDO0FBR0wsUUFBSSxTQUhDO0FBSUwsUUFBSSxPQUpDO0FBS0wsUUFBSSxPQUxDO0FBTUwsUUFBSSxPQU5DO0FBT0wsUUFBSSxPQVBDO0FBUUwsUUFBSSxPQVJDO0FBU0wsUUFBSSxPQVRDO0FBVUwsU0FBSyxPQVZBO0FBV0wsU0FBSyxPQVhBO0FBWUwsU0FBSyxPQVpBO0FBYUwsU0FBSyxPQWJBO0FBY0wsU0FBSyxPQWRBO0FBZUwsU0FBSyxPQWZBO0FBZ0JMLFNBQUssT0FoQkE7QUFpQkwsU0FBSyxPQWpCQTtBQWtCTCxTQUFLLE9BbEJBO0FBbUJMLFNBQUssT0FuQkE7QUFvQkwsU0FBSyxPQXBCQTtBQXFCTCxTQUFLLE9BckJBO0FBc0JMLFNBQUssT0F0QkE7QUF1QkwsU0FBSyxPQXZCQTtBQXdCTCxTQUFLLE9BeEJBO0FBeUJMLFNBQUssT0F6QkE7QUEwQkwsU0FBSyxPQTFCQTtBQTJCTCxTQUFLLE9BM0JBO0FBNEJMLFNBQUs7QUE1QkEsR0F2Q3VCO0FBcUU5QkMsT0FBSyxFQUFFO0FBQ0wsUUFBSSxRQURDO0FBRUwsUUFBSSxPQUZDO0FBR0wsUUFBSSxTQUhDO0FBSUwsUUFBSSxPQUpDO0FBS0wsUUFBSSxPQUxDO0FBTUwsUUFBSSxPQU5DO0FBT0wsUUFBSSxPQVBDO0FBUUwsUUFBSSxPQVJDO0FBU0wsUUFBSSxPQVRDO0FBVUwsU0FBSyxPQVZBO0FBV0wsU0FBSyxPQVhBO0FBWUwsU0FBSyxPQVpBO0FBYUwsU0FBSyxPQWJBO0FBY0wsU0FBSyxPQWRBO0FBZUwsU0FBSyxPQWZBO0FBZ0JMLFNBQUssT0FoQkE7QUFpQkwsU0FBSyxPQWpCQTtBQWtCTCxXQUFPLE9BbEJGO0FBbUJMLFNBQUssT0FuQkE7QUFvQkwsU0FBSyxPQXBCQTtBQXFCTCxTQUFLLE9BckJBO0FBc0JMLFdBQU8sVUF0QkY7QUF1QkwsU0FBSyxPQXZCQTtBQXdCTCxTQUFLLE9BeEJBO0FBeUJMLFNBQUssT0F6QkE7QUEwQkwsU0FBSyxXQTFCQTtBQTJCTCxTQUFLLE9BM0JBO0FBNEJMLFNBQUssT0E1QkE7QUE2QkwsU0FBSyxPQTdCQTtBQThCTCxTQUFLLE9BOUJBO0FBK0JMLFNBQUs7QUEvQkE7QUFyRXVCLEdBQXpCIiwiZmlsZSI6Ii4vdGhlbWUvdGhlbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmNvbnN0IGJyZWFrcG9pbnRzID0gWycyMi41ZW0nLCAnMzBlbScsICc0OGVtJywgJzYyZW0nLCAnODBlbScsICc5MGVtJ11cbi8vIGFsaWFzZXNcbmJyZWFrcG9pbnRzLnhzID0gYnJlYWtwb2ludHNbMF0gLy8gMzYwXG5icmVha3BvaW50cy5zbSA9IGJyZWFrcG9pbnRzWzFdIC8vIDQ4MFxuYnJlYWtwb2ludHMubWQgPSBicmVha3BvaW50c1syXSAvLyA3NjhcbmJyZWFrcG9pbnRzLmxnID0gYnJlYWtwb2ludHNbM10gLy8gOTkyXG5icmVha3BvaW50cy54bCA9IGJyZWFrcG9pbnRzWzRdIC8vIDEyODBcbmJyZWFrcG9pbnRzLnh4bCA9IGJyZWFrcG9pbnRzWzVdIC8vIDE0NDBcblxuZXhwb3J0IGNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuICBzdHlsZXM6IHtcbiAgICBnbG9iYWw6ICgpID0+ICh7XG4gICAgICAnaHRtbCwgYm9keSc6IHtcbiAgICAgICAgZm9udEZhbWlseTogJ1wiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgZm9udFdlaWdodDogNDAwXG4gICAgICB9LFxuICAgICAgYm9keToge1xuICAgICAgICBsaW5lSGVpZ2h0OiAndGFsbCcsXG4gICAgICAgIGNvbG9yOiAnZ3JheS43MDAnLFxuICAgICAgICBmb250U2l6ZTogJ21kJyxcbiAgICAgICAgZm9udFdlaWdodDogNDAwXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgLi4uYnJlYWtwb2ludHMsXG4gIGZvbnRzOiB7XG4gICAgaGVhZGluZzogJ1wiVFJZVmVzdGVyYnJvXCIsIHNhbnMtc2VyaWYnLFxuICAgIGJvZHk6ICdcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZicsXG4gICAgcXVvdGU6ICdcIlBsYXlmYWlyRGlzcGxheVwiLCBzYW5zLXNlcmlmJ1xuICB9LFxuICBjb2xvcnM6IHtcbiAgICBnY3U6IHtcbiAgICAgIDEwMDogJyNDODJCMzgnLFxuICAgICAgMjAwOiAnIzJFMzc0OCcsXG4gICAgICAzMDA6ICcjOUIwRDM5JyxcbiAgICAgIDM1MDogJ3JnYmEoMjAwLCA0MywgNTYsIDAuMDMpJyxcbiAgICAgIDQwMDogJyMwNDlGOUInLFxuICAgICAgNDUwOiAncmdiYSgwLCAwLCAwLCAwLjUpJyxcbiAgICAgIDUwMDogJyM2QTc5ODYnXG4gICAgfSxcbiAgICBnY3VCdXR0b246IHtcbiAgICAgIDUwMDogJyNDODJCMzgnLFxuICAgICAgNjAwOiAnI0M4MkIzOCdcbiAgICB9LFxuICAgIGdjdUxHOiB7XG4gICAgICAxMDA6ICdsaW5lYXItZ3JhZGllbnQoOTFkZWcsIHJnYmEoMCwgMCwgMCwgMC43OCkgMTAuNzQlLCByZ2JhKDAsIDAsIDAsIDApIDExNi44OSUpJ1xuICAgIH1cbiAgfSxcbiAgc3BhY2U6IHtcbiAgICAxNDogJzMuNXJlbScsXG4gICAgNjA6ICcxNXJlbScsXG4gICAgNjY6ICcxNy41cmVtJyxcbiAgICA3MDogJzE4cmVtJyxcbiAgICA4MDogJzIwcmVtJyxcbiAgICA4MjogJzIxcmVtJyxcbiAgICA4NTogJzIzcmVtJyxcbiAgICA5MDogJzI1cmVtJyxcbiAgICA5NTogJzI2cmVtJyxcbiAgICAxMDg6ICcyN3JlbScsXG4gICAgMTEwOiAnMzByZW0nLFxuICAgIDExNTogJzMycmVtJyxcbiAgICAxMjA6ICczNXJlbScsXG4gICAgMTIxOiAnMzZyZW0nLFxuICAgIDEyMjogJzM3cmVtJyxcbiAgICAxMjM6ICc0MHJlbScsXG4gICAgMTI0OiAnNDJyZW0nLFxuICAgIDEyNTogJzQ1cmVtJyxcbiAgICAxMjc6ICc0OHJlbScsXG4gICAgMTI5OiAnNTByZW0nLFxuICAgIDEzMDogJzU1cmVtJyxcbiAgICAxMzU6ICc2MHJlbScsXG4gICAgMTM3OiAnNjVyZW0nLFxuICAgIDE0MDogJzcwcmVtJyxcbiAgICAxNDM6ICc3MnJlbScsXG4gICAgMTQ1OiAnNzZyZW0nLFxuICAgIDE1MDogJzgwcmVtJyxcbiAgICAxNTU6ICc5MHJlbSdcbiAgfSxcbiAgc2l6ZXM6IHtcbiAgICAxNDogJzMuNXJlbScsXG4gICAgNjA6ICcxNXJlbScsXG4gICAgNjY6ICcxNy41cmVtJyxcbiAgICA3MDogJzE4cmVtJyxcbiAgICA4MDogJzIwcmVtJyxcbiAgICA4MjogJzIxcmVtJyxcbiAgICA4NTogJzIzcmVtJyxcbiAgICA5MDogJzI1cmVtJyxcbiAgICA5NTogJzI2cmVtJyxcbiAgICAxMDg6ICcyN3JlbScsXG4gICAgMTA5OiAnMjhyZW0nLFxuICAgIDExMDogJzMwcmVtJyxcbiAgICAxMTU6ICczMnJlbScsXG4gICAgMTIwOiAnMzVyZW0nLFxuICAgIDEyMjogJzM3cmVtJyxcbiAgICAxMjM6ICc0MHJlbScsXG4gICAgMTI0OiAnNDJyZW0nLFxuICAgIDEyNC41OiAnNDNyZW0nLFxuICAgIDEyNTogJzQ1cmVtJyxcbiAgICAxMjc6ICc0OHJlbScsXG4gICAgMTI5OiAnNTByZW0nLFxuICAgIDEyOS41OiAnNTAuMjVyZW0nLFxuICAgIDEzMDogJzU1cmVtJyxcbiAgICAxMzU6ICc2MHJlbScsXG4gICAgMTM3OiAnNjVyZW0nLFxuICAgIDEzODogJzY1LjQzOHJlbScsXG4gICAgMTQwOiAnNzByZW0nLFxuICAgIDE0MzogJzcycmVtJyxcbiAgICAxNDU6ICc3NnJlbScsXG4gICAgMTUwOiAnODByZW0nLFxuICAgIDE1NTogJzkwcmVtJ1xuICB9XG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./theme/theme.js\n");

/***/ })

})