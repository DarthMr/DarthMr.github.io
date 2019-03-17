(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/3PL/threepeel.component.html":
/*!**********************************************!*\
  !*** ./src/app/3PL/threepeel.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-9\">\n                                <div class=\"numbers\">\n                                    <b><p>Siddharth</p></b>\n                                        <hr/>\n                                    <p>Siddharth Line 1</p>\n                                    <p>Siddharth Line 2</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-9\">\n                                <div class=\"numbers\">\n                                    <b><p>Mehak</p></b>\n                                        <hr/>\n                                    <p>Mehak Line 1</p>\n                                    <p>Mehak Line 2</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-10\">\n                                <div class=\"numbers\">\n                                    <b><p>Ashish</p></b>\n                                        <hr/>\n                                    <p>Ashish Line 1</p>\n                                    <p>Ashish Line 2</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-9\">\n                                <div class=\"numbers\">\n                                    <b><p>Abhimanyu</p></b>\n                                        <hr/>\n                                    <p>contact me on abhismal252@gmail.com </p>\n                                    <p>Abhimanyu Line 2</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n               </div>\n            </div>"

/***/ }),

/***/ "./src/app/3PL/threepeel.component.ts":
/*!********************************************!*\
  !*** ./src/app/3PL/threepeel.component.ts ***!
  \********************************************/
/*! exports provided: ThreeplComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeplComponent", function() { return ThreeplComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThreeplComponent = /** @class */ (function () {
    function ThreeplComponent() {
    }
    ThreeplComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'threepeel-cmp',
            template: __webpack_require__(/*! ./threepeel.component.html */ "./src/app/3PL/threepeel.component.html")
        })
    ], ThreeplComponent);
    return ThreeplComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-background-color=\"white\" data-active-color=\"danger\">\n        <sidebar-cmp></sidebar-cmp>\n    </div>\n   <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <div class=\"content\">\n            <router-outlet></router-outlet>\n        </div>\n        <footer-cmp></footer-cmp>\n    </div>\n</div>\n<fixedplugin-cmp></fixedplugin-cmp>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


//import { EmployeeService } from './user.service';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.module */ "./src/app/sidebar/sidebar.module.ts");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer/footer.module */ "./src/app/shared/footer/footer.module.ts");
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/navbar/navbar.module */ "./src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/fixedplugin/fixedplugin.module */ "./src/app/shared/fixedplugin/fixedplugin.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/typography/typography.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/icons/icons.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/notifications/notifications.component.ts");
/* harmony import */ var _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./upgrade/upgrade.component */ "./src/app/upgrade/upgrade.component.ts");
/* harmony import */ var _3PL_threepeel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./3PL/threepeel.component */ "./src/app/3PL/threepeel.component.ts");




//import { EmployeeService } from './user.service';








//import { UserComponent }   from './user/user.component';
//import { TableComponent }   from './table/table.component';
//import { Table1Component }   from './table1/table1.component';




//import { RoutingsComponent }   from './routing/routings.component';

//import { OrdownloadComponent }   from './ordownload/ordownload.component';
//import { AutomationComponent }   from './automation/automation.component';
//import { SubappComponent }   from './subApp1/subapp.component';
//import { from } from 'rxjs';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                //  UserComponent,
                //  TableComponent,
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_12__["TypographyComponent"],
                _icons_icons_component__WEBPACK_IMPORTED_MODULE_13__["IconsComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_14__["NotificationsComponent"],
                _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_15__["UpgradeComponent"],
                _3PL_threepeel_component__WEBPACK_IMPORTED_MODULE_16__["ThreeplComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutes"]),
                _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_7__["SidebarModule"],
                _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_9__["NavbarModule"],
                _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"],
                _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_10__["FixedPluginModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/typography/typography.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/icons/icons.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/notifications/notifications.component.ts");
/* harmony import */ var _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upgrade/upgrade.component */ "./src/app/upgrade/upgrade.component.ts");
/* harmony import */ var _3PL_threepeel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./3PL/threepeel.component */ "./src/app/3PL/threepeel.component.ts");

//import {Table1Component} from './table1/table1.component';
//import { UserComponent }   from './user/user.component';
//import { TableComponent }   from './table/table.component';


//import { MapsComponent }   from './maps/maps.component';


//import { RoutingsComponent } from './routing/routings.component';

