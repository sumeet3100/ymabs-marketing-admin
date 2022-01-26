"use strict";
(self["webpackChunkcoreui_free_angular_admin_template"] = self["webpackChunkcoreui_free_angular_admin_template"] || []).push([["default-src_app_views_widgets_widgets_module_ts"],{

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

/***/ 5196:
/*!************************************************************************!*\
  !*** ./src/app/views/widgets/widgets-brand/widgets-brand.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetsBrandComponent": () => (/* binding */ WidgetsBrandComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/angular */ 9127);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-angular */ 6705);
/* harmony import */ var _coreui_angular_chartjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/angular-chartjs */ 6870);





function WidgetsBrandComponent_c_col_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "c-chart", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const widget_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", widget_r1.data)("options", ctx_r3.chartOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r4.id);
} }
function WidgetsBrandComponent_c_col_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "c-col", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "c-widget-stat-d", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WidgetsBrandComponent_c_col_1_ng_container_3_Template, 4, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const widget_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"]((tmp_0_0 = widget_r1.capBg) !== null && tmp_0_0 !== undefined ? tmp_0_0 : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", (tmp_1_0 = widget_r1.color) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "")("values", widget_r1.values);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", widget_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.withCharts);
} }
class WidgetsBrandComponent {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        // @ts-ignore
        this.chartOptions = {
            elements: {
                line: {
                    tension: 0.4
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3
                }
            },
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            }
        };
        this.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.datasets = {
            borderWidth: 2,
            fill: true
        };
        this.colors = {
            backgroundColor: 'rgba(255,255,255,.1)',
            borderColor: 'rgba(255,255,255,.55)',
            pointHoverBackgroundColor: '#fff'
        };
        this.brandData = [
            {
                icon: 'cibFacebook',
                values: [{ title: 'friends', value: '89K' }, { title: 'feeds', value: '459' }],
                capBg: { '--cui-card-cap-bg': '#3b5998' },
                labels: [...this.labels],
                data: {
                    labels: [...this.labels],
                    datasets: [Object.assign(Object.assign(Object.assign({}, this.datasets), { data: [65, 59, 84, 84, 51, 55, 40], label: 'Facebook' }), this.colors)]
                }
            },
            {
                icon: 'cibTwitter',
                values: [{ title: 'followers', value: '973k' }, { title: 'tweets', value: '1.792' }],
                capBg: { '--cui-card-cap-bg': '#00aced' },
                data: {
                    labels: [...this.labels],
                    datasets: [Object.assign(Object.assign(Object.assign({}, this.datasets), { data: [1, 13, 9, 17, 34, 41, 38], label: 'Twitter' }), this.colors)]
                }
            },
            {
                icon: 'cib-linkedin',
                values: [{ title: 'contacts', value: '500' }, { title: 'feeds', value: '1.292' }],
                capBg: { '--cui-card-cap-bg': '#4875b4' },
                data: {
                    labels: [...this.labels],
                    datasets: [Object.assign(Object.assign(Object.assign({}, this.datasets), { data: [78, 81, 80, 45, 34, 12, 40], label: 'LinkedIn' }), this.colors)]
                }
            },
            {
                icon: 'cilCalendar',
                values: [{ title: 'events', value: '12+' }, { title: 'meetings', value: '4' }],
                color: 'warning',
                data: {
                    labels: [...this.labels],
                    datasets: [Object.assign(Object.assign(Object.assign({}, this.datasets), { data: [35, 23, 56, 22, 97, 23, 64], label: 'Events' }), this.colors)]
                }
            }
        ];
    }
    capStyle(value) {
        return !!value ? { '--cui-card-cap-bg': value } : {};
    }
    ngAfterContentInit() {
        this.changeDetectorRef.detectChanges();
    }
}
WidgetsBrandComponent.ɵfac = function WidgetsBrandComponent_Factory(t) { return new (t || WidgetsBrandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
WidgetsBrandComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetsBrandComponent, selectors: [["app-widgets-brand"]], inputs: { withCharts: "withCharts" }, decls: 2, vars: 1, consts: [["sm", "6", "xl", "3", 4, "ngFor", "ngForOf"], ["sm", "6", "xl", "3"], [1, "mb-4", 3, "color", "values"], ["cIcon", "", "height", "52", 1, "my-4", "text-white", 3, "name"], [4, "ngIf"], ["type", "line", 1, "position-absolute", "w-100", "h-100", 3, "data", "options"], ["chart", "cChart"]], template: function WidgetsBrandComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "c-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WidgetsBrandComponent_c_col_1_Template, 4, 6, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.brandData);
    } }, directives: [_coreui_angular__WEBPACK_IMPORTED_MODULE_1__.RowComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.ColComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.WidgetStatDComponent, _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__.IconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _coreui_angular_chartjs__WEBPACK_IMPORTED_MODULE_4__.ChartjsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXRzLWJyYW5kLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3485:
/*!******************************************************************************!*\
  !*** ./src/app/views/widgets/widgets-dropdown/widgets-dropdown.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetsDropdownComponent": () => (/* binding */ WidgetsDropdownComponent),
