webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate__ = __webpack_require__("../../../../../src/app/translate/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_translate) {
        this._translate = _translate;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._translate.use('ru');
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.sass")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__translate__["c" /* TranslateService */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__restrictinput_directive__ = __webpack_require__("../../../../../src/app/restrictinput.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__translate__ = __webpack_require__("../../../../../src/app/translate/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_create_infarction_create_infarction_component__ = __webpack_require__("../../../../../src/app/pages/create-infarction/create-infarction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_index_index_component__ = __webpack_require__("../../../../../src/app/pages/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_main_menu_main_menu_component__ = __webpack_require__("../../../../../src/app/components/main-menu/main-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_view_infarction_view_infarction_component__ = __webpack_require__("../../../../../src/app/components/view-infarction/view-infarction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_infarction_infarction_component__ = __webpack_require__("../../../../../src/app/components/infarction/infarction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_update_infarction_update_infarction_component__ = __webpack_require__("../../../../../src/app/pages/update-infarction/update-infarction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_obj_ng_for_pipe__ = __webpack_require__("../../../../../src/app/shared/obj-ng-for.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_authentication_authentication_component__ = __webpack_require__("../../../../../src/app/pages/authentication/authentication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_safe_html_pipe__ = __webpack_require__("../../../../../src/app/shared/safe-html.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["b" /* routingComponents */],
                __WEBPACK_IMPORTED_MODULE_11__translate__["b" /* TranslatePipe */],
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__restrictinput_directive__["a" /* RestrictInputDirective */],
                __WEBPACK_IMPORTED_MODULE_12__pages_create_infarction_create_infarction_component__["a" /* CreateInfarctionComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_main_menu_main_menu_component__["a" /* MainMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_view_infarction_view_infarction_component__["a" /* ViewInfarctionComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_infarction_infarction_component__["a" /* InfarctionComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_update_infarction_update_infarction_component__["a" /* UpdateInfarctionComponent */],
                __WEBPACK_IMPORTED_MODULE_20__shared_obj_ng_for_pipe__["a" /* ObjNgForPipe */],
                __WEBPACK_IMPORTED_MODULE_21__pages_authentication_authentication_component__["a" /* AuthenticationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_14__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["p" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["q" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["r" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_10_ng2_validation__["CustomFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["s" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_16_ng2_charts__["ChartsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__translate__["a" /* TRANSLATION_PROVIDERS */],
                __WEBPACK_IMPORTED_MODULE_11__translate__["c" /* TranslateService */],
                __WEBPACK_IMPORTED_MODULE_22__shared_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_23__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_24__shared_safe_html_pipe__["a" /* SafeHtmlPipe */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_index_index_component__ = __webpack_require__("../../../../../src/app/pages/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_create_infarction_create_infarction_component__ = __webpack_require__("../../../../../src/app/pages/create-infarction/create-infarction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_update_infarction_update_infarction_component__ = __webpack_require__("../../../../../src/app/pages/update-infarction/update-infarction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_authentication_authentication_component__ = __webpack_require__("../../../../../src/app/pages/authentication/authentication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [{
        path: '',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_index_index_component__["a" /* IndexComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]]
    }, {
        path: 'create_infarction',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_create_infarction_create_infarction_component__["a" /* CreateInfarctionComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]]
    }, {
        path: 'update_infarction',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_update_infarction_update_infarction_component__["a" /* UpdateInfarctionComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]]
    }, {
        path: 'authentication',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_5__pages_authentication_authentication_component__["a" /* AuthenticationComponent */]
    }, {
        path: '**',
        redirectTo: 'create_infarction',
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [
    __WEBPACK_IMPORTED_MODULE_2__pages_index_index_component__["a" /* IndexComponent */],
    __WEBPACK_IMPORTED_MODULE_3__pages_create_infarction_create_infarction_component__["a" /* CreateInfarctionComponent */]
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('auth')) {
            return true;
        }
        this.router.navigate(['/authentication']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/components/infarction/infarction.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-body\">\r\n  <form class=\"wrap-form\" #protocolForm=\"ngForm\" (ngSubmit)=\"saveForm(protocolForm)\">\r\n    <mat-tab-group [selectedIndex]=\"0\">\r\n      <mat-tab label=\"{{'lang_96' | translate}}\">\r\n        <mat-form-field class=\"data-time-input\" style=\"display: block;\">\r\n          <input matInput [(ngModel)]='protocol.admission_time_to_hospital' name=\"admission_time_to_hospital\"\r\n                 placeholder=\"{{'lang_36' | translate}}\"\r\n                 [textMask]=\"{mask: dataService.maskDateTime}\"\r\n                 [pattern]=\"dataService.patternTimeDate\" required>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=\"protocol.first_name\"\r\n                 name=\"first_name\" placeholder=\"{{'first_name' | translate}}\" required>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=\"protocol.last_name\" name=\"last_name\" placeholder=\"{{'last_name' | translate}}\" required>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput type=\"text\"\r\n                 placeholder=\"{{'patronymic' | translate}}\"\r\n                 [formControl]=\"autocompleteControl\"\r\n                 [matAutocomplete]=\"patronymic\"\r\n                 [(ngModel)]=\"protocol.patronymic\" name=\"patronymic\">\r\n          <mat-autocomplete #patronymic=\"matAutocomplete\">\r\n            <mat-option *ngFor=\"let option of filteredOptionsAutocomplete | async\"\r\n                        [value]=\"option.patronymic\"\r\n                        (onSelectionChange)=\"applyAutocomplete(option, true)\">\r\n              {{ transformDate(option.birthday, true) }} - {{ option.first_name }} {{ option.last_name }} {{ option.patronymic }}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"input-date\">\r\n          <input matInput [(ngModel)]='protocol.birthday' name=\"birthday\" placeholder=\"{{'birthday' | translate}}\"\r\n                 [textMask]=\"{mask: dataService.maskDate}\"\r\n                 [pattern]=\"dataService.patternDate\" required>\r\n        </mat-form-field>\r\n        <mat-radio-group [(ngModel)]='protocol.gender' name=\"gender\">\r\n          <mat-radio-button value=\"man\" checked>{{'man' | translate}}</mat-radio-button>\r\n          <mat-radio-button value=\"women\">{{'women' | translate}}</mat-radio-button>\r\n        </mat-radio-group>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]='protocol.address' name=\"address\" placeholder=\"{{'lang_21' | translate}}\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"input-phone\">\r\n          <input matInput [(ngModel)]='protocol.phone' name=\"phone\" placeholder=\"{{'lang_70' | translate}}\"\r\n                 [textMask]=\"{mask: dataService.maskPhone}\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]='protocol.delivered' name=\"delivered\" placeholder=\"{{'lang_20' | translate}}\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"{{'lang_204' | translate}}\" [(ngModel)] = \"protocol.polyclinic\" name=\"polyclinic\" required>\r\n            <mat-option value=\"1\">{{'lang_202' | translate}}</mat-option>\r\n            <mat-option value=\"2\">{{'lang_203' | translate}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"{{'lang_43' | translate}}\" [(ngModel)] = \"protocol.killip_type\" name=\"killip_type\" required>\r\n            <mat-option value=\"1\">{{'lang_44' | translate}}</mat-option>\r\n            <mat-option value=\"2\">{{'lang_45' | translate}}</mat-option>\r\n            <mat-option value=\"3\">{{'lang_46' | translate}}</mat-option>\r\n            <mat-option value=\"4\">{{'lang_47' | translate}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input type=\"text\" placeholder=\"{{'ecg' | translate}}\" matInput\r\n                 [(ngModel)] = \"protocol.ecg\" name=\"ecg\"\r\n                 [matAutocomplete]=\"auto\" required>\r\n          <mat-autocomplete #auto=\"matAutocomplete\">\r\n            <mat-option value=\"{{'lang_57' | translate}}\">{{'lang_57' | translate}}</mat-option>\r\n            <mat-option value=\"{{'lang_58' | translate}}\">{{'lang_58' | translate}}</mat-option>\r\n            <mat-option value=\"{{'lang_59' | translate}}\">{{'lang_59' | translate}}</mat-option>\r\n            <mat-option value=\"{{'lang_62' | translate}}\">{{'lang_62' | translate}}</mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n        <div style=\"display: flex\">\r\n          <div class=\"wrap-radio\">\r\n            <div class=\"title\">{{'lang_71' | translate}}</div>\r\n            <mat-radio-group class=\"\" [(ngModel)]='protocol.cd.active' name=\"cd\">\r\n              <mat-radio-button value=\"1\" checked (click)=\"protocol.cd.type = ''\">{{'lang_55' | translate}}</mat-radio-button>\r\n              <mat-radio-button value=\"2\" (click)=\"protocol.cd.type = 1\">{{'lang_56' | translate}}</mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n\r\n          <div class=\"wrap-radio\" *ngIf=\"protocol.cd.active === '2'\">\r\n            <div class=\"title\">{{'lang_106' | translate}}</div>\r\n            <mat-radio-group class=\"\" [(ngModel)]='protocol.cd.type' name=\"cd_type\">\r\n              <mat-radio-button value=\"1\" checked>1</mat-radio-button>\r\n              <mat-radio-button value=\"2\">2</mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n        </div>\r\n        <div class=\"title-input\">{{'lang_107' | translate}}</div>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]='protocol.ad.c_before' name=\"ad_c_before\" placeholder=\"{{'lang_108' | translate}}\"\r\n                 [min]=\"0\" [max]=\"300\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]='protocol.ad.d_before' name=\"ad_d_before\" placeholder=\"{{'lang_109' | translate}}\"\r\n                 [min]=\"0\" [max]=\"150\">\r\n        </mat-form-field>\r\n        <span class=\"title-between-input\">{{'lang_110' | translate}}</span>&nbsp;&nbsp;\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]='protocol.ad.c_after' name=\"ad_c_after\" placeholder=\"{{'lang_108' | translate}}\"\r\n                 [min]=\"0\" [max]=\"300\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]='protocol.ad.d_after' name=\"ad_d_after\" placeholder=\"{{'lang_109' | translate}}\"\r\n                 [min]=\"0\" [max]=\"150\">\r\n        </mat-form-field>\r\n        <div style=\"display: flex\">\r\n          <div class=\"wrap-radio\">\r\n            <div class=\"title\">{{'lang_54' | translate}}</div>\r\n            <mat-radio-group [(ngModel)]='protocol.effect_of_thrombolysis' name=\"effect_of_thrombolysis\">\r\n              <mat-radio-button value=\"1\" checked>{{'lang_55' | translate}}</mat-radio-button>\r\n              <mat-radio-button value=\"2\">{{'lang_56' | translate}}</mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n\r\n          <div class=\"wrap-radio\">\r\n            <div class=\"title\">{{'lang_48' | translate}}</div>\r\n            <mat-radio-group  [(ngModel)]='protocol.thrombolysis.type' name=\"thrombolysis\" style=\"display: flex\"\r\n                              (click)=\"protocol.thrombolysis.data = {}\">\r\n              <mat-radio-button value=\"1\" checked>{{'lang_49' | translate}}</mat-radio-button>\r\n              <mat-radio-button value=\"2\">{{'lang_50' | translate}}</mat-radio-button>\r\n              <mat-radio-button value=\"3\">{{'lang_51' | translate}}</mat-radio-button>\r\n            </mat-radio-group>\r\n\r\n            <ng-container *ngIf=\"protocol.thrombolysis.type === '2'\">\r\n                <mat-form-field>\r\n                  <input matInput [(ngModel)]=\"protocol.thrombolysis.data.time\" name=\"thrombolysis_time\"\r\n                         [pattern]=\"dataService.patternTime\"\r\n                         [textMask]=\"{mask: dataService.maskTime}\"\r\n                         placeholder=\"{{'lang_52' | translate}}\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                  <input matInput [(ngModel)]=\"protocol.thrombolysis.data.drug\" name=\"thrombolysis_drug\"\r\n                         placeholder=\"{{'lang_53' | translate}}\">\r\n                </mat-form-field>\r\n              </ng-container>\r\n\r\n            <ng-container *ngIf=\"protocol.thrombolysis.type === '3'\">\r\n                <mat-form-field>\r\n                  <input matInput [(ngModel)]=\"protocol.thrombolysis.data.cause\" name=\"thrombolysis_cause\"\r\n                         placeholder=\"{{'lang_99' | translate}}\">\r\n                </mat-form-field>\r\n              </ng-container>\r\n          </div>\r\n        </div>\r\n        <table class=\"table table-time-intervals\">\r\n          <thead>\r\n            <tr>\r\n              <th colspan=\"4\">{{'lang_31' | translate}}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let timeIntervalsVC of tables.time_intervals_vertical_count; let horizontalI = index;\">\r\n            <td>\r\n              <ng-container>\r\n                {{timeIntervalsVC | translate}}\r\n              </ng-container>\r\n            </td>\r\n            <td>\r\n              <mat-form-field class=\"wrap-date\">\r\n                <input matInput [(ngModel)]='protocol.time_intervals.date[horizontalI]'\r\n                       name=\"timeIntervalsDate{{horizontalI}}\"\r\n                       [textMask]=\"{mask: dataService.maskDate}\"\r\n                       [pattern]=\"dataService.patternDate\"\r\n                       placeholder=\"{{'lang_32' | translate}}\">\r\n              </mat-form-field>\r\n            </td>\r\n            <td>\r\n              <mat-form-field class=\"wrap-time\">\r\n                <input matInput [(ngModel)]=\"protocol.time_intervals.time[horizontalI]\"\r\n                       name=\"timeIntervalsTime{{horizontalI}}\"\r\n                       [pattern]=\"dataService.patternTime\"\r\n                       [textMask]=\"{mask: dataService.maskTime}\"\r\n                       placeholder=\"{{'lang_33' | translate}}\">\r\n              </mat-form-field>\r\n            </td>\r\n            <td>\r\n              <mat-form-field class=\"cant-determined\">\r\n                <input matInput [(ngModel)]=\"protocol.time_intervals.not_determined[horizontalI]\"\r\n                       name=\"timeIntervals_not_determined\"\r\n                       placeholder=\"{{'lang_34' | translate}}\">\r\n              </mat-form-field>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n        <div class=\"wrap-row\" style=\"display: flex;\">\r\n          <div class=\"wrap-radio\">\r\n            <div class=\"title\">{{'lang_23' | translate}}</div>\r\n            <mat-radio-group [(ngModel)]='protocol.continuing_pain' name=\"continuing_pain\">\r\n              <mat-radio-button value=\"no\">{{'lang_25' | translate}}</mat-radio-button>\r\n              <mat-radio-button value=\"yes\">{{'lang_24' | translate}}</mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n          <div class=\"wrap-radio\">\r\n            <div class=\"title\">{{'lang_26' | translate}}</div>\r\n            <mat-radio-group [(ngModel)]='protocol.increase_segment_st' name=\"increase_segment_st\">\r\n              <mat-radio-button value=\"no\">{{'lang_25' | translate}}</mat-radio-button>\r\n              <mat-radio-button value=\"yes\">{{'lang_24' | translate}}</mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"title\">{{'lang_27' | translate}}</div>\r\n        <mat-radio-group class=\"wrap-radio-m\" [(ngModel)]='protocol.thrombaspiration' name=\"thrombaspiration\">\r\n          <mat-radio-button value=\"thrombus_not_received\">{{'lang_29' | translate}}</mat-radio-button>\r\n          <mat-radio-button value=\"thrombus_received\">{{'lang_28' | translate}}</mat-radio-button>\r\n          <mat-radio-button value=\"failed\">{{'lang_30' | translate}}</mat-radio-button>\r\n        </mat-radio-group>\r\n\r\n        <div class=\"group\">\r\n          <div class=\"wrap-radio\">\r\n            <div class=\"title\">{{'lang_22' | translate}}</div>\r\n            <mat-radio-group [(ngModel)]='protocol.blood_timi_before' name=\"blood_timi_before\">\r\n              <mat-radio-button value=\"0\">0</mat-radio-button>\r\n              <mat-radio-button value=\"1\">1</mat-radio-button>\r\n              <mat-radio-button value=\"2\">2</mat-radio-button>\r\n              <mat-radio-button value=\"3\">3</mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n          <div>\r\n            <div class=\"title\">{{'lang_17' | translate}}</div>\r\n            <mat-radio-group [(ngModel)]='protocol.blood_timi_after' name=\"blood_timi_after\">\r\n              <mat-radio-button value=\"0\">0</mat-radio-button>\r\n              <mat-radio-button value=\"1\">1</mat-radio-button>\r\n              <mat-radio-button value=\"2\">2</mat-radio-button>\r\n              <mat-radio-button value=\"3\">3</mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"{{'lang_18' | translate}}\" [min]=\"1\" [max]=\"100\"\r\n                   [pattern]=\"patternPercentage\"\r\n                   [(ngModel)]=\"protocol.stenosis_diameter_ica_before_chkv\"\r\n                   name=\"stenosis_diameter_ica_before_chkv\" required>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"\">\r\n            <input matInput placeholder=\"{{'lang_19' | translate}}\" [min]=\"1\" [max]=\"100\"\r\n                   [pattern]=\"patternPercentage\"\r\n                   [(ngModel)]=\"protocol.stenosis_diameter_ica_after_chkv\"\r\n                   name=\"stenosis_diameter_ica_after_chkv\" required>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"title\">{{'lang_11' | translate}}</div>\r\n        <div class=\"wrap-additionally wrap-row\">\r\n          <mat-checkbox [(ngModel)]=\"protocol.additionally['ivl']\" name=\"additionally0\">\r\n            {{'lang_12' | translate}}\r\n          </mat-checkbox>\r\n          <mat-checkbox [(ngModel)]=\"protocol.additionally['vabk']\" name=\"additionally1\">\r\n            {{'lang_13' | translate}}\r\n          </mat-checkbox>\r\n          <mat-checkbox [(ngModel)]=\"protocol.additionally['inotropic_support']\" name=\"additionally2\">\r\n            {{'lang_14' | translate}}\r\n          </mat-checkbox>\r\n          <mat-checkbox [(ngModel)]=\"protocol.additionally['eks']\" name=\"additionally3\">\r\n            {{'lang_15' | translate}}\r\n          </mat-checkbox>\r\n          <mat-checkbox [(ngModel)]=\"protocol.additionally['cardioversion']\" name=\"additionally4\">\r\n            {{'lang_16' | translate}}\r\n          </mat-checkbox>\r\n        </div>\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"{{'lang_5' | translate}}\" [(ngModel)] = \"protocol.type_interventions\" name=\"type_interventions\">\r\n            <mat-option value=\"0\">{{'lang_0' | translate}}</mat-option>\r\n            <mat-option value=\"1\">{{'lang_1' | translate}}</mat-option>\r\n            <mat-option value=\"2\">{{'lang_2' | translate}}</mat-option>\r\n            <mat-option value=\"3\">{{'lang_3' | translate}}</mat-option>\r\n            <mat-option value=\"4\">{{'lang_4' | translate}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"data-time-input\">\r\n          <input matInput [(ngModel)]='protocol.date_and_time_of_death' name=\"date_and_time_of_death\" placeholder=\"{{'lang_6' | translate}}\"\r\n                 [textMask]=\"{mask: dataService.maskDateTime}\"\r\n                 [pattern]=\"dataService.patternTimeDate\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_63' | translate}}\" [(ngModel)]=\"protocol.cause_of_death\"\r\n                 name=\"cause_of_death\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_7' | translate}}\" [(ngModel)]=\"protocol.operator\"\r\n                 name=\"operator\">\r\n        </mat-form-field>\r\n        <table class=\"table table-lka\">\r\n          <thead>\r\n          <tr>\r\n            <th>{{'lang_8' | translate}}</th>\r\n            <th colspan=\"2\">{{'lang_90' | translate}}</th>\r\n            <th colspan=\"4\">{{'lang_91' | translate}}</th>\r\n            <th colspan=\"3\">{{'lang_92' | translate}}</th>\r\n            <th>{{'lang_93' | translate}}</th>\r\n            <th>{{'lang_94' | translate}}</th>\r\n            <th>{{'lang_95' | translate}}</th>\r\n            <th>{{'lang_157' | translate}}</th>\r\n          </tr>\r\n          <tr>\r\n            <th *ngFor=\"let lkaHC of tables.lkaHorizontalCount;\">{{lkaHC | translate}}</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let lkaVC of tables.lkaVerticalCount; let horizontalI = index;\">\r\n            <td *ngFor=\"let lkaHC of tables.lkaHorizontalCount; let verticalI = index;\">\r\n              <ng-container *ngIf=\"!verticalI\">\r\n                {{lkaVC | translate}}\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"verticalI && (tables.lkaHorizontalCount.length-1 !== verticalI)\">\r\n                <ng-container *ngIf=\"verticalI && (lkaVC === 'percent')\">\r\n                  <mat-form-field class=\"percent-input\">\r\n                    <input matInput placeholder=\"0-100{{'lang_74' | translate}}\" [min]=\"0\" [max]=\"100\"\r\n                           [pattern]=\"patternPercentage\"\r\n                           [(ngModel)]=\"protocol.lka[lkaVC][verticalI-1]\"\r\n                           name=\"lka_{{lkaVC+verticalI}}\">\r\n                  </mat-form-field>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"verticalI && ((lkaVC !== 'timiAfter') && (lkaVC !== 'timiBefore') && (lkaVC !== 'percent'))\">\r\n                  <mat-checkbox [(ngModel)]=\"protocol.lka[lkaVC][verticalI-1]\" name=\"lka_{{lkaVC+verticalI}}\"></mat-checkbox>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"verticalI && ((lkaVC === 'timiAfter') || (lkaVC === 'timiBefore'))\">\r\n                  <mat-form-field class=\"timi-after-before-select\">\r\n                    <mat-select [(ngModel)] = \"protocol.lka[lkaVC][verticalI-1]\" name=\"lka_{{lkaVC+verticalI}}\">\r\n                      <mat-option value=\"0\">0</mat-option>\r\n                      <mat-option value=\"1\">1</mat-option>\r\n                      <mat-option value=\"2\">2</mat-option>\r\n                      <mat-option value=\"3\">3</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </ng-container>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"verticalI && (tables.lkaHorizontalCount.length-1 === verticalI)\">\r\n                <mat-form-field class=\"notes\">\r\n                  <input matInput placeholder=\"{{'lang_157' | translate}}\"\r\n                         [(ngModel)]=\"protocol.lka[lkaVC][verticalI-1]\"\r\n                         name=\"lka_{{lkaVC+verticalI}}\">\r\n                </mat-form-field>\r\n              </ng-container>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n        <table class=\"table table-pka\">\r\n          <thead>\r\n            <tr>\r\n              <th *ngFor=\"let pkaHC of tables.pkaHorizontalCount;\">{{pkaHC | translate}}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let pkaVC of tables.pkaVerticalCount; let horizontalI = index;\">\r\n              <td *ngFor=\"let pkaHC of tables.pkaHorizontalCount; let verticalI = index;\">\r\n                <ng-container *ngIf=\"!verticalI\">\r\n                  {{pkaVC | translate}}\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"verticalI && (tables.pkaHorizontalCount.length-1 !== verticalI)\">\r\n                  <ng-container *ngIf=\"verticalI && (pkaVC === 'percent')\">\r\n                    <mat-form-field class=\"percent-input\">\r\n                      <input matInput placeholder=\"0-100{{'lang_74' | translate}}\" [min]=\"0\" [max]=\"100\"\r\n                             [pattern]=\"patternPercentage\"\r\n                             [(ngModel)]=\"protocol.pka[pkaVC][verticalI-1]\"\r\n                             name=\"pka_{{pkaVC+verticalI}}\">\r\n                    </mat-form-field>\r\n                  </ng-container>\r\n\r\n                  <ng-container *ngIf=\"verticalI && ((pkaVC !== 'timiAfter') && (pkaVC !== 'timiBefore') && (pkaVC !== 'percent'))\">\r\n                    <mat-checkbox [(ngModel)]=\"protocol.pka[pkaVC][verticalI-1]\" name=\"pka_{{pkaVC+verticalI}}\"></mat-checkbox>\r\n                  </ng-container>\r\n\r\n                  <ng-container *ngIf=\"verticalI && ((pkaVC === 'timiAfter') || (pkaVC === 'timiBefore'))\">\r\n                    <mat-form-field class=\"timi-after-before-select\">\r\n                      <mat-select [(ngModel)]=\"protocol.pka[pkaVC][verticalI-1]\" name=\"pka_{{pkaVC+verticalI}}\">\r\n                        <mat-option value=\"0\">0</mat-option>\r\n                        <mat-option value=\"1\">1</mat-option>\r\n                        <mat-option value=\"2\">2</mat-option>\r\n                        <mat-option value=\"3\">3</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </ng-container>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"verticalI && (tables.pkaHorizontalCount.length-1 === verticalI)\">\r\n                  <mat-form-field class=\"notes\">\r\n                    <input matInput placeholder=\"{{'lang_157' | translate}}\"\r\n                           [(ngModel)]=\"protocol.pka[pkaVC][verticalI-1]\"\r\n                           name=\"pka_{{pkaVC+verticalI}}\">\r\n                  </mat-form-field>\r\n                </ng-container>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div class=\"title\">{{'lang_10' | translate}}</div>\r\n        <mat-radio-group [(ngModel)]='protocol.lvg_active' name=\"lvg_active\" style=\"display: flex;\">\r\n          <mat-radio-button value=\"\">{{'lang_55' | translate}}</mat-radio-button>\r\n          <mat-radio-button value=\"1\">{{'lang_56' | translate}}</mat-radio-button>\r\n        </mat-radio-group>\r\n        <ng-container *ngIf=\"protocol.lvg_active\">\r\n          <mat-form-field *ngFor=\"let lvgHC of tables.lvgHorizontalCount; let horizontalI = index;\">\r\n            <mat-select placeholder=\"{{lvgHC | translate}}\" [(ngModel)]=\"protocol.lvg[horizontalI]\" name=\"lvg_{{horizontalI}}\">\r\n              <mat-option value=\"1\">{{'normakinez' | translate}}</mat-option>\r\n              <mat-option value=\"2\">{{'gipokinez' | translate}}</mat-option>\r\n              <mat-option value=\"3\">{{'akinez' | translate}}</mat-option>\r\n              <mat-option value=\"4\">{{'diskinez' | translate}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"{{'fv' | translate}}\" [(ngModel)]=\"protocol.fv\" name=\"fv\">\r\n              <mat-option value=\"30\"><=30</mat-option>\r\n              <mat-option value=\"40\">30-40</mat-option>\r\n              <mat-option value=\"50\">40-50</mat-option>\r\n              <mat-option value=\"70\">50-70</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </ng-container>\r\n      </mat-tab>\r\n      <mat-tab label=\"{{'lang_111' | translate}}\">\r\n        <span class=\"title-input\">{{'lang_112' | translate}}</span>\r\n        <mat-form-field>\r\n          <mat-select [(ngModel)] = \"protocol.aortic_valve_or_prosthesis.valve_or_prosthesis\"\r\n                      name=\"aortic_valve_or_prosthesis_valve_or_prosthesis\">\r\n            <mat-option value=\"\"></mat-option>\r\n            <mat-option value=\"1\">{{'lang_113' | translate}}</mat-option>\r\n            <mat-option value=\"2\">{{'lang_114' | translate}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=\"protocol.aortic_valve_or_prosthesis.max_gradient\"\r\n                 name=\"aortic_valve_or_prosthesis_max_gradient\"\r\n                 restrict-input=\"numbers\"\r\n                 placeholder=\"{{'lang_115' | translate}}\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=\"protocol.aortic_valve_or_prosthesis.effective_area_holes\"\r\n                 name=\"aortic_valve_or_prosthesis_effective_area_holes\"\r\n                 restrict-input=\"numbers\"\r\n                 placeholder=\"{{'lang_116' | translate}}\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <mat-select [(ngModel)] = \"protocol.aortic_valve_or_prosthesis.regurgitation\"\r\n                      name=\"aortic_valve_or_prosthesis_regurgitation\"\r\n                      placeholder=\"{{'lang_117' | translate}}\">\r\n            <mat-option value=\"\"></mat-option>\r\n            <mat-option value=\"0\">0</mat-option>\r\n            <mat-option value=\"1\">1</mat-option>\r\n            <mat-option value=\"2\">2</mat-option>\r\n            <mat-option value=\"3\">3</mat-option>\r\n            <mat-option value=\"4\">4</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=\"protocol.aortic_valve_or_prosthesis.features\"\r\n                 name=\"aortic_valve_or_prosthesis_features\"\r\n                 placeholder=\"{{'lang_118' | translate}}\">\r\n        </mat-form-field>\r\n        <hr>\r\n        <span class=\"title-input\">{{'lang_122' | translate}}</span>\r\n        <mat-form-field>\r\n          <mat-select [(ngModel)] = \"protocol.mitral_valve_or_prosthesis.valve_or_prosthesis\"\r\n                      name=\"mitral_valve_or_prosthesis_valve_or_prosthesis\">\r\n            <mat-option value=\"\"></mat-option>\r\n            <mat-option value=\"1\">{{'lang_123' | translate}}</mat-option>\r\n            <mat-option value=\"2\">{{'lang_114' | translate}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=\"protocol.mitral_valve_or_prosthesis.max_gradient\"\r\n                 name=\"mitral_valve_or_prosthesis_max_gradient\"\r\n                 restrict-input=\"numbers\"\r\n                 placeholder=\"{{'lang_115' | translate}}\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=\"protocol.mitral_valve_or_prosthesis.effective_area_holes\"\r\n                 name=\"mitral_valve_or_prosthesis_effective_area_holes\"\r\n                 restrict-input=\"numbers\"\r\n                 placeholder=\"{{'lang_116' | translate}}\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <mat-select [(ngModel)] = \"protocol.mitral_valve_or_prosthesis.regurgitation\"\r\n                      name=\"mitral_valve_or_prosthesis_regurgitation\"\r\n                      placeholder=\"{{'lang_117' | translate}}\">\r\n            <mat-option value=\"\"></mat-option>\r\n            <mat-option value=\"0\">0</mat-option>\r\n            <mat-option value=\"1\">1</mat-option>\r\n            <mat-option value=\"2\">2</mat-option>\r\n            <mat-option value=\"3\">3</mat-option>\r\n            <mat-option value=\"4\">4</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=\"protocol.mitral_valve_or_prosthesis.features\"\r\n                 name=\"mitral_valve_or_prosthesis_features\"\r\n                 placeholder=\"{{'lang_118' | translate}}\">\r\n        </mat-form-field>\r\n        <hr>\r\n        <span class=\"title-input\">{{'lang_119' | translate}}</span>\r\n        <mat-form-field>\r\n          <mat-select [(ngModel)] = \"protocol.pulmonary_artery_valve.regurgitation\" name=\"pulmonary_artery_valve_regurgitation\"\r\n                      placeholder=\"{{'lang_117' | translate}}\">\r\n            <mat-option value=\"\"></mat-option>\r\n            <mat-option value=\"0\">0</mat-option>\r\n            <mat-option value=\"1\">1</mat-option>\r\n            <mat-option value=\"2\">2</mat-option>\r\n            <mat-option value=\"3\">3</mat-option>\r\n            <mat-option value=\"4\">4</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=\"protocol.pulmonary_artery_valve.features\"\r\n                 name=\"pulmonary_artery_valve_features\"\r\n                 placeholder=\"{{'lang_118' | translate}}\">\r\n        </mat-form-field>\r\n        <hr>\r\n        <span class=\"title-input\">{{'lang_121' | translate}}</span>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=\"protocol.three_leaf_valve.effective_area_holes\"\r\n                 name=\"three_leaf_valve_effective_area_holes\"\r\n                 restrict-input=\"numbers\"\r\n                 placeholder=\"{{'lang_116' | translate}}\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <mat-select [(ngModel)] = \"protocol.three_leaf_valve.regurgitation\" name=\"three_leaf_valve_regurgitation\"\r\n                      placeholder=\"{{'lang_117' | translate}}\">\r\n            <mat-option value=\"\"></mat-option>\r\n            <mat-option value=\"0\">0</mat-option>\r\n            <mat-option value=\"1\">1</mat-option>\r\n            <mat-option value=\"2\">2</mat-option>\r\n            <mat-option value=\"3\">3</mat-option>\r\n            <mat-option value=\"4\">4</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=\"protocol.three_leaf_valve.features\"\r\n                 name=\"three_leaf_valve_features\"\r\n                 placeholder=\"{{'lang_118' | translate}}\">\r\n        </mat-form-field>\r\n        <hr>\r\n        <span class=\"title-input\">{{'lang_125' | translate}}</span>\r\n        {{'lang_126' | translate}}\r\n        <mat-form-field class=\"input-9 margin-left-10\">\r\n          <input matInput [(ngModel)]=\"protocol.aorta\"\r\n                 name=\"aorta\"\r\n                 [min]=\"0\" [max]=\"100\"\r\n                 placeholder=\"0-100 {{'lang_147' | translate}}\">\r\n        </mat-form-field>\r\n        <hr>\r\n        <span class=\"title-input\">{{'lang_127' | translate}}</span>\r\n        {{'lang_128' | translate}}\r\n        <mat-form-field class=\"input-7 margin-left-10\">\r\n          <input matInput [(ngModel)]=\"protocol.left_atrium.size_0\"\r\n                 name=\"left_atrium_size_0\"\r\n                 [min]=\"0\" [max]=\"10\"\r\n                 placeholder=\"0-10 {{'lang_147' | translate}}\">\r\n        </mat-form-field>\r\n        {{'lang_129' | translate}}\r\n        <mat-form-field class=\"input-7 margin-left-10\">\r\n          <input matInput [(ngModel)]=\"protocol.left_atrium.size_1\"\r\n                 name=\"left_atrium_size_1\"\r\n                 [min]=\"0\" [max]=\"10\"\r\n                 placeholder=\"0-10 {{'lang_147' | translate}}\">\r\n        </mat-form-field>\r\n        /\r\n        <mat-form-field class=\"input-7 margin-left-10\">\r\n          <input matInput [(ngModel)]=\"protocol.left_atrium.size_2\"\r\n                 name=\"left_atrium_size_2\"\r\n                 [min]=\"0\" [max]=\"10\"\r\n                 placeholder=\"0-10 {{'lang_147' | translate}}\">\r\n        </mat-form-field>\r\n        <hr>\r\n        <span class=\"title-input\">{{'lang_130' | translate}}</span>\r\n        {{'lang_131' | translate}}\r\n        <mat-form-field class=\"input-7 margin-left-10\">\r\n          <input matInput [(ngModel)]=\"protocol.left_ventricle.size_diastolic\"\r\n                 name=\"left_ventricle_size_diastolic\"\r\n                 [min]=\"0\" [max]=\"10\"\r\n                 placeholder=\"0-10 {{'lang_147' | translate}}\">\r\n        </mat-form-field>\r\n        {{'lang_132' | translate}}\r\n        <mat-form-field class=\"input-7 margin-left-10\">\r\n          <input matInput [(ngModel)]=\"protocol.left_ventricle.size_systolic\"\r\n                 name=\"left_ventricle_size_systolic\"\r\n                 [min]=\"0\" [max]=\"10\"\r\n                 placeholder=\"0-10 {{'lang_147' | translate}}\">\r\n        </mat-form-field>\r\n        <table class=\"table table-lv-volumes\">\r\n          <thead>\r\n            <tr>\r\n              <th *ngFor=\"let leftVentricleHCTH of tables.leftVentricleHorizontalCount;\">\r\n                {{leftVentricleHCTH | translate}}\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let leftVentricleVC of tables.leftVentricleVerticalCount; let horizontalI = index;\">\r\n                <td *ngFor=\"let leftVentricleHC of tables.leftVentricleHorizontalCount; let verticalI = index;\">\r\n                  <ng-container *ngIf=\"verticalI === 0\">\r\n                    {{leftVentricleVC | translate}}\r\n                  </ng-container>\r\n\r\n                  <mat-form-field class=\"input-8\" *ngIf=\"(verticalI !== 4) && (verticalI !== 0)\">\r\n                    <input matInput placeholder=\"0-500 {{'lang_138' | translate}}\" [min]=\"0\" [max]=\"500\"\r\n                           [(ngModel)]=\"protocol.left_ventricle.scope_lv[horizontalI+'_'+verticalI]\"\r\n                           name=\"scope{{horizontalI}}_{{verticalI}}\">\r\n                  </mat-form-field>\r\n\r\n                  <mat-form-field class=\"input-7\" *ngIf=\"verticalI === 4\">\r\n                    <input matInput placeholder=\"0-100 {{'percent' | translate}}\" [min]=\"0\" [max]=\"100\"\r\n                           [(ngModel)]=\"protocol.left_ventricle.scope_lv[horizontalI+'_'+verticalI]\"\r\n                           name=\"scope{{horizontalI}}_{{verticalI}}\">\r\n                  </mat-form-field>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n        </table>\r\n        {{'lang_140' | translate}}\r\n        <mat-form-field class=\"input-7 margin-left-10\">\r\n          <input matInput [(ngModel)]=\"protocol.left_ventricle.thickness_of_myocardium_diastolic\"\r\n                 name=\"thickness_of_myocardium_diastolic\"\r\n                 [min]=\"0\" [max]=\"20\"\r\n                 placeholder=\"0-20 {{'lang_147' | translate}}\">\r\n        </mat-form-field>\r\n        {{'lang_142' | translate}}\r\n        <mat-form-field class=\"input-7 margin-left-10\">\r\n          <input matInput [(ngModel)]=\"protocol.left_ventricle.thickness_of_myocardium_systolic\"\r\n                 name=\"thickness_of_myocardium_systolic\"\r\n                 [min]=\"0\" [max]=\"20\"\r\n                 placeholder=\"0-20 {{'lang_147' | translate}}\">\r\n        </mat-form-field>\r\n        <hr>\r\n        {{'lang_145' | translate}}\r\n        <mat-form-field class=\"input-7 margin-left-10\">\r\n          <input matInput [(ngModel)]=\"protocol.left_ventricle.mass_myocardium\"\r\n                 name=\"mass_myocardium\"\r\n                 [min]=\"0\" [max]=\"500\"\r\n                 placeholder=\"0-500 {{'lang_148' | translate}}\">\r\n        </mat-form-field>\r\n        <hr>\r\n\r\n        <div class=\"title\">{{'lang_139' | translate}}</div>\r\n        <div style=\"display: flex;\">\r\n          <div>\r\n            <div *ngFor=\"let data_circle of dataCircle; let i = index;\" style=\"display: flex; padding-bottom: 5px;\">\r\n              {{data_circle.title | translate}}\r\n              <div [ngStyle]=\"{'width': '10px', 'height': '10px', 'margin': '2px 5px', 'background-color': data_circle.color}\"></div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div class=\"inputs-sector\">\r\n              <ng-container *ngFor=\"let segment of segmentsOfMyocardialContractility; let i = index;\">\r\n                <input [ngStyle]=\"{'top': segment['top']+'px', 'margin-left': segment['m_left']+'px'}\"\r\n                       [textMask]=\"{mask: dataService.maskLVG_1_4}\"\r\n                       placeholder=\"N-{{i+1}}\"\r\n                       (input)=\"setColor(protocol.myocardial_contractility[i]-1, i)\"\r\n                       [(ngModel)]=\"protocol.myocardial_contractility[i]\" name=\"myocardial_contractility-{{i}}\">\r\n                {{setColor(protocol.myocardial_contractility[i]-1, i)}}\r\n              </ng-container>\r\n            </div>\r\n            <svg\r\n              xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\r\n              xmlns:cc=\"http://creativecommons.org/ns#\"\r\n              xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\r\n              xmlns:svg=\"http://www.w3.org/2000/svg\"\r\n              xmlns=\"http://www.w3.org/2000/svg\"\r\n              xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\r\n              xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\r\n              width=\"310.5\"\r\n              height=\"310.5\"\r\n              viewBox=\"0 0 82.153123 82.153127\"\r\n              version=\"1.1\"\r\n              id=\"svg3853\"\r\n              inkscape:version=\"0.92.2 (5c3e80d, 2017-08-06)\"\r\n              sodipodi:docname=\"drawing___1-2-3-4-5.svg\">\r\n              <defs\r\n                id=\"defs3847\" />\r\n              <g\r\n                inkscape:label=\"Layer 1\"\r\n                inkscape:groupmode=\"layer\"\r\n                id=\"layer1\"\r\n                transform=\"translate(0,-214.84686)\">\r\n                <g\r\n                  id=\"g5423\">\r\n                  <path\r\n                    id=\"rect250-8-5-9\"\r\n                    transform=\"matrix(0.26458333,0,0,0.26458333,0,214.84686)\"\r\n                    style=\"stroke-width:3.70153666\"\r\n                    d=\"M 153.25,4 A 153.25001,153.25001 0 0 0 0,157.25 153.25001,153.25001 0 0 0 153.25,310.5 153.25001,153.25001 0 0 0 306.5,157.25 153.25001,153.25001 0 0 0 153.25,4 Z m 0,2 A 151.25,151.25 0 0 1 258.66211,48.996094 L 227.04492,81.400391 A 105.82677,105.82677 0 0 0 153.25,51.421875 105.82677,105.82677 0 0 0 80.203125,80.847656 L 48.142578,48.513672 A 151.25,151.25 0 0 1 153.25,6 Z m 1.83008,1.4902344 c -0.0193,0.015118 -0.0329,0.030245 -0.0527,0.046875 -0.0151,0.054047 -0.015,0.076246 -0.0332,0.1367187 0.007,0.015118 0.0163,0.026591 0.0215,0.039063 0.0336,0.1077166 0.0407,0.1367954 0.0645,0.2089844 z m -0.0156,20.5078126 c 0.007,-0.03893 -0.0661,0.04568 -0.0859,0.08008 -0.0978,0.169322 0.006,0.173889 -0.0801,0.164063 0.0136,0.0038 0.0272,0.01185 0.041,0.01562 0.0605,-0.08655 0.10901,-0.173214 0.125,-0.259765 z M 46.796875,49.90625 78.787109,82.166016 A 105.82677,105.82677 0 0 0 47.53125,154.20117 l 1.830078,-0.004 A 103.93701,103.93701 0 0 1 80.091797,83.480469 l 31.935543,32.205081 a 58.582677,58.582677 0 0 0 -17.24609,38.42578 l 1.978516,-0.004 a 56.751968,56.751968 0 0 1 56.494144,-53.71484 l 0.0547,53.60742 1.92188,-0.004 -0.0547,-53.51757 a 56.751968,56.751968 0 0 1 54.82031,53.41406 l 1.67188,-0.004 a 58.582677,58.582677 0 0 0 -16.28906,-37.25976 l 31.58203,-32.373051 a 103.93701,103.93701 0 0 1 29.99218,69.546871 l 1.95118,-0.004 A 105.82677,105.82677 0 0 0 228.36523,82.818359 L 260.07617,50.314453 A 151.25,151.25 0 0 1 304.375,153.71289 h 0.25391 v 1.92383 h -0.18555 A 151.25,151.25 0 0 1 304.5,157.25 151.25,151.25 0 0 1 261.01172,263.19141 l -31.89453,-32.16602 a 105.82677,105.82677 0 0 0 29.96093,-73.77539 105.82677,105.82677 0 0 0 -0.0762,-1.52734 l -1.98242,0.004 a 103.93701,103.93701 0 0 1 0.0586,1.63282 103.93701,103.93701 0 0 1 -29.36914,72.24804 l -31.88867,-32.16015 a 58.582677,58.582677 0 0 0 16.01563,-40.19922 58.582677,58.582677 0 0 0 -0.0723,-1.43555 l -1.69922,0.004 a 56.751968,56.751968 0 0 1 0.0469,1.32421 56.751968,56.751968 0 0 1 -54.82031,56.6836 l -0.0586,-57.9043 -1.92187,0.002 0.0566,57.9707 a 56.751968,56.751968 0 0 1 -0.008,0 56.751968,56.751968 0 0 1 -56.751958,-56.75196 56.751968,56.751968 0 0 1 0.05469,-1.11132 l -1.949218,0.004 a 58.582677,58.582677 0 0 0 -0.04297,1.21485 58.582677,58.582677 0 0 0 17.574216,41.8164 l -31.724607,32.51563 a 103.93701,103.93701 0 0 1 -31.316406,-74.2207 103.93701,103.93701 0 0 1 0.0625,-1.24024 l -1.802734,0.004 a 105.82677,105.82677 0 0 0 -0.03906,1.12695 105.82677,105.82677 0 0 0 31.830078,75.62891 l -31.63451,32.42145 A 151.25,151.25 0 0 1 2,157.25 151.25,151.25 0 0 1 2.0527344,156.20898 H 1.890625 v -1.92187 H 2.1484375 A 151.25,151.25 0 0 1 46.796875,49.90625 Z M 2.1484375,154.28711 a 151.25,151.25 0 0 0 -0.095703,1.92187 l 45.4101565,-0.0859 a 105.82677,105.82677 0 0 1 0.06836,-1.92188 z m 47.1171875,1.83203 45.447266,-0.0859 a 58.582677,58.582677 0 0 1 0.06836,-1.92187 l -45.419922,0.0859 a 103.93701,103.93701 0 0 0 -0.0957,1.92187 z m 47.396484,-0.0898 56.648441,-0.10742 -0.002,-1.92188 -56.548824,0.10742 a 56.751968,56.751968 0 0 0 -0.09766,1.92188 z m 58.570311,-0.10938 54.83203,-0.10351 a 56.751968,56.751968 0 0 0 -0.0684,-1.92383 l -54.76562,0.10351 z m 56.53125,-0.10742 45.25586,-0.0859 a 103.93701,103.93701 0 0 0 -0.0664,-1.92383 l -45.28515,0.0859 a 58.582677,58.582677 0 0 1 0.0957,1.92383 z m 47.23828,-0.0898 45.44141,-0.0859 a 151.25,151.25 0 0 0 -0.0684,-1.92383 l -45.4707,0.0859 a 105.82677,105.82677 0 0 1 0.0977,1.92383 z M 153.14062,53.421875 a 103.93701,103.93701 0 0 1 72.4043,29.515625 l -31.49023,32.27344 A 58.582677,58.582677 0 0 0 155.17383,98.732422 v -0.0078 c -0.005,0.0019 -0.009,0.0051 -0.0137,0.0078 a 58.582677,58.582677 0 0 0 -1.90821,-0.06836 58.582677,58.582677 0 0 0 -39.81054,15.705078 L 81.480469,82.136719 A 103.93701,103.93701 0 0 1 153.14062,53.421875 Z m 2.01758,40.15625 c 0.003,0.01134 0.007,0.01991 0.01,0.03125 v -0.03125 c -0.004,4.91e-4 -0.006,-4.91e-4 -0.01,0 z m 34.44141,26.203125 -0.0606,0.0606 c 3.1e-4,0.0343 0.002,0.0582 0.002,0.0918 0.0151,0.002 0.0299,0.006 0.0449,0.008 0.004,-0.0536 0.01,-0.10666 0.0137,-0.16016 z m -61.66211,9.20898 c 0.0172,0.043 0.0336,0.0864 0.0527,0.12891 0.0156,-0.0151 0.0187,-0.0255 0.0352,-0.041 z m 0.27539,2.24024 c 0.003,0.0113 -0.0133,0.03 -0.006,0.0391 0.0179,0.0246 0.0401,0.0456 0.0606,0.0684 -0.0234,-0.047 -0.0284,-0.0545 -0.0547,-0.10742 z m 5.45703,3.98047 c 0.0705,0.0932 0.14304,0.18443 0.21094,0.27929 0.0142,-0.004 0.0314,-0.0104 0.0449,-0.0137 -0.082,-0.0848 -0.15943,-0.16833 -0.25586,-0.26562 z m 7.08789,6.70703 -0.004,0.006 c 0.003,-2.8e-4 0.006,2.7e-4 0.01,0 z m 12.44531,15.91406 c -0.004,0.005 -0.005,0.0104 -0.01,0.0156 0.005,-3e-4 0.0104,-9.6e-4 0.0156,-0.002 -0.001,-0.005 -0.005,-0.009 -0.006,-0.0137 z m -17.24218,19.49805 c -0.15169,0.0223 -0.18914,0.0186 0,0.0312 0.13646,-0.003 0.06,-0.008 0,-0.0312 z m 40.20312,0.29297 c -0.0109,0.007 -0.0251,0.003 -0.0332,0.0195 0.0135,-0.003 0.03,-0.005 0.0449,-0.008 z m -41.19336,0.46093 c 0.0219,0.0372 0.0521,0.071 0.0762,0.10743 l 0.11718,0.0234 c -0.0661,-0.0426 -0.13563,-0.082 -0.19336,-0.13086 z m 56.79688,16.76563 c -0.003,0.0225 -0.003,0.0236 -0.006,0.0449 0.0142,0.007 0.0287,0.0142 0.043,0.0215 -0.009,-0.0203 -0.0294,-0.0467 -0.0371,-0.0664 z m 0.43554,1.69141 0.0684,0.0703 c 0.006,-0.008 0.01,-0.0171 0.0156,-0.0254 -0.0282,-0.0146 -0.0558,-0.0303 -0.084,-0.0449 z m 2.25977,2.28125 31.92773,32.19921 a 103.93701,103.93701 0 0 1 -73.25,30.2754 103.93701,103.93701 0 0 1 -71.205073,-28.39844 l 31.744143,-32.53516 a 58.582677,58.582677 0 0 0 39.57226,15.4668 58.582677,58.582677 0 0 0 41.21094,-17.00781 z m -39.16406,22.42578 c -0.007,0.008 -0.015,0.008 -0.0195,0.0117 -0.0314,0.0438 -0.0645,0.0893 -0.0977,0.13281 0.04,-0.034 0.0778,-0.0679 0.11719,-0.10156 z m 0,0.85937 c -0.0117,0.0544 -0.0188,0.0925 -0.0312,0.14649 0.002,-0.003 0.002,-0.004 0.004,-0.008 0.009,-0.0435 0.0187,-0.0882 0.0274,-0.13086 z m -1.49805,0.58985 c 0.10949,0.0503 0.21883,0.0998 0.32813,0.15039 v -0.002 c -0.0411,-0.0227 -0.082,-0.0469 -0.12305,-0.0703 -0.0685,-0.0265 -0.13686,-0.0517 -0.20508,-0.0781 z m 0.13086,3.34961 c -0.0145,0.0153 -0.0403,0.0431 -0.0566,0.0605 -0.002,0.0113 -0.004,0.0258 -0.006,0.0371 0.0212,-0.034 0.0412,-0.0648 0.0625,-0.0977 z m 73.77148,6.29687 31.99024,32.26172 A 151.25,151.25 0 0 1 153.25,308.5 151.25,151.25 0 0 1 49.035156,266.61914 L 80.681641,234.18359 A 105.82677,105.82677 0 0 0 153.25,263.07617 105.82677,105.82677 0 0 0 227.70312,232.34375 Z m -74.29492,20.92773 0.002,0.99219 c 0.0136,-0.0227 0.025,-0.0379 0.0566,-0.13281 0.0193,-0.059 0.0276,-0.12079 0.041,-0.18164 0.0791,-0.17386 -0.006,-0.43966 -0.0996,-0.67774 z\" />\r\n                </g>\r\n                <g #segments\r\n                  id=\"g5423\">\r\n                  <path\r\n                    style=\"fill:#fd9fb3;fill-opacity:0.98823529;stroke-width:0.125\"\r\n                    d=\"m 226.67561,80.962737 c -0.16667,-0.180366 -1.16617,-1.109868 -2.22112,-2.065558 -16.1743,-14.652478 -36.35591,-23.966536 -57.76941,-26.661288 -4.44951,-0.559943 -6.7476,-0.713003 -11.77354,-0.784159 -4.64581,-0.06577 -7.56306,0.02651 -11.03896,0.349219 -15.92002,1.47802 -31.01166,6.38781 -44.761714,14.562405 -5.69161,3.38374 -12.235539,8.242143 -16.866654,12.522295 -0.798936,0.738388 -1.595895,1.455026 -1.771018,1.592526 l -0.318408,0.25 -7.078605,-7.151679 C 69.182949,69.643076 62.00909,62.399088 57.134273,57.478749 l -8.863305,-8.946071 0.363305,-0.385609 c 0.587708,-0.623788 4.359167,-4.049443 6.18077,-5.614056 14.417183,-12.383219 31.280624,-22.044489 49.307537,-28.248884 24.06161,-8.2813838 49.77303,-10.3412656 74.77551,-5.9906745 24.32619,4.2329105 47.30669,14.3881145 66.83282,29.5337665 3.73518,2.897225 7.72453,6.327208 11.68925,10.050216 l 1.17259,1.101101 -15.73509,16.14507 c -8.6543,8.879789 -15.76747,16.15002 -15.80705,16.15607 -0.0396,0.0061 -0.20832,-0.136574 -0.375,-0.316941 z M 155.02047,28.017239 c -0.0399,-0.09972 -0.0695,-0.0701 -0.0755,0.07552 -0.005,0.13177 0.0241,0.205598 0.0657,0.164062 0.0415,-0.04154 0.046,-0.14935 0.01,-0.239584 z m 0.16461,-20.351562 c 0,-0.1375 -0.0563,-0.25 -0.125,-0.25 -0.0687,0 -0.125,0.1125 -0.125,0.25 0,0.1375 0.0563,0.25 0.125,0.25 0.0687,0 0.125,-0.1125 0.125,-0.25 z\"\r\n                    id=\"path5962\"\r\n                    inkscape:connector-curvature=\"0\"\r\n                    transform=\"matrix(0.26458333,0,0,0.26458333,0,214.84686)\" />\r\n                  <path\r\n                    style=\"fill:#fd9fb3;fill-opacity:0.98823529;stroke-width:0.25\"\r\n                    d=\"m 258.98244,152.27936 c -0.0704,-0.72187 -0.25682,-2.8875 -0.41418,-4.8125 -1.38042,-16.88767 -7.53313,-34.29219 -17.3221,-48.999999 -3.3367,-5.013357 -7.22283,-9.911622 -10.75468,-13.55573 l -1.99241,-2.05573 7.97524,-8.164898 c 4.38638,-4.490694 11.43692,-11.721865 15.66788,-16.06927 4.23095,-4.347404 7.79107,-7.937953 7.91137,-7.978996 0.2734,-0.09327 5.78903,5.851826 9.03895,9.74276 19.20994,22.998882 31.09114,51.009023 34.33986,80.956863 0.20136,1.85625 0.431,4.6125 0.51031,6.125 0.0793,1.5125 0.20448,3.50938 0.27817,4.4375 l 0.13397,1.6875 h -22.62215 -22.62215 z\"\r\n                    id=\"path5966\"\r\n                    inkscape:connector-curvature=\"0\"\r\n                    transform=\"matrix(0.26458333,0,0,0.26458333,0,214.84686)\" />\r\n                  <path\r\n                    style=\"fill:#fd9fb3;fill-opacity:0.98823529;stroke-width:0.17677669\"\r\n                    d=\"m 248.43537,250.40251 c -6.84897,-6.90884 -13.95541,-14.10336 -15.79208,-15.98783 l -3.33941,-3.42631 1.8323,-1.99244 c 15.63528,-17.00176 25.28239,-38.57511 27.53099,-61.5662 0.27714,-2.83365 0.5906,-9.63785 0.48925,-10.6199 l -0.093,-0.90088 16.82221,-0.11733 c 9.25221,-0.0645 19.42594,-0.11738 22.60828,-0.11744 l 5.78606,-1e-4 0.11975,0.47711 c 0.15777,0.62859 -0.22102,10.10974 -0.55653,13.93019 -2.88595,32.86213 -16.32828,63.77554 -38.35726,88.21045 -2.16579,2.40233 -4.35819,4.68716 -4.48968,4.67895 -0.0595,-0.004 -5.71192,-5.65944 -12.5609,-12.56827 z\"\r\n                    id=\"path5968\"\r\n                    inkscape:connector-curvature=\"0\"\r\n                    transform=\"matrix(0.26458333,0,0,0.26458333,0,214.84686)\" />\r\n                  <path\r\n                    style=\"fill:#fd9fb3;fill-opacity:0.98823529;stroke-width:0.17677669\"\r\n                    d=\"m 147.39741,308.30347 c -7.48268,-0.45501 -10.42007,-0.73552 -15.71261,-1.50045 -27.01291,-3.90418 -52.637056,-15.20622 -73.913171,-32.60089 -2.304479,-1.88407 -7.432476,-6.39723 -8.173561,-7.19357 l -0.395387,-0.42486 12.481926,-12.80743 c 6.865058,-7.04409 13.952352,-14.29624 15.749542,-16.11589 l 3.267618,-3.30845 1.793182,1.61041 c 10.85628,9.74976 23.690051,17.20594 37.495741,21.78432 28.57034,9.47477 59.71087,6.33519 85.85285,-8.65566 6.75596,-3.87413 13.82153,-9.0515 19.14485,-14.02859 0.88274,-0.82532 1.8621,-1.73754 2.17636,-2.02716 l 0.5714,-0.52657 13.8359,13.95799 c 7.60976,7.67689 14.76775,14.91137 15.90665,16.07661 l 2.07075,2.11863 -2.95463,2.76372 c -14.12996,13.21705 -29.82681,23.19245 -47.6546,30.28466 -14.43043,5.74068 -29.25895,9.12393 -45.36774,10.35102 -2.41605,0.18404 -14.22378,0.36082 -16.17507,0.24216 z\"\r\n                    id=\"path5970\"\r\n                    inkscape:connector-curvature=\"0\"\r\n                    transform=\"matrix(0.26458333,0,0,0.26458333,0,214.84686)\" />\r\n                  <path\r\n                    style=\"fill:#fd9fb3;fill-opacity:0.98823529;stroke-width:0.25\"\r\n                    d=\"M 44.158045,261.56021 C 24.915018,241.67721 11.053291,215.43523 5.3782699,188.14527 3.4769891,179.00242 2.4965018,170.7526 2.2821915,162.09487 l -0.1438806,-5.8125 H 24.675246 47.21218 l 0.0048,0.8125 c 0.01385,2.34797 0.547558,10.20308 0.874318,12.86853 2.75185,22.44744 12.919582,44.13915 28.04193,59.82429 l 2.907082,3.01527 -0.851562,0.91384 c -1.54097,1.65366 -30.522483,31.31557 -30.59724,31.31557 -0.04018,0 -1.58524,-1.56247 -3.433463,-3.47216 z\"\r\n                    id=\"path5972\"\r\n                    inkscape:connector-curvature=\"0\"\r\n                    transform=\"matrix(0.26458333,0,0,0.26458333,0,214.84686)\" />\r\n                  <path\r\n                    style=\"fill:#fd9fb3;fill-opacity:0.98823529;stroke-width:0.25\"\r\n                    d=\"M 2.3431012,151.25992 C 3.3950295,129.43154 8.5059741,109.37741 17.851822,90.407374 24.595302,76.719579 32.842451,64.899773 43.874078,53.112295 l 2.84982,-3.045079 15.80664,15.87726 c 8.693655,8.732493 15.84479,15.982845 15.891412,16.111893 0.04663,0.129047 -1.05487,1.42828 -2.447767,2.88718 -16.583725,17.369571 -26.947075,41.537441 -28.41975,66.276321 l -0.167423,2.8125 H 30.089903 c -9.513407,0 -19.681927,0.0743 -22.5967101,0.16505 l -5.2996061,0.16504 z\"\r\n                    id=\"path5974\"\r\n                    inkscape:connector-curvature=\"0\"\r\n                    transform=\"matrix(0.26458333,0,0,0.26458333,0,214.84686)\" />\r\n                  <path\r\n                    style=\"fill:#fd9fb3;fill-opacity:0.98823529;stroke-width:0.25\"\r\n                    d=\"m 191.46218,112.73912 c -6.766,-5.83741 -15.45207,-10.28344 -24.375,-12.47654 -4.69362,-1.153614 -8.36199,-1.566694 -14,-1.576486 -5.56205,-0.0096 -8.61111,0.34897 -13.875,1.631976 -8.87369,2.16286 -17.30572,6.56153 -24.7263,12.89878 l -1.1013,0.94052 -15.849564,-15.999996 -15.849562,-16 1.700863,-1.587135 c 4.6489,-4.338055 12.410017,-9.967145 18.690493,-13.556099 11.83402,-6.762507 25.60024,-11.198227 40.01037,-12.892055 5.21259,-0.61271 16.77087,-0.61505 21.9538,-0.0044 17.10098,2.014682 32.00469,7.386388 46.02304,16.587966 5.22669,3.430772 11.34219,8.277991 14.26567,11.307133 l 0.9925,1.02838 -3.63801,3.683125 c -2.0009,2.02572 -8.45473,8.633128 -14.34183,14.683121 -5.8871,6.05 -11.27787,11.58421 -11.97949,12.29824 l -1.27568,1.29825 z\"\r\n                    id=\"path5976\"\r\n                    inkscape:connector-curvature=\"0\"\r\n                    transform=\"matrix(0.26458333,0,0,0.26458333,0,214.84686)\" />\r\n                  <path\r\n                    style=\"fill:#fd9fb3;fill-opacity:0.98823529;stroke-width:0.25\"\r\n                    d=\"m 211.50619,150.96987 c -0.51585,-4.86633 -1.73831,-10.00538 -3.46405,-14.5625 -2.49119,-6.57841 -7.04946,-13.97713 -11.47464,-18.625 l -1.0711,-1.125 9.29539,-9.50725 c 5.11247,-5.22899 12.20226,-12.485243 15.75511,-16.125002 l 6.45972,-6.617744 1.61526,1.75 c 8.68657,9.411171 15.23491,19.459976 20.05278,30.772166 4.45126,10.45139 7.43463,23.07307 7.95743,33.66533 l 0.15732,3.1875 h -22.49254 -22.49254 z\"\r\n                    id=\"path5978\"\r\n                    inkscape:connector-curvature=\"0\"\r\n                    transform=\"matrix(0.26458333,0,0,0.26458333,0,214.84686)\" />\r\n                  <path\r\n                    style=\"fill:#fd9fb3;fill-opacity:0.98823529;stroke-width:0.25\"\r\n                    d=\"m 211.77801,213.35914 -15.73752,-15.92324 1.85139,-2.13926 c 3.99768,-4.61927 8.26396,-11.91364 10.46297,-17.88927 1.96736,-5.34615 3.22327,-11.75066 3.52079,-17.95422 l 0.16024,-3.3413 8.40065,-0.16434 c 4.62036,-0.0904 14.74657,-0.16451 22.50269,-0.16474 l 14.10205,-4e-4 -0.16095,4.6875 c -0.76125,22.17112 -8.35908,43.17474 -21.91976,60.59545 -2.24804,2.88795 -6.9421,8.21705 -7.23786,8.21705 -0.11394,0 -7.28905,-7.16545 -15.94469,-15.92323 z\"\r\n                    id=\"path5980\"\r\n                    inkscape:connector-curvature=\"0\"\r\n                    transform=\"matrix(0.26458333,0,0,0.26458333,0,214.84686)\" />\r\n                  <path\r\n                    style=\"fill:#fd9fb3;fill-opacity:0.98823529;stroke-width:0.25\"\r\n                    d=\"m 147.95863,261.01836 c -21.66023,-1.12426 -42.58701,-9.08764 -59.442737,-22.62008 -1.748292,-1.4036 -3.90327,-3.22104 -4.788841,-4.03877 l -1.610128,-1.48677 15.735128,-16.135 c 13.283428,-13.621 15.798278,-16.0918 16.140398,-15.85769 0.2229,0.15253 1.17915,0.93474 2.125,1.73824 4.62288,3.92717 12.34019,8.18272 18.61933,10.26725 3.51238,1.16603 7.93646,2.16114 11.8504,2.66552 3.34123,0.43057 10.70811,0.36666 14.25,-0.12363 12.0354,-1.66602 23.35888,-6.9165 31.79235,-14.74152 l 1.79235,-1.66304 15.89855,15.94225 15.89856,15.94225 -2.52856,2.44269 c -6.42167,6.20356 -15.27061,12.33537 -24.35823,16.87886 -10.57932,5.28929 -21.69034,8.64731 -33.62002,10.1608 -2.83342,0.35947 -11.97028,0.93571 -13.5,0.85142 -0.34375,-0.0189 -2.25784,-0.1192 -4.25355,-0.22278 z m 5.55355,-7.53599 c -0.23333,-0.23333 -0.3,-0.16666 -0.3,0.3 0,0.46667 0.0667,0.53334 0.3,0.3 0.23333,-0.23333 0.23333,-0.36666 0,-0.6 z\"\r\n                    id=\"path5982\"\r\n                    inkscape:connector-curvature=\"0\"\r\n                    transform=\"matrix(0.26458333,0,0,0.26458333,0,214.84686)\" />\r\n                  <path\r\n                    style=\"fill:#fd9fb3;fill-opacity:0.98823529;stroke-width:0.17677669\"\r\n                    d=\"M 78.264057,229.16564 C 67.36792,217.60879 59.742514,205.06712 54.805285,190.5825 51.382044,180.53955 49.324115,168.58687 49.317259,158.70744 l -0.0017,-2.51907 h 22.627417 22.627417 v 1.46726 c 0,1.91386 0.305879,5.76181 0.635161,7.99029 1.74274,11.7944 6.769096,22.36106 14.900266,31.32407 l 1.95582,2.15592 -15.305958,15.69853 c -8.418278,8.63419 -15.523145,15.923 -15.788593,16.19736 l -0.482634,0.49883 z\"\r\n                    id=\"path5984\"\r\n                    inkscape:connector-curvature=\"0\"\r\n                    transform=\"matrix(0.26458333,0,0,0.26458333,0,214.84686)\" />\r\n                  <path\r\n                    style=\"fill:#fd9fb3;fill-opacity:0.98823529;stroke-width:0.17677669\"\r\n                    d=\"m 49.492287,153.12045 c 0,-1.28878 0.295712,-5.00069 0.628741,-7.89224 1.82175,-15.81749 7.512553,-31.47089 16.291757,-44.81289 2.071959,-3.148814 5.10191,-7.245613 7.277382,-9.839759 1.741874,-2.077099 6.046912,-6.7259 6.307895,-6.811588 0.103714,-0.03405 7.315887,7.124242 16.02705,15.907322 l 15.838478,15.969235 -1.76282,1.93334 c -8.88357,9.74288 -14.255611,22.02939 -15.279643,34.94638 l -0.122627,1.5468 H 72.095394 49.492287 Z\"\r\n                    id=\"path5986\"\r\n                    inkscape:connector-curvature=\"0\"\r\n                    transform=\"matrix(0.26458333,0,0,0.26458333,0,214.84686)\" />\r\n                  <path\r\n                    style=\"fill:#fd9fb3;fill-opacity:0.98823529;stroke-width:0.17677669\"\r\n                    d=\"m 155.32235,139.96911 c -0.0645,-7.65664 -0.11741,-19.66563 -0.11748,-26.68663 l -1.2e-4,-12.76547 1.19324,0.0899 c 11.04104,0.8316 19.69004,3.72346 28.32596,9.47102 3.64653,2.42692 5.14429,3.67372 8.76372,7.29531 3.41481,3.41685 5.72496,6.29606 8.02764,10.00507 4.63044,7.45847 7.6637,16.61256 8.25229,24.90467 l 0.11409,1.60732 H 182.6607 155.43971 Z\"\r\n                    id=\"path5988\"\r\n                    inkscape:connector-curvature=\"0\"\r\n                    transform=\"matrix(0.26458333,0,0,0.26458333,0,214.84686)\" />\r\n                  <path\r\n                    style=\"fill:#fd9fb3;fill-opacity:0.98823529;stroke-width:0.17677669\"\r\n                    d=\"m 155.38153,184.87321 v -28.86162 l 17.63347,-1.8e-4 c 9.69841,-9e-5 22.00168,-0.053 27.3406,-0.11766 l 9.70712,-0.11749 -0.11459,3.34384 c -0.68985,20.13065 -11.97258,38.26166 -29.82495,47.9278 -6.71171,3.63404 -15.11451,6.07046 -22.58608,6.5489 l -2.15557,0.13803 z\"\r\n                    id=\"path5990\"\r\n                    inkscape:connector-curvature=\"0\"\r\n                    transform=\"matrix(0.26458333,0,0,0.26458333,0,214.84686)\" />\r\n                  <path\r\n                    style=\"fill:#fd9fb3;fill-opacity:0.98823529;stroke-width:0.17677669\"\r\n                    d=\"M 148.66401,213.62195 C 124.62057,211.51737 104.672,194.7451 98.539054,171.4781 c -1.101109,-4.17736 -1.847389,-9.71397 -1.847389,-13.70568 v -1.52725 l 4.801695,-0.11679 c 2.64093,-0.0642 15.36885,-0.11679 28.28427,-0.11679 h 23.48258 v 28.90299 28.90299 l -1.45841,-0.0243 c -0.80213,-0.0134 -2.21413,-0.0905 -3.13779,-0.17131 z\"\r\n                    id=\"path5992\"\r\n                    inkscape:connector-curvature=\"0\"\r\n                    transform=\"matrix(0.26458333,0,0,0.26458333,0,214.84686)\" />\r\n                  <path\r\n                    style=\"fill:#fd9fb3;fill-opacity:0.98823529;stroke-width:0.17677669\"\r\n                    d=\"m 96.868656,153.61009 c 9.24e-4,-2.22235 1.020441,-8.25419 1.96949,-11.65225 4.237854,-15.17353 14.856184,-28.17696 28.789444,-35.25614 7.52613,-3.82386 16.80555,-6.1941 24.2626,-6.19739 l 1.37002,-6e-4 v 26.69328 26.69328 h -9.87023 c -5.42862,0 -18.11677,0.0529 -28.19588,0.11757 l -18.325659,0.11757 z m 37.122894,-18.18255 c 0,-0.0429 -0.0795,-0.12712 -0.17678,-0.18721 -0.0972,-0.0601 -0.17678,-0.025 -0.17678,0.0779 0,0.10297 0.0796,0.18721 0.17678,0.18721 0.0972,0 0.17678,-0.0351 0.17678,-0.078 z\"\r\n                    id=\"path5994\"\r\n                    inkscape:connector-curvature=\"0\"\r\n                    transform=\"matrix(0.26458333,0,0,0.26458333,0,214.84686)\" />\r\n                </g>\r\n              </g>\r\n            </svg>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n      <mat-tab label=\"{{'lang_200' | translate}}\">\r\n        <div class=\"title\">{{'lang_158' | translate}}</div>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_159' | translate}}\" [(ngModel)]=\"protocol.general_blood_analysis[0]\"\r\n                 name=\"general_blood_analysis_0\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_223' | translate}}\">help_outline</i>\r\n        </span>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_160' | translate}}\" [(ngModel)]=\"protocol.general_blood_analysis[1]\"\r\n                 name=\"general_blood_analysis_1\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_224' | translate}}\">help_outline</i>\r\n        </span>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_161' | translate}}\" [(ngModel)]=\"protocol.general_blood_analysis[2]\"\r\n                 name=\"general_blood_analysis_2\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_225' | translate}}\">help_outline</i>\r\n        </span>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_162' | translate}}\" [(ngModel)]=\"protocol.general_blood_analysis[3]\"\r\n                 name=\"general_blood_analysis_3\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_226' | translate}}\">help_outline</i>\r\n        </span>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_163' | translate}}\" [(ngModel)]=\"protocol.general_blood_analysis[4]\"\r\n                 name=\"general_blood_analysis_4\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_227' | translate}}\">help_outline</i>\r\n        </span>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_164' | translate}}\" [(ngModel)]=\"protocol.general_blood_analysis[5]\"\r\n                 name=\"general_blood_analysis_5\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_228' | translate}}\">help_outline</i>\r\n        </span>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_165' | translate}}\" [(ngModel)]=\"protocol.general_blood_analysis[6]\"\r\n                 name=\"general_blood_analysis_6\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_229' | translate}}\">help_outline</i>\r\n        </span>\r\n        <hr>\r\n        <div class=\"title\">{{'lang_166' | translate}}</div>\r\n        <div class=\"sub-title\">{{'lang_167' | translate}}</div>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_177' | translate}}\" [(ngModel)]=\"protocol.biochemistry[0]\"\r\n                 name=\"biochemistry_0\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_205' | translate}}\">help_outline</i>\r\n        </span>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_178' | translate}}\" [(ngModel)]=\"protocol.biochemistry[1]\"\r\n                 name=\"biochemistry_1\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_206' | translate}}\">help_outline</i>\r\n        </span>\r\n        <div class=\"sub-title\">{{'lang_168' | translate}}</div>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_179' | translate}}\" [(ngModel)]=\"protocol.biochemistry[2]\"\r\n                 name=\"biochemistry_2\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_207' | translate}}\">help_outline</i>\r\n        </span>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_180' | translate}}\" [(ngModel)]=\"protocol.biochemistry[3]\"\r\n                 name=\"biochemistry_3\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_208' | translate}}\">help_outline</i>\r\n        </span>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_181' | translate}}\" [(ngModel)]=\"protocol.biochemistry[4]\"\r\n                 name=\"biochemistry_4\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_209' | translate}}\">help_outline</i>\r\n        </span>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_182' | translate}}\" [(ngModel)]=\"protocol.biochemistry[5]\"\r\n                 name=\"biochemistry_5\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_210' | translate}}\">help_outline</i>\r\n        </span>\r\n        <div class=\"sub-title\">{{'lang_169' | translate}}</div>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_183' | translate}}\" [(ngModel)]=\"protocol.biochemistry[6]\"\r\n                 name=\"biochemistry_6\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_211' | translate}}\">help_outline</i>\r\n        </span>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_184' | translate}}\" [(ngModel)]=\"protocol.biochemistry[7]\"\r\n                 name=\"biochemistry_7\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_212' | translate}}\">help_outline</i>\r\n        </span>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_185' | translate}}\" [(ngModel)]=\"protocol.biochemistry[8]\"\r\n                 name=\"biochemistry_8\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_213' | translate}}\">help_outline</i>\r\n        </span>\r\n\r\n        <div class=\"sub-title\">{{'lang_170' | translate}}</div>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_186' | translate}}\" [(ngModel)]=\"protocol.biochemistry[9]\"\r\n                 name=\"biochemistry_9\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_214' | translate}}\">help_outline</i>\r\n        </span>\r\n\r\n        <div class=\"sub-title\">{{'lang_171' | translate}}</div>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_187' | translate}}\" [(ngModel)]=\"protocol.biochemistry[10]\"\r\n                 name=\"biochemistry_10\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_215' | translate}}\">help_outline</i>\r\n        </span>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_188' | translate}}\" [(ngModel)]=\"protocol.biochemistry[11]\"\r\n                 name=\"biochemistry_11\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_216' | translate}}\">help_outline</i>\r\n        </span>\r\n\r\n        <div class=\"sub-title\">{{'lang_172' | translate}}</div>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_189' | translate}}\" [(ngModel)]=\"protocol.biochemistry[12]\"\r\n                 name=\"biochemistry_12\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_217' | translate}}\">help_outline</i>\r\n        </span>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_190' | translate}}\" [(ngModel)]=\"protocol.biochemistry[13]\"\r\n                 name=\"biochemistry_13\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_218' | translate}}\">help_outline</i>\r\n        </span>\r\n\r\n        <div class=\"sub-title\">{{'lang_173' | translate}}</div>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_191' | translate}}\" [(ngModel)]=\"protocol.biochemistry[14]\"\r\n                 name=\"biochemistry_14\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_219' | translate}}\">help_outline</i>\r\n        </span>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_192' | translate}}\" [(ngModel)]=\"protocol.biochemistry[15]\"\r\n                 name=\"biochemistry_15\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_220' | translate}}\">help_outline</i>\r\n        </span>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_193' | translate}}\" [(ngModel)]=\"protocol.biochemistry[16]\"\r\n                 name=\"biochemistry_16\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_221' | translate}}\">help_outline</i>\r\n        </span>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_194' | translate}}\" [(ngModel)]=\"protocol.biochemistry[17]\"\r\n                 name=\"biochemistry_17\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_222' | translate}}\">help_outline</i>\r\n        </span>\r\n        <hr>\r\n        <div class=\"title\">{{'lang_195' | translate}}</div>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_196' | translate}}\" [(ngModel)]=\"protocol.test_substance[0]\"\r\n                 name=\"test_substance_0\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_230' | translate}}\">help_outline</i>\r\n        </span>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_197' | translate}}\" [(ngModel)]=\"protocol.test_substance[1]\"\r\n                 name=\"test_substance_1\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_231' | translate}}\">help_outline</i>\r\n        </span>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_198' | translate}}\" [(ngModel)]=\"protocol.test_substance[2]\"\r\n                 name=\"test_substance_2\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_232' | translate}}\">help_outline</i>\r\n        </span>\r\n\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_199' | translate}}\" [(ngModel)]=\"protocol.test_substance[3]\"\r\n                 name=\"test_substance_3\">\r\n        </mat-form-field>\r\n        <span class=\"input-tooltip-right\">\r\n          <i class=\"material-icons\" matTooltip=\"{{'lang_233' | translate}}\">help_outline</i>\r\n        </span>\r\n\r\n        <mat-form-field>\r\n        <input matInput placeholder=\"{{'lang_201' | translate}}\" [(ngModel)]=\"protocol.test_substance[4]\"\r\n               name=\"test_substance_4\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"{{'lang_157' | translate}}\" [(ngModel)]=\"protocol.test_substance[5]\"\r\n                 name=\"test_substance_5\">\r\n        </mat-form-field>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </form>\r\n</div>\r\n\r\n<div class=\"wrap-footer\" *ngIf=\"!protocol['update']\" [ngClass]=\"[protocolForm.valid ? '' : 'hide']\">\r\n  <div class=\"footer\">\r\n    <mat-checkbox *ngIf=\"protocol.autocompleteCheckboxShow\" [(ngModel)]=\"protocol.autocompleteParent\" name=\"autocompleteParent\">\r\n      {{'lang_69' | translate}}\r\n    </mat-checkbox>\r\n\r\n    <button class='btn btn-secondary' (click)=\"cancel(protocolForm)\">{{'lang_72' | translate}}</button>\r\n    <button class='btn btn-primary' (click)=\"saveForm(protocolForm)\">{{'lang_100' | translate}}</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrap-footer\" *ngIf=\"protocol['update']\" [ngClass]=\"[protocolForm.valid ? '' : 'hide']\">\r\n  <div class=\"footer\">\r\n    <a href=\"/\"><button class='btn btn-secondary'>{{'lang_72' | translate}}</button></a>\r\n    <button class='btn btn-primary' (click)=\"saveForm(protocolForm)\">{{'lang_100' | translate}}</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"alert alert-danger alert-dismissible\" *ngIf=\"responseAfterSave['error']\">\r\n  <a class=\"close\" (click)=\"responseAfterSave['error'] = false\">&times;</a>\r\n  <strong>{{'lang_102' | translate}} </strong> {{'lang_101' | translate}}\r\n</div>\r\n\r\n<div class=\"alert alert-success alert-dismissible\" *ngIf=\"responseAfterSave['success']\">\r\n  <a class=\"close\" (click)=\"responseAfterSave['success'] = false\">&times;</a>\r\n  <strong>{{'lang_103' | translate}} </strong> {{'lang_104' | translate}}\r\n</div>\r\n\r\n<div class=\"shadow\" *ngIf=\"progressSpinnerActive\">\r\n  <div class=\"progress-spinner\">\r\n    <mat-progress-spinner class=\"example-margin\"\r\n                          [color]=\"dataService.spinner.color\"\r\n                          [mode]=\"dataService.spinner.mode\"\r\n                          [value]=\"dataService.spinner.value\">\r\n    </mat-progress-spinner>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/infarction/infarction.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap-form {\n  margin-top: 20px; }\n  .wrap-form .group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n  .wrap-form table {\n    width: auto; }\n    .wrap-form table td {\n      text-align: center; }\n    .wrap-form table th {\n      color: #fff;\n      background-color: #337ab7;\n      font-size: 12px;\n      line-height: 13px; }\n    .wrap-form table .text-left {\n      text-align: left; }\n  .wrap-form .table-lka tbody tr td:first-child, .wrap-form .table-pka tbody tr td:first-child {\n    width: 40px;\n    text-align: left;\n    padding-right: 15px;\n    font-size: 12px;\n    font-weight: bold;\n    vertical-align: middle; }\n  .wrap-form .lvg .ng-invalid {\n    border-bottom: 1px solid red; }\n  .wrap-form .lvg .mat-input-container {\n    width: 100px; }\n  .wrap-form .table-lka th {\n    text-align: center;\n    border-right: 1px solid #ddd;\n    border-top: 1px solid #ddd; }\n  .wrap-form .table-time-intervals td {\n    text-align: center; }\n  .wrap-form .table-time-intervals td:first-child {\n    text-align: left; }\n  .wrap-form .table-time-intervals td {\n    padding: 0px;\n    vertical-align: middle; }\n  .wrap-form .table-time-intervals tbody tr td {\n    padding-right: 15px; }\n  .wrap-form .table-time-intervals tbody tr td:first-child {\n    width: 115px;\n    font-size: 12px;\n    font-weight: bold; }\n  .wrap-form .table-time-intervals .wrap-time {\n    width: 35px;\n    margin: 0; }\n  .wrap-form .table-time-intervals .wrap-date {\n    width: 66px; }\n  .wrap-form .table-time-intervals .cant-determined {\n    margin: 0; }\n\n.wrap-ngb-datepicker {\n  width: 90px; }\n\n.wrap-ngb-timepicker {\n  display: inline-table; }\n\n.save-button {\n  padding: 0px;\n  margin: 0px;\n  border: 0;\n  padding: 8px 14px;\n  border-radius: 5px;\n  outline: none;\n  background-color: #337ab7;\n  color: white;\n  cursor: pointer; }\n\n.table-lvg input::-webkit-input-placeholder, .table-pka input::-webkit-input-placeholder, .table-lka input::-webkit-input-placeholder {\n  font-size: 11px;\n  color: rgba(0, 0, 0, 0.54); }\n\n.table-lvg input:-ms-input-placeholder, .table-pka input:-ms-input-placeholder, .table-lka input:-ms-input-placeholder {\n  font-size: 11px;\n  color: rgba(0, 0, 0, 0.54); }\n\n.table-lvg input::placeholder, .table-pka input::placeholder, .table-lka input::placeholder {\n  font-size: 11px;\n  color: rgba(0, 0, 0, 0.54); }\n\n.wrap-footer {\n  width: 100%;\n  height: 50px;\n  position: fixed;\n  bottom: 0;\n  background-color: black; }\n  .wrap-footer .footer {\n    max-width: 1000px;\n    height: 50px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0 auto;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n\n.hide {\n  display: none; }\n\n.title-between-input {\n  font-weight: bold; }\n\n.inputs-sector {\n  position: absolute; }\n  .inputs-sector input {\n    position: absolute;\n    width: 27px;\n    border: 0;\n    border-bottom: 1px solid gray;\n    background: 0 0;\n    outline: 0; }\n\n.table-lv-volumes td:first-child {\n  vertical-align: middle; }\n\nspan.title-input {\n  padding-right: 5px; }\n\n.table td, .table th {\n  padding: .35rem;\n  text-align: center;\n  vertical-align: middle; }\n\n.wrap-additionally, .wrap-throbmasporation {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column wrap;\n          flex-flow: column wrap; }\n\n.input-3 {\n  width: 24px; }\n\n.input-7 {\n  width: 50px; }\n\n.input-8 {\n  width: 55px; }\n\n.input-9 {\n  width: 60px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/infarction/infarction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfarctionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_http_service__ = __webpack_require__("../../../../../src/app/shared/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var InfarctionComponent = /** @class */ (function () {
    function InfarctionComponent(datePipe, httpService, dataService, _renderer) {
        this.datePipe = datePipe;
        this.httpService = httpService;
        this.dataService = dataService;
        this._renderer = _renderer;
        this.transformToStringify = ['thrombolysis', 'ecg', 'time_intervals', 'lka', 'pka', 'lvg', 'additionally', 'type_interventions',
            'ad', 'cd', 'aortic_valve_or_prosthesis', 'mitral_valve_or_prosthesis', 'pulmonary_artery_valve', 'three_leaf_valve',
            'left_atrium', 'left_ventricle', 'myocardial_contractility', 'general_blood_analysis', 'biochemistry', 'test_substance'];
        this.tables = {
            'time_intervals_vertical_count': ['onsetOfSymptoms', 'firstMedicalContact', 'ecg', 'admission_time_to_hospital',
                'ecgInTheHospital', 'fibrinolysisOrThrombolysis', 'arrivalInAngiography', 'restoringBloodFlow'],
            'lkaHorizontalCount': ['', 'lang_88', 'lang_89', 'lang_81', 'lang_82', 'lang_83', 'lang_86', 'lang_81', 'lang_82', 'lang_83', '', '', '', ''],
            'lkaVerticalCount': ['percent', 'b', 'cm', 'cl', 'cb', 'timiAfter', 'timiBefore'],
            'pkaHorizontalCount': ['lang_9', 'lang_81', 'lang_82', 'lang_83', 'lang_84', 'lang_85', 'lang_86', 'lang_87', 'lang_157'],
            'pkaVerticalCount': ['percent', 'b', 'cm', 'cl', 'cb', 'timiAfter', 'timiBefore'],
            'lvgHorizontalCount': ['lang_76', 'lang_77', 'lang_78', 'lang_79', 'lang_80'],
            'leftVentricleVerticalCount': ['m_mode', 'b_mode'],
            'leftVentricleHorizontalCount': ['lang_133', 'lang_134', 'lang_135', 'lang_136', 'lang_137'],
        };
        this.autocompleteControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]();
        this.responseAfterSave = {};
        this.protocol = Object.assign({}, this.dataService.protocol);
        this.progressSpinnerActive = false;
        /*1,2,3,7,8,9,12 - Передебоковая, переднеперегородочная*/
        /*13,14,15,16 - Верхушечная*/
        /*5,6,11 - Нижняя*/
        /*4,10 - Заднебоковая, нижнебоковая*/
        /*3,4,9,10 - Перегородочная*/
        this.segmentsOfMyocardialContractility = [
            { 'top': 20, 'm_left': 141 },
            { 'top': 101, 'm_left': 263 },
            { 'top': 196, 'm_left': 258 },
            { 'top': 278, 'm_left': 141 },
            { 'top': 196, 'm_left': 25 },
            { 'top': 101, 'm_left': 19 },
            { 'top': 70, 'm_left': 141 },
            { 'top': 121, 'm_left': 219 },
            { 'top': 177, 'm_left': 215 },
            { 'top': 228, 'm_left': 141 },
            { 'top': 177, 'm_left': 67 },
            { 'top': 120, 'm_left': 64 },
            { 'top': 120, 'm_left': 167 },
            { 'top': 170, 'm_left': 167 },
            { 'top': 170, 'm_left': 116 },
            { 'top': 120, 'm_left': 116 },
        ];
        this.dataCircle = [
            { 'title': 'lang_149', 'color': '#7cf17c' },
            { 'title': 'lang_150', 'color': '#7c6beb' },
            { 'title': 'lang_151', 'color': '#903030' },
            { 'title': 'lang_152', 'color': '#f12f59' },
        ];
        this.updateId = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InfarctionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptionsAutocomplete = this.autocompleteControl.valueChanges
            .debounceTime(400)
            .startWith(null)
            .distinctUntilChanged()
            .switchMap(function (searchLine) { return _this.searchAutocomplete(searchLine); });
        if (typeof (this.updateId) === 'number') {
            this.update(this.updateId);
        }
    };
    InfarctionComponent.prototype.setColor = function (sector, position) {
        this._renderer.setElementStyle(this.segments.nativeElement.children[position], 'fill', (this.dataCircle[sector] && this.dataCircle[sector]['color']) ? this.dataCircle[sector]['color'] : '#fd9fb3');
    };
    InfarctionComponent.prototype.spinner = function (active) {
        this.progressSpinnerActive = active;
    };
    InfarctionComponent.prototype.update = function (id) {
        var _this = this;
        this.spinner(true);
        return this.httpService.Http({ 'id': id }, 'get_protocol_infarction_st').subscribe(function (protocol) {
            _this.applyAutocomplete(protocol[0], false);
            _this.spinner(false);
            _this.protocol['update'] = id;
        });
    };
    InfarctionComponent.prototype.searchAutocomplete = function (searchLine) {
        if (searchLine) {
            return this.httpService.Http(this.protocol, 'auto_complete_protocol_infarction_st').map(function (protocols) {
                return protocols['rows'];
            });
        }
        return [];
    };
    InfarctionComponent.prototype.applyAutocomplete = function (data, autocompleteCheckboxShow) {
        var _this = this;
        this.protocol = Object.assign({}, data);
        this.protocol['birthday'] = this.transformDate(this.protocol['birthday'], true);
        this.protocol['admission_time_to_hospital'] = this.transformDate(this.protocol['admission_time_to_hospital'], false);
        this.protocol['date_and_time_of_death'] = this.transformDate(this.protocol['date_and_time_of_death'], false);
        this.protocol['autocompleteCheckboxShow'] = autocompleteCheckboxShow;
        this.transformToStringify.forEach(function (item) {
            _this.protocol[item] = JSON.parse(_this.protocol[item]);
        });
    };
    InfarctionComponent.prototype.transformDate = function (date, onlyDate) {
        if (date) {
            if (onlyDate) {
                return this.datePipe.transform(date, 'dd-MM-yyyy');
            }
            else {
                var date_and_time = date.split(' ');
                var time = date_and_time[1].split(':');
                return time[0] + ":" + time[1] + " " + this.datePipe.transform(date_and_time[0], 'dd-MM-yyyy');
            }
        }
    };
    InfarctionComponent.prototype.saveForm = function (form) {
        var _this = this;
        this.responseAfterSave = {};
        if (form.valid) {
            this.spinner(true);
            var dataProtocol_1 = Object.assign({}, this.protocol);
            this.transformToStringify.forEach(function (item) {
                dataProtocol_1[item] = JSON.stringify(dataProtocol_1[item]);
            });
            this.httpService.Http(dataProtocol_1, 'create_protocol_infarction_st')
                .subscribe(function (res) {
                if (res.success) {
                    _this.responseAfterSave = { 'success': true };
                    _this.cancel(form);
                    if (_this.protocol['update']) {
                        location.href = '/';
                    }
                }
                else {
                    _this.responseAfterSave = { 'error': true };
                }
                _this.spinner(false);
            });
        }
        else {
            this.responseAfterSave = { 'error': true };
        }
    };
    InfarctionComponent.prototype.cancel = function (form) {
        var _this = this;
        form.reset();
        this.autocompleteControl.reset();
        setTimeout(function () {
            _this.protocol = Object.assign({}, _this.dataService.protocol);
        }, 0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InfarctionComponent.prototype, "updateId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('segments'),
        __metadata("design:type", Object)
    ], InfarctionComponent.prototype, "segments", void 0);
    InfarctionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-infarction',
            template: __webpack_require__("../../../../../src/app/components/infarction/infarction.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/infarction/infarction.component.sass")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_2__shared_http_service__["a" /* HttpService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _d || Object])
    ], InfarctionComponent);
    return InfarctionComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=infarction.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/main-menu/main-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-main-menu\">\r\n  <div class=\"main-menu\">\r\n    <a href=\"/\">\r\n      <button mat-button>{{'lang_98' | translate}}</button>\r\n    </a>\r\n\r\n    <button mat-button [matMenuTriggerFor]=\"menu\">{{'lang_97' | translate}}</button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <a href=\"/create_infarction\">\r\n        <button mat-menu-item>{{'lang_75' | translate}}</button>\r\n      </a>\r\n    </mat-menu>\r\n\r\n    <a href=\"/\" style=\"float: right;\" (click)=\"logout()\">\r\n      <button mat-button>{{'lang_156' | translate}}</button>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/main-menu/main-menu.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap-main-menu {\n  position: fixed;\n  width: 100%;\n  height: 38px;\n  top: 0;\n  left: 0;\n  color: #fff;\n  padding: 0 10px;\n  box-sizing: border-box;\n  background: #337ab7;\n  z-index: 3; }\n\n.main-menu {\n  width: 1000px;\n  margin: 0 auto; }\n  .main-menu a {\n    color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main-menu/main-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent() {
    }
    MainMenuComponent.prototype.ngOnInit = function () {
    };
    MainMenuComponent.prototype.logout = function () {
        localStorage.clear();
    };
    MainMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__("../../../../../src/app/components/main-menu/main-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main-menu/main-menu.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], MainMenuComponent);
    return MainMenuComponent;
}());

//# sourceMappingURL=main-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/view-infarction/view-infarction.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-filter\">\r\n  <mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        {{'lang_65' | translate}}\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\r\n    <form class=\"filter\" #filterForm=\"ngForm\" (ngSubmit)=\"showTable(filterForm)\">\r\n      <div class=\"filter__fields\">\r\n        <div>\r\n          <span>{{'lang_67' | translate}}</span>\r\n          <mat-form-field class=\"input-date\">\r\n            <input matInput [(ngModel)]='filter.date_and_time_of_arrival_from' id=\"date_and_time_of_arrival_from\"\r\n                   name=\"date_and_time_of_arrival_from\"\r\n                   #arrival_date=\"ngModel\"\r\n                   placeholder=\"{{'lang_66' | translate}}\"\r\n                   [textMask]=\"{mask: dataService.maskDate}\"\r\n                   [pattern]=\"dataService.patternDate\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div>\r\n          <span>{{'lang_68' | translate}}</span>\r\n          <mat-form-field class=\"input-date\">\r\n            <input matInput [(ngModel)]='filter.date_and_time_of_arrival_before' id=\"date_and_time_of_arrival_before\"\r\n                   name=\"date_and_time_of_arrival_before\"\r\n                   #arrival_date=\"ngModel\"\r\n                   placeholder=\"{{'lang_66' | translate}}\"\r\n                   [textMask]=\"{mask: dataService.maskDate}\"\r\n                   [pattern]=\"dataService.patternDate\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"group-checkbox\">\r\n          <div class=\"filter__title\">{{'gender' | translate}}</div>\r\n          <mat-checkbox [(ngModel)]=\"filter.gender['man']\" name=\"man\">\r\n            {{'man' | translate}}\r\n          </mat-checkbox>\r\n          <mat-checkbox [(ngModel)]=\"filter.gender['woman']\" name=\"woman\">\r\n            {{'women' | translate}}\r\n          </mat-checkbox>\r\n        </div>\r\n\r\n        <div>\r\n          <span>{{'lang_67' | translate}}</span>\r\n          <mat-form-field class=\"input-date\">\r\n            <input matInput [(ngModel)]='filter.birthday_date_from' id=\"birthday_date_from\"\r\n                   name=\"birthday_date_from\"\r\n                   #arrival_date=\"ngModel\"\r\n                   placeholder=\"{{'birthday' | translate}}\"\r\n                   [textMask]=\"{mask: dataService.maskDate}\"\r\n                   [pattern]=\"dataService.patternDate\">\r\n          </mat-form-field>\r\n\r\n          <span>{{'lang_68' | translate}}</span>\r\n          <mat-form-field class=\"input-date\">\r\n            <input matInput [(ngModel)]='filter.birthday_date_before' id=\"birthday_date_before\"\r\n                   name=\"birthday_date_before\"\r\n                   #arrival_date=\"ngModel\"\r\n                   placeholder=\"{{'birthday' | translate}}\"\r\n                   [textMask]=\"{mask: dataService.maskDate}\"\r\n                   [pattern]=\"dataService.patternDate\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"group-checkbox\">\r\n          <div class=\"filter__title\">{{'lang_54' | translate}}</div>\r\n          <mat-checkbox [(ngModel)]=\"filter.effect_of_thrombolysis['no']\" name=\"effect_of_thrombolysis_no\">\r\n            {{'lang_49' | translate}}\r\n          </mat-checkbox>\r\n          <mat-checkbox [(ngModel)]=\"filter.effect_of_thrombolysis['yes']\" name=\"effect_of_thrombolysis_yes\">\r\n            {{'lang_50' | translate}}\r\n          </mat-checkbox>\r\n        </div>\r\n\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"{{'fv' | translate}}\" [(ngModel)]=\"filter.fv\" name=\"fv\" multiple=\"true\">\r\n            <mat-option value=\"30\"><=30</mat-option>\r\n            <mat-option value=\"40\">30-40</mat-option>\r\n            <mat-option value=\"50\">40-50</mat-option>\r\n            <mat-option value=\"70\">50-70</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"filter__buttons\">\r\n        <button class='btn btn-secondary' (click)=\"resetFilter(filterForm)\">{{'lang_73' | translate}}</button>\r\n        <button class='btn btn-primary' (click)=\"showTable(filterForm)\">{{'lang_105' | translate}}</button>\r\n      </div>\r\n    </form>\r\n  </mat-expansion-panel>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <canvas baseChart\r\n            [datasets]=\"barChartData\"\r\n            [labels]=\"barChartLabels\"\r\n            [options]=\"barChartOptions\"\r\n            [legend]=\"barChartLegend\"\r\n            [chartType]=\"barChartType\"\r\n            (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\">\r\n    </canvas>\r\n  </div>\r\n</div>\r\n<br><br><br>\r\n\r\n<div class=\"example-container mat-elevation-z8\">\r\n  <mat-table #table [dataSource]=\"dataSource\" matSort>\r\n    <ng-container matColumnDef=\"{{field}}\" *ngFor=\"let field of displayedColumns\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> {{field | translate}} </mat-header-cell>\r\n\r\n      <ng-container *ngIf=\"field !== 'controls'\">\r\n        <mat-cell *matCellDef=\"let row\"> {{ tableRow(row, field)}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"field === 'controls'\">\r\n        <mat-cell *matCellDef=\"let row\">\r\n          <a href=\"/update_infarction?id={{row['id']}}\">\r\n            <i class=\"material-icons\">&#xE254;</i>\r\n          </a>\r\n        </mat-cell>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator #paginator\r\n   [length]=\"pageLength\"\r\n   [pageIndex]=\"pageIndex\"\r\n   [pageSize]=\"pageSize\"\r\n   [pageSizeOptions]=\"pageSizeOptions\">\r\n  </mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/view-infarction/view-infarction.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap-filter {\n  padding-bottom: 20px; }\n  .wrap-filter .filter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: wrap column;\n            flex-flow: wrap column; }\n    .wrap-filter .filter__fields {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap; }\n    .wrap-filter .filter__buttons {\n      -ms-flex-item-align: end;\n          align-self: flex-end; }\n\n.mat-column-controls {\n  text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/view-infarction/view-infarction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewInfarctionComponent; });
/* unused harmony export ExampleDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_http_service__ = __webpack_require__("../../../../../src/app/shared/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__translate__ = __webpack_require__("../../../../../src/app/translate/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ViewInfarctionComponent = /** @class */ (function () {
    function ViewInfarctionComponent(dataService, httpService, translate) {
        this.dataService = dataService;
        this.httpService = httpService;
        this.translate = translate;
        this.pageLength = 100;
        this.pageIndex = 0;
        this.pageSize = 100;
        this.pageSizeOptions = [5, 10, 25, 100, 250, 500, 1000];
        this.active = '';
        this.direction = '';
        this.filter = {
            'date_and_time_of_arrival_from': '',
            'date_and_time_of_arrival_before': '',
            'birthday_date_from': '',
            'birthday_date_before': '',
            'gender': {},
            'effect_of_thrombolysis': {},
            'fv': []
        };
        this.barChartOptions = {
            scaleShowVerticalLines: true,
            responsive: true
        };
        this.barChartData = [
            { data: [0, 0, 0, 0, 0], label: this.translate.instant('normakinez') },
            { data: [0, 0, 0, 0, 0], label: this.translate.instant('gipokinez') },
            { data: [0, 0, 0, 0, 0], label: this.translate.instant('akinez') },
            { data: [0, 0, 0, 0, 0], label: this.translate.instant('diskinez') }
        ];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartLabels = [this.translate.instant('lang_76'), this.translate.instant('lang_77'), this.translate.instant('lang_78'), this.translate.instant('lang_79'), this.translate.instant('lang_80')];
        this.displayedColumns = ['first_name', 'last_name', 'patronymic', 'birthday', 'gender', 'admission_time_to_hospital', 'controls'];
        this.lineTranslationOfTable = ['man'];
        this.spinner = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ViewInfarctionComponent.prototype.ngOnInit = function () {
        this.showTable();
    };
    ViewInfarctionComponent.prototype.showTable = function () {
        var _this = this;
        this.spinner.emit(true);
        var data = {
            'fields': this.filter,
            'pagination': {
                'pageSize': this.pageSize,
                'pageIndex': this.pageIndex,
            },
            'sort': {
                'active': this.active,
                'direction': this.direction
            }
        };
        this.httpService.Http(JSON.stringify(data), 'filter_protocol_infarction_st')
            .subscribe(function (res) {
            if (res.pageLength) {
                _this.pageLength = res.pageLength;
                _this.renderLVGChart(res);
                _this.dataSource = new ExampleDataSource(res.rows, _this.paginator, _this, _this.translate, _this.sort);
            }
            _this.spinner.emit(false);
        });
    };
    ViewInfarctionComponent.prototype.resetFilter = function (filterForm) {
        filterForm.reset();
    };
    ViewInfarctionComponent.prototype.renderLVGChart = function (data) {
        var _this = this;
        this.barChartData = [
            { data: [0, 0, 0, 0, 0], label: this.translate.instant('normakinez') },
            { data: [0, 0, 0, 0, 0], label: this.translate.instant('gipokinez') },
            { data: [0, 0, 0, 0, 0], label: this.translate.instant('akinez') },
            { data: [0, 0, 0, 0, 0], label: this.translate.instant('diskinez') }
        ];
        data.rows.forEach(function (item, index) {
            var lvg = JSON.parse(item.lvg);
            if (Object.keys(lvg).length) {
                for (var index_1 in lvg) {
                    _this.barChartData[lvg[index_1] - 1]['data'][index_1] += 1;
                }
            }
        });
    };
    ViewInfarctionComponent.prototype.tableRow = function (row, field) {
        if (this.lineTranslationOfTable.indexOf(row[field]) !== -1) {
            return this.translate.instant(row[field]);
        }
        return row[field];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatSort */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatSort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatSort */]) === "function" && _a || Object)
    ], ViewInfarctionComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatPaginator */]),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatPaginator */]) === "function" && _b || Object)
    ], ViewInfarctionComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ViewInfarctionComponent.prototype, "spinner", void 0);
    ViewInfarctionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-infarction',
            template: __webpack_require__("../../../../../src/app/components/view-infarction/view-infarction.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/view-infarction/view-infarction.component.sass")],
            providers: [__WEBPACK_IMPORTED_MODULE_8__shared_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_11__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_10__shared_data_service__["a" /* DataService */]]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__shared_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__shared_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_http_service__["a" /* HttpService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__translate__["c" /* TranslateService */]) === "function" && _e || Object])
    ], ViewInfarctionComponent);
    return ViewInfarctionComponent;
    var _a, _b, _c, _d, _e;
}());

