"use strict";
(self["webpackChunkcoreui_free_angular_admin_template"] = self["webpackChunkcoreui_free_angular_admin_template"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers */ 6068);
/* harmony import */ var _views_pages_page404_page404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/pages/page404/page404.component */ 328);
/* harmony import */ var _views_pages_page500_page500_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/pages/page500/page500.component */ 3376);
/* harmony import */ var _views_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/pages/login/login.component */ 9753);
/* harmony import */ var _views_pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/pages/register/register.component */ 7411);
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/guard/auth.guard */ 7904);
/* harmony import */ var _shared_guard_after_login_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/guard/after-login.guard */ 460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);










const routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '404',
        component: _views_pages_page404_page404_component__WEBPACK_IMPORTED_MODULE_1__.Page404Component,
        data: {
            title: 'Page 404',
        },
    },
    {
        path: '500',
        component: _views_pages_page500_page500_component__WEBPACK_IMPORTED_MODULE_2__.Page500Component,
        data: {
            title: 'Page 500',
        },
    },
    {
        path: 'login',
        canActivate: [_shared_guard_after_login_guard__WEBPACK_IMPORTED_MODULE_6__.AfterLoginGuard],
        component: _views_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
        data: {
            title: 'Login Page',
        },
    },
    {
        path: 'register',
        component: _views_pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent,
        data: {
            title: 'Register Page',
        },
    },
    {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_0__.DefaultLayoutComponent,
        canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
        data: {
            title: 'Home',
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_components_module_ts"), __webpack_require__.e("default-node_modules_coreui_angular-chartjs_fesm2020_coreui-angular-chartjs_mjs"), __webpack_require__.e("default-src_app_views_widgets_widgets_module_ts"), __webpack_require__.e("src_app_views_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/dashboard/dashboard.module */ 420)).then((m) => m.DashboardModule),
            },
            {
                path: 'csv',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_csv-upload_csv-upload_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/csv-upload/csv-upload.module */ 5517)).then((m) => m.CsvUploadModule),
            },
            {
                path: 'theme',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_theme_theme_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/theme/theme.module */ 5749)).then((m) => m.ThemeModule),
            },
            {
                path: 'base',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_components_module_ts"), __webpack_require__.e("src_app_views_base_base_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/base/base.module */ 1632)).then((m) => m.BaseModule),
            },
            {
                path: 'buttons',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_components_module_ts"), __webpack_require__.e("src_app_views_buttons_buttons_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/buttons/buttons.module */ 9402)).then((m) => m.ButtonsModule),
            },
            {
                path: 'forms',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_components_module_ts"), __webpack_require__.e("src_app_views_forms_forms_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/forms/forms.module */ 371)).then((m) => m.CoreUIFormsModule),
            },
            {
                path: 'charts',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_components_module_ts"), __webpack_require__.e("default-node_modules_coreui_angular-chartjs_fesm2020_coreui-angular-chartjs_mjs"), __webpack_require__.e("src_app_views_charts_charts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/charts/charts.module */ 9605)).then((m) => m.ChartsModule),
            },
            {
                path: 'icons',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_components_module_ts"), __webpack_require__.e("src_app_views_icons_icons_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/icons/icons.module */ 2193)).then((m) => m.IconsModule),
            },
            {
                path: 'notifications',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_components_module_ts"), __webpack_require__.e("src_app_views_notifications_notifications_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/notifications/notifications.module */ 9794)).then((m) => m.NotificationsModule),
            },
            {
                path: 'widgets',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_components_module_ts"), __webpack_require__.e("default-node_modules_coreui_angular-chartjs_fesm2020_coreui-angular-chartjs_mjs"), __webpack_require__.e("default-src_app_views_widgets_widgets_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/widgets/widgets.module */ 9846)).then((m) => m.WidgetsModule),
            },
            {
                path: 'pages',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/pages/pages.module */ 157)).then((m) => m.PagesModule),
            },
        ],
    },
    { path: '**', component: _views_pages_page404_page404_component__WEBPACK_IMPORTED_MODULE_1__.Page404Component },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes, {
                scrollPositionRestoration: 'top',
                anchorScrolling: 'enabled',
                initialNavigation: 'enabledBlocking',
                // relativeLinkResolution: 'legacy'
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _icons_icon_subset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/icon-subset */ 2900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons-angular */ 6705);






class AppComponent {
    constructor(router, titleService, iconSetService) {
        this.router = router;
        this.titleService = titleService;
        this.iconSetService = iconSetService;
        this.title = 'CoreUI Free Angular Admin Template';
        titleService.setTitle(this.title);
        // iconSet singleton
        iconSetService.icons = Object.assign({}, _icons_icon_subset__WEBPACK_IMPORTED_MODULE_0__.iconSubset);
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd)) {
                return;
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__.IconSetService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["body"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 105);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers */ 6068);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @coreui/angular */ 9127);
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/icons-angular */ 6705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);





// Import routing module

// Import app component

// Import containers




const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
};
const APP_CONTAINERS = [
    _containers__WEBPACK_IMPORTED_MODULE_2__.DefaultFooterComponent,
    _containers__WEBPACK_IMPORTED_MODULE_2__.DefaultHeaderComponent,
    _containers__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutComponent,
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__.LocationStrategy,
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__.HashLocationStrategy,
        },
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__.IconSetService,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Title
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.AvatarModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.BreadcrumbModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.FooterModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.DropdownModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.GridModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.HeaderModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.SidebarModule,
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__.IconModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.NavModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.ButtonModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.FormModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.UtilitiesModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.ButtonGroupModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.SidebarModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.SharedModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.TabsModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.ListGroupModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.ProgressModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.BadgeModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.ListGroupModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.CardModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _containers__WEBPACK_IMPORTED_MODULE_2__.DefaultFooterComponent,
        _containers__WEBPACK_IMPORTED_MODULE_2__.DefaultHeaderComponent,
        _containers__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.AvatarModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.BreadcrumbModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.FooterModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.DropdownModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.GridModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.HeaderModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.SidebarModule,
        _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__.IconModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.NavModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.ButtonModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.FormModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.UtilitiesModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.ButtonGroupModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.SidebarModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.SharedModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.TabsModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.ListGroupModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.ProgressModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.BadgeModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.ListGroupModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_9__.CardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule] }); })();


