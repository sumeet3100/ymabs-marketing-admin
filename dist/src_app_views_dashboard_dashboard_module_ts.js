"use strict";
(self["webpackChunkcoreui_free_angular_admin_template"] = self["webpackChunkcoreui_free_angular_admin_template"] || []).push([["src_app_views_dashboard_dashboard_module_ts"],{

/***/ 4124:
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/utils/src/hex-to-rgba.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-magic-numbers */
const hexToRgba = (color, opacity = 100) => {
  if (typeof color === 'undefined') {
    throw new TypeError('Hex color is not defined')
  }

  const hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i)

  if (!hex) {
    throw new Error(`${color} is not a valid hex color`)
  }

  let r
  let g
  let b

  if (color.length === 7) {
    r = parseInt(color.slice(1, 3), 16)
    g = parseInt(color.slice(3, 5), 16)
    b = parseInt(color.slice(5, 7), 16)
  } else {
    r = parseInt(color.slice(1, 2), 16)
    g = parseInt(color.slice(2, 3), 16)
    b = parseInt(color.slice(3, 5), 16)
  }

  return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hexToRgba);


/***/ }),

/***/ 8610:
/*!**********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-charts-data.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardChartsData": () => (/* binding */ DashboardChartsData)
/* harmony export */ });
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/utils/src */ 1677);
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/utils/src */ 4124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);


class DashboardChartsData {
    constructor() {
        this.mainChart = {};
        this.initMainChart();
    }
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    initMainChart(period = 'Month') {
        var _a, _b, _c;
        const brandSuccess = (_a = (0,_coreui_utils_src__WEBPACK_IMPORTED_MODULE_0__["default"])('--cui-success')) !== null && _a !== void 0 ? _a : '#4dbd74';
        const brandInfo = (_b = (0,_coreui_utils_src__WEBPACK_IMPORTED_MODULE_0__["default"])('--cui-info')) !== null && _b !== void 0 ? _b : '#20a8d8';
        const brandInfoBg = (_c = (0,_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_coreui_utils_src__WEBPACK_IMPORTED_MODULE_0__["default"])('--cui-info'), 10)) !== null && _c !== void 0 ? _c : '#20a8d8';
        const brandDanger = (0,_coreui_utils_src__WEBPACK_IMPORTED_MODULE_0__["default"])('--cui-danger') || '#f86c6b';
        // mainChart
        // mainChart
        this.mainChart['elements'] = period === 'Month' ? 12 : 27;
        this.mainChart['Data1'] = [];
        this.mainChart['Data2'] = [];
        this.mainChart['Data3'] = [];
        // generate random values for mainChart
        for (let i = 0; i <= this.mainChart['elements']; i++) {
            this.mainChart['Data1'].push(this.random(50, 240));
            this.mainChart['Data2'].push(this.random(20, 160));
            this.mainChart['Data3'].push(65);
        }
        let labels = [];
        if (period === 'Month') {
            labels = [
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
                'December'
            ];
        }
        else {
            /* tslint:disable:max-line-length */
            const week = [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ];
            labels = week.concat(week, week, week);
        }
        const colors = [
            {
                // brandInfo
                backgroundColor: brandInfoBg,
                borderColor: brandInfo,
                pointHoverBackgroundColor: brandInfo,
                borderWidth: 2,
                fill: true
            },
            {
                // brandSuccess
                backgroundColor: 'transparent',
                borderColor: brandSuccess || '#4dbd74',
                pointHoverBackgroundColor: '#fff'
            },
            {
                // brandDanger
                backgroundColor: 'transparent',
                borderColor: brandDanger || '#f86c6b',
                pointHoverBackgroundColor: brandDanger,
                borderWidth: 1,
                borderDash: [8, 5]
            }
        ];
        const datasets = [
            Object.assign({ data: this.mainChart['Data1'], label: 'Current' }, colors[0]),
            Object.assign({ data: this.mainChart['Data2'], label: 'Previous' }, colors[1]),
            Object.assign({ data: this.mainChart['Data3'], label: 'BEP' }, colors[2])
        ];
        const plugins = {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    labelColor: function (context) {
                        return {
                            backgroundColor: context.dataset.borderColor
                        };
                    }
                }
            }
        };
        const options = {
            maintainAspectRatio: false,
            plugins,
            scales: {
                x: {
                    grid: {
                        drawOnChartArea: false
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 250,
                    ticks: {
                        maxTicksLimit: 5,
                        stepSize: Math.ceil(250 / 5)
                    }
                }
            },
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
            }
        };
        this.mainChart.type = 'line';
        this.mainChart.options = options;
        this.mainChart.data = {
            datasets,
            labels
        };
    }
}
DashboardChartsData.ɵfac = function DashboardChartsData_Factory(t) { return new (t || DashboardChartsData)(); };
DashboardChartsData.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DashboardChartsData, factory: DashboardChartsData.ɵfac, providedIn: 'any' });