//import { OrdownloadComponent }   from './ordownload/ordownload.component';
//import { AutomationComponent }   from './automation/automation.component';
//import { SubappComponent }   from './subApp1/subapp.component';
//import { format } from 'path';
var AppRoutes = [
    {
        path: '',
        redirectTo: 'spreeBot',
        pathMatch: 'full',
    },
    {
        path: 'spreeBot',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]
    },
    {
        path: 'typography',
        component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_1__["TypographyComponent"]
    },
    {
        path: 'icons',
        component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_2__["IconsComponent"]
    },
    /* {
         path: 'maps',
         component: MapsComponent
     },*/
    {
        path: 'notifications',
        component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"]
    },
    {
        path: 'upgrade',
        component: _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_4__["UpgradeComponent"]
    },
    {
        path: 'About',
        component: _3PL_threepeel_component__WEBPACK_IMPORTED_MODULE_5__["ThreeplComponent"]
    }
];


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n      <!--  <p>[24 Hours]</p>-->\n        <div class=\"row\">\n            <!--<div class=\"col-lg-3 col-sm-6\">-->\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"row\">\n                           <!-- <div class=\"col-xs-5\">\n                                <div class=\"icon-big icon-warning text-center\">\n                                    <i class=\"ti-server\"></i>\n                                </div>\n                            </div>-->\n                            <div class=\"col-xs-9\">\n                                <div class=\"numbers\">\n                                    <b>spreeBot</b>\n                                        <hr/>\n                                    <p>1. Smart For Work</p>\n                                    <p>2. Integratable to multiple applications</p>\n                                    <p>3. Has its own website</p>\n                                    <hr/>\n                                    <p><b>Description</b>: In the modern day a person could be asked to work on certain things at anytime. We have seen many cases where people in their car have their laptops open and check on the emails. This creates absolute minimum awareness on the road and risk of life among people around the person involved in work while on the road. We have come up with a solution which will help in converting the utterly important work into voice automated work, where if the work needs immediate attention the email or message will be automated in to voice speech, which in turn will receive response from the person in the form of voice speech.</p>\n                                </div>\n                            </div>\n                        </div>\n                        <!--<div class=\"footer\">\n                            <hr />\n                            <div class=\"stats\">\n                                <div class=\"icon-warning\">\n                                <i class=\"ti-reload\"></i> Pending\n                            </div>\n                            </div>\n                        </div>-->\n                    </div>\n                </div>\n            </div>\n            </div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dashboard-cmp',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html")
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/icons/icons.component.html":
/*!********************************************!*\
  !*** ./src/app/icons/icons.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">320+ Themify Icons</h4>\n                        <p class=\"category\">Handcrafted by our friends from <a target=\"_blank\" href=\"https://themify.me/\">Themify</a>.</p>\n                    </div>\n                    <div class=\"content all-icons\">\n\n                        <div class=\"icon-section\">\n                            <h3>Arrows &amp; Direction Icons </h3>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-up\"></span><span class=\"icon-name\"> ti-arrow-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-right\"></span><span class=\"icon-name\"> ti-arrow-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-left\"></span><span class=\"icon-name\"> ti-arrow-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-down\"></span><span class=\"icon-name\"> ti-arrow-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrows-vertical\"></span><span class=\"icon-name\"> ti-arrows-vertical</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrows-horizontal\"></span><span class=\"icon-name\"> ti-arrows-horizontal</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-up\"></span><span class=\"icon-name\"> ti-angle-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-right\"></span><span class=\"icon-name\"> ti-angle-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-left\"></span><span class=\"icon-name\"> ti-angle-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-down\"></span><span class=\"icon-name\"> ti-angle-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-double-up\"></span><span class=\"icon-name\"> ti-angle-double-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-double-right\"></span><span class=\"icon-name\"> ti-angle-double-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-double-left\"></span><span class=\"icon-name\"> ti-angle-double-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-double-down\"></span><span class=\"icon-name\"> ti-angle-double-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-move\"></span><span class=\"icon-name\"> ti-move</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-fullscreen\"></span><span class=\"icon-name\"> ti-fullscreen</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-top-right\"></span><span class=\"icon-name\"> ti-arrow-top-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-top-left\"></span><span class=\"icon-name\"> ti-arrow-top-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-circle-up\"></span><span class=\"icon-name\"> ti-arrow-circle-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-circle-right\"></span><span class=\"icon-name\"> ti-arrow-circle-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-circle-left\"></span><span class=\"icon-name\"> ti-arrow-circle-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-circle-down\"></span><span class=\"icon-name\"> ti-arrow-circle-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrows-corner\"></span><span class=\"icon-name\"> ti-arrows-corner</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-split-v\"></span><span class=\"icon-name\"> ti-split-v</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-split-v-alt\"></span><span class=\"icon-name\"> ti-split-v-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-split-h\"></span><span class=\"icon-name\"> ti-split-h</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-point-up\"></span><span class=\"icon-name\"> ti-hand-point-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-point-right\"></span><span class=\"icon-name\"> ti-hand-point-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-point-left\"></span><span class=\"icon-name\"> ti-hand-point-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-point-down\"></span><span class=\"icon-name\"> ti-hand-point-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-back-right\"></span><span class=\"icon-name\"> ti-back-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-back-left\"></span><span class=\"icon-name\"> ti-back-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-exchange-vertical\"></span><span class=\"icon-name\"> ti-exchange-vertical</span>\n                            </div>\n\n                        </div> <!-- Arrows Icons -->\n\n\n\n                        <h3>Web App Icons</h3>\n\n                        <div class=\"icon-section\">\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-wand\"></span><span class=\"icon-name\"> ti-wand</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-save\"></span><span class=\"icon-name\"> ti-save</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-save-alt\"></span><span class=\"icon-name\"> ti-save-alt</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-direction\"></span><span class=\"icon-name\"> ti-direction</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-direction-alt\"></span><span class=\"icon-name\"> ti-direction-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-user\"></span><span class=\"icon-name\"> ti-user</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-link\"></span><span class=\"icon-name\"> ti-link</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-unlink\"></span><span class=\"icon-name\"> ti-unlink</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-trash\"></span><span class=\"icon-name\"> ti-trash</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-target\"></span><span class=\"icon-name\"> ti-target</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-tag\"></span><span class=\"icon-name\"> ti-tag</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-desktop\"></span><span class=\"icon-name\"> ti-desktop</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-tablet\"></span><span class=\"icon-name\"> ti-tablet</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-mobile\"></span><span class=\"icon-name\"> ti-mobile</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-email\"></span><span class=\"icon-name\"> ti-email</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-star\"></span><span class=\"icon-name\"> ti-star</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-spray\"></span><span class=\"icon-name\"> ti-spray</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-signal\"></span><span class=\"icon-name\"> ti-signal</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shopping-cart\"></span><span class=\"icon-name\"> ti-shopping-cart</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shopping-cart-full\"></span><span class=\"icon-name\"> ti-shopping-cart-full</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-settings\"></span><span class=\"icon-name\"> ti-settings</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-search\"></span><span class=\"icon-name\"> ti-search</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-zoom-in\"></span><span class=\"icon-name\"> ti-zoom-in</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-zoom-out\"></span><span class=\"icon-name\"> ti-zoom-out</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-cut\"></span><span class=\"icon-name\"> ti-cut</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ruler\"></span><span class=\"icon-name\"> ti-ruler</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ruler-alt-2\"></span><span class=\"icon-name\"> ti-ruler-alt-2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ruler-pencil\"></span><span class=\"icon-name\"> ti-ruler-pencil</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ruler-alt\"></span><span class=\"icon-name\"> ti-ruler-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bookmark\"></span><span class=\"icon-name\"> ti-bookmark</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bookmark-alt\"></span><span class=\"icon-name\"> ti-bookmark-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-reload\"></span><span class=\"icon-name\"> ti-reload</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-plus\"></span><span class=\"icon-name\"> ti-plus</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-minus\"></span><span class=\"icon-name\"> ti-minus</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-close\"></span><span class=\"icon-name\"> ti-close</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pin\"></span><span class=\"icon-name\"> ti-pin</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pencil\"></span><span class=\"icon-name\"> ti-pencil</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pencil-alt\"></span><span class=\"icon-name\"> ti-pencil-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-paint-roller\"></span><span class=\"icon-name\"> ti-paint-roller</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-paint-bucket\"></span><span class=\"icon-name\"> ti-paint-bucket</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-na\"></span><span class=\"icon-name\"> ti-na</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-medall\"></span><span class=\"icon-name\"> ti-medall</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-medall-alt\"></span><span class=\"icon-name\"> ti-medall-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-marker\"></span><span class=\"icon-name\"> ti-marker</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-marker-alt\"></span><span class=\"icon-name\"> ti-marker-alt</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-lock\"></span><span class=\"icon-name\"> ti-lock</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-unlock\"></span><span class=\"icon-name\"> ti-unlock</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-location-arrow\"></span><span class=\"icon-name\"> ti-location-arrow</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout\"></span><span class=\"icon-name\"> ti-layout</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layers\"></span><span class=\"icon-name\"> ti-layers</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layers-alt\"></span><span class=\"icon-name\"> ti-layers-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-key\"></span><span class=\"icon-name\"> ti-key</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-image\"></span><span class=\"icon-name\"> ti-image</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-heart\"></span><span class=\"icon-name\"> ti-heart</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-heart-broken\"></span><span class=\"icon-name\"> ti-heart-broken</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-stop\"></span><span class=\"icon-name\"> ti-hand-stop</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-open\"></span><span class=\"icon-name\"> ti-hand-open</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-drag\"></span><span class=\"icon-name\"> ti-hand-drag</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-flag\"></span><span class=\"icon-name\"> ti-flag</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-flag-alt\"></span><span class=\"icon-name\"> ti-flag-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-flag-alt-2\"></span><span class=\"icon-name\"> ti-flag-alt-2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-eye\"></span><span class=\"icon-name\"> ti-eye</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-import\"></span><span class=\"icon-name\"> ti-import</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-export\"></span><span class=\"icon-name\"> ti-export</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-cup\"></span><span class=\"icon-name\"> ti-cup</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-crown\"></span><span class=\"icon-name\"> ti-crown</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-comments\"></span><span class=\"icon-name\"> ti-comments</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-comment\"></span><span class=\"icon-name\"> ti-comment</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-comment-alt\"></span><span class=\"icon-name\"> ti-comment-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-thought\"></span><span class=\"icon-name\"> ti-thought</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-clip\"></span><span class=\"icon-name\"> ti-clip</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-check\"></span><span class=\"icon-name\"> ti-check</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-check-box\"></span><span class=\"icon-name\"> ti-check-box</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-camera\"></span><span class=\"icon-name\"> ti-camera</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-announcement\"></span><span class=\"icon-name\"> ti-announcement</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-brush\"></span><span class=\"icon-name\"> ti-brush</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-brush-alt\"></span><span class=\"icon-name\"> ti-brush-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-palette\"></span><span class=\"icon-name\"> ti-palette</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-briefcase\"></span><span class=\"icon-name\"> ti-briefcase</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bolt\"></span><span class=\"icon-name\"> ti-bolt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bolt-alt\"></span><span class=\"icon-name\"> ti-bolt-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-blackboard\"></span><span class=\"icon-name\"> ti-blackboard</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bag\"></span><span class=\"icon-name\"> ti-bag</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-world\"></span><span class=\"icon-name\"> ti-world</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-wheelchair\"></span><span class=\"icon-name\"> ti-wheelchair</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-car\"></span><span class=\"icon-name\"> ti-car</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-truck\"></span><span class=\"icon-name\"> ti-truck</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-timer\"></span><span class=\"icon-name\"> ti-timer</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ticket\"></span><span class=\"icon-name\"> ti-ticket</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-thumb-up\"></span><span class=\"icon-name\"> ti-thumb-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-thumb-down\"></span><span class=\"icon-name\"> ti-thumb-down</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-stats-up\"></span><span class=\"icon-name\"> ti-stats-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-stats-down\"></span><span class=\"icon-name\"> ti-stats-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shine\"></span><span class=\"icon-name\"> ti-shine</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shift-right\"></span><span class=\"icon-name\"> ti-shift-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shift-left\"></span><span class=\"icon-name\"> ti-shift-left</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shift-right-alt\"></span><span class=\"icon-name\"> ti-shift-right-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shift-left-alt\"></span><span class=\"icon-name\"> ti-shift-left-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shield\"></span><span class=\"icon-name\"> ti-shield</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-notepad\"></span><span class=\"icon-name\"> ti-notepad</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-server\"></span><span class=\"icon-name\"> ti-server</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pulse\"></span><span class=\"icon-name\"> ti-pulse</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-printer\"></span><span class=\"icon-name\"> ti-printer</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-power-off\"></span><span class=\"icon-name\"> ti-power-off</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-plug\"></span><span class=\"icon-name\"> ti-plug</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pie-chart\"></span><span class=\"icon-name\"> ti-pie-chart</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-panel\"></span><span class=\"icon-name\"> ti-panel</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-package\"></span><span class=\"icon-name\"> ti-package</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-music\"></span><span class=\"icon-name\"> ti-music</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-music-alt\"></span><span class=\"icon-name\"> ti-music-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-mouse\"></span><span class=\"icon-name\"> ti-mouse</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-mouse-alt\"></span><span class=\"icon-name\"> ti-mouse-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-money\"></span><span class=\"icon-name\"> ti-money</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-microphone\"></span><span class=\"icon-name\"> ti-microphone</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-menu\"></span><span class=\"icon-name\"> ti-menu</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-menu-alt\"></span><span class=\"icon-name\"> ti-menu-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-map\"></span><span class=\"icon-name\"> ti-map</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-map-alt\"></span><span class=\"icon-name\"> ti-map-alt</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-location-pin\"></span><span class=\"icon-name\"> ti-location-pin</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-light-bulb\"></span><span class=\"icon-name\"> ti-light-bulb</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-info\"></span><span class=\"icon-name\"> ti-info</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-infinite\"></span><span class=\"icon-name\"> ti-infinite</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-id-badge\"></span><span class=\"icon-name\"> ti-id-badge</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hummer\"></span><span class=\"icon-name\"> ti-hummer</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-home\"></span><span class=\"icon-name\"> ti-home</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-help\"></span><span class=\"icon-name\"> ti-help</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-headphone\"></span><span class=\"icon-name\"> ti-headphone</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-harddrives\"></span><span class=\"icon-name\"> ti-harddrives</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-harddrive\"></span><span class=\"icon-name\"> ti-harddrive</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-gift\"></span><span class=\"icon-name\"> ti-gift</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-game\"></span><span class=\"icon-name\"> ti-game</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-filter\"></span><span class=\"icon-name\"> ti-filter</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-files\"></span><span class=\"icon-name\"> ti-files</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-file\"></span><span class=\"icon-name\"> ti-file</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-zip\"></span><span class=\"icon-name\"> ti-zip</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-folder\"></span><span class=\"icon-name\"> ti-folder</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-envelope\"></span><span class=\"icon-name\"> ti-envelope</span>\n                            </div>\n\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-dashboard\"></span><span class=\"icon-name\"> ti-dashboard</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-cloud\"></span><span class=\"icon-name\"> ti-cloud</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-cloud-up\"></span><span class=\"icon-name\"> ti-cloud-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-cloud-down\"></span><span class=\"icon-name\"> ti-cloud-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-clipboard\"></span><span class=\"icon-name\"> ti-clipboard</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-calendar\"></span><span class=\"icon-name\"> ti-calendar</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-book\"></span><span class=\"icon-name\"> ti-book</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bell\"></span><span class=\"icon-name\"> ti-bell</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-basketball\"></span><span class=\"icon-name\"> ti-basketball</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bar-chart\"></span><span class=\"icon-name\"> ti-bar-chart</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bar-chart-alt\"></span><span class=\"icon-name\"> ti-bar-chart-alt</span>\n                            </div>\n\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-archive\"></span><span class=\"icon-name\"> ti-archive</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-anchor\"></span><span class=\"icon-name\"> ti-anchor</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-alert\"></span><span class=\"icon-name\"> ti-alert</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-alarm-clock\"></span><span class=\"icon-name\"> ti-alarm-clock</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-agenda\"></span><span class=\"icon-name\"> ti-agenda</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-write\"></span><span class=\"icon-name\"> ti-write</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-wallet\"></span><span class=\"icon-name\"> ti-wallet</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-video-clapper\"></span><span class=\"icon-name\"> ti-video-clapper</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-video-camera\"></span><span class=\"icon-name\"> ti-video-camera</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-vector\"></span><span class=\"icon-name\"> ti-vector</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-support\"></span><span class=\"icon-name\"> ti-support</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-stamp\"></span><span class=\"icon-name\"> ti-stamp</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-slice\"></span><span class=\"icon-name\"> ti-slice</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shortcode\"></span><span class=\"icon-name\"> ti-shortcode</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-receipt\"></span><span class=\"icon-name\"> ti-receipt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pin2\"></span><span class=\"icon-name\"> ti-pin2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pin-alt\"></span><span class=\"icon-name\"> ti-pin-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pencil-alt2\"></span><span class=\"icon-name\"> ti-pencil-alt2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-eraser\"></span><span class=\"icon-name\"> ti-eraser</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-more\"></span><span class=\"icon-name\"> ti-more</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-more-alt\"></span><span class=\"icon-name\"> ti-more-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-microphone-alt\"></span><span class=\"icon-name\"> ti-microphone-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-magnet\"></span><span class=\"icon-name\"> ti-magnet</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-line-double\"></span><span class=\"icon-name\"> ti-line-double</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-line-dotted\"></span><span class=\"icon-name\"> ti-line-dotted</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-line-dashed\"></span><span class=\"icon-name\"> ti-line-dashed</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ink-pen\"></span><span class=\"icon-name\"> ti-ink-pen</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-info-alt\"></span><span class=\"icon-name\"> ti-info-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-help-alt\"></span><span class=\"icon-name\"> ti-help-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-headphone-alt\"></span><span class=\"icon-name\"> ti-headphone-alt</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-gallery\"></span><span class=\"icon-name\"> ti-gallery</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-face-smile\"></span><span class=\"icon-name\"> ti-face-smile</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-face-sad\"></span><span class=\"icon-name\"> ti-face-sad</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-credit-card\"></span><span class=\"icon-name\"> ti-credit-card</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-comments-smiley\"></span><span class=\"icon-name\"> ti-comments-smiley</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-time\"></span><span class=\"icon-name\"> ti-time</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-share\"></span><span class=\"icon-name\"> ti-share</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-share-alt\"></span><span class=\"icon-name\"> ti-share-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-rocket\"></span><span class=\"icon-name\"> ti-rocket</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-new-window\"></span><span class=\"icon-name\"> ti-new-window</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-rss\"></span><span class=\"icon-name\"> ti-rss</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-rss-alt\"></span><span class=\"icon-name\"> ti-rss-alt</span>\n                            </div>\n\n                        </div><!-- Web App Icons -->\n\n\n                        <div class=\"icon-section\">\n                            <h3>Control Icons</h3>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-stop\"></span><span class=\"icon-name\"> ti-control-stop</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-shuffle\"></span><span class=\"icon-name\"> ti-control-shuffle</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-play\"></span><span class=\"icon-name\"> ti-control-play</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-pause\"></span><span class=\"icon-name\"> ti-control-pause</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-forward\"></span><span class=\"icon-name\"> ti-control-forward</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-backward\"></span><span class=\"icon-name\"> ti-control-backward</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-volume\"></span><span class=\"icon-name\"> ti-volume</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-skip-forward\"></span><span class=\"icon-name\"> ti-control-skip-forward</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-skip-backward\"></span><span class=\"icon-name\"> ti-control-skip-backward</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-record\"></span><span class=\"icon-name\"> ti-control-record</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-eject\"></span><span class=\"icon-name\"> ti-control-eject</span>\n                            </div>\n                        </div> <!-- Control Icons -->\n\n\n                        <div class=\"icon-section\">\n                            <h3>Text Editor</h3>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-paragraph\"></span><span class=\"icon-name\"> ti-paragraph</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-uppercase\"></span><span class=\"icon-name\"> ti-uppercase</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-underline\"></span><span class=\"icon-name\"> ti-underline</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-text\"></span><span class=\"icon-name\"> ti-text</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-Italic\"></span><span class=\"icon-name\"> ti-Italic</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-smallcap\"></span><span class=\"icon-name\"> ti-smallcap</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-list\"></span><span class=\"icon-name\"> ti-list</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-list-ol\"></span><span class=\"icon-name\"> ti-list-ol</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-align-right\"></span><span class=\"icon-name\"> ti-align-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-align-left\"></span><span class=\"icon-name\"> ti-align-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-align-justify\"></span><span class=\"icon-name\"> ti-align-justify</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-align-center\"></span><span class=\"icon-name\"> ti-align-center</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-quote-right\"></span><span class=\"icon-name\"> ti-quote-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-quote-left\"></span><span class=\"icon-name\"> ti-quote-left</span>\n                            </div>\n\n                        </div> <!-- Text Editor -->\n\n\n\n                        <div class=\"icon-section\">\n                            <h3>Layout Icons</h3>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-width-full\"></span><span class=\"icon-name\"> ti-layout-width-full</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-width-default\"></span><span class=\"icon-name\"> ti-layout-width-default</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-width-default-alt\"></span><span class=\"icon-name\"> ti-layout-width-default-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-tab\"></span><span class=\"icon-name\"> ti-layout-tab</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-tab-window\"></span><span class=\"icon-name\"> ti-layout-tab-window</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-tab-v\"></span><span class=\"icon-name\"> ti-layout-tab-v</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-tab-min\"></span><span class=\"icon-name\"> ti-layout-tab-min</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-slider\"></span><span class=\"icon-name\"> ti-layout-slider</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-slider-alt\"></span><span class=\"icon-name\"> ti-layout-slider-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-sidebar-right\"></span><span class=\"icon-name\"> ti-layout-sidebar-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-sidebar-none\"></span><span class=\"icon-name\"> ti-layout-sidebar-none</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-sidebar-left\"></span><span class=\"icon-name\"> ti-layout-sidebar-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-placeholder\"></span><span class=\"icon-name\"> ti-layout-placeholder</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-menu\"></span><span class=\"icon-name\"> ti-layout-menu</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-menu-v\"></span><span class=\"icon-name\"> ti-layout-menu-v</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-menu-separated\"></span><span class=\"icon-name\"> ti-layout-menu-separated</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-menu-full\"></span><span class=\"icon-name\"> ti-layout-menu-full</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-right\"></span><span class=\"icon-name\"> ti-layout-media-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-right-alt\"></span><span class=\"icon-name\"> ti-layout-media-right-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-overlay\"></span><span class=\"icon-name\"> ti-layout-media-overlay</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-overlay-alt\"></span><span class=\"icon-name\"> ti-layout-media-overlay-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-overlay-alt-2\"></span><span class=\"icon-name\"> ti-layout-media-overlay-alt-2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-left\"></span><span class=\"icon-name\"> ti-layout-media-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-left-alt\"></span><span class=\"icon-name\"> ti-layout-media-left-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-center\"></span><span class=\"icon-name\"> ti-layout-media-center</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-center-alt\"></span><span class=\"icon-name\"> ti-layout-media-center-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-list-thumb\"></span><span class=\"icon-name\"> ti-layout-list-thumb</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-list-thumb-alt\"></span><span class=\"icon-name\"> ti-layout-list-thumb-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-list-post\"></span><span class=\"icon-name\"> ti-layout-list-post</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-list-large-image\"></span><span class=\"icon-name\"> ti-layout-list-large-image</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-line-solid\"></span><span class=\"icon-name\"> ti-layout-line-solid</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid4\"></span><span class=\"icon-name\"> ti-layout-grid4</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid3\"></span><span class=\"icon-name\"> ti-layout-grid3</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid2\"></span><span class=\"icon-name\"> ti-layout-grid2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid2-thumb\"></span><span class=\"icon-name\"> ti-layout-grid2-thumb</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-cta-right\"></span><span class=\"icon-name\"> ti-layout-cta-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-cta-left\"></span><span class=\"icon-name\"> ti-layout-cta-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-cta-center\"></span><span class=\"icon-name\"> ti-layout-cta-center</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-cta-btn-right\"></span><span class=\"icon-name\"> ti-layout-cta-btn-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-cta-btn-left\"></span><span class=\"icon-name\"> ti-layout-cta-btn-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column4\"></span><span class=\"icon-name\"> ti-layout-column4</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column3\"></span><span class=\"icon-name\"> ti-layout-column3</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column2\"></span><span class=\"icon-name\"> ti-layout-column2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-accordion-separated\"></span><span class=\"icon-name\"> ti-layout-accordion-separated</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-accordion-merged\"></span><span class=\"icon-name\"> ti-layout-accordion-merged</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-accordion-list\"></span><span class=\"icon-name\"> ti-layout-accordion-list</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-widgetized\"></span><span class=\"icon-name\"> ti-widgetized</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-widget\"></span><span class=\"icon-name\"> ti-widget</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-widget-alt\"></span><span class=\"icon-name\"> ti-widget-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-view-list\"></span><span class=\"icon-name\"> ti-view-list</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-view-list-alt\"></span><span class=\"icon-name\"> ti-view-list-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-view-grid\"></span><span class=\"icon-name\"> ti-view-grid</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-upload\"></span><span class=\"icon-name\"> ti-upload</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-download\"></span><span class=\"icon-name\"> ti-download</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-loop\"></span><span class=\"icon-name\"> ti-loop</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-sidebar-2\"></span><span class=\"icon-name\"> ti-layout-sidebar-2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid4-alt\"></span><span class=\"icon-name\"> ti-layout-grid4-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid3-alt\"></span><span class=\"icon-name\"> ti-layout-grid3-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid2-alt\"></span><span class=\"icon-name\"> ti-layout-grid2-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column4-alt\"></span><span class=\"icon-name\"> ti-layout-column4-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column3-alt\"></span><span class=\"icon-name\"> ti-layout-column3-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column2-alt\"></span><span class=\"icon-name\"> ti-layout-column2-alt</span>\n                            </div>\n\n\n                        </div> <!-- Layout Icons -->\n\n\n                        <div class=\"icon-section\">\n                            <h3>Brand Icons</h3>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-flickr\"></span><span class=\"icon-name\"> ti-flickr</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-flickr-alt\"></span><span class=\"icon-name\"> ti-flickr-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-instagram\"></span><span class=\"icon-name\"> ti-instagram</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-google\"></span><span class=\"icon-name\"> ti-google</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-github\"></span><span class=\"icon-name\"> ti-github</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-facebook\"></span><span class=\"icon-name\"> ti-facebook</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-dropbox\"></span><span class=\"icon-name\"> ti-dropbox</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-dropbox-alt\"></span><span class=\"icon-name\"> ti-dropbox-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-dribbble\"></span><span class=\"icon-name\"> ti-dribbble</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-apple\"></span><span class=\"icon-name\"> ti-apple</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-android\"></span><span class=\"icon-name\"> ti-android</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-yahoo\"></span><span class=\"icon-name\"> ti-yahoo</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-trello\"></span><span class=\"icon-name\"> ti-trello</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-stack-overflow\"></span><span class=\"icon-name\"> ti-stack-overflow</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-soundcloud\"></span><span class=\"icon-name\"> ti-soundcloud</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-sharethis\"></span><span class=\"icon-name\"> ti-sharethis</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-sharethis-alt\"></span><span class=\"icon-name\"> ti-sharethis-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-reddit\"></span><span class=\"icon-name\"> ti-reddit</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-microsoft\"></span><span class=\"icon-name\"> ti-microsoft</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-microsoft-alt\"></span><span class=\"icon-name\"> ti-microsoft-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-linux\"></span><span class=\"icon-name\"> ti-linux</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-jsfiddle\"></span><span class=\"icon-name\"> ti-jsfiddle</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-joomla\"></span><span class=\"icon-name\"> ti-joomla</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-html5\"></span><span class=\"icon-name\"> ti-html5</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-css3\"></span><span class=\"icon-name\"> ti-css3</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-drupal\"></span><span class=\"icon-name\"> ti-drupal</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-wordpress\"></span><span class=\"icon-name\"> ti-wordpress</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-tumblr\"></span><span class=\"icon-name\"> ti-tumblr</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-tumblr-alt\"></span><span class=\"icon-name\"> ti-tumblr-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-skype\"></span><span class=\"icon-name\"> ti-skype</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-youtube\"></span><span class=\"icon-name\"> ti-youtube</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-vimeo\"></span><span class=\"icon-name\"> ti-vimeo</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-vimeo-alt\"></span><span class=\"icon-name\"> ti-vimeo-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-twitter\"></span><span class=\"icon-name\"> ti-twitter</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-twitter-alt\"></span><span class=\"icon-name\"> ti-twitter-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-linkedin\"></span><span class=\"icon-name\"> ti-linkedin</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pinterest\"></span><span class=\"icon-name\"> ti-pinterest</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pinterest-alt\"></span><span class=\"icon-name\"> ti-pinterest-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-themify-logo\"></span><span class=\"icon-name\"> ti-themify-logo</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-themify-favicon\"></span><span class=\"icon-name\"> ti-themify-favicon</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-themify-favicon-alt\"></span><span class=\"icon-name\"> ti-themify-favicon-alt</span>\n                            </div>\n\n                        </div> <!-- brand Icons -->\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/icons/icons.component.ts":
/*!******************************************!*\
  !*** ./src/app/icons/icons.component.ts ***!
  \******************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
    }
    IconsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'icons-cmp',
            template: __webpack_require__(/*! ./icons.component.html */ "./src/app/icons/icons.component.html")
        })
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.component.html":
/*!************************************************************!*\
  !*** ./src/app/notifications/notifications.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"header\">\n                <h4 class=\"title\">Notifications</h4>\n                <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\n\n            </div>\n            <div class=\"content\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h5>Notifications Style</h5>\n                        <div class=\"alert alert-info\">\n                            <span>This is a plain notification</span>\n                        </div>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span>This is a notification with close button.</span>\n                        </div>\n                        <div class=\"alert alert-info\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span data-notify=\"icon\" class=\"ti-bell\"></span>\n                            <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                        </div>\n                        <div class=\"alert alert-info\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span data-notify=\"icon\" class=\"ti-pie-chart\"></span>\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h5>Notification states</h5>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                        </div>\n                        <div class=\"alert alert-success\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                        </div>\n                        <div class=\"alert alert-warning\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                        </div>\n                        <div class=\"alert alert-danger\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <br>\n                <div class=\"places-buttons\">\n                    <div class=\"row\">\n                        <div class=\"col-md-9\">\n                            <h5>Notifications Places\n                                <p class=\"category\">Click to view notifications</p>\n                            </h5>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/notifications/notifications.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "ti-gift",
            message: "Welcome to <b>Paper Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'notifications-cmp',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/notifications/notifications.component.html")
        })
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-plugin\">\n   <!-- <div class=\"dropdown show-dropdown\">\n        <a href=\"#\" data-toggle=\"dropdown\">\n        <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"dropdown-menu\">\n            <li class=\"header-title\">Sidebar Background</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n                        <span class=\"badge filter badge-white active\" data-color=\"white\"></span>\n                        <span class=\"badge filter badge-black\" data-color=\"black\"></span>\n                </a>\n            </li>\n\n\t\t\t<li class=\"header-title\">Sidebar Active Color</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                        <span class=\"badge filter badge-primary\" data-color=\"primary\"></span>\n                        <span class=\"badge filter badge-info\" data-color=\"info\"></span>\n                        <span class=\"badge filter badge-success\" data-color=\"success\"></span>\n                        <span class=\"badge filter badge-warning\" data-color=\"warning\"></span>\n                        <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\n                </a>\n            </li>\n\n        </ul>\n    </div>-->\n</div>\n"

/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
  \*************************************************************/