/***/ }),

/***/ 2290:
/*!***************************************************!*\
  !*** ./src/app/containers/default-layout/_nav.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navItems": () => (/* binding */ navItems)
/* harmony export */ });
const navItems = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        iconComponent: { name: 'cil-speedometer' },
        // badge: {
        //   color: 'info',
        //   text: 'NEW',
        // },
    },
    {
        title: true,
        name: 'File Upload',
    },
    {
        name: 'Upload CSV',
        url: '/csv/upload',
        iconComponent: { name: 'cil-file' },
    },
    // {
    //   name: 'Typography',
    //   url: '/theme/typography',
    //   linkProps: { fragment: 'someAnchor' },
    //   iconComponent: { name: 'cil-pencil' },
    // },
    // {
    //   name: 'Components',
    //   title: true,
    // },
    // {
    //   name: 'Base',
    //   url: '/base',
    //   iconComponent: { name: 'cil-puzzle' },
    //   children: [
    //     {
    //       name: 'Accordion',
    //       url: '/base/accordion'
    //     },
    //     {
    //       name: 'Breadcrumbs',
    //       url: '/base/breadcrumbs'
    //     },
    //     {
    //       name: 'Cards',
    //       url: '/base/cards'
    //     },
    //     {
    //       name: 'Carousel',
    //       url: '/base/carousel'
    //     },
    //     {
    //       name: 'Collapse',
    //       url: '/base/collapse'
    //     },
    //     {
    //       name: 'List Group',
    //       url: '/base/list-group'
    //     },
    //     {
    //       name: 'Navs & Tabs',
    //       url: '/base/navs'
    //     },
    //     {
    //       name: 'Pagination',
    //       url: '/base/pagination'
    //     },
    //     {
    //       name: 'Popovers',
    //       url: '/base/popovers'
    //     },
    //     {
    //       name: 'Progress',
    //       url: '/base/progress'
    //     },
    //     {
    //       name: 'Spinners',
    //       url: '/base/spinners'
    //     },
    //     {
    //       name: 'Tables',
    //       url: '/base/tables'
    //     },
    //     {
    //       name: 'Tabs',
    //       url: '/base/tabs'
    //     },
    //     {
    //       name: 'Tooltips',
    //       url: '/base/tooltips'
    //     }
    //   ]
    // },
    // {
    //   name: 'Buttons',
    //   url: '/buttons',
    //   iconComponent: { name: 'cil-cursor' },
    //   children: [
    //     {
    //       name: 'Buttons',
    //       url: '/buttons/buttons'
    //     },
    //     {
    //       name: 'Button groups',
    //       url: '/buttons/button-groups'
    //     },
    //     {
    //       name: 'Dropdowns',
    //       url: '/buttons/dropdowns'
    //     },
    //   ]
    // },
    // {
    //   name: 'Forms',
    //   url: '/forms',
    //   iconComponent: { name: 'cil-notes' },
    //   children: [
    //     {
    //       name: 'Form Control',
    //       url: '/forms/form-control'
    //     },
    //     {
    //       name: 'Select',
    //       url: '/forms/select'
    //     },
    //     {
    //       name: 'Checks & Radios',
    //       url: '/forms/checks-radios'
    //     },
    //     {
    //       name: 'Range',
    //       url: '/forms/range'
    //     },
    //     {
    //       name: 'Input Group',
    //       url: '/forms/input-group'
    //     },
    //     {
    //       name: 'Floating Labels',
    //       url: '/forms/floating-labels'
    //     },
    //     {
    //       name: 'Layout',
    //       url: '/forms/layout'
    //     },
    //     {
    //       name: 'Validation',
    //       url: '/forms/validation'
    //     }
    //   ]
    // },
    // {
    //   name: 'Charts',
    //   url: '/charts',
    //   iconComponent: { name: 'cil-chart-pie' }
    // },
    // {
    //   name: 'Icons',
    //   iconComponent: { name: 'cil-star' },
    //   url: '/icons',
    //   children: [
    //     {
    //       name: 'CoreUI Free',
    //       url: '/icons/coreui-icons',
    //       badge: {
    //         color: 'success',
    //         text: 'FREE'
    //       }
    //     },
    //     {
    //       name: 'CoreUI Flags',
    //       url: '/icons/flags'
    //     },
    //     {
    //       name: 'CoreUI Brands',
    //       url: '/icons/brands'
    //     }
    //   ]
    // },
    // {
    //   name: 'Notifications',
    //   url: '/notifications',
    //   iconComponent: { name: 'cil-bell' },
    //   children: [
    //     {
    //       name: 'Alerts',
    //       url: '/notifications/alerts'
    //     },
    //     {
    //       name: 'Badges',
    //       url: '/notifications/badges'
    //     },
    //     {
    //       name: 'Modal',
    //       url: '/notifications/modal'
    //     },
    //     {
    //       name: 'Toast',
    //       url: '/notifications/toasts'
    //     }
    //   ]
    // },
    // {
    //   name: 'Widgets',
    //   url: '/widgets',
    //   iconComponent: { name: 'cil-calculator' },
    //   badge: {
    //     color: 'info',
    //     text: 'NEW'
    //   }
    // },
    // {
    //   title: true,
    //   name: 'Extras'
    // },
    // {
    //   name: 'Pages',
    //   url: '/login',
    //   iconComponent: { name: 'cil-star' },
    //   children: [
    //     {
    //       name: 'Login',
    //       url: '/login'
    //     },
    //     {
    //       name: 'Register',
    //       url: '/register'
    //     },
    //     {
    //       name: 'Error 404',
    //       url: '/404'
    //     },
    //     {
    //       name: 'Error 500',
    //       url: '/500'
    //     }
    //   ]
    // },
];