var ExampleDataSource = /** @class */ (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase, _paginator, _viewInfarctionComponent, translate, _sort) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._paginator = _paginator;
        _this._viewInfarctionComponent = _viewInfarctionComponent;
        _this.translate = translate;
        _this._sort = _sort;
        _this.firstRenderingOfTable = false;
        _this.dataChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        this.dataChange.next(this._exampleDatabase);
        var displayDataChanges = [
            this.dataChange,
            this._paginator.page,
            this._sort.sortChange,
        ];
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"], displayDataChanges).map(function () {
            ['itemsPerPageLabel', 'nextPageLabel', 'previousPageLabel'].forEach(function (item, index) {
                _this._paginator._intl[item] = _this.translate.instant(item);
            });
            if (_this.firstRenderingOfTable) {
                _this._viewInfarctionComponent.pageSize = _this._paginator.pageSize;
                _this._viewInfarctionComponent.pageIndex = _this._paginator.pageIndex;
                _this._viewInfarctionComponent.active = _this._sort.active;
                _this._viewInfarctionComponent.direction = _this._sort.direction;
                _this._viewInfarctionComponent.showTable();
            }
            _this.firstRenderingOfTable = true;
            return _this.data;
        });
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));

//# sourceMappingURL=view-infarction.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/authentication/authentication.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-form\">\r\n  <form #authForm=\"ngForm\" (ngSubmit)=\"saveForm(authForm)\">\r\n    <mat-form-field class=\"\">\r\n      <input matInput [(ngModel)]=\"auth.username\"\r\n             name=\"username\"\r\n             type=\"text\"\r\n             placeholder=\"{{'lang_153' | translate}}\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"\">\r\n      <input matInput [(ngModel)]=\"auth.password\"\r\n             name=\"password\"\r\n             type=\"password\"\r\n             placeholder=\"{{'lang_154' | translate}}\">\r\n    </mat-form-field>\r\n\r\n    <div *ngIf=\"result && !result.success\" class=\"error-message\">\r\n      {{'lang_234' | translate}}\r\n    </div>\r\n    <button class='btn btn-primary auth-button'>{{'lang_155' | translate}}</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/authentication/authentication.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auth-form {\n  width: 185px;\n  margin: 0 auto;\n  margin-top: 30px; }\n  .auth-form .auth-button {\n    float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/authentication/authentication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_http_service__ = __webpack_require__("../../../../../src/app/shared/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.auth = {
            'username': 'Nicholas',
            'password': '123456',
            'rememberMe': '1'
        };
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
    };
    AuthenticationComponent.prototype.saveForm = function (data) {
        var _this = this;
        console.log(data.form._value);
        this.httpService.Http(this.auth, 'auth')
            .subscribe(function (res) {
            _this.result = res;
            if (res.success) {
                //localStorage.setItem('auth', JSON.stringify({'user':'1'}));
                localStorage.setItem('auth', '1');
                _this.router.navigate(['/']);
            }
        });
    };
    AuthenticationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-authentication',
            template: __webpack_require__("../../../../../src/app/pages/authentication/authentication.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/authentication/authentication.component.sass")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_http_service__["a" /* HttpService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], AuthenticationComponent);
    return AuthenticationComponent;
    var _a, _b;
}());

//# sourceMappingURL=authentication.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/create-infarction/create-infarction.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main-menu></app-main-menu>\r\n<app-infarction></app-infarction>"

/***/ }),

