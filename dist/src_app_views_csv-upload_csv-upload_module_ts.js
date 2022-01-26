"use strict";
(self["webpackChunkcoreui_free_angular_admin_template"] = self["webpackChunkcoreui_free_angular_admin_template"] || []).push([["src_app_views_csv-upload_csv-upload_module_ts"],{

/***/ 506:
/*!***************************************************************!*\
  !*** ./src/app/views/csv-upload/csv-upload-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CsvUploadRoutingModule": () => (/* binding */ CsvUploadRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _csv_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csv-upload.component */ 2561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);




const routes = [
    {
        path: '',
        data: {
            title: 'CSV Upload',
        },
        children: [
            {
                path: '',
                redirectTo: 'upload',
            },
            {
                path: 'upload',
                component: _csv_upload_component__WEBPACK_IMPORTED_MODULE_0__.CsvUploadComponent,
                data: {
                    title: 'CSV Upload',
                },
            },
            // {
            //   path: 'typography',
            //   component: TypographyComponent,
            //   data: {
            //     title: 'Typography',
            //   },
            // },
        ],
    },
];
class CsvUploadRoutingModule {
}
CsvUploadRoutingModule.ɵfac = function CsvUploadRoutingModule_Factory(t) { return new (t || CsvUploadRoutingModule)(); };
CsvUploadRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CsvUploadRoutingModule });
CsvUploadRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CsvUploadRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2561:
/*!**********************************************************!*\
  !*** ./src/app/views/csv-upload/csv-upload.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CsvUploadComponent": () => (/* binding */ CsvUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class CsvUploadComponent {
    constructor() { }
    ngOnInit() {
    }
}
CsvUploadComponent.ɵfac = function CsvUploadComponent_Factory(t) { return new (t || CsvUploadComponent)(); };
CsvUploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CsvUploadComponent, selectors: [["app-csv-upload"]], decls: 0, vars: 0, template: function CsvUploadComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjc3YtdXBsb2FkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5517:
/*!*******************************************************!*\
  !*** ./src/app/views/csv-upload/csv-upload.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CsvUploadModule": () => (/* binding */ CsvUploadModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _csv_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csv-upload-routing.module */ 506);
/* harmony import */ var _csv_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./csv-upload.component */ 2561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);




class CsvUploadModule {
}
CsvUploadModule.ɵfac = function CsvUploadModule_Factory(t) { return new (t || CsvUploadModule)(); };
CsvUploadModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CsvUploadModule });
CsvUploadModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _csv_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__.CsvUploadRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CsvUploadModule, { declarations: [_csv_upload_component__WEBPACK_IMPORTED_MODULE_1__.CsvUploadComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _csv_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__.CsvUploadRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_csv-upload_csv-upload_module_ts.js.map