/***/ }),

/***/ 8705:
/*!**************************************************************************************!*\
  !*** ./src/app/containers/default-layout/default-footer/default-footer.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultFooterComponent": () => (/* binding */ DefaultFooterComponent)
/* harmony export */ });
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/angular */ 9127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class DefaultFooterComponent extends _coreui_angular__WEBPACK_IMPORTED_MODULE_0__.FooterComponent {
    constructor() {
        super();
    }
}
DefaultFooterComponent.ɵfac = function DefaultFooterComponent_Factory(t) { return new (t || DefaultFooterComponent)(); };
DefaultFooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DefaultFooterComponent, selectors: [["app-default-footer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 0, consts: [["href", "#", "target", "_blank"], [1, "ms-auto"]], template: function DefaultFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Y-mAbs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u00A9 2021 Y-mAbs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Y-mAbs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWZhdWx0LWZvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3142:
/*!**************************************************************************************!*\
  !*** ./src/app/containers/default-layout/default-header/default-header.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultHeaderComponent": () => (/* binding */ DefaultHeaderComponent)
/* harmony export */ });
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/angular */ 9127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-angular */ 6705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);






function DefaultHeaderComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function DefaultHeaderComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "c-dropdown", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "c-avatar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefaultHeaderComponent_ng_template_14_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("caret", false);
} }
class DefaultHeaderComponent extends _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent {
    constructor(classToggler, router) {
        super();
        this.classToggler = classToggler;
        this.router = router;
        this.sidebarId = "sidebar";
        this.newMessages = new Array(4);
        this.newTasks = new Array(5);
        this.newNotifications = new Array(5);
    }
    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}
DefaultHeaderComponent.ɵfac = function DefaultHeaderComponent_Factory(t) { return new (t || DefaultHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_coreui_angular__WEBPACK_IMPORTED_MODULE_1__.ClassToggleService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
DefaultHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultHeaderComponent, selectors: [["app-default-header"]], inputs: { sidebarId: "sidebarId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 4, consts: [[3, "fluid"], ["toggle", "visible", "cHeaderToggler", "", 1, "ps-1", 3, "cSidebarToggle"], ["cIcon", "", "name", "cilMenu", "size", "lg"], [1, "d-none", "d-lg-flex", "me-auto"], ["cNavLink", "", "routerLink", "/dashboard", "routerLinkActive", "active"], [1, "d-none", "d-lg-flex"], [1, "ms-3"], [4, "ngTemplateOutlet"], [1, "ms-2"], ["userDropdown", ""], ["alignment", "end", "variant", "nav-item"], ["cButton", "", "color", "", "cDropdownToggle", "", 1, "py-0", 3, "caret"], ["cTextColor", "primary", "shape", "rounded-1", "size", "md", "src", "./assets/img/avatars/8.jpg", "status", "success"], ["cDropdownMenu", "", 1, "pt-0", "pr-5", "w-auto"], ["cDropdownHeader", "", 1, "bg-light", "fw-semibold", "py-2"], ["cDropdownItem", "", 3, "click"], ["cIcon", "", 1, "me-2"]], template: function DefaultHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "c-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "c-header-nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "c-nav-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "c-header-nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "c-header-nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DefaultHeaderComponent_ng_container_10_Template, 1, 0, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "c-header-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "c-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "c-breadcrumb-router", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DefaultHeaderComponent_ng_template_14_Template, 11, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fluid", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cSidebarToggle", ctx.sidebarId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fluid", true);
    } }, directives: [_coreui_angular__WEBPACK_IMPORTED_MODULE_1__.ContainerComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.HeaderTogglerDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.SidebarToggleDirective, _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__.IconDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.HeaderNavComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.NavItemComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.NavLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.HeaderDividerComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbRouterComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.DropdownComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.ButtonDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.DropdownToggleDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.AvatarComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.TextColorDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.DropdownMenuDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.DropdownHeaderDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_1__.DropdownItemDirective], encapsulation: 2 });


/***/ }),

/***/ 6131:
/*!***********************************************************************!*\
  !*** ./src/app/containers/default-layout/default-layout.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultLayoutComponent": () => (/* binding */ DefaultLayoutComponent)
/* harmony export */ });
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nav */ 2290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/angular */ 9127);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 105);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _default_header_default_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-header/default-header.component */ 3142);
/* harmony import */ var _default_footer_default_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-footer/default-footer.component */ 8705);








