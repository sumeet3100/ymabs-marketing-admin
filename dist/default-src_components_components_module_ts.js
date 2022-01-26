"use strict";
(self["webpackChunkcoreui_free_angular_admin_template"] = self["webpackChunkcoreui_free_angular_admin_template"] || []).push([["default-src_components_components_module_ts"],{

/***/ 726:
/*!*********************************************!*\
  !*** ./src/components/components.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/angular */ 9127);
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/icons-angular */ 6705);
/* harmony import */ var _docs_example_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs-example/docs-example.component */ 4201);
/* harmony import */ var _docs_link_docs_link_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs-link/docs-link.component */ 7172);
/* harmony import */ var _docs_callout_docs_callout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./docs-callout/docs-callout.component */ 7729);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);








class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.NavModule,
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__.IconModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.TabsModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.UtilitiesModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.CalloutModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_docs_example_docs_example_component__WEBPACK_IMPORTED_MODULE_0__.DocsExampleComponent,
        _docs_link_docs_link_component__WEBPACK_IMPORTED_MODULE_1__.DocsLinkComponent,
        _docs_callout_docs_callout_component__WEBPACK_IMPORTED_MODULE_2__.DocsCalloutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.NavModule,
        _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__.IconModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.TabsModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.UtilitiesModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.CalloutModule], exports: [_docs_example_docs_example_component__WEBPACK_IMPORTED_MODULE_0__.DocsExampleComponent,
        _docs_link_docs_link_component__WEBPACK_IMPORTED_MODULE_1__.DocsLinkComponent,
        _docs_callout_docs_callout_component__WEBPACK_IMPORTED_MODULE_2__.DocsCalloutComponent] }); })();


/***/ }),

/***/ 7729:
/*!***************************************************************!*\
  !*** ./src/components/docs-callout/docs-callout.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocsCalloutComponent": () => (/* binding */ DocsCalloutComponent)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../package.json */ 4147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/angular */ 9127);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);




function DocsCalloutComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function DocsCalloutComponent_ng_template_2_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate6"](" An Angular ", ctx_r3.name, " component", ctx_r3.plural ? "s" : "", " ", ctx_r3.plural ? "have" : "has", " been created as a native Angular version of Bootstrap ", ctx_r3.name, ". ", ctx_r3.name, " ", ctx_r3.plural ? "are" : "is", " delivered with some new features, variants, and unique design that matches CoreUI Design System requirements. ");
} }
function DocsCalloutComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DocsCalloutComponent_ng_template_2_p_0_Template, 2, 6, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " For more information please visit our official ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "documentation of CoreUI Components Library for Angular.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r2.href, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
const _c0 = ["*"];
class DocsCalloutComponent {
    constructor() {
        this.name = '';
        this._href = 'https://coreui.io/angular/docs/';
    }
    get href() {
        return this._href;
    }
    set href(value) {
        var _a, _b, _c;
        const version = (_a = _package_json__WEBPACK_IMPORTED_MODULE_0__ === null || _package_json__WEBPACK_IMPORTED_MODULE_0__ === void 0 ? void 0 : _package_json__WEBPACK_IMPORTED_MODULE_0__.config) === null || _a === void 0 ? void 0 : _a.coreui_library_short_version;
        const docsUrl = (_c = (_b = _package_json__WEBPACK_IMPORTED_MODULE_0__ === null || _package_json__WEBPACK_IMPORTED_MODULE_0__ === void 0 ? void 0 : _package_json__WEBPACK_IMPORTED_MODULE_0__.config) === null || _b === void 0 ? void 0 : _b.coreui_library_docs_url) !== null && _c !== void 0 ? _c : 'https://coreui.io/angular/';
        const path = version ? `${version}/${value}` : '';
        this._href = `${docsUrl}${path}`;
    }
    get plural() {
        var _a;
        return ((_a = this.name) === null || _a === void 0 ? void 0 : _a.slice(-1)) === 's';
    }
}
DocsCalloutComponent.ɵfac = function DocsCalloutComponent_Factory(t) { return new (t || DocsCalloutComponent)(); };
DocsCalloutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DocsCalloutComponent, selectors: [["app-docs-callout"]], inputs: { name: "name", href: "href" }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [["color", "info", 1, "bg-white:dark:bg-transparent"], [4, "ngTemplateOutlet"], ["default", ""], [4, "ngIf"], ["target", "_blank", 3, "href"]], template: function DocsCalloutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "c-callout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DocsCalloutComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DocsCalloutComponent_ng_template_2_Template, 6, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    } }, directives: [_coreui_angular__WEBPACK_IMPORTED_MODULE_2__.CalloutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2NzLWNhbGxvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4201:
/*!***************************************************************!*\
  !*** ./src/components/docs-example/docs-example.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocsExampleComponent": () => (/* binding */ DocsExampleComponent)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../package.json */ 4147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/angular */ 9127);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons-angular */ 6705);





