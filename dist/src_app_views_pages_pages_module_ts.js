"use strict";
(self["webpackChunkcoreui_free_angular_admin_template"] = self["webpackChunkcoreui_free_angular_admin_template"] || []).push([["src_app_views_pages_pages_module_ts"],{

/***/ 8992:
/*!*****************************************************!*\
  !*** ./src/app/views/pages/pages-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesRoutingModule": () => (/* binding */ PagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page404/page404.component */ 328);
/* harmony import */ var _page500_page500_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page500/page500.component */ 3376);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 9753);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ 7411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);







const routes = [
    {
        path: '404',
        component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_0__.Page404Component,
        data: {
            title: 'Page 404'
        }
    },
    {
        path: '500',
        component: _page500_page500_component__WEBPACK_IMPORTED_MODULE_1__.Page500Component,
        data: {
            title: 'Page 500'
        }
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
        data: {
            title: 'Login Page'
        }
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent,
        data: {
            title: 'Register Page'
        }
    }
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵfac = function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); };
PagesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 157:
/*!*********************************************!*\
  !*** ./src/app/views/pages/pages.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages-routing.module */ 8992);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 9753);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ 7411);
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page404/page404.component */ 328);
/* harmony import */ var _page500_page500_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page500/page500.component */ 3376);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @coreui/angular */ 9127);
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @coreui/icons-angular */ 6705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);










class PagesModule {
}
PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
PagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_7__.CardModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_7__.ButtonModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_7__.GridModule,
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_8__.IconModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_7__.FormModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
        _register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent,
        _page404_page404_component__WEBPACK_IMPORTED_MODULE_3__.Page404Component,
        _page500_page500_component__WEBPACK_IMPORTED_MODULE_4__.Page500Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_7__.CardModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_7__.ButtonModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_7__.GridModule,
        _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_8__.IconModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_7__.FormModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_pages_module_ts.js.map