"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[602],{

/***/ 7602:
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(__webpack_module__, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinaMap: function() { return /* binding */ MinaMap; }
/* harmony export */ });
/* harmony import */ var o1js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9466);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([o1js__WEBPACK_IMPORTED_MODULE_0__]);
o1js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 */
class MinaMap extends o1js__WEBPACK_IMPORTED_MODULE_0__/* .SmartContract */ .C3 {
    constructor() {
        super(...arguments);
        this.countries = (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)();
    }
    init() {
        super.init();
        this.countries.set(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN.fromBits([true, false, true, false, true, false, true, false]));
    }
    setCountries(newCountries) {
        this.countries.getAndRequireEquals();
        this.countries.set(newCountries);
    }
}
__decorate([
    (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN),
    __metadata("design:type", Object)
], MinaMap.prototype, "countries", void 0);
__decorate([
    o1js__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN]),
    __metadata("design:returntype", void 0)
], MinaMap.prototype, "setCountries", null);
//# sourceMappingURL=MinaMap.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);