/* harmony export */   "ChartSample": () => (/* binding */ ChartSample)
/* harmony export */ });
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/utils/src */ 1677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _coreui_angular_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/angular-chartjs */ 6870);



const _c0 = ["chart"];
class WidgetsDropdownComponent {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.data = [];
        this.options = [];
        this.labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
            'January',
            'February',
            'March',
            'April'
        ];
        this.datasets = [
            [{
                    label: 'My First dataset',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: (0,_coreui_utils_src__WEBPACK_IMPORTED_MODULE_0__["default"])('--cui-primary'),
                    pointHoverBorderColor: (0,_coreui_utils_src__WEBPACK_IMPORTED_MODULE_0__["default"])('--cui-primary'),
                    data: [65, 59, 84, 84, 51, 55, 40]
                }], [{
                    label: 'My Second dataset',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: (0,_coreui_utils_src__WEBPACK_IMPORTED_MODULE_0__["default"])('--cui-info'),
                    pointHoverBorderColor: (0,_coreui_utils_src__WEBPACK_IMPORTED_MODULE_0__["default"])('--cui-info'),
                    data: [1, 18, 9, 17, 34, 22, 11]
                }], [{
                    label: 'My Third dataset',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: (0,_coreui_utils_src__WEBPACK_IMPORTED_MODULE_0__["default"])('--cui-warning'),
                    pointHoverBorderColor: (0,_coreui_utils_src__WEBPACK_IMPORTED_MODULE_0__["default"])('--cui-warning'),
                    data: [78, 81, 80, 45, 34, 12, 40],
                    fill: true
                }], [{
                    label: 'My Fourth dataset',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                    barPercentage: 0.7
                }]
        ];
        this.optionsDefault = {
            plugins: {
                legend: {
                    display: false
                }
            },
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        display: false
                    }
                },
                y: {
                    min: 30,
                    max: 89,
                    display: false,
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                }
            },
            elements: {
                line: {
                    borderWidth: 1,
                    tension: 0.4
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        };
    }
    ngOnInit() {
        this.setData();
    }
    ngAfterContentInit() {
        this.changeDetectorRef.detectChanges();
    }
    setData() {
        for (let idx = 0; idx < 4; idx++) {
            this.data[idx] = {
                labels: idx < 3 ? this.labels.slice(0, 7) : this.labels,
                datasets: this.datasets[idx]
            };
        }
        this.setOptions();
    }
    setOptions() {
        for (let idx = 0; idx < 4; idx++) {
            const options = JSON.parse(JSON.stringify(this.optionsDefault));
            switch (idx) {
                case 0: {
                    this.options.push(options);
                    break;
                }
                case 1: {
                    options.scales.y.min = -9;
                    options.scales.y.max = 39;
                    this.options.push(options);
                    break;
                }
                case 2: {
                    options.scales.x = { display: false };
                    options.scales.y = { display: false };
                    options.elements.line.borderWidth = 2;
                    options.elements.point.radius = 0;
                    this.options.push(options);
                    break;
                }
                case 3: {
                    options.scales.x.grid = { display: false, drawTicks: false };
                    options.scales.x.grid = { display: false, drawTicks: false, drawBorder: false };
                    options.scales.y.min = undefined;
                    options.scales.y.max = undefined;
                    options.elements = {};
                    this.options.push(options);
                    break;
                }
            }
        }
    }
}
WidgetsDropdownComponent.ɵfac = function WidgetsDropdownComponent_Factory(t) { return new (t || WidgetsDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
WidgetsDropdownComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WidgetsDropdownComponent, selectors: [["app-widgets-dropdown"]], decls: 0, vars: 0, template: function WidgetsDropdownComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXRzLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIn0= */"] });
class ChartSample {
    constructor() {
        this.colors = {
            label: 'My dataset',
            backgroundColor: 'rgba(77,189,116,.2)',
            borderColor: '#4dbd74',
            pointHoverBackgroundColor: '#fff'
        };
        this.labels = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
        this.data = {
            labels: this.labels,
            datasets: [Object.assign(Object.assign({ data: [65, 59, 84, 84, 51, 55, 40] }, this.colors), { fill: { value: 65 } })]
        };
        this.options = {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            elements: {
                line: {
                    tension: 0.4
                }
            }
        };
    }
    ngAfterViewInit() {
        setTimeout(() => {
            var _a, _b;
            const data = () => {
                return Object.assign(Object.assign({}, this.data), { labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], datasets: [Object.assign(Object.assign({}, this.data.datasets[0]), { data: [42, 88, 42, 66, 77], fill: { value: 55 } }), Object.assign(Object.assign({}, this.data.datasets[0]), { borderColor: '#ffbd47', data: [88, 42, 66, 77, 42] })] });
            };
            const newLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
            const newData = [42, 88, 42, 66, 77];
            let { datasets, labels } = Object.assign({}, this.data);
            // @ts-ignore
            const before = (_b = (_a = this.chartComponent) === null || _a === void 0 ? void 0 : _a.chart) === null || _b === void 0 ? void 0 : _b.data.datasets.length;
            console.log('before', before);
            // console.log('datasets, labels', datasets, labels)
            // @ts-ignore
            // this.data = data()
            this.data = Object.assign(Object.assign({}, this.data), { datasets: [Object.assign(Object.assign({}, this.data.datasets[0]), { data: newData }), Object.assign(Object.assign({}, this.data.datasets[0]), { borderColor: '#ffbd47', data: [88, 42, 66, 77, 42] })], labels: newLabels });
            // console.log('datasets, labels', { datasets, labels } = {...this.data})
            // @ts-ignore
            setTimeout(() => {
                var _a, _b;
                const after = (_b = (_a = this.chartComponent) === null || _a === void 0 ? void 0 : _a.chart) === null || _b === void 0 ? void 0 : _b.data.datasets.length;
                console.log('after', after);
            });
        }, 5000);
    }
}
ChartSample.ɵfac = function ChartSample_Factory(t) { return new (t || ChartSample)(); };
ChartSample.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChartSample, selectors: [["app-chart-sample"]], viewQuery: function ChartSample_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chartComponent = _t.first);
    } }, decls: 2, vars: 2, consts: [["type", "line", "width", "300", 3, "data", "options"], ["chart", ""]], template: function ChartSample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "c-chart", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
    } }, directives: [_coreui_angular_chartjs__WEBPACK_IMPORTED_MODULE_2__.ChartjsComponent], encapsulation: 2 });