function DefaultLayoutComponent_c_sidebar_toggler_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "c-sidebar-toggler", 10);
} }
const _c0 = function () { return { src: "assets/img/brand/logo.png", width: 246, height: 55, alt: "CoreUI Logo" }; };
const _c1 = function () { return { src: "assets/img/brand/coreui-signet-white.svg", width: 46, height: 46, alt: "CoreUI Logo" }; };
class DefaultLayoutComponent {
    constructor() {
        this.navItems = _nav__WEBPACK_IMPORTED_MODULE_0__.navItems;
        this.perfectScrollbarConfig = {
            suppressScrollX: true,
        };
    }
}
DefaultLayoutComponent.ɵfac = function DefaultLayoutComponent_Factory(t) { return new (t || DefaultLayoutComponent)(); };
DefaultLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DefaultLayoutComponent, selectors: [["app-dashboard"]], decls: 12, vars: 7, consts: [["id", "sidebar", "visible", "", 1, "d-print-none", "sidebar", "sidebar-fixed"], ["sidebar", "cSidebar"], ["routerLink", "./", 3, "brandFull", "brandNarrow"], [3, "config"], [3, "navItems"], ["toggle", "unfoldable", "cSidebarToggle", "sidebar", 4, "ngIf"], [1, "wrapper", "d-flex", "flex-column", "min-vh-100", "bg-light", "dark:bg-transparent"], ["position", "sticky", "sidebarId", "sidebar", 1, "mb-4", "d-print-none", "header", "header-sticky"], [1, "body", "flex-grow-1", "px-3"], ["breakpoint", "lg", 1, "h-auto"], ["toggle", "unfoldable", "cSidebarToggle", "sidebar"]], template: function DefaultLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "c-sidebar", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "c-sidebar-brand", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "perfect-scrollbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "c-sidebar-nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DefaultLayoutComponent_c_sidebar_toggler_5_Template, 1, 0, "c-sidebar-toggler", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-default-header", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "c-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-default-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("brandFull", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0))("brandNarrow", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.perfectScrollbarConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("navItems", ctx.navItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r0.narrow);
    } }, directives: [_coreui_angular__WEBPACK_IMPORTED_MODULE_4__.SidebarComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.SidebarBrandComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.SidebarNavComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _default_header_default_header_component__WEBPACK_IMPORTED_MODULE_1__.DefaultHeaderComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.ContainerComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _default_footer_default_footer_component__WEBPACK_IMPORTED_MODULE_2__.DefaultFooterComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.SidebarTogglerComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.SidebarToggleDirective], encapsulation: 2 });


/***/ }),

/***/ 4089:
/*!****************************************************!*\
  !*** ./src/app/containers/default-layout/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultFooterComponent": () => (/* reexport safe */ _default_footer_default_footer_component__WEBPACK_IMPORTED_MODULE_0__.DefaultFooterComponent),
/* harmony export */   "DefaultHeaderComponent": () => (/* reexport safe */ _default_header_default_header_component__WEBPACK_IMPORTED_MODULE_1__.DefaultHeaderComponent),
/* harmony export */   "DefaultLayoutComponent": () => (/* reexport safe */ _default_layout_component__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutComponent)
/* harmony export */ });
/* harmony import */ var _default_footer_default_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-footer/default-footer.component */ 8705);
/* harmony import */ var _default_header_default_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-header/default-header.component */ 3142);
/* harmony import */ var _default_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-layout.component */ 6131);





/***/ }),

/***/ 6068:
/*!*************************************!*\
  !*** ./src/app/containers/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultFooterComponent": () => (/* reexport safe */ _default_layout__WEBPACK_IMPORTED_MODULE_0__.DefaultFooterComponent),
/* harmony export */   "DefaultHeaderComponent": () => (/* reexport safe */ _default_layout__WEBPACK_IMPORTED_MODULE_0__.DefaultHeaderComponent),
/* harmony export */   "DefaultLayoutComponent": () => (/* reexport safe */ _default_layout__WEBPACK_IMPORTED_MODULE_0__.DefaultLayoutComponent)
/* harmony export */ });
/* harmony import */ var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout */ 4089);



/***/ }),

/***/ 2900:
/*!**************************************!*\
  !*** ./src/app/icons/icon-subset.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iconSubset": () => (/* binding */ iconSubset),
/* harmony export */   "IconSubset": () => (/* binding */ IconSubset)
/* harmony export */ });
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/icons */ 1305);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/icons */ 8313);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons */ 9072);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons */ 411);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons */ 8828);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/icons */ 9108);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/icons */ 2834);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @coreui/icons */ 3700);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @coreui/icons */ 7628);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @coreui/icons */ 4959);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @coreui/icons */ 9420);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @coreui/icons */ 3348);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @coreui/icons */ 5614);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @coreui/icons */ 3190);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @coreui/icons */ 3193);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @coreui/icons */ 2838);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @coreui/icons */ 3274);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @coreui/icons */ 1488);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @coreui/icons */ 4278);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @coreui/icons */ 7588);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @coreui/icons */ 6558);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @coreui/icons */ 2637);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @coreui/icons */ 6952);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @coreui/icons */ 1016);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @coreui/icons */ 173);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @coreui/icons */ 4516);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @coreui/icons */ 1658);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @coreui/icons */ 6826);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @coreui/icons */ 3623);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @coreui/icons */ 5623);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @coreui/icons */ 4375);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @coreui/icons */ 2456);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @coreui/icons */ 5478);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @coreui/icons */ 6882);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @coreui/icons */ 4862);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @coreui/icons */ 4703);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @coreui/icons */ 570);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @coreui/icons */ 4925);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @coreui/icons */ 4913);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @coreui/icons */ 3894);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @coreui/icons */ 2973);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @coreui/icons */ 2749);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @coreui/icons */ 5029);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @coreui/icons */ 2766);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @coreui/icons */ 5549);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @coreui/icons */ 2363);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @coreui/icons */ 2698);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @coreui/icons */ 4262);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @coreui/icons */ 4894);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @coreui/icons */ 4917);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @coreui/icons */ 7967);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @coreui/icons */ 8883);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @coreui/icons */ 2143);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @coreui/icons */ 6345);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @coreui/icons */ 3025);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @coreui/icons */ 3355);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @coreui/icons */ 9946);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @coreui/icons */ 5513);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @coreui/icons */ 1398);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @coreui/icons */ 8411);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @coreui/icons */ 6503);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @coreui/icons */ 2710);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @coreui/icons */ 6504);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @coreui/icons */ 8255);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @coreui/icons */ 9454);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @coreui/icons */ 9997);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @coreui/icons */ 1922);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @coreui/icons */ 5299);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @coreui/icons */ 9219);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @coreui/icons */ 5217);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @coreui/icons */ 6274);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @coreui/icons */ 5336);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @coreui/icons */ 3126);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @coreui/icons */ 7937);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @coreui/icons */ 5946);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @coreui/icons */ 5424);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @coreui/icons */ 9737);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! @coreui/icons */ 5907);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! @coreui/icons */ 440);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! @coreui/icons */ 2575);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! @coreui/icons */ 654);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! @coreui/icons */ 7879);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! @coreui/icons */ 6441);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! @coreui/icons */ 1534);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! @coreui/icons */ 4397);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! @coreui/icons */ 9922);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! @coreui/icons */ 2246);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! @coreui/icons */ 4007);