/*! exports provided: FixedPluginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginComponent", function() { return FixedPluginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FixedPluginComponent = /** @class */ (function () {
    function FixedPluginComponent() {
    }
    FixedPluginComponent.prototype.ngOnInit = function () {
        var $sidebar = $('.sidebar');
        var $off_canvas_sidebar = $('.off-canvas-sidebar');
        var window_width = $(window).width();
        if (window_width > 767) {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .background-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-background-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-background-color', new_color);
            }
        });
        $('.fixed-plugin .active-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-active-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-active-color', new_color);
            }
        });
    };
    FixedPluginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fixedplugin-cmp',
            template: __webpack_require__(/*! ./fixedplugin.component.html */ "./src/app/shared/fixedplugin/fixedplugin.component.html")
        })
    ], FixedPluginComponent);
    return FixedPluginComponent;
}());



/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
  \**********************************************************/
/*! exports provided: FixedPluginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginModule", function() { return FixedPluginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fixedplugin.component */ "./src/app/shared/fixedplugin/fixedplugin.component.ts");





var FixedPluginModule = /** @class */ (function () {
    function FixedPluginModule() {
    }
    FixedPluginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]],
            exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]]
        })
    ], FixedPluginModule);
    return FixedPluginModule;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <!--<div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n\n                <li>\n                    <a href=#>\n                        Footer just\n                    </a>\n                </li>\n                <li>\n                    <a href=#>\n                       got\n                    </a>\n                </li>\n                <li>\n                    <a href=#>\n                        Real \n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by <a href=#>AMS</a>\n        </div>\n    </div>-->\n</footer>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'footer-cmp',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.component */ "./src/app/shared/footer/footer.component.ts");