/***/ }),

/***/ 2857:
/*!****************************************************************!*\
  !*** ./src/app/views/widgets/widgets-e/widgets-e.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetsEComponent": () => (/* binding */ WidgetsEComponent)
/* harmony export */ });
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/utils/src */ 1677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/angular */ 9127);
/* harmony import */ var _coreui_angular_chartjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/angular-chartjs */ 6870);




class WidgetsEComponent {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.datasets = [];
        this.labels = [];
        this.data = [];
        this.barOptions = {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            }
        };
        this.lineOptions = {
            maintainAspectRatio: false,
            elements: {
                line: {
                    tension: 0.4
                },
                point: {
                    radius: 0
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            }
        };
        this.prepareLabels();
        this.prepareDatasets();
        this.prepareData();
    }
    get random() {
        const min = 40, max = 100;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    get randomData() {
        const data = [];
        for (let i = 0; i < 15; i++) {
            data.push(this.random);
        }
        return data;
    }
    get baseDatasets() {
        return [
            {
                data: this.randomData,
                barThickness: 'flex',
                borderColor: 'transparent',
                backgroundColor: 'transparent',
                borderWidth: 1
            }
        ];
    }
    ngAfterContentInit() {
        this.changeDetectorRef.detectChanges();
    }
    prepareData() {
        for (let i = 0; i < 6; i++) {
            this.data.push({ labels: this.labels, datasets: this.datasets[i] });
        }
    }
    prepareLabels() {
        for (let i = 0; i < 15; i++) {
            this.labels.push(this.getDayName(i));
        }
    }
    prepareDatasets() {
        const params = [
            { backgroundColor: 'danger' },
            { backgroundColor: 'primary' },
            { backgroundColor: 'dark' },
            { borderColor: 'danger', borderWidth: 2 },
            { borderColor: 'success', borderWidth: 2 },
            { borderColor: 'info', borderWidth: 2 }
        ];
        for (let i = 0; i < 6; i++) {
            this.datasets.push(this.getDataset(params[i]));
        }
    }
    getDataset({ backgroundColor = 'transparent', borderColor = 'transparent', borderWidth = 1 }) {
        const dataset = this.baseDatasets;
        dataset[0].backgroundColor =
            backgroundColor !== 'transparent'
                ? (0,_coreui_utils_src__WEBPACK_IMPORTED_MODULE_0__["default"])(`--cui-${backgroundColor}`)
                : backgroundColor;
        dataset[0].borderColor =
            borderColor !== 'transparent'
                ? (0,_coreui_utils_src__WEBPACK_IMPORTED_MODULE_0__["default"])(`--cui-${borderColor}`)
                : borderColor;
        dataset[0].borderWidth = borderWidth;
        return dataset;
    }
    getDayName(shift = 0) {
        var _a, _b, _c, _d;
        // @ts-ignore
        const locale = (_d = (_c = (_b = (_a = navigator.language) !== null && _a !== void 0 ? _a : navigator.userLanguage) !== null && _b !== void 0 ? _b : navigator.systemLanguage) !== null && _c !== void 0 ? _c : navigator.browserLanguage) !== null && _d !== void 0 ? _d : 'en-US';
        const baseDate = new Date(Date.UTC(2000, 1, 0)); // Monday
        baseDate.setDate(baseDate.getDate() + shift);
        return baseDate.toLocaleDateString(locale, { weekday: 'short' });
    }
}
WidgetsEComponent.ɵfac = function WidgetsEComponent_Factory(t) { return new (t || WidgetsEComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
WidgetsEComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WidgetsEComponent, selectors: [["app-widgets-e"]], decls: 19, vars: 24, consts: [["lg", "2", "md", "4"], [1, "mb-4", 3, "title", "value"], ["height", "40", "width", "80", 1, "mx-auto", 3, "data", "options"], ["height", "40", "type", "line", "width", "80", 1, "mx-auto", 3, "data", "options"]], template: function WidgetsEComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "c-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "c-widget-stat-e", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "c-chart", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "c-widget-stat-e", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "c-chart", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "c-widget-stat-e", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "c-chart", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "c-widget-stat-e", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "c-chart", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "c-widget-stat-e", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "c-chart", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "c-widget-stat-e", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "c-chart", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "title")("value", "1,123");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.data[0])("options", ctx.barOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "title")("value", "1,123");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.data[1])("options", ctx.barOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "title")("value", "1,123");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.data[2])("options", ctx.barOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "title")("value", "1,123");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.data[3])("options", ctx.lineOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "title")("value", "1,123");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.data[4])("options", ctx.lineOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "title")("value", "1,123");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.data[5])("options", ctx.lineOptions);
    } }, directives: [_coreui_angular__WEBPACK_IMPORTED_MODULE_2__.RowComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_2__.ColComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_2__.WidgetStatEComponent, _coreui_angular_chartjs__WEBPACK_IMPORTED_MODULE_3__.ChartjsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXRzLWUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1849:
/*!*********************************************************!*\
  !*** ./src/app/views/widgets/widgets-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetsRoutingModule": () => (/* binding */ WidgetsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _widgets_widgets_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets/widgets.component */ 1366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);




