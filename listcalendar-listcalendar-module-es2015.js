(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listcalendar-listcalendar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendardetails/calendardetails.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendardetails/calendardetails.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"closeModal()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Chi tiết lịch học Khóa XXX</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"mainbox\">\n  <div class=\"image-details-box\">\n    <img class=\"imageDetails\" src=\"https://uci.vn/upload/image/thao%201/khai%20giang/thang-7/LKG.jpg\" />\n  </div>\n  <p class=\"color-title\">Lịch khai giảng</p>\n  <p class=\"color-title-bold\">Lịch khai giảng khóa học tháng 07 /2020 - Khóa học đánh giá và kiểm soát chất lượng chuẩn quốc tế</p>\n  <p class=\"color-title\">Lịch khai giảng khóa học online QC Yellow Belt, HSE Yellow Belt, \n    FSMS Yellow Belt tại thành phố Hồ Chí Minh. Đặc biệt, \n    chương trình cải tiến cập nhật các ISO phiên bản mới nhất 2018 cùng với phương pháp 6 Sigma, \n    Kaizen & 5S ngay tại Viện UCI kết hợp trải nghiệm thực tế tại doanh nghiệp. \n    Hãy trở thành người đầu tiên trải nghiệm Chương trình mới tại Viện UCI.</p>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/listcalendar/listcalendar.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listcalendar/listcalendar.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Lịch học</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <IonList>\n    <ion-item (click)=\"showDetail()\">\n      <ion-avatar slot=\"start\">\n        <img src=\"https://uci.vn/upload/image/thao%201/khai%20giang/thang-7/LKG.jpg\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Lịch học khóa XXX</h2>\n        <p>Lịch khai giảng khóa học tháng 07 /2020 - Khóa học đánh giá và kiểm soát chất lượng chuẩn quốc tế</p>\n      </ion-label>\n    </ion-item>\n  </IonList>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/calendardetails/calendardetails.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/calendardetails/calendardetails.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyZGV0YWlscy9jYWxlbmRhcmRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/calendardetails/calendardetails.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/calendardetails/calendardetails.component.ts ***!
  \**************************************************************/
/*! exports provided: CalendardetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendardetailsComponent", function() { return CalendardetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let CalendardetailsComponent = class CalendardetailsComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    closeModal() {
        this.modalController.dismiss();
    }
};
CalendardetailsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
CalendardetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calendardetails',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./calendardetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendardetails/calendardetails.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./calendardetails.component.scss */ "./src/app/calendardetails/calendardetails.component.scss")).default]
    })
], CalendardetailsComponent);



/***/ }),

/***/ "./src/app/listcalendar/listcalendar-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/listcalendar/listcalendar-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ListcalendarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListcalendarPageRoutingModule", function() { return ListcalendarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _listcalendar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listcalendar.page */ "./src/app/listcalendar/listcalendar.page.ts");




const routes = [
    {
        path: '',
        component: _listcalendar_page__WEBPACK_IMPORTED_MODULE_3__["ListcalendarPage"]
    }
];
let ListcalendarPageRoutingModule = class ListcalendarPageRoutingModule {
};
ListcalendarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListcalendarPageRoutingModule);



/***/ }),

/***/ "./src/app/listcalendar/listcalendar.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/listcalendar/listcalendar.module.ts ***!
  \*****************************************************/
/*! exports provided: ListcalendarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListcalendarPageModule", function() { return ListcalendarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _listcalendar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listcalendar-routing.module */ "./src/app/listcalendar/listcalendar-routing.module.ts");
/* harmony import */ var _listcalendar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listcalendar.page */ "./src/app/listcalendar/listcalendar.page.ts");







let ListcalendarPageModule = class ListcalendarPageModule {
};
ListcalendarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _listcalendar_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListcalendarPageRoutingModule"]
        ],
        declarations: [_listcalendar_page__WEBPACK_IMPORTED_MODULE_6__["ListcalendarPage"]]
    })
], ListcalendarPageModule);



/***/ }),

/***/ "./src/app/listcalendar/listcalendar.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/listcalendar/listcalendar.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RjYWxlbmRhci9saXN0Y2FsZW5kYXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/listcalendar/listcalendar.page.ts":
/*!***************************************************!*\
  !*** ./src/app/listcalendar/listcalendar.page.ts ***!
  \***************************************************/
/*! exports provided: ListcalendarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListcalendarPage", function() { return ListcalendarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _calendardetails_calendardetails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendardetails/calendardetails.component */ "./src/app/calendardetails/calendardetails.component.ts");




let ListcalendarPage = class ListcalendarPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    showDetail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _calendardetails_calendardetails_component__WEBPACK_IMPORTED_MODULE_3__["CalendardetailsComponent"],
                cssClass: 'fullScreenModal'
            });
            return yield modal.present();
        });
    }
};
ListcalendarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ListcalendarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listcalendar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./listcalendar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/listcalendar/listcalendar.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./listcalendar.page.scss */ "./src/app/listcalendar/listcalendar.page.scss")).default]
    })
], ListcalendarPage);



/***/ })

}]);
//# sourceMappingURL=listcalendar-listcalendar-module-es2015.js.map