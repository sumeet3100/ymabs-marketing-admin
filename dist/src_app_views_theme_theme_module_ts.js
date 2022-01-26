"use strict";
(self["webpackChunkcoreui_free_angular_admin_template"] = self["webpackChunkcoreui_free_angular_admin_template"] || []).push([["src_app_views_theme_theme_module_ts"],{

/***/ 5995:
/*!*********************************************************************!*\
  !*** ./node_modules/@coreui/utils/src/get-css-custom-properties.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://coreui.io/license)
 * @returns {string} css custom property name
 * --------------------------------------------------------------------------
 */
const getCssCustomProperties = () => {
  const cssCustomProperties = {}
  const sheets = document.styleSheets
  let cssText = ''
  for (let i = sheets.length - 1; i > -1; i--) {
    const rules = sheets[i].cssRules
    for (let j = rules.length - 1; j > -1; j--) {
      if (rules[j].selectorText === '.ie-custom-properties') {
        // eslint-disable-next-line prefer-destructuring
        cssText = rules[j].cssText
        break
      }
    }

    if (cssText) {
      break
    }
  }

  // eslint-disable-next-line unicorn/prefer-string-slice
  cssText = cssText.substring(
    cssText.lastIndexOf('{') + 1,
    cssText.lastIndexOf('}')
  )

  cssText.split(';').forEach(property => {
    if (property) {
      const name = property.split(': ')[0]
      const value = property.split(': ')[1]
      if (name && value) {
        cssCustomProperties[`--${name.trim()}`] = value.trim()
      }
    }
  })
  return cssCustomProperties
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCssCustomProperties);


/***/ }),

/***/ 1677:
/*!*****************************************************!*\
  !*** ./node_modules/@coreui/utils/src/get-style.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_css_custom_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-css-custom-properties */ 5995);


const minIEVersion = 10
const isIE1x = () => Boolean(document.documentMode) && document.documentMode >= minIEVersion
const isCustomProperty = property => property.match(/^--.*/i)

const getStyle = (property, element = document.body) => {
  let style

  if (isCustomProperty(property) && isIE1x()) {
    const cssCustomProperties = (0,_get_css_custom_properties__WEBPACK_IMPORTED_MODULE_0__["default"])()
    style = cssCustomProperties[property]
  } else {
    style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '')
  }

  return style
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getStyle);


/***/ }),

/***/ 9271:
/*!******************************************************!*\
  !*** ./node_modules/@coreui/utils/src/rgb-to-hex.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-magic-numbers */
const rgbToHex = color => {
  if (typeof color === 'undefined') {
    throw new TypeError('Hex color is not defined')
  }

  if (color === 'transparent') {
    return '#00000000'
  }

  const rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)

  if (!rgb) {
    throw new Error(`${color} is not a valid rgb color`)
  }

  const r = `0${parseInt(rgb[1], 10).toString(16)}`
  const g = `0${parseInt(rgb[2], 10).toString(16)}`
  const b = `0${parseInt(rgb[3], 10).toString(16)}`

  return `#${r.slice(-2)}${g.slice(-2)}${b.slice(-2)}`
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rgbToHex);


/***/ }),

/***/ 3524:
/*!*************************************************!*\
  !*** ./src/app/views/theme/colors.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorsComponent": () => (/* binding */ ColorsComponent),
/* harmony export */   "ThemeColorComponent": () => (/* binding */ ThemeColorComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/utils/src */ 1677);
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/utils/src */ 9271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/angular */ 9127);