/***/ "../../../../../src/app/pages/create-infarction/create-infarction.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/create-infarction/create-infarction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateInfarctionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateInfarctionComponent = /** @class */ (function () {
    function CreateInfarctionComponent() {
    }
    CreateInfarctionComponent.prototype.ngOnInit = function () { };
    CreateInfarctionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-infarction',
            template: __webpack_require__("../../../../../src/app/pages/create-infarction/create-infarction.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/create-infarction/create-infarction.component.sass")],
        }),
        __metadata("design:paramtypes", [])
    ], CreateInfarctionComponent);
    return CreateInfarctionComponent;
}());

//# sourceMappingURL=create-infarction.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main-menu></app-main-menu>\r\n<div class=\"wrap-body\">\r\n  <app-view-infarction (spinner)=\"spinner($event)\"></app-view-infarction>\r\n</div>\r\n\r\n<div class=\"shadow\" *ngIf=\"progressSpinnerActive\">\r\n  <div class=\"progress-spinner\">\r\n    <mat-progress-spinner class=\"example-margin\"\r\n                          [color]=\"dataService.spinner.color\"\r\n                          [mode]=\"dataService.spinner.mode\"\r\n                          [value]=\"dataService.spinner.value\">\r\n    </mat-progress-spinner>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/index/index.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate__ = __webpack_require__("../../../../../src/app/translate/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndexComponent = /** @class */ (function () {
    function IndexComponent(translate, dataService) {
        this.translate = translate;
        this.dataService = dataService;
        this.progressSpinnerActive = false;
    }
    IndexComponent.prototype.ngOnInit = function () { };
    IndexComponent.prototype.spinner = function (active) {
        this.progressSpinnerActive = active;
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-index',
            template: __webpack_require__("../../../../../src/app/pages/index/index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/index/index.component.sass")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__translate__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* DataService */]) === "function" && _b || Object])
    ], IndexComponent);
    return IndexComponent;
    var _a, _b;
}());

