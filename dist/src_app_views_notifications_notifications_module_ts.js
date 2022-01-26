"use strict";
(self["webpackChunkcoreui_free_angular_admin_template"] = self["webpackChunkcoreui_free_angular_admin_template"] || []).push([["src_app_views_notifications_notifications_module_ts"],{

/***/ 4857:
/*!****************************************************************!*\
  !*** ./src/app/views/notifications/alerts/alerts.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertsComponent": () => (/* binding */ AlertsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/angular */ 9127);
/* harmony import */ var _components_docs_callout_docs_callout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/docs-callout/docs-callout.component */ 7729);
/* harmony import */ var _components_docs_example_docs_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/docs-example/docs-example.component */ 4201);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);






function AlertsComponent_c_alert_164_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "c-alert", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function AlertsComponent_c_alert_164_Template_c_alert_visibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r3.visible[0] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Go right ahead");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " and click that dismiss over there on the right. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx_r0.visible[0]);
} }
function AlertsComponent_ng_template_167_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AlertsComponent_ng_template_167_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r5.visible[1] = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AlertsComponent {
    constructor() {
        this.visible = [true, true];
        this.dismissible = true;
    }
    ngOnInit() {
    }
    onAlertVisibleChange(eventValue = this.visible) {
        this.visible[1] = eventValue;
    }
    onResetDismiss() {
        this.visible = [true, true];
    }
    onToggleDismiss() {
        this.dismissible = !this.dismissible;
    }
}
AlertsComponent.ɵfac = function AlertsComponent_Factory(t) { return new (t || AlertsComponent)(); };
AlertsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AlertsComponent, selectors: [["app-alerts"]], decls: 176, vars: 4, consts: [["xs", "12"], ["href", "components/alert", "name", "Alert"], [1, "mb-4"], [1, "text-medium-emphasis", "small"], ["href", "https://coreui.io/angular/docs/4.0/components/alert#dismissing"], ["href", "components/alert"], ["color", "primary"], ["color", "secondary"], ["color", "success"], ["color", "danger"], ["color", "warning"], ["color", "info"], ["color", "light"], ["color", "dark"], ["color", "primary", "variant", "solid"], ["color", "secondary", "variant", "solid"], ["color", "success", "variant", "solid"], ["color", "danger", "variant", "solid"], ["color", "warning", "variant", "solid"], ["color", "info", "variant", "solid"], ["color", "light", "variant", "solid"], ["color", "dark", "variant", "solid"], ["href", "components/alert#link-color"], ["cAlertLink", "", "routerLink", "./"], ["href", "components/alert#additional-content"], ["cAlertHeading", ""], [1, "mb-0"], ["href", "components/alert#dismissing"], ["dismissible", "", "color", "warning", "fade", "", 3, "visible", "visibleChange", 4, "ngIf"], ["color", "dark", "fade", "", "variant", "solid", 3, "dismissible", "visible", "visibleChange"], ["alertWithButtonCloseTemplate", "cAlert"], ["cTemplateId", "alertButtonCloseTemplate", 3, "ngIf"], ["cButton", "", "color", "primary", 1, "'me-1'", 3, "click"], ["cButton", "", "color", "secondary", 3, "click"], ["dismissible", "", "color", "warning", "fade", "", 3, "visible", "visibleChange"], ["cButtonClose", "", "white", "", 3, "click"]], template: function AlertsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "c-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-docs-callout", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "c-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Angular Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Angular Alert is prepared for any length of text, as well as an optional close button. For a styling, use one of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "required");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " contextual ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "color");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " props (e.g., ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "). For inline dismissal, use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " dismissing prop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "app-docs-example", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "c-alert", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "A simple primary alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "c-alert", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "A simple secondary alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "c-alert", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "A simple success alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "c-alert", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "A simple danger alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "c-alert", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "A simple warning alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "c-alert", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "A simple info alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "c-alert", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "A simple light alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "c-alert", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "A simple dark alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "c-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Angular Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "solid variant");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "app-docs-example", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "c-alert", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "A solid primary alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "c-alert", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "A solid secondary alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "c-alert", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "A solid success alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "c-alert", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "A solid danger alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "c-alert", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "A solid warning alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "c-alert", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "A solid info alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "c-alert", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "A solid light alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "c-alert", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "A solid dark alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "c-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Angular Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Link color");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " Use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "cAlertLink");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, " directive to immediately give matching colored links inside any alert. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "app-docs-example", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "c-alert", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, " A simple primary alert with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "an example link");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, ". Give it a click if you like. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "c-alert", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, " A simple secondary alert with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "an example link");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, ". Give it a click if you like. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "c-alert", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, " A simple success alert with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "an example link");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, ". Give it a click if you like. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "c-alert", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, " A simple danger alert with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "an example link");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, ". Give it a click if you like. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "c-alert", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, " A simple warning alert with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "an example link");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, ". Give it a click if you like. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "c-alert", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, " A simple info alert with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "an example link");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, ". Give it a click if you like. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "c-alert", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, " A simple light alert with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "an example link");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, ". Give it a click if you like. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "c-alert", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, " A simple dark alert with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "an example link");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, ". Give it a click if you like. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "c-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "Angular Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Additional content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, " Alert can also incorporate supplementary components & elements like heading, paragraph, and divider. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "app-docs-example", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "c-alert", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "h4", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Well done!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, " Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](144, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, " Whenever you need to, be sure to use margin utilities to keep things nice and tidy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "c-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "Angular Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, "Dismissing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, " Alerts can also be easily dismissed. Just add the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "dismissible");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, " prop. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "app-docs-example", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](164, AlertsComponent_c_alert_164_Template, 4, 1, "c-alert", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "c-alert", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function AlertsComponent_Template_c_alert_visibleChange_165_listener($event) { return ctx.onAlertVisibleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](167, AlertsComponent_ng_template_167_Template, 1, 0, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "Go right ahead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, " and click that dismiss over there on the right. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](171, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AlertsComponent_Template_button_click_172_listener() { return ctx.onToggleDismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AlertsComponent_Template_button_click_174_listener() { return ctx.onResetDismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](166);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](164);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.visible[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", ctx.dismissible)("visible", ctx.visible[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r1.dismissible);
    } }, directives: [_coreui_angular__WEBPACK_IMPORTED_MODULE_3__.RowComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ColComponent, _components_docs_callout_docs_callout_component__WEBPACK_IMPORTED_MODULE_0__.DocsCalloutComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.CardComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.CardHeaderComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.CardBodyComponent, _components_docs_example_docs_example_component__WEBPACK_IMPORTED_MODULE_1__.DocsExampleComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.AlertComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.AlertLinkDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.AlertHeadingDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.TemplateIdDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ButtonCloseDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3159:
/*!****************************************************************!*\
  !*** ./src/app/views/notifications/badges/badges.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgesComponent": () => (/* binding */ BadgesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/angular */ 9127);
/* harmony import */ var _components_docs_callout_docs_callout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/docs-callout/docs-callout.component */ 7729);
/* harmony import */ var _components_docs_example_docs_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/docs-example/docs-example.component */ 4201);