const _c0 = ["*"];
class ColorsComponent {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    themeColors() {
        Array.from(this.document.querySelectorAll('.theme-color')).forEach(
        // @ts-ignore
        (el) => {
            const background = (0,_coreui_utils_src__WEBPACK_IMPORTED_MODULE_0__["default"])('background-color', el);
            const table = this.renderer.createElement('table');
            table.innerHTML = `
          <table class='table w-100'>
            <tr>
              <td class='text-muted'>HEX:</td>
              <td class='font-weight-bold'>${(0,_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["default"])(background)}</td>
            </tr>
            <tr>
              <td class='text-muted'>RGB:</td>
              <td class='font-weight-bold'>${background}</td>
            </tr>
          </table>
        `;
            this.renderer.appendChild(el.parentNode, table);
            // @ts-ignore
            // el.parentNode.appendChild(table);
        });
    }
    ngOnInit() {
        // this.themeColors();
    }
    ngAfterViewInit() {
        this.themeColors();
    }
}
ColorsComponent.ɵfac = function ColorsComponent_Factory(t) { return new (t || ColorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2)); };
ColorsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ColorsComponent, selectors: [["ng-component"]], decls: 30, vars: 0, consts: [[1, "fade-in"], [1, "mb-4"], ["color", "primary"], ["color", "secondary"], ["color", "success"], ["color", "danger"], ["color", "warning"], ["color", "info"], ["color", "light"], ["color", "dark"]], template: function ColorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "c-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Theme colors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "c-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "app-theme-color", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Brand Primary Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "app-theme-color", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Brand Secondary Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "app-theme-color", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Brand Success Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "app-theme-color", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Brand Danger Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "app-theme-color", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Brand Warning Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "app-theme-color", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Brand Info Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "app-theme-color", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Brand Light Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "app-theme-color", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Brand Dark Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: function () { return [_coreui_angular__WEBPACK_IMPORTED_MODULE_4__.CardComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.CardHeaderComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.CardBodyComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.RowComponent, ThemeColorComponent]; }, encapsulation: 2 });
class ThemeColorComponent {
    constructor() {
        this.color = '';
        this.colorClasses = {
            'theme-color w-75 rounded mb-3': true
        };
        this.display = 'contents';
    }
    ngOnInit() {
        this.colorClasses = Object.assign(Object.assign({}, this.colorClasses), { [`bg-${this.color}`]: !!this.color });
    }
}
ThemeColorComponent.ɵfac = function ThemeColorComponent_Factory(t) { return new (t || ThemeColorComponent)(); };
ThemeColorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ThemeColorComponent, selectors: [["app-theme-color"]], hostVars: 2, hostBindings: function ThemeColorComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.display);
    } }, inputs: { color: "color" }, ngContentSelectors: _c0, decls: 3, vars: 1, consts: [["xl", "2", "md", "4", "sm", "6", "xs", "12", 1, "my-4", "ms-4"], [2, "padding-top", "75%", 3, "ngClass"]], template: function ThemeColorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.colorClasses);
    } }, directives: [_coreui_angular__WEBPACK_IMPORTED_MODULE_4__.ColComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], encapsulation: 2 });


/***/ }),

/***/ 1349:
/*!*****************************************************!*\
  !*** ./src/app/views/theme/theme-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeRoutingModule": () => (/* binding */ ThemeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _colors_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors.component */ 3524);
/* harmony import */ var _typography_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography.component */ 1415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);





const routes = [
    {
        path: '',
        data: {
            title: 'Theme',
        },
        children: [
            {
                path: '',
                redirectTo: 'colors',
            },
            {
                path: 'colors',
                component: _colors_component__WEBPACK_IMPORTED_MODULE_0__.ColorsComponent,
                data: {
                    title: 'Colors',
                },
            },
            {
                path: 'typography',
                component: _typography_component__WEBPACK_IMPORTED_MODULE_1__.TypographyComponent,
                data: {
                    title: 'Typography',
                },
            },
        ],
    },
];
class ThemeRoutingModule {
}
ThemeRoutingModule.ɵfac = function ThemeRoutingModule_Factory(t) { return new (t || ThemeRoutingModule)(); };
ThemeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ThemeRoutingModule });
ThemeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ThemeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5749:
/*!*********************************************!*\
  !*** ./src/app/views/theme/theme.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeModule": () => (/* binding */ ThemeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/angular */ 9127);
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/icons-angular */ 6705);
/* harmony import */ var _colors_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors.component */ 3524);
/* harmony import */ var _typography_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography.component */ 1415);
/* harmony import */ var _theme_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-routing.module */ 1349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);