//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/update-infarction/update-infarction.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main-menu></app-main-menu>\r\n<app-infarction [(updateId)]=\"id\"></app-infarction>"

/***/ }),

/***/ "../../../../../src/app/pages/update-infarction/update-infarction.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/update-infarction/update-infarction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateInfarctionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_parse_url_query_service__ = __webpack_require__("../../../../../src/app/shared/parse-url-query.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UpdateInfarctionComponent = /** @class */ (function () {
    function UpdateInfarctionComponent(parseUrlQueryService) {
        this.parseUrlQueryService = parseUrlQueryService;
        this.id = 0;
    }
    UpdateInfarctionComponent.prototype.ngOnInit = function () {
        this.id = parseInt(this.parseUrlQueryService.parseUrlQuery()['id']);
    };
    UpdateInfarctionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update-infarction',
            template: __webpack_require__("../../../../../src/app/pages/update-infarction/update-infarction.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/update-infarction/update-infarction.component.sass")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_parse_url_query_service__["a" /* ParseUrlQueryService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_parse_url_query_service__["a" /* ParseUrlQueryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_parse_url_query_service__["a" /* ParseUrlQueryService */]) === "function" && _a || Object])
    ], UpdateInfarctionComponent);
    return UpdateInfarctionComponent;
    var _a;
}());