class BadgesComponent {
    constructor() { }
}
BadgesComponent.ɵfac = function BadgesComponent_Factory(t) { return new (t || BadgesComponent)(); };
BadgesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BadgesComponent, selectors: [["app-badges"]], decls: 176, vars: 0, consts: [["xs", "12"], ["href", "components/badge", "name", "Badges"], ["lg", "6"], [1, "mb-4"], [1, "text-medium-emphasis", "small"], ["href", "components/badge"], ["color", "secondary"], ["cButton", "", "color", "primary"], [1, "visually-hidden"], ["href", "components/badge#contextual-variations"], ["color", "primary", 1, "me-1"], ["color", "success", 1, "me-1"], ["color", "danger", 1, "me-1"], ["color", "warning", 1, "me-1"], ["color", "info", 1, "me-1"], ["color", "light", 1, "me-1"], ["color", "dark", 1, "me-1"], ["href", "components/badge#pill-badges"], ["color", "primary", "shape", "rounded-pill", 1, "me-1"], ["color", "success", "shape", "rounded-pill", 1, "me-1"], ["color", "danger", "shape", "rounded-pill", 1, "me-1"], ["color", "warning", "shape", "rounded-pill", 1, "me-1"], ["color", "info", "shape", "rounded-pill", 1, "me-1"], ["color", "light", "shape", "rounded-pill", 1, "me-1"], ["color", "dark", "shape", "rounded-pill", 1, "me-1"], ["href", "components/badge#positioned"], ["cButton", "", "color", "primary", 1, "position-relative", "mx-2"], ["color", "danger", "position", "top-start", "shape", "rounded-pill"], ["color", "danger", "position", "top-end", "shape", "rounded-pill"], ["color", "danger", "position", "bottom-start", "shape", "rounded-pill"], ["color", "danger", "position", "bottom-end", "shape", "rounded-pill"], ["cButton", "", "color", "primary", 1, "position-relative"], ["color", "danger", "position", "top-end", "shape", "rounded-circle", "cBorder", "light", 1, "p-2"]], template: function BadgesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "c-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-docs-callout", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "c-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "c-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Angular Badges");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Bootstrap badge scale to suit the size of the parent element by using relative font sizing and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " units. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "app-docs-example", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Example heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "c-badge", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Example heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "c-badge", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Example heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "c-badge", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Example heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "c-badge", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Example heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "c-badge", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Example heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "c-badge", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Badges can be used as part of links or buttons to provide a counter. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "app-docs-example", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " Notifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "c-badge", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " Remark that depending on how you use them, badges may be complicated for users of screen readers and related assistive technologies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " Unless the context is clear, consider including additional context with a visually hidden piece of additional text. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "app-docs-example", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "c-badge", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "unread messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "c-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "c-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "AngularBadges");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Contextual variations");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, " Add any of the below-mentioned ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "color");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " props to modify the presentation of a badge. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "app-docs-example", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "c-badge", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "c-badge", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "c-badge", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "c-badge", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "c-badge", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "c-badge", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "light");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "c-badge", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "c-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Angular Badges");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Pill badges");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, " Apply the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "shape=\"rounded-pill\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, " prop to make badges rounded. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "app-docs-example", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "c-badge", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, " primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "c-badge", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, " success ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "c-badge", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, " danger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "c-badge", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, " warning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "c-badge", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, " info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "c-badge", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, " light ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "c-badge", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, " dark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "c-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "Angular Badges");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "Positioned");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, " Use position prop to modify a component and position it in the corner of a link or button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "app-docs-example", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "c-badge", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "99+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "unread messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "c-badge", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, "99+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "unread messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](145, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "c-badge", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "99+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "unread messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "c-badge", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, "99+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "unread messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "c-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, "Angular Badges");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "Indicator");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, " You can also create more generic indicators without a counter using a few more utilities. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "app-docs-example", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "c-badge", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, "unread messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_coreui_angular__WEBPACK_IMPORTED_MODULE_3__.RowComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ColComponent, _components_docs_callout_docs_callout_component__WEBPACK_IMPORTED_MODULE_0__.DocsCalloutComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.CardComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.CardHeaderComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.CardBodyComponent, _components_docs_example_docs_example_component__WEBPACK_IMPORTED_MODULE_1__.DocsExampleComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.BadgeComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.BorderDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWRnZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3012:
/*!****************************************************************!*\
  !*** ./src/app/views/notifications/modals/modals.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalsComponent": () => (/* binding */ ModalsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/angular */ 9127);