// Theme Routing


class ThemeModule {
}
ThemeModule.ɵfac = function ThemeModule_Factory(t) { return new (t || ThemeModule)(); };
ThemeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ThemeModule });
ThemeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _theme_routing_module__WEBPACK_IMPORTED_MODULE_2__.ThemeRoutingModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.CardModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.GridModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.UtilitiesModule,
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__.IconModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.NavModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.TabsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ThemeModule, { declarations: [_colors_component__WEBPACK_IMPORTED_MODULE_0__.ColorsComponent,
        _colors_component__WEBPACK_IMPORTED_MODULE_0__.ThemeColorComponent,
        _typography_component__WEBPACK_IMPORTED_MODULE_1__.TypographyComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _theme_routing_module__WEBPACK_IMPORTED_MODULE_2__.ThemeRoutingModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.CardModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.GridModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.UtilitiesModule,
        _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__.IconModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.NavModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.TabsModule] }); })();


/***/ }),

/***/ 1415:
/*!*****************************************************!*\
  !*** ./src/app/views/theme/typography.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypographyComponent": () => (/* binding */ TypographyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/angular */ 9127);


class TypographyComponent {
    constructor() { }
}
TypographyComponent.ɵfac = function TypographyComponent_Factory(t) { return new (t || TypographyComponent)(); };
TypographyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TypographyComponent, selectors: [["ng-component"]], decls: 191, vars: 0, consts: [[1, "fade-in"], [1, "mb-4"], [1, "table"], [1, "c-highlighter-rouge"], [1, "bd-example"], [1, "h1"], [1, "h2"], [1, "h3"], [1, "h4"], [1, "h5"], [1, "h6"], ["id", "someAnchorage", 1, "mb-4"], [1, "bd-example", "bd-example-type"], [1, "display-1"], [1, "display-2"], [1, "display-3"], [1, "display-4"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-9"], [1, "col-sm-3", "c-d-block", "c-text-truncate"], [1, "col-sm-9", "c-d-block", "c-text-truncate"], [1, "col-sm-4"], [1, "col-sm-8"]], template: function TypographyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "c-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Headings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "code", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "<h1></h1>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "h1. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "<h2></h2>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "h2. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "code", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "<h3></h3>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "h3. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "<h4></h4>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "h4. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "code", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "<h5></h5>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "h5. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "<h6></h6>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "h6. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "c-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Headings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "code", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, ".h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " through ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "code", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, ".h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "h1. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "h2. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "h3. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "h4. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "h5. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "h6. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "c-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Display headings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "display heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u2014a larger, slightly more opinionated heading style.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Display 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Display 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Display 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Display 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "c-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Inline text elements ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "display heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\u2014a larger, slightly more opinionated heading style.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "You can use the mark tag to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "highlight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "This line of text is meant to be treated as deleted text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "This line of text is meant to be treated as no longer accurate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "ins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "This line of text is meant to be treated as an addition to the document.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "This line of text will render as underlined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "This line of text is meant to be treated as fine print.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "This line rendered as bold text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "This line rendered as italicized text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "c-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Description list alignment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Align terms and descriptions horizontally by using our grid system\u2019s predefined classes (or semantic mixins). For longer terms, you can optionally add a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "code", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, ".text-truncate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " class to truncate the text with an ellipsis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "dl", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "dt", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Description lists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "dd", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "A description list is perfect for defining terms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "dt", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Euismod");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "dd", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Donec id elit non mi porta gravida at eget metus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "dt", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Malesuada porta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "dd", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Etiam porta sem malesuada magna mollis euismod.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "dt", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Truncated term is truncated with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "d-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "dd", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "dt", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Nesting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "dd", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "dl", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "dt", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Nested definition list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "dd", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_coreui_angular__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.CardHeaderComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.CardBodyComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_views_theme_theme_module_ts.js.map