const iconSubset = {
    cibCcAmex: _coreui_icons__WEBPACK_IMPORTED_MODULE_0__.cibCcAmex,
    cibCcApplePay: _coreui_icons__WEBPACK_IMPORTED_MODULE_1__.cibCcApplePay,
    cibCcMastercard: _coreui_icons__WEBPACK_IMPORTED_MODULE_2__.cibCcMastercard,
    cibCcPaypal: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__.cibCcPaypal,
    cibCcStripe: _coreui_icons__WEBPACK_IMPORTED_MODULE_4__.cibCcStripe,
    cibCcVisa: _coreui_icons__WEBPACK_IMPORTED_MODULE_5__.cibCcVisa,
    cibFacebook: _coreui_icons__WEBPACK_IMPORTED_MODULE_6__.cibFacebook,
    cibGoogle: _coreui_icons__WEBPACK_IMPORTED_MODULE_7__.cibGoogle,
    cibLinkedin: _coreui_icons__WEBPACK_IMPORTED_MODULE_8__.cibLinkedin,
    cibSkype: _coreui_icons__WEBPACK_IMPORTED_MODULE_9__.cibSkype,
    cibTwitter: _coreui_icons__WEBPACK_IMPORTED_MODULE_10__.cibTwitter,
    cifBr: _coreui_icons__WEBPACK_IMPORTED_MODULE_11__.cifBr,
    cifEs: _coreui_icons__WEBPACK_IMPORTED_MODULE_12__.cifEs,
    cifFr: _coreui_icons__WEBPACK_IMPORTED_MODULE_13__.cifFr,
    cifIn: _coreui_icons__WEBPACK_IMPORTED_MODULE_14__.cifIn,
    cifPl: _coreui_icons__WEBPACK_IMPORTED_MODULE_15__.cifPl,
    cifUs: _coreui_icons__WEBPACK_IMPORTED_MODULE_16__.cifUs,
    cilAlignCenter: _coreui_icons__WEBPACK_IMPORTED_MODULE_17__.cilAlignCenter,
    cilAlignLeft: _coreui_icons__WEBPACK_IMPORTED_MODULE_18__.cilAlignLeft,
    cilAlignRight: _coreui_icons__WEBPACK_IMPORTED_MODULE_19__.cilAlignRight,
    cilApplicationsSettings: _coreui_icons__WEBPACK_IMPORTED_MODULE_20__.cilApplicationsSettings,
    cilArrowBottom: _coreui_icons__WEBPACK_IMPORTED_MODULE_21__.cilArrowBottom,
    cilArrowRight: _coreui_icons__WEBPACK_IMPORTED_MODULE_22__.cilArrowRight,
    cilArrowTop: _coreui_icons__WEBPACK_IMPORTED_MODULE_23__.cilArrowTop,
    cilBasket: _coreui_icons__WEBPACK_IMPORTED_MODULE_24__.cilBasket,
    cilBell: _coreui_icons__WEBPACK_IMPORTED_MODULE_25__.cilBell,
    cilBold: _coreui_icons__WEBPACK_IMPORTED_MODULE_26__.cilBold,
    cilBookmark: _coreui_icons__WEBPACK_IMPORTED_MODULE_27__.cilBookmark,
    cilCalculator: _coreui_icons__WEBPACK_IMPORTED_MODULE_28__.cilCalculator,
    cilCalendar: _coreui_icons__WEBPACK_IMPORTED_MODULE_29__.cilCalendar,
    cilChart: _coreui_icons__WEBPACK_IMPORTED_MODULE_30__.cilChart,
    cilChartPie: _coreui_icons__WEBPACK_IMPORTED_MODULE_31__.cilChartPie,
    cilChevronLeft: _coreui_icons__WEBPACK_IMPORTED_MODULE_32__.cilChevronLeft,
    cilChevronRight: _coreui_icons__WEBPACK_IMPORTED_MODULE_33__.cilChevronRight,
    cilCloudDownload: _coreui_icons__WEBPACK_IMPORTED_MODULE_34__.cilCloudDownload,
    cilCode: _coreui_icons__WEBPACK_IMPORTED_MODULE_35__.cilCode,
    cilCommentSquare: _coreui_icons__WEBPACK_IMPORTED_MODULE_36__.cilCommentSquare,
    cilCreditCard: _coreui_icons__WEBPACK_IMPORTED_MODULE_37__.cilCreditCard,
    cilCursor: _coreui_icons__WEBPACK_IMPORTED_MODULE_38__.cilCursor,
    cilDollar: _coreui_icons__WEBPACK_IMPORTED_MODULE_39__.cilDollar,
    cilDrop: _coreui_icons__WEBPACK_IMPORTED_MODULE_40__.cilDrop,
    cilEnvelopeClosed: _coreui_icons__WEBPACK_IMPORTED_MODULE_41__.cilEnvelopeClosed,
    cilEnvelopeOpen: _coreui_icons__WEBPACK_IMPORTED_MODULE_42__.cilEnvelopeOpen,
    cilFile: _coreui_icons__WEBPACK_IMPORTED_MODULE_43__.cilFile,
    cilHome: _coreui_icons__WEBPACK_IMPORTED_MODULE_44__.cilHome,
    cilInbox: _coreui_icons__WEBPACK_IMPORTED_MODULE_45__.cilInbox,
    cilIndentDecrease: _coreui_icons__WEBPACK_IMPORTED_MODULE_46__.cilIndentDecrease,
    cilIndentIncrease: _coreui_icons__WEBPACK_IMPORTED_MODULE_47__.cilIndentIncrease,
    cilItalic: _coreui_icons__WEBPACK_IMPORTED_MODULE_48__.cilItalic,
    cilJustifyCenter: _coreui_icons__WEBPACK_IMPORTED_MODULE_49__.cilJustifyCenter,
    cilLayers: _coreui_icons__WEBPACK_IMPORTED_MODULE_50__.cilLayers,
    cilList: _coreui_icons__WEBPACK_IMPORTED_MODULE_51__.cilList,
    cilListNumbered: _coreui_icons__WEBPACK_IMPORTED_MODULE_52__.cilListNumbered,
    cilLocationPin: _coreui_icons__WEBPACK_IMPORTED_MODULE_53__.cilLocationPin,
    cilLockLocked: _coreui_icons__WEBPACK_IMPORTED_MODULE_54__.cilLockLocked,
    cilMagnifyingGlass: _coreui_icons__WEBPACK_IMPORTED_MODULE_55__.cilMagnifyingGlass,
    cilMap: _coreui_icons__WEBPACK_IMPORTED_MODULE_56__.cilMap,
    cilMediaPlay: _coreui_icons__WEBPACK_IMPORTED_MODULE_57__.cilMediaPlay,
    cilMenu: _coreui_icons__WEBPACK_IMPORTED_MODULE_58__.cilMenu,
    cilMoon: _coreui_icons__WEBPACK_IMPORTED_MODULE_59__.cilMoon,
    cilNotes: _coreui_icons__WEBPACK_IMPORTED_MODULE_60__.cilNotes,
    cilOptions: _coreui_icons__WEBPACK_IMPORTED_MODULE_61__.cilOptions,
    cilPaperclip: _coreui_icons__WEBPACK_IMPORTED_MODULE_62__.cilPaperclip,
    cilPaperPlane: _coreui_icons__WEBPACK_IMPORTED_MODULE_63__.cilPaperPlane,
    cilPen: _coreui_icons__WEBPACK_IMPORTED_MODULE_64__.cilPen,
    cilPencil: _coreui_icons__WEBPACK_IMPORTED_MODULE_65__.cilPencil,
    cilPeople: _coreui_icons__WEBPACK_IMPORTED_MODULE_66__.cilPeople,
    cilPrint: _coreui_icons__WEBPACK_IMPORTED_MODULE_67__.cilPrint,
    cilPuzzle: _coreui_icons__WEBPACK_IMPORTED_MODULE_68__.cilPuzzle,
    cilReportSlash: _coreui_icons__WEBPACK_IMPORTED_MODULE_69__.cilReportSlash,
    cilSave: _coreui_icons__WEBPACK_IMPORTED_MODULE_70__.cilSave,
    cilSettings: _coreui_icons__WEBPACK_IMPORTED_MODULE_71__.cilSettings,
    cilShare: _coreui_icons__WEBPACK_IMPORTED_MODULE_72__.cilShare,
    cilShareAll: _coreui_icons__WEBPACK_IMPORTED_MODULE_73__.cilShareAll,
    cilShareBoxed: _coreui_icons__WEBPACK_IMPORTED_MODULE_74__.cilShareBoxed,
    cilSpeech: _coreui_icons__WEBPACK_IMPORTED_MODULE_75__.cilSpeech,
    cilSpeedometer: _coreui_icons__WEBPACK_IMPORTED_MODULE_76__.cilSpeedometer,
    cilSpreadsheet: _coreui_icons__WEBPACK_IMPORTED_MODULE_77__.cilSpreadsheet,
    cilStar: _coreui_icons__WEBPACK_IMPORTED_MODULE_78__.cilStar,
    cilSun: _coreui_icons__WEBPACK_IMPORTED_MODULE_79__.cilSun,
    cilTags: _coreui_icons__WEBPACK_IMPORTED_MODULE_80__.cilTags,
    cilTask: _coreui_icons__WEBPACK_IMPORTED_MODULE_81__.cilTask,
    cilTrash: _coreui_icons__WEBPACK_IMPORTED_MODULE_82__.cilTrash,
    cilUnderline: _coreui_icons__WEBPACK_IMPORTED_MODULE_83__.cilUnderline,
    cilUser: _coreui_icons__WEBPACK_IMPORTED_MODULE_84__.cilUser,
    cilUserFemale: _coreui_icons__WEBPACK_IMPORTED_MODULE_85__.cilUserFemale,
    cilUserFollow: _coreui_icons__WEBPACK_IMPORTED_MODULE_86__.cilUserFollow,
    cilUserUnfollow: _coreui_icons__WEBPACK_IMPORTED_MODULE_87__.cilUserUnfollow,
};
var IconSubset;
(function (IconSubset) {
    IconSubset["cibCcAmex"] = "cibCcAmex";
    IconSubset["cibCcApplePay"] = "cibCcApplePay";
    IconSubset["cibCcMastercard"] = "cibCcMastercard";
    IconSubset["cibCcPaypal"] = "cibCcPaypal";
    IconSubset["cibCcStripe"] = "cibCcStripe";
    IconSubset["cibCcVisa"] = "cibCcVisa";
    IconSubset["cibFacebook"] = "cibFacebook";
    IconSubset["cibGoogle"] = "cibGoogle";
    IconSubset["cibLinkedin"] = "cibLinkedin";
    IconSubset["cibSkype"] = "cibSkype";
    IconSubset["cibTwitter"] = "cibTwitter";
    IconSubset["cifBr"] = "cifBr";
    IconSubset["cifEs"] = "cifEs";
    IconSubset["cifFr"] = "cifFr";
    IconSubset["cifIn"] = "cifIn";
    IconSubset["cifPl"] = "cifPl";
    IconSubset["cifUs"] = "cifUs";
    IconSubset["cilAlignCenter"] = "cilAlignCenter";
    IconSubset["cilAlignLeft"] = "cilAlignLeft";
    IconSubset["cilAlignRight"] = "cilAlignRight";
    IconSubset["cilApplicationsSettings"] = "cilApplicationsSettings";
    IconSubset["cilArrowBottom"] = "cilArrowBottom";
    IconSubset["cilArrowRight"] = "cilArrowRight";
    IconSubset["cilArrowTop"] = "cilArrowTop";
    IconSubset["cilBasket"] = "cilBasket";
    IconSubset["cilBell"] = "cilBell";
    IconSubset["cilBold"] = "cilBold";
    IconSubset["cilBookmark"] = "cilBookmark";
    IconSubset["cilCalculator"] = "cilCalculator";
    IconSubset["cilCalendar"] = "cilCalendar";
    IconSubset["cilChart"] = "cilChart";
    IconSubset["cilChartPie"] = "cilChartPie";
    IconSubset["cilChevronLeft"] = "cilChevronLeft";
    IconSubset["cilChevronRight"] = "cilChevronRight";
    IconSubset["cilCloudDownload"] = "cilCloudDownload";
    IconSubset["cilCode"] = "cilCode";
    IconSubset["cilCommentSquare"] = "cilCommentSquare";
    IconSubset["cilCreditCard"] = "cilCreditCard";
    IconSubset["cilCursor"] = "cilCursor";
    IconSubset["cilDollar"] = "cilDollar";
    IconSubset["cilDrop"] = "cilDrop";
    IconSubset["cilEnvelopeClosed"] = "cilEnvelopeClosed";
    IconSubset["cilEnvelopeOpen"] = "cilEnvelopeOpen";
    IconSubset["cilFile"] = "cilFile";
    IconSubset["cilHome"] = "cilHome";
    IconSubset["cilInbox"] = "cilInbox";
    IconSubset["cilIndentDecrease"] = "cilIndentDecrease";
    IconSubset["cilIndentIncrease"] = "cilIndentIncrease";
    IconSubset["cilItalic"] = "cilItalic";
    IconSubset["cilJustifyCenter"] = "cilJustifyCenter";
    IconSubset["cilLayers"] = "cilLayers";
    IconSubset["cilList"] = "cilList";
    IconSubset["cilListNumbered"] = "cilListNumbered";
    IconSubset["cilLocationPin"] = "cilLocationPin";
    IconSubset["cilLockLocked"] = "cilLockLocked";
    IconSubset["cilMagnifyingGlass"] = "cilMagnifyingGlass";
    IconSubset["cilMap"] = "cilMap";
    IconSubset["cilMediaPlay"] = "cilMediaPlay";
    IconSubset["cilMenu"] = "cilMenu";
    IconSubset["cilMoon"] = "cilMoon";
    IconSubset["cilNotes"] = "cilNotes";
    IconSubset["cilOptions"] = "cilOptions";
    IconSubset["cilPaperclip"] = "cilPaperclip";
    IconSubset["cilPaperPlane"] = "cilPaperPlane";
    IconSubset["cilPen"] = "cilPen";
    IconSubset["cilPencil"] = "cilPencil";
    IconSubset["cilPeople"] = "cilPeople";
    IconSubset["cilPrint"] = "cilPrint";
    IconSubset["cilPuzzle"] = "cilPuzzle";
    IconSubset["cilReportSlash"] = "cilReportSlash";
    IconSubset["cilSave"] = "cilSave";
    IconSubset["cilSettings"] = "cilSettings";
    IconSubset["cilShare"] = "cilShare";
    IconSubset["cilShareAll"] = "cilShareAll";
    IconSubset["cilShareBoxed"] = "cilShareBoxed";
    IconSubset["cilSpeech"] = "cilSpeech";
    IconSubset["cilSpeedometer"] = "cilSpeedometer";
    IconSubset["cilSpreadsheet"] = "cilSpreadsheet";
    IconSubset["cilStar"] = "cilStar";
    IconSubset["cilSun"] = "cilSun";
    IconSubset["cilTags"] = "cilTags";
    IconSubset["cilTask"] = "cilTask";
    IconSubset["cilTrash"] = "cilTrash";
    IconSubset["cilUnderline"] = "cilUnderline";
    IconSubset["cilUser"] = "cilUser";
    IconSubset["cilUserFemale"] = "cilUserFemale";
    IconSubset["cilUserFollow"] = "cilUserFollow";
    IconSubset["cilUserUnfollow"] = "cilUserUnfollow";
})(IconSubset || (IconSubset = {}));