/* harmony import */ var _components_docs_callout_docs_callout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/docs-callout/docs-callout.component */ 7729);
/* harmony import */ var _components_docs_example_docs_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/docs-example/docs-example.component */ 4201);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);





function ModalsComponent_ng_container_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function ModalsComponent_ng_container_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function ModalsComponent_ng_container_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function ModalsComponent_ng_container_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function ModalsComponent_ng_container_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function ModalsComponent_ng_container_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function ModalsComponent_ng_container_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function ModalsComponent_ng_container_193_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function ModalsComponent_ng_container_265_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function ModalsComponent_ng_template_266_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalsComponent_ng_template_266_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r29.toggleLiveDemo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Launch demo modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "c-modal", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function ModalsComponent_ng_template_266_Template_c_modal_visibleChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r31.handleLiveDemoChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "c-modal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Modal title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalsComponent_ng_template_266_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r32.toggleLiveDemo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "c-modal-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Woohoo, you're reading this text in a modal!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "c-modal-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalsComponent_ng_template_266_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r33.toggleLiveDemo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx_r10.liveDemoVisible);
} }
function ModalsComponent_ng_template_268_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Launch static backdrop modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "c-modal", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "c-modal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Modal title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "c-modal-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Woohoo, you're reading this text in a modal!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "c-modal-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Understood");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r34.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r34.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r34.id);
} }
function ModalsComponent_ng_template_270_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function ModalsComponent_ng_template_270_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Scrolling long content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "c-modal", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "c-modal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Modal title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "c-modal-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ModalsComponent_ng_template_270_ng_container_9_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "c-modal-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](285);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r35.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r35.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r35.id);
} }
function ModalsComponent_ng_template_272_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function ModalsComponent_ng_template_272_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Scrollable long content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "c-modal", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "c-modal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Modal title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "c-modal-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ModalsComponent_ng_template_272_ng_container_9_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "c-modal-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](285);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r37.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r37.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r37.id);
} }
function ModalsComponent_ng_template_274_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Centered modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "c-modal", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "c-modal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Modal title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "c-modal-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Woohoo, you're reading this text in a modal! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "c-modal-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Understood");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r39.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r39.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r39.id);
} }
function ModalsComponent_ng_template_276_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Centered scrollable modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "c-modal", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "c-modal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Modal title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "c-modal-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " This is some placeholder content to show a vertically centered modal. We've added some extra copy here to show how vertically centering the modal works when combined with scrollable modals. We also use some repeated line breaks to quickly extend the height of the content, thereby triggering the scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Just like that.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "c-modal-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Understood");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r40.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scrollable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r40.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r40.id);
} }
function ModalsComponent_ng_template_278_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Popover title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " And here\u2019s some amazing content. It\u2019s very engaging. Right? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { strategy: "fixed" }; };
function ModalsComponent_ng_template_278_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Modal with Popover");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "c-modal", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "c-modal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Modal title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "c-modal-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Popover in a modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " This ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " triggers a popover on click. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ModalsComponent_ng_template_278_ng_template_15_Template, 4, 0, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Tooltips in a modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "This link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "that link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " have tooltips on hover. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "c-modal-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Understood");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r41.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r41.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cPopoverTrigger", "click")("cPopover", _r42)("cPopoverOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cTooltipOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r41.id);
} }
function ModalsComponent_ng_template_280_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Extra large modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Large modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Small modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "c-modal", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "c-modal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Extra large modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "c-modal-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "c-modal", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "c-modal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Large modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "c-modal-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "c-modal", 59, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "c-modal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Small modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "c-modal-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r44.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r45.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r46.id);
} }
function ModalsComponent_ng_template_282_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Full screen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Full screen below sm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Full screen below md");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Full screen below lg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Full screen below xl");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Full screen below xxl");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "c-modal", 61, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "c-modal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Full screen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "c-modal-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "c-modal-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "c-modal", 62, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "c-modal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Full screen below sm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "c-modal-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "c-modal", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "c-modal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Full screen below md");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "c-modal-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "c-modal", 66, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "c-modal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Full screen below lg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "c-modal-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "c-modal", 68, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "c-modal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Full screen below xl");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "c-modal-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "c-modal", 70, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "c-modal-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Full screen below xxl");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "c-modal-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](24);
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](32);
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](40);
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](48);
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r47.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r48.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r49.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r50.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r51.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r52.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullscreen", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r47.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r47.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r48.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r49.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r50.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r51.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cModalToggle", _r52.id);
} }
function ModalsComponent_ng_template_284_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ModalsComponent {
    constructor() {
        this.liveDemoVisible = false;
    }
    toggleLiveDemo() {
        this.liveDemoVisible = !this.liveDemoVisible;
    }
    handleLiveDemoChange(event) {
        this.liveDemoVisible = event;
    }
}
ModalsComponent.ɵfac = function ModalsComponent_Factory(t) { return new (t || ModalsComponent)(); };
ModalsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ModalsComponent, selectors: [["app-modals"]], decls: 286, vars: 11, consts: [["xs", "12"], ["href", "components/modal", "name", "Modal"], [1, "mb-4"], [1, "text-medium-emphasis", "small"], ["href", "components/modal"], ["backdrop", "static", "id", "modalStatic", 1, "position-static", "d-block", "show", 3, "keyboard", "transition"], ["cModalTitle", ""], ["cButtonClose", ""], ["cButton", "", "color", "secondary"], ["cButton", "", "color", "primary"], ["href", "components/modal#live-demo"], [4, "ngTemplateOutlet"], ["href", "components/modal#static-backdrop"], ["href", "components/modal#scrolling-long-content"], ["href", "components/modal#vertically-centered"], ["href", "components/modal#tooltips-and-popovers"], [1, "table"], [1, "text-medium-emphasis"], ["href", "components/modal#optional-sizes"], ["href", "components/modal#fullscreen-modal"], ["liveDemo", ""], ["staticBackdrop", ""], ["scrollingLongContent", ""], ["scrollableLongContent", ""], ["verticallyCentered", ""], ["verticallyCenteredScrollable", ""], ["withPopover", ""], ["optionalSizes", ""], ["fullScreen", ""], ["longContent", ""], ["cButton", "", 3, "click"], ["id", "liveDemoModal", 3, "visible", "visibleChange"], ["cButtonClose", "", 3, "click"], ["cButton", "", "color", "secondary", 3, "click"], ["cButton", "", 3, "cModalToggle"], ["backdrop", "static", "id", "staticBackdropModal"], ["staticBackdropModal", ""], ["cButtonClose", "", 3, "cModalToggle"], ["cButton", "", "color", "secondary", 3, "cModalToggle"], ["id", "scrollingLongContentModal"], ["scrollingLongContentModal", ""], ["id", "scrollableLongContentModal", "scrollable", ""], ["scrollableLongContentModal", ""], ["alignment", "center", "id", "verticallyCenteredModal"], ["verticallyCenteredModal", ""], ["alignment", "center", "id", "verticallyCenteredScrollableModal", 3, "scrollable"], ["verticallyCenteredScrollableModal", ""], ["alignment", "center", "id", "withPopoverModal"], ["withPopoverModal", ""], ["cButton", "", 3, "cPopoverTrigger", "cPopover", "cPopoverOptions"], ["popoverHtml", ""], ["cTooltip", "Tooltip text", "href", ""], ["cTooltip", "Tooltip text", "cTooltipPlacement", "bottom", "href", "", 3, "cTooltipOptions"], [1, "popover-header"], ["id", "", 1, "popover-body"], ["id", "modalXl", "size", "xl"], ["modalXl", ""], ["id", "modalLg", "size", "lg"], ["modalLg", ""], ["id", "modalSm", "size", "sm"], ["modalSm", ""], ["id", "fullScreen", 3, "fullscreen"], ["fullscreen", "sm", "id", "fullScreenSm"], ["fullScreenSm", ""], ["fullscreen", "md", "id", "fullScreenMd"], ["fullScreenMd", ""], ["fullscreen", "lg", "id", "fullScreenLg"], ["fullScreenLg", ""], ["fullscreen", "xl", "id", "fullScreenXl"], ["fullScreenXl", ""], ["fullscreen", "xxl", "id", "fullScreen2Xl"], ["fullScreen2Xl", ""]], template: function ModalsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "c-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-docs-callout", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "c-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Angular Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n          Below is a static modal example (meaning its ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "position");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " and\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "display");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " have been overridden). Included are the modal header, modal body\n          (required for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "padding");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "), and modal footer (optional). We ask that you\n          include modal headers with dismiss actions whenever possible, or provide another\n          explicit dismiss action.\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "app-docs-example", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "c-modal", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "c-modal-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Modal title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "c-modal-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Modal body text goes here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "c-modal-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "c-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Angular Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Live demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "app-docs-example", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, ModalsComponent_ng_container_47_Template, 1, 0, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "c-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Angular Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Static backdrop");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " If you don\u2019t provide an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "(visibleChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " handler to the Modal component, your modal will behave as though the backdrop is static, meaning it will not close when clicking outside it. Click the button below to try it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "app-docs-example", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, ModalsComponent_ng_container_65_Template, 1, 0, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "c-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Angular Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Scrolling long content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, " If your modals are too long for the user\u2019s viewport, they scroll the page by itself. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "app-docs-example", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](80, ModalsComponent_ng_container_80_Template, 1, 0, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "\n          You can also create a scrollable modal that allows scroll the modal body by adding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "scrollable");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "\n          prop.\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "app-docs-example", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](87, ModalsComponent_ng_container_87_Template, 1, 0, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "c-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Angular Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Vertically centered");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "alignment=\"center\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "<c-modal>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, " to vertically center the modal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "app-docs-example", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](108, ModalsComponent_ng_container_108_Template, 1, 0, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "app-docs-example", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](110, ModalsComponent_ng_container_110_Template, 1, 0, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "c-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Angular Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Tooltips and popovers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "cTooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "cPopover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, " can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "app-docs-example", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](130, ModalsComponent_ng_container_130_Template, 1, 0, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "c-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "Angular Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Optional sizes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "\n          Modals have three optional sizes, available via modifier classes to be placed on a\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, "<c-modal>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, ". These sizes kick in at certain breakpoints to avoid\n          horizontal scrollbars on narrower viewports.\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "Property size");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, "Modal max-width");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, "'sm'");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "300px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "500px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, "'lg'");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, "800px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, "Extra large");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "'xl'");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](191, "1140px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "app-docs-example", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](193, ModalsComponent_ng_container_193_Template, 1, 0, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "c-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "c-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, "Angular Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, "Fullscreen Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](203, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, " Another override is the option to pop up a modal that covers the user viewport, available via property ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](208, "fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214, "Property fullscrean");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](216, "Availability");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](223, "Always");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](227, "'sm'");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](228, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](229, " Below ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](231, "576px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](233, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](235, "'md'");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](236, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](237, " Below ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](239, "768px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](240, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](241, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](242, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](243, "'lg'");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](245, " Below ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](246, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](247, "992px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](248, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](251, "'xl'");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](253, " Below ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](254, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](255, "1200px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](258, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](259, "'xxl'");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](260, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](261, " Below ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](262, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](263, "1400px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "app-docs-example", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](265, ModalsComponent_ng_container_265_Template, 1, 0, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](266, ModalsComponent_ng_template_266_Template, 14, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](268, ModalsComponent_ng_template_268_Template, 15, 3, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](270, ModalsComponent_ng_template_270_Template, 15, 4, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](272, ModalsComponent_ng_template_272_Template, 15, 4, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](274, ModalsComponent_ng_template_274_Template, 15, 3, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](276, ModalsComponent_ng_template_276_Template, 28, 4, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](278, ModalsComponent_ng_template_278_Template, 32, 9, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](280, ModalsComponent_ng_template_280_Template, 27, 3, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](282, ModalsComponent_ng_template_282_Template, 63, 14, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](284, ModalsComponent_ng_template_284_Template, 36, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](267);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](269);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](271);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](273);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](275);
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](277);
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](279);
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](281);
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](283);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("keyboard", false)("transition", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r25);
    } }, directives: [_coreui_angular__WEBPACK_IMPORTED_MODULE_3__.RowComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ColComponent, _components_docs_callout_docs_callout_component__WEBPACK_IMPORTED_MODULE_0__.DocsCalloutComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.CardComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.CardHeaderComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.CardBodyComponent, _components_docs_example_docs_example_component__WEBPACK_IMPORTED_MODULE_1__.DocsExampleComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ModalComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ModalHeaderComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ModalTitleDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ButtonCloseDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ModalBodyComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ModalFooterComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ModalToggleDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.TooltipDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8599:
/*!*********************************************************************!*\
  !*** ./src/app/views/notifications/notifications-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsRoutingModule": () => (/* binding */ NotificationsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _badges_badges_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./badges/badges.component */ 3159);
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alerts/alerts.component */ 4857);
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/modals.component */ 3012);
/* harmony import */ var _toasters_toasters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toasters/toasters.component */ 3658);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);