const routes = [
    {
        path: '',
        component: _widgets_widgets_component__WEBPACK_IMPORTED_MODULE_0__.WidgetsComponent,
        data: {
            title: 'Widgets'
        }
    }
];
class WidgetsRoutingModule {
}
WidgetsRoutingModule.ɵfac = function WidgetsRoutingModule_Factory(t) { return new (t || WidgetsRoutingModule)(); };
WidgetsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WidgetsRoutingModule });
WidgetsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WidgetsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9846:
/*!*************************************************!*\
  !*** ./src/app/views/widgets/widgets.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetsModule": () => (/* binding */ WidgetsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @coreui/angular */ 9127);
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @coreui/icons-angular */ 6705);
/* harmony import */ var _coreui_angular_chartjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @coreui/angular-chartjs */ 6870);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/components.module */ 726);
/* harmony import */ var _widgets_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets-routing.module */ 1849);
/* harmony import */ var _widgets_widgets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets/widgets.component */ 1366);
/* harmony import */ var _widgets_brand_widgets_brand_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets-brand/widgets-brand.component */ 5196);
/* harmony import */ var _widgets_dropdown_widgets_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets-dropdown/widgets-dropdown.component */ 3485);
/* harmony import */ var _widgets_e_widgets_e_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets-e/widgets-e.component */ 2857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);











