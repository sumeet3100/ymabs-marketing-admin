"use strict";
(self["webpackChunkcoreui_free_angular_admin_template"] = self["webpackChunkcoreui_free_angular_admin_template"] || []).push([["src_app_views_charts_charts_module_ts"],{

/***/ 2017:
/*!*******************************************************!*\
  !*** ./src/app/views/charts/charts-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsRoutingModule": () => (/* binding */ ChartsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts.component */ 266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);




const routes = [
    {
        path: '',
        component: _charts_component__WEBPACK_IMPORTED_MODULE_0__.ChartsComponent,
        data: {
            title: 'Charts',
        },
    },
];
class ChartsRoutingModule {
}
ChartsRoutingModule.ɵfac = function ChartsRoutingModule_Factory(t) { return new (t || ChartsRoutingModule)(); };
ChartsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ChartsRoutingModule });
ChartsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChartsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 266:
/*!**************************************************!*\
  !*** ./src/app/views/charts/charts.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsComponent": () => (/* binding */ ChartsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/angular */ 9127);
/* harmony import */ var _components_docs_callout_docs_callout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/docs-callout/docs-callout.component */ 7729);
/* harmony import */ var _coreui_angular_chartjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/angular-chartjs */ 6870);




class ChartsComponent {
    constructor() {
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.chartBarData = {
            labels: [...this.months].slice(0, 7),
            datasets: [
                {
                    label: 'GitHub Commits',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 17, 42, 79]
                }
            ]
        };
        // chartBarOptions = {
        //   maintainAspectRatio: false,
        // };
        this.chartLineData = {
            labels: [...this.months].slice(0, 7),
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
                }
            ]
        };
        this.chartLineOptions = {
            maintainAspectRatio: false,
        };
        this.chartDoughnutData = {
            labels: ['VueJs', 'EmberJs', 'ReactJs', 'Angular'],
            datasets: [
                {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [40, 20, 80, 10]
                }
            ]
        };
        // chartDoughnutOptions = {
        //   aspectRatio: 1,
        //   responsive: true,
        //   maintainAspectRatio: false,
        //   radius: '100%'
        // };
        this.chartPieData = {
            labels: ['Red', 'Green', 'Yellow'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                }
            ]
        };
        // chartPieOptions = {
        //   aspectRatio: 1,
        //   responsive: true,
        //   maintainAspectRatio: false,
        //   radius: '100%'
        // };
        this.chartPolarAreaData = {
            labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
            datasets: [
                {
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB']
                }
            ]
        };
        this.chartRadarData = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: '2020',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    tooltipLabelColor: 'rgba(179,181,198,1)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: '2021',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    tooltipLabelColor: 'rgba(255,99,132,1)',
                    data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
                }
            ]
        };
    }
    // chartRadarOptions = {
    //   aspectRatio: 1.5,
    //   responsive: true,
    //   maintainAspectRatio: false,
    // };
    get randomData() {
        return Math.round(Math.random() * 100);
    }
}
ChartsComponent.ɵfac = function ChartsComponent_Factory(t) { return new (t || ChartsComponent)(); };
ChartsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChartsComponent, selectors: [["app-charts"]], decls: 43, vars: 6, consts: [["xs", "12"], ["href", "charts"], ["xs", "12", "lg", "6"], [1, "mb-4"], ["type", "bar", 3, "data"], ["type", "line", 3, "data"], ["type", "doughnut", 3, "data"], ["type", "pie", 3, "data"], ["type", "polarArea", 3, "data"], ["type", "radar", 3, "data"]], template: function ChartsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "c-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-docs-callout", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Angular wrapper component for Chart.js 3.6, the most popular charting library. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "c-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "c-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Bar Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "c-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "c-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "c-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Line Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "c-chart", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "c-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "c-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "c-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Doughnut Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "c-chart", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "c-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "c-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Pie Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "c-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "c-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "c-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "c-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Polar Area Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "c-chart", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "c-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "c-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Radar Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "c-chart", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.chartBarData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.chartLineData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.chartDoughnutData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.chartPieData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.chartPolarAreaData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.chartRadarData);
    } }, directives: [_coreui_angular__WEBPACK_IMPORTED_MODULE_2__.RowComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_2__.ColComponent, _components_docs_callout_docs_callout_component__WEBPACK_IMPORTED_MODULE_0__.DocsCalloutComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_2__.CardHeaderComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_2__.CardBodyComponent, _coreui_angular_chartjs__WEBPACK_IMPORTED_MODULE_3__.ChartjsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFydHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9605:
/*!***********************************************!*\
  !*** ./src/app/views/charts/charts.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsModule": () => (/* binding */ ChartsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/angular */ 9127);
/* harmony import */ var _coreui_angular_chartjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/angular-chartjs */ 6870);
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts.component */ 266);
/* harmony import */ var _charts_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts-routing.module */ 2017);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/components.module */ 726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);







class ChartsModule {
}
ChartsModule.ɵfac = function ChartsModule_Factory(t) { return new (t || ChartsModule)(); };
ChartsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ChartsModule });
ChartsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _charts_routing_module__WEBPACK_IMPORTED_MODULE_1__.ChartsRoutingModule,
            _coreui_angular_chartjs__WEBPACK_IMPORTED_MODULE_5__.ChartjsModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_6__.CardModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_6__.GridModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_6__.BadgeModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ChartsModule, { declarations: [_charts_component__WEBPACK_IMPORTED_MODULE_0__.ChartsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _charts_routing_module__WEBPACK_IMPORTED_MODULE_1__.ChartsRoutingModule,
        _coreui_angular_chartjs__WEBPACK_IMPORTED_MODULE_5__.ChartjsModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_6__.CardModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_6__.GridModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_6__.BadgeModule,
        _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_charts_charts_module_ts.js.map