const routes = [
    {
        path: '',
        data: {
            title: 'Notifications'
        },
        children: [
            {
                path: '',
                redirectTo: 'badges'
            },
            {
                path: 'alerts',
                component: _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_1__.AlertsComponent,
                data: {
                    title: 'Alerts'
                }
            },
            {
                path: 'badges',
                component: _badges_badges_component__WEBPACK_IMPORTED_MODULE_0__.BadgesComponent,
                data: {
                    title: 'Badges'
                }
            },
            {
                path: 'modal',
                component: _modals_modals_component__WEBPACK_IMPORTED_MODULE_2__.ModalsComponent,
                data: {
                    title: 'Modal'
                }
            },
            {
                path: 'toasts',
                component: _toasters_toasters_component__WEBPACK_IMPORTED_MODULE_3__.ToastersComponent,
                data: {
                    title: 'Toasts'
                }
            }
        ]
    }
];
class NotificationsRoutingModule {
}
NotificationsRoutingModule.ɵfac = function NotificationsRoutingModule_Factory(t) { return new (t || NotificationsRoutingModule)(); };
NotificationsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: NotificationsRoutingModule });
NotificationsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NotificationsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 9794:
/*!*************************************************************!*\
  !*** ./src/app/views/notifications/notifications.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsModule": () => (/* binding */ NotificationsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @coreui/angular */ 9127);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/components.module */ 726);
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications-routing.module */ 8599);
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alerts/alerts.component */ 4857);
/* harmony import */ var _badges_badges_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./badges/badges.component */ 3159);
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals/modals.component */ 3012);
/* harmony import */ var _toasters_toasters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toasters/toasters.component */ 3658);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _toasters_toast_simple_toast_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toasters/toast-simple/toast.component */ 8027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);