/***/ }),

/***/ 4697:
/*!*************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 5056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);




const routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
        data: {
            title: $localize `Dashboard`
        }
    }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5056:
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _dashboard_charts_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-charts-data */ 8610);
/* harmony import */ var _widgets_widgets_dropdown_widgets_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widgets/widgets-dropdown/widgets-dropdown.component */ 3485);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/angular */ 9127);





class DashboardComponent {
    constructor(chartsData) {
        this.chartsData = chartsData;
        this.users = [
            {
                name: 'Yiorgos Avraamu',
                state: 'New',
                registered: 'Jan 1, 2021',
                country: 'Us',
                usage: 50,
                period: 'Jun 11, 2021 - Jul 10, 2021',
                payment: 'Mastercard',
                activity: '10 sec ago',
                avatar: './assets/img/avatars/1.jpg',
                status: 'success',
                color: 'success'
            },
            {
                name: 'Avram Tarasios',
                state: 'Recurring ',
                registered: 'Jan 1, 2021',
                country: 'Br',
                usage: 10,
                period: 'Jun 11, 2021 - Jul 10, 2021',
                payment: 'Visa',
                activity: '5 minutes ago',
                avatar: './assets/img/avatars/2.jpg',
                status: 'danger',
                color: 'info'
            },
            {
                name: 'Quintin Ed',
                state: 'New',
                registered: 'Jan 1, 2021',
                country: 'In',
                usage: 74,
                period: 'Jun 11, 2021 - Jul 10, 2021',
                payment: 'Stripe',
                activity: '1 hour ago',
                avatar: './assets/img/avatars/3.jpg',
                status: 'warning',
                color: 'warning'
            },
            {
                name: 'Enéas Kwadwo',
                state: 'Sleep',
                registered: 'Jan 1, 2021',
                country: 'Fr',
                usage: 98,
                period: 'Jun 11, 2021 - Jul 10, 2021',
                payment: 'Paypal',
                activity: 'Last month',
                avatar: './assets/img/avatars/4.jpg',
                status: 'secondary',
                color: 'danger'
            },
            {
                name: 'Agapetus Tadeáš',
                state: 'New',
                registered: 'Jan 1, 2021',
                country: 'Es',
                usage: 22,
                period: 'Jun 11, 2021 - Jul 10, 2021',
                payment: 'ApplePay',
                activity: 'Last week',
                avatar: './assets/img/avatars/5.jpg',
                status: 'success',
                color: 'primary'
            },
            {
                name: 'Friderik Dávid',
                state: 'New',
                registered: 'Jan 1, 2021',
                country: 'Pl',
                usage: 43,
                period: 'Jun 11, 2021 - Jul 10, 2021',
                payment: 'Amex',
                activity: 'Yesterday',
                avatar: './assets/img/avatars/6.jpg',
                status: 'info',
                color: 'dark'
            }
        ];
        this.mainChart = {};
        this.chart = [];
        this.trafficRadioGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            trafficRadio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('Month')
        });
    }
    ngOnInit() {
        this.initCharts();
    }
    initCharts() {
        this.mainChart = this.chartsData.mainChart;
    }
    setTrafficPeriod(value) {
        this.trafficRadioGroup.setValue({ trafficRadio: value });
        this.chartsData.initMainChart(value);
        this.initCharts();
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_dashboard_charts_data__WEBPACK_IMPORTED_MODULE_0__.DashboardChartsData)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["ng-component"]], decls: 2, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-widgets-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "c-row");
    } }, directives: [_widgets_widgets_dropdown_widgets_dropdown_component__WEBPACK_IMPORTED_MODULE_1__.WidgetsDropdownComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.RowComponent], styles: ["[_nghost-%COMP%]   .legend[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: x-small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGtCQUFBO0FBRE4iLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5sZWdlbmQge1xyXG4gICAgc21hbGwge1xyXG4gICAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 420:
/*!*****************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/angular */ 9127);
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/icons-angular */ 6705);
/* harmony import */ var _coreui_angular_chartjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @coreui/angular-chartjs */ 6870);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 4697);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ 5056);
/* harmony import */ var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/widgets.module */ 9846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);









class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.CardModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.NavModule,
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_5__.IconModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.TabsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.GridModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.ProgressModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.ButtonModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.FormModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.ButtonModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.ButtonGroupModule,
            _coreui_angular_chartjs__WEBPACK_IMPORTED_MODULE_8__.ChartjsModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.AvatarModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.TableModule,
            _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent], imports: [_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.CardModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.NavModule,
        _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_5__.IconModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.TabsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.GridModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.ProgressModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.ButtonModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.FormModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.ButtonModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.ButtonGroupModule,
        _coreui_angular_chartjs__WEBPACK_IMPORTED_MODULE_8__.ChartjsModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.AvatarModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.TableModule,
        _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_dashboard_dashboard_module_ts.js.map