/***/ }),

/***/ 460:
/*!***************************************************!*\
  !*** ./src/app/shared/guard/after-login.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AfterLoginGuard": () => (/* binding */ AfterLoginGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/token.service */ 2468);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);



class AfterLoginGuard {
    constructor(Token, router, route) {
        this.Token = Token;
        this.router = router;
        this.route = route;
        const token = localStorage.getItem('token');
        if (token) {
            this.router.navigate(['/dashboard']);
        }
    }
    canActivate(route, state) {
        const token = localStorage.getItem('token');
        if (token) {
            return false;
        }
        return true;
        // this.router.navigate(['/dashboard']);
    }
}
AfterLoginGuard.ɵfac = function AfterLoginGuard_Factory(t) { return new (t || AfterLoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_token_service__WEBPACK_IMPORTED_MODULE_0__.TokenService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
AfterLoginGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AfterLoginGuard, factory: AfterLoginGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7904:
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                this.router.navigate(['/login']);
            }
            else {
                return true;
            }
        }
        catch (err) {
            this.router.navigate(['/dashboard']);
        }
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2468:
/*!**************************************************!*\
  !*** ./src/app/shared/services/token.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenService": () => (/* binding */ TokenService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);



class TokenService {
    constructor(router) {
        this.router = router;
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
        this.data = this.userData.asObservable();
    }
    handle(token) {
        this.set(token);
    }
    set(token) {
        localStorage.setItem('token', token);
    }
    sendUserData(data) {
        this.userData.next(data);
    }
    getUserData() {
        return this.userData.asObservable();
    }
    get() {
        return localStorage.getItem('token');
    }
    remove() {
        localStorage.removeItem('token');
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
TokenService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9753:
/*!******************************************************!*\
  !*** ./src/app/views/pages/login/login.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_shared_services_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/token.service */ 2468);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/angular */ 9127);
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/icons-angular */ 6705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);








function LoginComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_18_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_div_18_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f["email"] == null ? null : ctx_r0.f["email"].errors == null ? null : ctx_r0.f["email"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f["email"] == null ? null : ctx_r0.f["email"].errors == null ? null : ctx_r0.f["email"].errors["pattern"]);
} }
function LoginComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_23_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f == null ? null : ctx_r1.f["password"] == null ? null : ctx_r1.f["password"].errors == null ? null : ctx_r1.f["password"].errors["required"]);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class LoginComponent {
    constructor(router, tokenService, formBuilder) {
        this.router = router;
        this.tokenService = tokenService;
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        else if (this.loginForm.value.email == 'admin@admin.com' && this.loginForm.value.password == '1234546789') {
            const payLoad = {
                email: this.loginForm.value.email,
                password: this.loginForm.value.password,
                device_type: 'website'
            };
            const token = 1234567890;
            this.tokenService.handle(token);
            this.tokenService.sendUserData(JSON.stringify(payLoad));
            this.router.navigate(['/dashboard']);
        }
        else {
            this.invalidCredMessage = 'Wrong Credentials';
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_token_service__WEBPACK_IMPORTED_MODULE_0__.TokenService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 28, vars: 10, consts: [[1, "bg-light", "min-vh-100", "d-flex", "flex-row", "align-items-center"], [1, "justify-content-center"], ["md", "8"], [1, "p-4"], ["cForm", "", 3, "formGroup", "ngSubmit"], [1, "text-medium-emphasis"], [2, "color", "#e55353"], [1, "mb-3"], ["cInputGroupText", ""], ["cIcon", "", "name", "cilUser"], ["autoComplete", "email", "cFormControl", "", "formControlName", "email", "placeholder", "Email", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "mb-4"], ["cIcon", "", "name", "cilLockLocked"], ["autoComplete", "current-password", "cFormControl", "", "formControlName", "password", "placeholder", "Password", "type", "password", 3, "ngClass"], ["xs", "6"], ["type", "submit", "cButton", "", "color", "primary", 1, "px-4"], [1, "invalid-feedback"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "c-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "c-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "c-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "c-card-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "c-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "c-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sign In to your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "c-input-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "c-input-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, LoginComponent_div_23_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "c-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "c-col", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.invalidCredMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.submitted && (ctx.f == null ? null : ctx.f["email"] == null ? null : ctx.f["email"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f["email"] == null ? null : ctx.f["email"].errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.submitted && (ctx.f == null ? null : ctx.f["password"] == null ? null : ctx.f["password"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f == null ? null : ctx.f["password"] == null ? null : ctx.f["password"].errors));
    } }, directives: [_coreui_angular__WEBPACK_IMPORTED_MODULE_4__.ContainerComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.RowComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.ColComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.CardGroupComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.CardComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.CardBodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.FormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.InputGroupComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.InputGroupTextDirective, _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_5__.IconDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 328:
/*!**********************************************************!*\
  !*** ./src/app/views/pages/page404/page404.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page404Component": () => (/* binding */ Page404Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class Page404Component {
    constructor() { }
}
Page404Component.ɵfac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 0, vars: 0, template: function Page404Component_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlNDA0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3376:
/*!**********************************************************!*\
  !*** ./src/app/views/pages/page500/page500.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page500Component": () => (/* binding */ Page500Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class Page500Component {
    constructor() { }
}
Page500Component.ɵfac = function Page500Component_Factory(t) { return new (t || Page500Component)(); };
Page500Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page500Component, selectors: [["app-page500"]], decls: 0, vars: 0, template: function Page500Component_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlNTAwLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7411:
/*!************************************************************!*\
  !*** ./src/app/views/pages/register/register.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class RegisterComponent {
    constructor() { }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 0, vars: 0, template: function RegisterComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map