//# sourceMappingURL=update-infarction.component.js.map

/***/ }),

/***/ "../../../../../src/app/restrictinput.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestrictInputDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestrictInputDirective = /** @class */ (function () {
    function RestrictInputDirective(model, el) {
        this.model = model;
        this.el = el;
        this.regexMap = {
            integer: '/^([^0-9]*)$/',
            float: '^[+-]?([0-9]*[.])?[0-9]+$',
            words: /[^A-zА-ЯЁ]/i,
            numbers: /[^0-9]/i,
            point25: '^\-?[0-9]*(?:\\.25|\\.50|\\.75|)$',
            percent: /^[1-9][0-9]?$|^100$/
            ///^(100|[0-9])%?$/
            //percent: '^[1-9][0-9]?$|^100$'
        };
        this.regexp = null;
    }
    Object.defineProperty(RestrictInputDirective.prototype, "defineInputType", {
        set: function (type) {
            this.type = type;
        },
        enumerable: true,
        configurable: true
    });
    RestrictInputDirective.prototype.input = function (event) {
        var value = this.el.nativeElement.value;
        if (value) {
            this.model.valueAccessor.writeValue(value.replace(this.regexMap[this.type], ''));
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('restrict-input'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], RestrictInputDirective.prototype, "defineInputType", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RestrictInputDirective.prototype, "input", null);
    RestrictInputDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[restrict-input]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgControl"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgControl"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
    ], RestrictInputDirective);
    return RestrictInputDirective;
    var _a, _b;
}());