// import { ToastsComponent } from './toasts/toasts.component';




class NotificationsModule {
}
NotificationsModule.ɵfac = function NotificationsModule_Factory(t) { return new (t || NotificationsModule)(); };
NotificationsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: NotificationsModule });
NotificationsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_1__.NotificationsRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.AlertModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.GridModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.CardModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.BadgeModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.ButtonModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.FormModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.ModalModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.ToastModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.SharedModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.UtilitiesModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.TooltipModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.PopoverModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.ProgressModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](NotificationsModule, { declarations: [_badges_badges_component__WEBPACK_IMPORTED_MODULE_3__.BadgesComponent,
        _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_2__.AlertsComponent,
        _modals_modals_component__WEBPACK_IMPORTED_MODULE_4__.ModalsComponent,
        // ToastsComponent,
        _toasters_toasters_component__WEBPACK_IMPORTED_MODULE_5__.ToastersComponent,
        _toasters_toast_simple_toast_component__WEBPACK_IMPORTED_MODULE_6__.AppToastComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _notifications_routing_module__WEBPACK_IMPORTED_MODULE_1__.NotificationsRoutingModule,
        _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.AlertModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.GridModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.CardModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.BadgeModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.ButtonModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.FormModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.ModalModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.ToastModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.SharedModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.UtilitiesModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.TooltipModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.PopoverModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.ProgressModule] }); })();