var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n           <!-- <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar bar1\"></span>\n                <span class=\"icon-bar bar2\"></span>\n                <span class=\"icon-bar bar3\"></span>\n            </button>-->\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n        </div>\n        <!--<div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"ti-panel\"></i>\n                        <p>Stats</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"ti-bell\"></i>\n                            <p class=\"notification\">5</p>\n                            <p>Notifications</p>\n                            <b class=\"caret\"></b>\n                      </a>\n                      <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Notification 1</a></li>\n                        <li><a href=\"#\">Notification 2</a></li>\n                        <li><a href=\"#\">Notification 3</a></li>\n                        <li><a href=\"#\">Notification 4</a></li>\n                        <li><a href=\"#\">Another notification</a></li>\n                      </ul>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        <i class=\"ti-settings\"></i>\n                        <p>Settings</p>\n                    </a>\n                </li>\n            </ul>\n\n        </div>-->\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return (window.location.pathname).substring(1).toUpperCase();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("navbar-cmp"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavbarComponent.prototype, "button", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'navbar-cmp',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.component */ "./src/app/shared/navbar/navbar.component.ts");





var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
            exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"sidebar-wrapper\">\n    <div class=\"logo\">\n        <a href=# class=\"simple-text\">\n           <div class=\"logo-img\">\n                <img src=\"../../assets/img/chatbot.png\" alt=\"\">\n            </div>\n                  <b>My Assistant</b>\n        </a>\n    </div>\n    <ul class=\"nav\">\n            <!--<li *ngIf=\"isNotMobileMenu()\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                    <i class=\"ti-panel\"></i>\n\t\t\t\t\t<p>Stats</p>\n                </a>\n            </li>\n            <li class=\"dropdown\" *ngIf=\"isNotMobileMenu()\">\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"ti-bell\"></i>\n                        <p class=\"notification\">5</p>\n    \t\t\t\t\t<p>Notifications</p>\n    \t\t\t\t\t<b class=\"caret\"></b>\n                  </a>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Notification 1</a></li>\n                    <li><a href=\"#\">Notification 2</a></li>\n                    <li><a href=\"#\">Notification 3</a></li>\n                    <li><a href=\"#\">Notification 4</a></li>\n                    <li><a href=\"#\">Another notification</a></li>\n                  </ul>\n            </li>\n            <li *ngIf=\"isNotMobileMenu()\">\n                <a href=\"#\">\n\t\t\t\t\t<i class=\"ti-settings\"></i>\n\t\t\t\t\t<p>Settings</p>\n                </a>\n            </li>-->\n            <li class=\"divider\" ></li>\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"{{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ROUTES = [
    { path: 'spreeBot', title: 'spreeBot', icon: 'ti-panel', class: '' },
    //{ path: 'user', title: 'User Profile',  icon:'ti-user', class: '' },
    { path: 'About', title: 'About Us', icon: 'ti-view-list-alt', class: '' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sidebar-cmp',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/sidebar/sidebar.component.ts");





var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]],
            exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]]
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "./src/app/typography/typography.component.html":
/*!******************************************************!*\
  !*** ./src/app/typography/typography.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Paper Dashboard Headings</h4>\n                        <p class=\"category\">Created using <a href=\"https://www.google.com/fonts/specimen/Muli\">Muli</a> Font Family</p>\n                    </div>\n                    <div class=\"content\">\n\n                        <div class=\"typo-line\">\n                            <h1><p class=\"category\">Header 1</p>Paper Dashboard Heading </h1>\n                        </div>\n\n                            <div class=\"typo-line\">\n                            <h2><p class=\"category\">Header 2</p>Paper Dashboard Heading </h2>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h3><p class=\"category\">Header 3</p>Paper Dashboard Heading </h3>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h4><p class=\"category\">Header 4</p>Paper Dashboard Heading </h4>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h5><p class=\"category\">Header 5</p>Paper Dashboard Heading </h5>\n                        </div>\n                         <div class=\"typo-line\">\n                            <h6><p class=\"category\">Header 6</p>Paper Dashboard Heading </h6>\n                        </div>\n                        <div class=\"typo-line\">\n                            <p><span class=\"category\">Paragraph</span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>\n                        </div>\n                        <div class=\"typo-line\">\n                            <p class=\"category\">Quote</p>\n                            <blockquote>\n                             <p>\n                             Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.\n                             </p>\n                             <small>\n                             Steve Jobs, CEO Apple\n                             </small>\n                            </blockquote>\n                        </div>\n\n                        <div class=\"typo-line\">\n                            <p class=\"category\">Muted Text</p>\n                            <p class=\"text-muted\">\n                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.\n                            </p>\n                        </div>\n                        <div class=\"typo-line\">\n                            <!--\n                             there are also \"text-info\", \"text-success\", \"text-warning\", \"text-danger\" clases for the text\n                             -->\n                            <p class=\"category\">Coloured Text</p>\n                            <p class=\"text-primary\">\n                                Text Primary - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-info\">\n                                Text Info - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-success\">\n                                Text Success - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-warning\">\n                                Text Warning - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-danger\">\n                                Text Danger - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                        </div>\n\n                        <div class=\"typo-line\">\n                            <h2><p class=\"category\">Small Tag</p>Header with small subtitle <br><small>\".small\" is a tag for the headers</small> </h2>\n                        </div>\n\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/typography/typography.component.ts":
/*!****************************************************!*\
  !*** ./src/app/typography/typography.component.ts ***!
  \****************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'typography-cmp',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/typography/typography.component.html")
        })
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/upgrade/upgrade.component.html":
/*!************************************************!*\
  !*** ./src/app/upgrade/upgrade.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/upgrade/upgrade.component.ts":
/*!**********************************************!*\
  !*** ./src/app/upgrade/upgrade.component.ts ***!
  \**********************************************/
/*! exports provided: UpgradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeComponent", function() { return UpgradeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UpgradeComponent = /** @class */ (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    UpgradeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'upgrade-cmp',
            template: __webpack_require__(/*! ./upgrade.component.html */ "./src/app/upgrade/upgrade.component.html")
        })
    ], UpgradeComponent);
    return UpgradeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Abhimanyu_dwivedi\gogApp\webapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map