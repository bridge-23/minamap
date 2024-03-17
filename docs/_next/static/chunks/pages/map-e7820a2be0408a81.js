(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[538],{

/***/ 6206:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/map",
      function () {
        return __webpack_require__(3229);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 3229:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _public_images_countries_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7395);



function MapPage() {
    const [visitedCountries, setVisitedCountries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            code: "ID",
            name: "Indonesia"
        },
        {
            code: "VN",
            name: "Vietnam_mainland"
        }
    ]);
    const handleCountryClick = (svgId)=>{
        const countryName = svgId.replace("countries_svg__", "");
        if (!visitedCountries.some((country)=>country.name === countryName)) {
            const newCountry = {
                code: svgId,
                name: countryName
            };
            setVisitedCountries([
                ...visitedCountries,
                newCountry
            ]);
            console.log("Country ".concat(svgId, " point added!"));
        }
        // Add class to visited country
        const visitedCountryElement = document.getElementById(svgId);
        if (visitedCountryElement) {
            visitedCountryElement.classList.add("visited-country");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_public_images_countries_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            onClick: (e)=>{
                if (e.target.id) {
                    handleCountryClick(e.target.id);
                }
            }
        })
    });
}
/* harmony default export */ __webpack_exports__["default"] = (MapPage);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [395,888,774,179], function() { return __webpack_exec__(6206); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);