const _c0 = ["*"];
class DocsExampleComponent {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this._href = 'https://coreui.io/angular/docs/';
    }
    get href() {
        return this._href;
    }
    set href(value) {
        var _a, _b, _c;
        const version = (_a = _package_json__WEBPACK_IMPORTED_MODULE_0__ === null || _package_json__WEBPACK_IMPORTED_MODULE_0__ === void 0 ? void 0 : _package_json__WEBPACK_IMPORTED_MODULE_0__.config) === null || _a === void 0 ? void 0 : _a.coreui_library_short_version;
        const docsUrl = (_c = (_b = _package_json__WEBPACK_IMPORTED_MODULE_0__ === null || _package_json__WEBPACK_IMPORTED_MODULE_0__ === void 0 ? void 0 : _package_json__WEBPACK_IMPORTED_MODULE_0__.config) === null || _b === void 0 ? void 0 : _b.coreui_library_docs_url) !== null && _c !== void 0 ? _c : 'https://coreui.io/angular/';
        // const path: string = version ? `${version}/#/${value}` : '#';
        const path = version ? `${version}/${value}` : '';
        this._href = `${docsUrl}${path}`;
    }
    ngAfterContentInit() {
        this.changeDetectorRef.detectChanges();
    }
    ngAfterViewInit() {
        this.changeDetectorRef.markForCheck();
    }
}
DocsExampleComponent.ɵfac = function DocsExampleComponent_Factory(t) { return new (t || DocsExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
DocsExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DocsExampleComponent, selectors: [["app-docs-example"]], inputs: { fragment: "fragment", href: "href" }, ngContentSelectors: _c0, decls: 14, vars: 5, consts: [[1, "example", "mb-3"], ["variant", "tabs"], ["routerLink", "./", "cNavLink", "", 3, "active", "cTabContent", "fragment", "tabPaneIdx"], ["name", "cilMediaPlay", 1, "me-2"], ["cNavLink", "", "target", "_blank", 3, "href"], ["name", "cilCode", 1, "me-2"], ["cRounded", "bottom"], ["tabContent", "cTabContent"], ["aria-labelledby", "docs-code-preview", "role", "tabpanel", 1, "p-3", "preview"]], template: function DocsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "c-nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "c-nav-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "c-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Preview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "c-nav-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "c-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "c-tab-content", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "c-tab-pane", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("active", true)("cTabContent", _r0)("fragment", ctx.fragment)("tabPaneIdx", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.href, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_coreui_angular__WEBPACK_IMPORTED_MODULE_2__.NavComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_2__.NavItemComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _coreui_angular__WEBPACK_IMPORTED_MODULE_2__.NavLinkDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_2__.TabContentRefDirective, _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_2__.TabContentComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_2__.RoundedDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_2__.TabPaneComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2NzLWV4YW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 7172:
/*!*********************************************************!*\
  !*** ./src/components/docs-link/docs-link.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocsLinkComponent": () => (/* binding */ DocsLinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class DocsLinkComponent {
    constructor() {
        this.href = 'https://coreui.io/angular/docs/';
    }
    get hostClasses() {
        return {
            'float-end': true
        };
    }
    ngOnInit() {
        this.href = this.name ? `https://coreui.io/angular/docs/components/${this.name}` : this.href;
    }
}
DocsLinkComponent.ɵfac = function DocsLinkComponent_Factory(t) { return new (t || DocsLinkComponent)(); };
DocsLinkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocsLinkComponent, selectors: [["app-docs-link"]], hostVars: 2, hostBindings: function DocsLinkComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.hostClasses);
    } }, inputs: { href: "href", name: "name", text: "text" }, decls: 4, vars: 2, consts: [[1, "float-end"], ["rel", "noreferrer noopener", "target", "_blank", 1, "card-header-action", 3, "href"], [1, "text-medium-emphasis"]], template: function DocsLinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_1_0 = ctx.text) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "docs");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2NzLWxpbmsuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"y-mabs","version":"4.0.0-alpha.3","config":{"coreui_library_short_version":"4.0","coreui_library_docs_url":"https://coreui.io/angular/docs/"},"scripts":{"ng":"ng","start":"ng serve","build":"ng build","watch":"ng build --watch --configuration development","test":"ng test"},"private":true,"dependencies":{"@angular/animations":"~13.0.0","@angular/cdk":"~13.0.0","@angular/common":"~13.0.0","@angular/compiler":"~13.0.0","@angular/core":"~13.0.0","@angular/forms":"~13.0.0","@angular/language-service":"~13.0.0","@angular/platform-browser":"~13.0.0","@angular/platform-browser-dynamic":"~13.0.0","@angular/router":"~13.0.0","@coreui/angular":"^4.0.0-alpha.3","@coreui/angular-chartjs":"^2.0.0-alpha.6","@coreui/chartjs":"^3.0.0","@coreui/coreui":"~4.0.5","@coreui/icons":"^2.1.0","@coreui/icons-angular":"^3.0.0-alpha.4","@coreui/utils":"^1.3.1","chart.js":"^3.6.1","ngx-perfect-scrollbar":"^10.1.1","rxjs":"~7.4.0","tslib":"^2.3.0","zone.js":"~0.11.4"},"devDependencies":{"@angular-devkit/build-angular":"~13.0.4","@angular/cli":"~13.0.4","@angular/compiler-cli":"~13.0.0","@angular/localize":"~13.0.0","@types/jasmine":"~3.10.0","@types/node":"^16.11.11","jasmine-core":"~3.10.0","karma":"~6.3.0","karma-chrome-launcher":"~3.1.0","karma-coverage":"~2.0.3","karma-jasmine":"~4.0.0","karma-jasmine-html-reporter":"~1.7.0","typescript":"~4.4.3"},"engines":{"node":"^12.20.0 || ^14.15.0 || >=16.10.0","npm":">= 6"}}');

/***/ })

}]);
//# sourceMappingURL=default-src_components_components_module_ts.js.map