//# sourceMappingURL=restrictinput.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(datePipe) {
        this.datePipe = datePipe;
        this.maskDate = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.maskTime = [/\d/, /\d/, ':', /\d/, /\d/];
        this.maskDateTime = [/\d/, /\d/, ':', /\d/, /\d/, ' ', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.maskPercentage = [/\d/, /\d/, /\d/];
        this.maskPhone = ['+', '3', /\d/, /\d/, ' ', '(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
        this.maskLVG_1_4 = [/[1-4]/];
        this.patternDate = /^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)\d\d$/;
        this.patternTime = /^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00))/;
        this.patternTimeDate = /^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00)) (0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)\d\d$/;
        this.spinner = {
            'color': 'primary',
            'mode': 'indeterminate',
            'value': 50
        };
        this.protocol = {
            admission_time_to_hospital: this.datePipe.transform(new Date(), 'hh:mm') + ' ' + this.datePipe.transform(new Date(), 'dd-MM-yyyy'),
            first_name: 'Биленко',
            last_name: 'Николай',
            patronymic: 'Николаевич',
            birthday: '11-08-1989',
            gender: 'man',
            delivered: '',
            polyclinic: '',
            killip_type: '1',
            effect_of_thrombolysis: '1',
            thrombolysis: {
                type: '1',
                data: {}
            },
            ecg: 'Передний, подъем ST (V1-V4)',
            time_intervals: {
                date: {},
                time: {},
                not_determined: {}
            },
            continuing_pain: 'no',
            increase_segment_st: 'no',
            thrombaspiration: 'thrombus_not_received',
            blood_timi_before: '0',
            blood_timi_after: '0',
            stenosis_diameter_ica_before_chkv: '2',
            stenosis_diameter_ica_after_chkv: '3',
            additionally: {},
            type_interventions: '',
            lka: {
                percent: [],
                b: [],
                cm: [],
                cl: [],
                cb: [],
                timiAfter: [],
                timiBefore: []
            },
            pka: {
                percent: [],
                b: [],
                cm: [],
                cl: [],
                cb: [],
                timiAfter: [],
                timiBefore: []
            },
            lvg_active: '',
            lvg: {},
            cause_of_death: '',
            operator: '',
            date_and_time_of_death: '12:50 13-10-2099',
            fv: '',
            address: '',
            phone: '',
            cd: {
                active: '1',
                type: ''
            },
            ad: {
                c_before: '',
                d_before: '',
                c_after: '',
                d_after: '',
            },
            aortic_valve_or_prosthesis: {
                valve_or_prosthesis: '',
                max_gradient: '',
                effective_area_holes: '',
                regurgitation: '',
                features: ''
            },
            mitral_valve_or_prosthesis: {
                valve_or_prosthesis: '',
                max_gradient: '',
                effective_area_holes: '',
                regurgitation: '',
                features: ''
            },
            pulmonary_artery_valve: {
                regurgitation: '',
                features: ''
            },
            three_leaf_valve: {
                effective_area_holes: '',
                regurgitation: '',
                features: ''
            },
            aorta: '',
            left_atrium: {
                size_0: '',
                size_1: '',
                size_2: ''
            },
            left_ventricle: {
                size_diastolic: '',
                size_systolic: '',
                scope_lv: {},
                thickness_of_myocardium_diastolic: '',
                thickness_of_myocardium_systolic: '',
                mass_myocardium: '',
            },
            myocardial_contractility: {},
            autocompleteCheckboxShow: false,
            autocompleteParent: false,
            general_blood_analysis: {},
            biochemistry: {},
            test_substance: {},
            update: ''
        };
    }
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]) === "function" && _a || Object])
    ], DataService);
    return DataService;
    var _a;
}());

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.mapResponse = function (res) {
            return res.json();
        };
        this.handleError = function (error) {
            console.error('Erorr', error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.message || error);
        };
    }
    HttpService.prototype.Http = function (params, url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(('/backend/web/index.php?r=api/' + url), params, options)
            .map(this.mapResponse)
            .catch(this.handleError);
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], HttpService);
    return HttpService;
    var _a;
}());