class WidgetsModule {
}
WidgetsModule.ɵfac = function WidgetsModule_Factory(t) { return new (t || WidgetsModule)(); };
WidgetsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: WidgetsModule });
WidgetsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _widgets_routing_module__WEBPACK_IMPORTED_MODULE_1__.WidgetsRoutingModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_8__.GridModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_8__.WidgetModule,
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_9__.IconModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_8__.DropdownModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_8__.SharedModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_8__.ButtonModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_8__.CardModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_8__.ProgressModule,
            _coreui_angular_chartjs__WEBPACK_IMPORTED_MODULE_10__.ChartjsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](WidgetsModule, { declarations: [_widgets_widgets_component__WEBPACK_IMPORTED_MODULE_2__.WidgetsComponent,
        _widgets_brand_widgets_brand_component__WEBPACK_IMPORTED_MODULE_3__.WidgetsBrandComponent,
        _widgets_dropdown_widgets_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.WidgetsDropdownComponent,
        _widgets_dropdown_widgets_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.ChartSample,
        _widgets_e_widgets_e_component__WEBPACK_IMPORTED_MODULE_5__.WidgetsEComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _widgets_routing_module__WEBPACK_IMPORTED_MODULE_1__.WidgetsRoutingModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_8__.GridModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_8__.WidgetModule,
        _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_9__.IconModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_8__.DropdownModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_8__.SharedModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_8__.ButtonModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_8__.CardModule,
        _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_8__.ProgressModule,
        _coreui_angular_chartjs__WEBPACK_IMPORTED_MODULE_10__.ChartjsModule], exports: [_widgets_brand_widgets_brand_component__WEBPACK_IMPORTED_MODULE_3__.WidgetsBrandComponent,
        _widgets_dropdown_widgets_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.WidgetsDropdownComponent] }); })();


/***/ }),

/***/ 1366:
/*!************************************************************!*\
  !*** ./src/app/views/widgets/widgets/widgets.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetsComponent": () => (/* binding */ WidgetsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/angular */ 9127);
/* harmony import */ var _components_docs_example_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/docs-example/docs-example.component */ 4201);
/* harmony import */ var _widgets_dropdown_widgets_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widgets-dropdown/widgets-dropdown.component */ 3485);
/* harmony import */ var _widgets_e_widgets_e_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets-e/widgets-e.component */ 2857);
/* harmony import */ var _widgets_brand_widgets_brand_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets-brand/widgets-brand.component */ 5196);
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/icons-angular */ 6705);