/***/ }),

/***/ 8027:
/*!******************************************************************************!*\
  !*** ./src/app/views/notifications/toasters/toast-simple/toast.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppToastComponent": () => (/* binding */ AppToastComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/angular */ 9127);




const _c0 = ["*"];
class AppToastComponent extends _coreui_angular__WEBPACK_IMPORTED_MODULE_0__.ToastComponent {
    constructor(hostElement, renderer, toasterService, changeDetectorRef) {
        super(hostElement, renderer, toasterService, changeDetectorRef);
        this.hostElement = hostElement;
        this.renderer = renderer;
        this.toasterService = toasterService;
        this.changeDetectorRef = changeDetectorRef;
        this.closeButton = true;
        this.title = '';
    }
}
AppToastComponent.ɵfac = function AppToastComponent_Factory(t) { return new (t || AppToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_coreui_angular__WEBPACK_IMPORTED_MODULE_0__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
AppToastComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppToastComponent, selectors: [["app-toast-simple"]], inputs: { closeButton: "closeButton", title: "title" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _coreui_angular__WEBPACK_IMPORTED_MODULE_0__.ToastComponent, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => AppToastComponent) }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 13, vars: 6, consts: [[3, "closeButton"], ["focusable", "false", "height", "20", "preserveAspectRatio", "xMidYMid slice", "role", "img", "width", "20", "xmlns", "http://www.w3.org/2000/svg", 1, "rounded", "me-2"], ["fill", "#007aff", "height", "100%", "width", "100%"], [3, "cToastClose"], ["toastBody", ""], [1, "mb-1"], ["thin", ""], [3, "value"]], template: function AppToastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "c-toast-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "rect", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "c-toast-body", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "c-progress", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "c-progress-bar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        let tmp_4_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeButton", ctx.closeButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cToastClose", _r0.toast);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("This is a dynamic toast no ", _r0.toast == null ? null : _r0.toast.index, " ", _r0.toast == null ? null : _r0.toast.clock, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 25 * ((tmp_4_0 = _r0.toast == null ? null : _r0.toast.clock) !== null && tmp_4_0 !== undefined ? tmp_4_0 : 1));
    } }, directives: [_coreui_angular__WEBPACK_IMPORTED_MODULE_0__.ToastHeaderComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_0__.ToastBodyComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_0__.ToastCloseDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_0__.ProgressComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_0__.ProgressBarComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 3658:
/*!********************************************************************!*\
  !*** ./src/app/views/notifications/toasters/toasters.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Colors": () => (/* binding */ Colors),