//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/obj-ng-for.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjNgForPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ObjNgForPipe = /** @class */ (function () {
    function ObjNgForPipe() {
    }
    ObjNgForPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return Object.keys(value).map(function (key) { return Object.assign({ key: key }, value[key]); });
    };
    ObjNgForPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'objNgFor'
        })
    ], ObjNgForPipe);
    return ObjNgForPipe;
}());

//# sourceMappingURL=obj-ng-for.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/parse-url-query.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParseUrlQueryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParseUrlQueryService = /** @class */ (function () {
    function ParseUrlQueryService() {
    }
    ParseUrlQueryService.prototype.parseUrlQuery = function () {
        var data = {};
        if (location.search) {
            var pair = (location.search.substr(1)).split('&');
            for (var i = 0; i < pair.length; i++) {
                var param = pair[i].split('=');
                data[param[0]] = param[1];
            }
        }
        return data;
    };
    ParseUrlQueryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ParseUrlQueryService);
    return ParseUrlQueryService;
}());

//# sourceMappingURL=parse-url-query.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/safe-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
    var _a;
}());

//# sourceMappingURL=safe-html.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/translate/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__translate_service__ = __webpack_require__("../../../../../src/app/translate/translate.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__translate_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translations__ = __webpack_require__("../../../../../src/app/translate/translations.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__translations__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate_pipe__ = __webpack_require__("../../../../../src/app/translate/translate.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__translate_pipe__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/translate/lang-en.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LANG_EN_NAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LANG_EN_TRANS; });
var LANG_EN_NAME = 'en';
var LANG_EN_TRANS = {
    'normakinez': 'Нормакинез',
    'gipokinez': 'Гипокинез',
    'akinez': 'Акинез',
    'diskinez': 'Дискинез',
    'percent': '%',
    'b': 'Б.',
    'cm': 'С.М.',
    'cl': 'С.Л.',
    'cb': 'С.Б.',
    'timiAfter': 'TIMI До',
    'timiBefore': 'TIME После',
    'lang_0': 'Первичное ЧКВ',
    'lang_1': 'Фармакоинвазивная стратерия (3-24)',
    'lang_2': 'ЧКВ Спасения:Неэффект:Тромболизис',
    'lang_3': 'ЧКВ Больше 24 часов',
    'lang_4': 'Только Агиография',
    'lang_5': 'Вид вмешательства',
    'lang_6': 'Смерть, Время, дата',
    'lang_7': 'Оператор',
    'lang_8': 'ЛКА',
    'lang_9': 'ПКА',
    'lang_10': 'ЛВГ ФВ ___%',
    'lang_11': 'Дополнительно',
    'lang_12': 'ИВЛ',
    'lang_13': 'ВАБК',
    'lang_14': 'Инотрапная поддержка',
    'lang_15': 'ЭКС',
    'lang_16': 'Кардиоверсия',
    'lang_17': 'Кровоток по TIMI после открытия',
    'lang_18': 'Диаметр Стеноза ИСА до ЧКВ',
    'lang_19': 'Диаметр Стеноза ИСА после ЧКВ'
};
//# sourceMappingURL=lang-en.js.map

/***/ }),