function WidgetsComponent_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 58);
} }
function WidgetsComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 59);
} }
function WidgetsComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 60);
} }
function WidgetsComponent_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 61);
} }
function WidgetsComponent_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 58);
} }
function WidgetsComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " View more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "svg", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WidgetsComponent_ng_template_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 59);
} }
function WidgetsComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " View more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "svg", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WidgetsComponent_ng_template_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 60);
} }
function WidgetsComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " View more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "svg", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WidgetsComponent_ng_template_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 61);
} }
function WidgetsComponent_ng_template_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " View more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "svg", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WidgetsComponent_ng_template_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 58);
} }
function WidgetsComponent_ng_template_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 59);
} }
function WidgetsComponent_ng_template_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 60);
} }
function WidgetsComponent_ng_template_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 61);
} }
function WidgetsComponent_ng_template_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 64);
} }
function WidgetsComponent_ng_template_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "c-progress", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "c-progress-bar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 75);
} }
function WidgetsComponent_ng_template_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 66);
} }
function WidgetsComponent_ng_template_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "c-progress", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "c-progress-bar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 75);
} }
function WidgetsComponent_ng_template_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 67);
} }
function WidgetsComponent_ng_template_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "c-progress", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "c-progress-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 75);
} }
function WidgetsComponent_ng_template_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 68);
} }
function WidgetsComponent_ng_template_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "c-progress", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "c-progress-bar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 75);
} }
function WidgetsComponent_ng_template_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 69);
} }
function WidgetsComponent_ng_template_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "c-progress", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "c-progress-bar", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 75);
} }
function WidgetsComponent_ng_template_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 64);
} }
function WidgetsComponent_ng_template_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "c-progress", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "c-progress-bar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 75);
} }
function WidgetsComponent_ng_template_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 66);
} }
function WidgetsComponent_ng_template_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "c-progress", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "c-progress-bar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 75);
} }
function WidgetsComponent_ng_template_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 67);
} }
function WidgetsComponent_ng_template_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "c-progress", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "c-progress-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 75);
} }
function WidgetsComponent_ng_template_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 68);
} }
function WidgetsComponent_ng_template_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "c-progress", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "c-progress-bar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 75);
} }
function WidgetsComponent_ng_template_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 69);
} }
function WidgetsComponent_ng_template_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "c-progress", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "c-progress-bar", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 75);
} }
function WidgetsComponent_ng_template_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 71);
} }
function WidgetsComponent_ng_template_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "c-progress", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "c-progress-bar", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 75);
} }
function WidgetsComponent_ng_template_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 64);
} }
function WidgetsComponent_ng_template_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "c-progress", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "c-progress-bar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 75);
} }
function WidgetsComponent_ng_template_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 66);
} }
function WidgetsComponent_ng_template_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "c-progress", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "c-progress-bar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 75);
} }
function WidgetsComponent_ng_template_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 67);
} }
function WidgetsComponent_ng_template_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "c-progress", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "c-progress-bar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 75);
} }
function WidgetsComponent_ng_template_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 68);
} }
function WidgetsComponent_ng_template_158_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "c-progress", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "c-progress-bar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 75);
} }
function WidgetsComponent_ng_template_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 69);
} }
function WidgetsComponent_ng_template_162_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "c-progress", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "c-progress-bar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 75);
} }
function WidgetsComponent_ng_template_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg", 71);
} }
function WidgetsComponent_ng_template_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "c-progress", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "c-progress-bar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 75);
} }
class WidgetsComponent {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
    }
    ngAfterContentInit() {
        this.changeDetectorRef.detectChanges();
    }
}
WidgetsComponent.ɵfac = function WidgetsComponent_Factory(t) { return new (t || WidgetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef)); };
WidgetsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: WidgetsComponent, selectors: [["app-widgets"]], decls: 167, vars: 50, consts: [[1, "mb-4"], ["href", "components/"], ["href", "components/widgets/#cwidgetstatsb"], ["lg", "3", "md", "6", "xs", "12"], ["text", "Lorem ipsum dolor sit amet enim.", "value", "89.9%", 1, "mb-4", 3, "title"], ["thin", "", 1, "my-2"], ["color", "success", 3, "value"], ["text", "Lorem ipsum dolor sit amet enim.", "value", "12.124", 1, "mb-4", 3, "title"], ["color", "info", 3, "value"], ["text", "Lorem ipsum dolor sit amet enim.", "value", "$98,111.00", 1, "mb-4", 3, "title"], ["color", "warning", 3, "value"], ["text", "Lorem ipsum dolor sit amet enim.", "value", "2 TB", 1, "mb-4", 3, "title"], ["color", "primary", 3, "value"], ["color", "success", "inverse", "", "text", "Lorem ipsum dolor sit amet enim.", "value", "89.9%", 1, "mb-4", 3, "title"], ["widgetStatB1inv", "cWidgetStatB"], ["thin", "", 1, "my-2", 3, "white"], [3, "value"], ["color", "info", "inverse", "", "text", "Lorem ipsum dolor sit amet enim.", "value", "12.124", 1, "mb-4", 3, "title"], ["widgetStatB2inv", "cWidgetStatB"], ["color", "warning", "inverse", "", "text", "Lorem ipsum dolor sit amet enim.", "value", "$98,111.00", 1, "mb-4", 3, "title"], ["widgetStatB3inv", "cWidgetStatB"], ["color", "primary", "inverse", "", "text", "Lorem ipsum dolor sit amet enim.", "value", "2 TB", 1, "mb-4", 3, "title"], ["widgetStatB4inv", "cWidgetStatB"], ["href", "components/widgets/#cwidgetstatse"], ["href", "components/widgets/#cwidgetstatsf"], ["lg", "3", "sm", "6", "xs", "12"], ["color", "primary", "padding", "", "value", "$1,999.50", 1, "mb-3", 3, "title"], ["cTemplateId", "widgetIconTemplate"], ["color", "info", "padding", "", "value", "$1,999.50", 1, "mb-3", 3, "title"], ["color", "warning", "padding", "", "value", "$1,999.50", 1, "mb-3", 3, "title"], ["color", "danger", "padding", "", "value", "$1,999.50", 1, "mb-3", 3, "title"], ["cTemplateId", "widgetFooterTemplate"], ["color", "primary", "value", "$1,999.50", 1, "mb-3", 3, "title"], ["color", "info", "value", "$1,999.50", 1, "mb-3", 3, "title"], ["color", "warning", "value", "$1,999.50", 1, "mb-3", 3, "title"], ["color", "danger", "value", "$1,999.50", 1, "mb-3", 3, "title"], ["href", "components/widgets/#cwidgetstatsd"], [3, "withCharts"], ["href", "components/widgets/#cwidgetstatsc"], ["value", "87,500", 3, "title"], ["cTemplateId", "widgetProgressTemplate"], ["value", "385", 3, "title"], ["value", "1238", 3, "title"], ["value", "28%", 3, "title"], ["value", "5:34:11", 3, "title"], ["md", "2", "sm", "6"], ["value", "87,500", 1, "mb-4", 3, "title"], ["value", "385", 1, "mb-4", 3, "title"], ["value", "1238", 1, "mb-4", 3, "title"], ["value", "28%", 1, "mb-4", 3, "title"], ["value", "5:34:11", 1, "mb-4", 3, "title"], ["value", "972", 1, "mb-4", 3, "title"], ["color", "info", "inverse", "", "value", "87,500", 1, "mb-4", 3, "title"], ["color", "success", "inverse", "", "value", "385", 1, "mb-4", 3, "title"], ["color", "warning", "inverse", "", "value", "1238", 1, "mb-4", 3, "title"], ["color", "primary", "inverse", "", "value", "28%", 1, "mb-4", 3, "title"], ["color", "danger", "inverse", "", "value", "5:34:11", 1, "mb-4", 3, "title"], ["color", "dark", "inverse", "", "value", "972", 1, "mb-4", 3, "title"], ["cIcon", "", "name", "cilSettings", "size", "xl", "width", "24"], ["cIcon", "", "name", "cilUser", "size", "xl", "width", "24"], ["cIcon", "", "name", "cilMoon", "size", "xl", "width", "24"], ["cIcon", "", "name", "cilBell", "size", "xl", "width", "24"], ["href", "https://coreui.io/", "rel", "noopener norefferer", "target", "_blank", 1, "font-weight-bold", "font-xs", "text-medium-emphasis"], ["cIcon", "", "name", "cilArrowRight", "width", "16", 1, "float-end"], ["cIcon", "", "height", "36", "name", "cilPeople"], ["thin", "", 1, "mt-3", "mb-0"], ["cIcon", "", "height", "36", "name", "cilUserFollow"], ["cIcon", "", "height", "36", "name", "cilBasket"], ["cIcon", "", "height", "36", "name", "cilChartPie"], ["cIcon", "", "height", "36", "name", "cilSpeedometer"], ["color", "danger", 3, "value"], ["cIcon", "", "height", "36", "name", "cilSpeech"], ["color", "dark", 3, "value"], ["thin", "", "white", "", 1, "mt-3", "mb-0"]], template: function WidgetsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "c-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "app-docs-example", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-widgets-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "app-docs-example", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "c-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "c-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "c-widget-stat-b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "c-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "c-progress-bar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "c-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "c-widget-stat-b", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "c-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "c-progress-bar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "c-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "c-widget-stat-b", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "c-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "c-progress-bar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "c-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "c-widget-stat-b", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "c-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "c-progress-bar", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "app-docs-example", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "c-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "c-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "c-widget-stat-b", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "c-progress", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "c-progress-bar", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "c-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "c-widget-stat-b", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "c-progress", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "c-progress-bar", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "c-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "c-widget-stat-b", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "c-progress", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "c-progress-bar", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "c-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "c-widget-stat-b", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "c-progress", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "c-progress-bar", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "app-docs-example", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "app-widgets-e");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "app-docs-example", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "c-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "c-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "c-widget-stat-f", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, WidgetsComponent_ng_template_52_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "c-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "c-widget-stat-f", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, WidgetsComponent_ng_template_55_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "c-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "c-widget-stat-f", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, WidgetsComponent_ng_template_58_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "c-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "c-widget-stat-f", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](61, WidgetsComponent_ng_template_61_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "app-docs-example", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "c-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "c-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "c-widget-stat-f", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, WidgetsComponent_ng_template_66_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](67, WidgetsComponent_ng_template_67_Template, 3, 0, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "c-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "c-widget-stat-f", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](70, WidgetsComponent_ng_template_70_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](71, WidgetsComponent_ng_template_71_Template, 3, 0, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "c-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "c-widget-stat-f", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](74, WidgetsComponent_ng_template_74_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](75, WidgetsComponent_ng_template_75_Template, 3, 0, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "c-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "c-widget-stat-f", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](78, WidgetsComponent_ng_template_78_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](79, WidgetsComponent_ng_template_79_Template, 3, 0, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "app-docs-example", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "c-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "c-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "c-widget-stat-f", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](84, WidgetsComponent_ng_template_84_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "c-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "c-widget-stat-f", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](87, WidgetsComponent_ng_template_87_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "c-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "c-widget-stat-f", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](90, WidgetsComponent_ng_template_90_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "c-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "c-widget-stat-f", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](93, WidgetsComponent_ng_template_93_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "app-docs-example", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](95, "app-widgets-brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "app-docs-example", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "app-widgets-brand", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "app-docs-example", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "c-card-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "c-widget-stat-c", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](101, WidgetsComponent_ng_template_101_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](102, WidgetsComponent_ng_template_102_Template, 2, 1, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "c-widget-stat-c", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](104, WidgetsComponent_ng_template_104_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](105, WidgetsComponent_ng_template_105_Template, 2, 1, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "c-widget-stat-c", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](107, WidgetsComponent_ng_template_107_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](108, WidgetsComponent_ng_template_108_Template, 2, 1, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "c-widget-stat-c", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](110, WidgetsComponent_ng_template_110_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](111, WidgetsComponent_ng_template_111_Template, 2, 1, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "c-widget-stat-c", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](113, WidgetsComponent_ng_template_113_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](114, WidgetsComponent_ng_template_114_Template, 2, 1, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "app-docs-example", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "c-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "c-col", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "c-widget-stat-c", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](119, WidgetsComponent_ng_template_119_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](120, WidgetsComponent_ng_template_120_Template, 2, 1, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "c-col", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "c-widget-stat-c", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](123, WidgetsComponent_ng_template_123_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](124, WidgetsComponent_ng_template_124_Template, 2, 1, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "c-col", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "c-widget-stat-c", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](127, WidgetsComponent_ng_template_127_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](128, WidgetsComponent_ng_template_128_Template, 2, 1, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "c-col", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "c-widget-stat-c", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](131, WidgetsComponent_ng_template_131_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](132, WidgetsComponent_ng_template_132_Template, 2, 1, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "c-col", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "c-widget-stat-c", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](135, WidgetsComponent_ng_template_135_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](136, WidgetsComponent_ng_template_136_Template, 2, 1, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "c-col", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "c-widget-stat-c", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](139, WidgetsComponent_ng_template_139_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](140, WidgetsComponent_ng_template_140_Template, 2, 1, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "app-docs-example", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "c-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "c-col", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "c-widget-stat-c", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](145, WidgetsComponent_ng_template_145_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](146, WidgetsComponent_ng_template_146_Template, 2, 1, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "c-col", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "c-widget-stat-c", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](149, WidgetsComponent_ng_template_149_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](150, WidgetsComponent_ng_template_150_Template, 2, 1, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](151, "c-col", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "c-widget-stat-c", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](153, WidgetsComponent_ng_template_153_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](154, WidgetsComponent_ng_template_154_Template, 2, 1, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "c-col", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "c-widget-stat-c", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](157, WidgetsComponent_ng_template_157_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](158, WidgetsComponent_ng_template_158_Template, 2, 1, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](159, "c-col", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "c-widget-stat-c", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](161, WidgetsComponent_ng_template_161_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](162, WidgetsComponent_ng_template_162_Template, 2, 1, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](163, "c-col", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "c-widget-stat-c", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](165, WidgetsComponent_ng_template_165_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](166, WidgetsComponent_ng_template_166_Template, 2, 1, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](28);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](33);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](38);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Widget title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 89.9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Widget title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 89.9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Widget title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 89.9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Widget title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 89.9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Widget title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("white", _r0.inverse);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 89.9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Widget title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("white", _r1.inverse);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 89.9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Widget title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("white", _r2.inverse);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 89.9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Widget title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("white", _r3.inverse);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 89.9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("withCharts", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "New Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Products sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Returning Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Avg. Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "New Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Products sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Returning Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Avg. Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "New Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Products sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Returning Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Avg. Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Comments");
    } }, directives: [_coreui_angular__WEBPACK_IMPORTED_MODULE_5__.CardComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.CardHeaderComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.CardBodyComponent, _components_docs_example_docs_example_component__WEBPACK_IMPORTED_MODULE_0__.DocsExampleComponent, _widgets_dropdown_widgets_dropdown_component__WEBPACK_IMPORTED_MODULE_1__.WidgetsDropdownComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.RowComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.ColComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.WidgetStatBComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.ProgressComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.ProgressBarComponent, _widgets_e_widgets_e_component__WEBPACK_IMPORTED_MODULE_2__.WidgetsEComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.WidgetStatFComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.TemplateIdDirective, _widgets_brand_widgets_brand_component__WEBPACK_IMPORTED_MODULE_3__.WidgetsBrandComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.CardGroupComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_5__.WidgetStatCComponent, _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__.IconDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXRzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_views_widgets_widgets_module_ts.js.map