/* harmony export */   "ToastersComponent": () => (/* binding */ ToastersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1569);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/angular */ 9127);
/* harmony import */ var _toast_simple_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast-simple/toast.component */ 8027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _components_docs_callout_docs_callout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/docs-callout/docs-callout.component */ 7729);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);











function ToastersComponent_c_toaster_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "c-toaster", 28);
} if (rf & 2) {
    const pos_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placement", pos_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "p-3");
} }
function ToastersComponent_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const position_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", position_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", position_r5, " ");
} }
function ToastersComponent_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", color_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", color_r6, " ");
} }
const _c0 = function () { return { position: "relative" }; };
const _c1 = function () { return { display: "contents" }; };
var Colors;
(function (Colors) {
    Colors[""] = "";
    Colors["primary"] = "primary";
    Colors["secondary"] = "secondary";
    Colors["success"] = "success";
    Colors["info"] = "info";
    Colors["warning"] = "warning";
    Colors["danger"] = "danger";
    Colors["dark"] = "dark";
    Colors["light"] = "light";
})(Colors || (Colors = {}));
class ToastersComponent {
    constructor() {
        this.positions = Object.values(_coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ToasterPlacement);
        this.position = _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ToasterPlacement.TopEnd;
        this.positionStatic = _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ToasterPlacement.Static;
        this.colors = Object.keys(Colors);
        this.autohide = true;
        this.delay = 5000;
        this.fade = true;
        this.toasterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            autohide: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.autohide),
            delay: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({ value: this.delay, disabled: !this.autohide }),
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.position),
            fade: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({ value: true, disabled: false }),
            closeButton: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(true),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
        });
    }
    ngOnInit() {
        this.formChanges = this.toasterForm.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(e => e.autohide !== this.autohide));
        this.formChanges.subscribe(e => {
            var _a;
            this.autohide = e.autohide;
            this.position = e.position;
            this.fade = e.fade;
            const control = (_a = this.toasterForm) === null || _a === void 0 ? void 0 : _a.get('delay');
            this.autohide ? control === null || control === void 0 ? void 0 : control.enable() : control === null || control === void 0 ? void 0 : control.disable();
            this.delay = (control === null || control === void 0 ? void 0 : control.enabled) ? e.timeout : this.delay;
        });
    }
    addToast() {
        const formValues = this.toasterForm.value;
        const toasterPosition = this.viewChildren.filter(item => item.placement === this.toasterForm.value.position);
        toasterPosition.forEach((item) => {
            const title = `Toast ${formValues.color} ${formValues.position}`;
            const props = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__rest)(Object.assign(Object.assign({}, formValues), { title }), []);
            const componentRef = item.addToast(_toast_simple_toast_component__WEBPACK_IMPORTED_MODULE_0__.AppToastComponent, props, {});
            componentRef.instance['closeButton'] = props.closeButton;
        });
    }
}
ToastersComponent.ɵfac = function ToastersComponent_Factory(t) { return new (t || ToastersComponent)(); };
ToastersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ToastersComponent, selectors: [["app-toasters"]], viewQuery: function ToastersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ToasterComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.viewChildren = _t);
    } }, decls: 68, vars: 26, consts: [[1, "fade-in"], ["xs", "12"], ["href", "components/toasts", "name", "Toasts"], ["position", "fixed", 3, "ngClass", "placement", 4, "ngFor", "ngForOf"], ["lg", "6", "sm", "12"], ["cForm", "", 3, "formGroup"], [1, "my-2", "mt-4"], ["cFormCheckInput", "", "formControlName", "autohide", "id", "autohide", "type", "checkbox"], ["cFormCheckLabel", "", "for", "autohide"], ["cInputGroupText", ""], ["cFormControl", "", "formControlName", "delay", "id", "delay", "type", "number"], [1, "my-2"], ["cSelect", "", "formControlName", "position"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["cSelect", "", "formControlName", "color"], ["cFormCheckInput", "", "formControlName", "fade", "id", "fade", "type", "checkbox"], ["cFormCheckLabel", "", "for", "fade"], ["cFormCheckInput", "", "formControlName", "closeButton", "id", "close", "type", "checkbox"], ["cFormCheckLabel", "", "for", "close"], ["cButton", "", "color", "success", 1, "m-1", 3, "click"], ["lg", "6", "sm", "12", 1, "mt-3", 3, "ngStyle"], [3, "placement", "ngStyle"], ["color", "danger", 3, "autohide", "fade", "visible"], ["color", "dark", 3, "fade", "visible"], [3, "closeButton"], ["color", "secondary", 3, "autohide", "fade", "visible", "title"], ["toast", ""], [1, "mt-3"], ["position", "fixed", 3, "ngClass", "placement"], [3, "ngValue"]], template: function ToastersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "c-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "c-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-docs-callout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "c-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ToastersComponent_c_toaster_5_Template, 1, 2, "c-toaster", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "c-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "c-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Toaster ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "c-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "c-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "c-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Add toast with following props:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "c-form-check", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Toast autohide ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "c-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Delay");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "c-input-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ToastersComponent_option_29_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "c-input-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ToastersComponent_option_34_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "c-form-check", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Fade");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "c-form-check", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Close Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToastersComponent_Template_button_click_44_listener() { return ctx.addToast(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " Add toast ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "c-col", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "c-toaster", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "c-toast", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "c-toast-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Toast title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "c-toast-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "This is a static toast in a static toaster");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "c-toast", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "c-toast-header", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Toast title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "c-toast-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "This is a static toast in a static toaster");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "app-toast-simple", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "c-card", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "c-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "c-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](67, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 19, ctx.positions, 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.toasterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.positions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placement", ctx.positionStatic)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](25, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("autohide", false)("fade", true)("visible", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fade", true)("visible", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("closeButton", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("autohide", false)("fade", true)("visible", true)("title", "App Toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("This is a toast in static positioned App toaster! ", _r3.index, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Form value: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](67, 22, ctx.toasterForm.value), "");
    } }, directives: [_coreui_angular__WEBPACK_IMPORTED_MODULE_3__.RowComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ColComponent, _components_docs_callout_docs_callout_component__WEBPACK_IMPORTED_MODULE_1__.DocsCalloutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.CardComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.CardHeaderComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.CardBodyComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.FormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.FormCheckComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.FormCheckInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.FormCheckLabelDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.InputGroupComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.InputGroupTextDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.FormSelectDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ToasterComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ToastComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ToastHeaderComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_3__.ToastBodyComponent, _toast_simple_toast_component__WEBPACK_IMPORTED_MODULE_0__.AppToastComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.JsonPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2FzdGVycy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8806:
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ })

}]);
//# sourceMappingURL=src_app_views_notifications_notifications_module_ts.js.map