/***/ "../../../../../src/app/translate/lang-ru.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LANG_RU_NAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LANG_RU_TRANS; });
var LANG_RU_NAME = 'ru';
var LANG_RU_TRANS = {
    'normakinez': 'Нормокинез',
    'gipokinez': 'Гипокинез',
    'akinez': 'Акинез',
    'diskinez': 'Дискинез',
    'percent': '%',
    'b': 'Баллон',
    'cm': 'Стент металлический',
    'cl': 'Стент с лекарственным покрытием',
    'cb': 'Стент без полимера',
    'timiAfter': 'TIMI До',
    'timiBefore': 'TIMI После',
    'lang_0': 'Первичное ЧКВ',
    'lang_1': 'Фармакоинвазивная стратерия (3-24)',
    'lang_2': 'ЧКВ Спасения:Неэффект:Тромболизис',
    'lang_3': 'ЧКВ Больше 24 часов',
    'lang_4': 'Только Агиография',
    'lang_5': 'Вид вмешательства',
    'lang_6': 'Смерть, Время, дата',
    'lang_7': 'Оператор',
    'lang_8': 'ЛКА',
    'lang_9': 'ПКА',
    'lang_10': 'ЛВГ ФВ',
    'lang_11': 'Дополнительно',
    'lang_12': 'ИВЛ',
    'lang_13': 'ВАБК',
    'lang_14': 'Инотропная поддержка',
    'lang_15': 'ЭКС',
    'lang_16': 'Кардиоверсия',
    'lang_17': 'Кровоток по TIMI после открытия',
    'lang_18': 'Диаметр Стеноза ИСА до ЧКВ',
    'lang_19': 'Диаметр Стеноза ИСА после ЧКВ',
    'lang_20': 'Доставлен',
    'lang_21': 'Адрес',
    'lang_22': 'Кровоток по TIMI до открытия',
    'lang_23': 'Продолжающаяся боль в ангиографическом кабинете, после открытия ИСА',
    'lang_24': 'Да',
    'lang_25': 'Нет',
    'lang_26': 'Продолжающееся повышение сегмента ST в ангиографическом кабинете, после открытия ИСА',
    'lang_27': 'Тромбаспирация',
    'lang_28': 'Тромб получен',
    'lang_29': 'Тромб не получен',
    'lang_30': 'Не удалось провести катетер',
    'lang_31': 'Временные интервалы',
    'lang_32': 'д.м.г.',
    'lang_33': 'ч:мин.',
    'lang_34': 'Нет возможности определить',
    'onsetOfSymptoms': 'Начало симптомов',
    'firstMedicalContact': 'Первый медицинский контакт',
    'ecg': 'ЭКГ',
    'admission_time_to_hospital': 'Поступление в госпиталь',
    'ecgInTheHospital': 'ЭКГ в госпитале',
    'fibrinolysisOrThrombolysis': 'Фибринолизис/Тромболизис',
    'arrivalInAngiography': 'Прибытие в ангиографию',
    'restoringBloodFlow': 'Восстановление кровотока',
    'birthday': 'Дата рождения д/м/г',
    'lang_36': 'Дата д/м/г',
    'lang_37': 'Время поступления',
    'first_name': 'Фамилия',
    'last_name': 'Имя',
    'patronymic': 'Отчество',
    'man': 'муж.',
    'women': 'жен.',
    'lang_43': 'Класс тяжести по KILLIP',
    'lang_44': 'ИМ без признаков недостаточности кровообращения',
    'lang_45': 'ИМ с признаками умеренно выраженной недостаточности кровообращения (тахикардия, влажные хрипы в легких)',
    'lang_46': 'ИМ с отеком легких',
    'lang_47': 'ИМ с кардиогенным шоком',
    'lang_48': 'Тромболизис',
    'lang_49': 'Нет',
    'lang_50': 'Да',
    'lang_51': 'Противопоказано',
    'lang_52': 'Время',
    'lang_53': 'Препарат',
    'lang_54': 'Эффект тромболизиса',
    'lang_55': 'Нет',
    'lang_56': 'Да',
    'lang_57': 'Передний, подъем ST (V1-V4)',
    'lang_58': 'Латеральный подъем ST(I,AVL,V5,V6)',
    'lang_59': 'Нижний подъем ST(Ⅱ,Ⅲ,AVF)',
    'lang_60': 'Другое',
    'lang_61': 'ЭКГ',
    'lang_62': 'Без подъема',
    'lang_63': 'Причина смерти',
    'fv': 'ФВ',
    'lang_65': 'Фильтр',
    'lang_66': 'Дата поступления пациента',
    'lang_67': 'От',
    'lang_68': 'До',
    'lang_69': 'Прикрепить к родительскому протоколу',
    'lang_70': 'Телефон',
    'lang_71': 'Сахарный диабет',
    'lang_72': 'Отменить',
    'lang_73': 'Сбросить',
    'lang_74': '%',
    'lang_75': 'Создать протокол пациента с острым инфарктом миокарда с подъемом сегмента ST.',
    'lang_76': 'Передебоковая',
    'lang_77': 'Верхушечная',
    'lang_78': 'Нижняя',
    'lang_79': 'Заднебоковая',
    'lang_80': 'Перегородочная',
    'lang_81': '1 c.',
    'lang_82': '2 c.',
    'lang_83': '3 c.',
    'lang_84': 'ЗМЖВ',
    'lang_85': 'ЗБВ',
    'lang_86': 'Биф.',
    'lang_87': 'ВОК',
    'lang_88': 'П.',
    'lang_89': 'Д.',
    'lang_90': 'Ствол',
    'lang_91': 'ПМЖВ',
    'lang_92': 'ОВ',
    'lang_93': 'ВТК',
    'lang_94': 'Срединная',
    'lang_95': 'Графт',
    'lang_96': 'Протокол пациента с острым инфарктом миокарда с подъемом сегмента ST.',
    'lang_97': 'Протоколы',
    'lang_98': 'Главная',
    'lang_99': 'Причина',
    'lang_100': 'Сохранить',
    'lang_101': 'У Вас есть обязательные данные для заполнение или данные, которые Вы ввели не коректно.',
    'lang_102': 'Ошибка!',
    'lang_103': 'Сохранение',
    'lang_104': 'Протокол успешно сохранен',
    'gender': 'Пол',
    'itemsPerPageLabel': 'Элементов на странице',
    'nextPageLabel': 'Следущая страница',
    'previousPageLabel': 'Предыдущая страница',
    'lang_105': 'Отправить',
    'controls': ' ',
    'lang_106': 'Tип сахарного диабета',
    'lang_107': 'Артериальное давление при поступлении в операц.',
    'lang_108': 'Систолическое',
    'lang_109': 'Диастолическое',
    'lang_110': 'после',
    'lang_111': 'Ультразвуковое исследование сердца',
    'lang_112': 'Аортальный клапан(протез):',
    'lang_113': 'Аортальный клапан',
    'lang_114': 'Протез',
    'lang_115': 'Максимальный градиент (систола)',
    'lang_116': 'Площадь эффективного отверстия',
    'lang_117': 'Регургитация',
    'lang_118': 'Особенности',
    'lang_119': 'Клапан легочной артерии:',
    'lang_120': 'ДЛА',
    'lang_121': 'Трехстворчатый клапан:',
    'lang_122': 'Митральный клапан(протез):',
    'lang_123': 'Митральный клапан',
    'lang_124': 'Максимальный градиент (диастола)',
    'lang_125': 'Аорта:',
    'lang_126': 'диамерт на уровне АК',
    'lang_127': 'Левое предсердие:',
    'lang_128': 'передне-задний размер',
    'lang_129': ',в 4-камерной позиции',
    'lang_130': 'Левый желудочек:',
    'lang_131': 'М-режим размер: конечо-диастолический',
    'lang_132': 'конечно систолический',
    'lang_133': 'Объемы ЛЖ',
    'lang_134': 'КДО, мл',
    'lang_135': 'КСО, мл',
    'lang_136': 'УО, мл',
    'lang_137': 'ФВ, %',
    'lang_138': 'мл',
    'lang_139': 'Сократимость миокарда ЛЖ:',
    'lang_140': 'Толщина миокарда МЖП: диаст.',
    'lang_141': '',
    'lang_142': 'сист.',
    'lang_143': 'амплитуда движения',
    'lang_144': 'Толщина задней стенки',
    'lang_145': 'Масса миокарда ЛЖ',
    'lang_146': 'Тип',
    'lang_147': 'мм',
    'lang_148': 'г.',
    'lang_149': '1 - нормакинез',
    'lang_150': '2 - гипокинез',
    'lang_151': '3 - акинез',
    'lang_152': '4 - дискинез',
    'lang_153': 'Имя',
    'lang_154': 'Пароль',
    'lang_155': 'Войти',
    'lang_156': 'Выйти',
    'lang_157': 'Примечание',
    'lang_158': 'Общий анализ крови',
    'lang_159': 'Эритроциты',
    'lang_160': 'Гемоглобин',
    'lang_161': 'Цветовой показатель',
    'lang_162': 'Лейкоцитов',
    'lang_163': 'Тромбоциты',
    'lang_164': 'СОЭ(РОЭ)',
    'lang_165': 'Гематокрит',
    'lang_166': 'Биохимия',
    'lang_167': 'Белки',
    'lang_168': 'Ферменты',
    'lang_169': 'Липиды',
    'lang_170': 'Углеводы',
    'lang_171': 'Пигменты',
    'lang_172': 'Низкомолекулярные азотистые вещества',
    'lang_173': 'Неорганические вещества и витамины',
    'lang_174': 'Вещества',
    'lang_175': 'Показатели',
    'lang_177': 'Общий белок (г/л)',
    'lang_178': 'Альбумин (г/л)',
    'lang_179': 'Аланинаминотрансфераза (АсАт, АЛТ), ед/л',
    'lang_180': 'Аспартатамнотрансфераза (АсАт, АЛТ), ед/л',
    'lang_181': 'Альфа-Амилаза(Диастаза), ед/л',
    'lang_182': 'Фосфатаза щелочная, ед/л',
    'lang_183': 'Холестерин, ммоль/л',
    'lang_184': 'Липопротеины низкой плотности (ЛПНП), ммоль/Л',
    'lang_185': 'Липопротеины высокой плотности (ЛПВП), ммоль/Л',
    'lang_186': 'Глюкоза, ммоль/л',
    'lang_187': 'Билирубин общий, мкмоль/л',
    'lang_188': 'Билирубин прямой, мкмоль/л',
    'lang_189': 'Креатинин, мкмоль/л',
    'lang_190': 'Мочевина, ммоль/л',
    'lang_191': 'Железо, мкмоль/л',
    'lang_192': 'Калий, ммоль/л',
    'lang_193': 'Кальций, ммоль/л',
    'lang_194': 'Натрий, ммоль/л',
    'lang_195': 'Исследуемое вещество',
    'lang_196': 'СК',
    'lang_197': 'СК-МВ',
    'lang_198': 'Тропонин',
    'lang_199': 'Тропонин высокочуствительный',
    'lang_200': 'Лабораторные исследования',
    'lang_201': 'Д-димер',
    'lang_202': 'РНПЦ Кардиология',
    'lang_203': 'БСМП Больница скорой медицинской помощи',
    'lang_204': 'Поликлиника',
    'lang_205': 'Мужчины, Женщины: 64 - 83',
    'lang_206': 'Мужчины, Женщины: 33 - 50',
    'lang_207': 'Мужчины - 31 Женщины - 44',
    'lang_208': 'Мужчины, Женщины: 10 - 40',
    'lang_209': 'Мужчины, Женщины: 100',
    'lang_210': 'Мужчины: 268, Женщины: 239',
    'lang_211': 'Мужчины, Женщины - 3.0 - 6.0',
    'lang_212': 'Мужчины: 2.1-4.7 Женщины: 1.91-4.5',
    'lang_213': 'Мужчины: 0.7-1.83 Женщины: 0.9-2.2',
    'lang_214': 'Мужчины, Женщины: 3.8 - 5.82',
    'lang_215': 'Мужчины, Женщины: 3.41 - 17.0',
    'lang_216': 'Мужчины, Женщины: 0 - 3.41',
    'lang_217': 'Мужчины: 63-115 Женщины: 54-97',
    'lang_218': 'Мужчины, Женщины: 2.39 - 6.39',
    'lang_219': 'Мужчины, Женщины: 3.4-5.5',
    'lang_220': 'Мужчины, Женщины: 2.14-2.5',
    'lang_221': 'Мужчины, Женщины: 136-145',
    'lang_222': 'Мужчины, Женщины: 0.67-1.44',
    'lang_223': 'Мужчины: 4.0 - 5.1, Женщины: 3.7 - 4.7 x 1012/л',
    'lang_224': 'Мужчины: 130 - 160г/л, Женщины: 120 - 140г/л',
    'lang_225': 'Мужчины, Женщины: 0.86-1.05',
    'lang_226': 'Мужчины, Женщины: 4-8.8 x 109/л',
    'lang_227': 'Мужчины, Женщины: 170-380 x 109/л',
    'lang_228': 'Мужчины: 2-10, Женщины: 3-14',
    'lang_229': 'Мужчины, Женщины: 36 - 48%',
    'lang_230': '2 - 4',
    'lang_231': '2 - 4',
    'lang_232': '3.5 - 10',
    'lang_233': '4 - 10',
    'lang_234': 'Некорректно введены данные',
    'lang_235': '',
    'lang_236': '',
    'lang_237': '',
    'lang_238': '',
    'lang_239': '',
    'lang_240': '',
    'lang_241': '',
    'lang_242': '',
    'lang_243': '',
    'lang_244': '',
    'lang_245': '',
    'lang_246': '',
    'lang_247': '',
    'lang_248': '',
    'lang_249': '',
    'lang_250': '',
    'lang_251': '',
    'lang_252': '',
    'lang_253': '',
    'lang_254': '',
    'lang_255': '',
    'lang_256': '',
    'lang_257': '',
    'lang_258': '',
    'lang_259': '',
    'lang_260': '',
    'lang_261': '',
    'lang_262': '',
    'lang_263': '',
    'lang_264': '',
    'lang_265': '',
    'lang_266': '',
    'lang_267': '',
    'lang_268': '',
    'lang_269': '',
    'lang_270': '',
    'lang_271': '',
    'lang_272': '',
    'lang_273': '',
    'lang_274': '',
    'lang_275': '',
    'lang_276': '',
    'lang_277': '',
    'lang_278': '',
    'lang_279': '',
    'lang_280': '',
    'lang_281': '',
    'lang_282': '',
    'lang_283': '',
    'lang_284': '',
    'lang_285': '',
    'lang_286': '',
    'lang_287': '',
    'lang_288': '',
    'lang_289': '',
    'lang_290': '',
    'lang_291': '',
    'lang_292': '',
    'lang_293': '',
    'lang_294': '',
    'lang_295': '',
    'lang_296': '',
    'lang_297': '',
    'lang_298': '',
    'lang_299': 'test',
    'm_mode': 'М-режим (Teichholz)',
    'b_mode': 'В-режим (Simpson)',
};
//var s = ''; for(var i = 141; i < 300; i++) {s += "'lang_"+i+"': '',\n";}
//# sourceMappingURL=lang-ru.js.map

/***/ }),

/***/ "../../../../../src/app/translate/translate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate__ = __webpack_require__("../../../../../src/app/translate/index.ts");
// app/translate/translate.pipe.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // our translate service
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(_translate) {
        this._translate = _translate;
    }
    TranslatePipe.prototype.transform = function (value, args) {
        if (!value)
            return;
        return this._translate.instant(value);
    };
    TranslatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'translate',
            pure: false // impure pipe, update value when we change language
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__translate__["c" /* TranslateService */]) === "function" && _a || Object])
    ], TranslatePipe);
    return TranslatePipe;
    var _a;
}());

//# sourceMappingURL=translate.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/translate/translate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translations__ = __webpack_require__("../../../../../src/app/translate/translations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

 // import our opaque token
var TranslateService = /** @class */ (function () {
    // inject our translations
    function TranslateService(_translations) {
        this._translations = _translations;
    }
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        get: function () {
            return this._currentLang;
        },
        enumerable: true,
        configurable: true
    });
    TranslateService.prototype.use = function (lang) {
        // set current language
        this._currentLang = lang;
    };
    TranslateService.prototype.translate = function (key) {
        // private perform translation
        var translation = key;
        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }
        return translation;
    };
    TranslateService.prototype.instant = function (key) {
        // public perform translation
        return this.translate(key);
    };
    TranslateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__translations__["a" /* TRANSLATIONS */])),
        __metadata("design:paramtypes", [Object])
    ], TranslateService);
    return TranslateService;
}());

//# sourceMappingURL=translate.service.js.map

/***/ }),

/***/ "../../../../../src/app/translate/translations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRANSLATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TRANSLATION_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang_en__ = __webpack_require__("../../../../../src/app/translate/lang-en.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lang_ru__ = __webpack_require__("../../../../../src/app/translate/lang-ru.ts");
// app/translate/translation.ts

// import translations


// translation token
var TRANSLATIONS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('translations');
// all traslations
var dictionary = {
    'en': __WEBPACK_IMPORTED_MODULE_1__lang_en__["a" /* LANG_EN_TRANS */],
    'ru': __WEBPACK_IMPORTED_MODULE_2__lang_ru__["a" /* LANG_RU_TRANS */],
};
// providers
var TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];
//# sourceMappingURL=translations.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map