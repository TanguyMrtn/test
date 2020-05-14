(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar text-center>\r\n    <ion-title text-center>Bienvenue sur Polytech'App</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n \r\n<ion-content padding>\r\n  <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmit()\">\r\n    <ion-grid>\r\n      <ion-row justify-content-center>\r\n        <ion-col align-self-center>\r\n          <div text-center>\r\n            <h4 class=\"ion-text-center\">Inscription</h4>\r\n          </div>\r\n          <div padding>\r\n            \r\n            <ion-item>\r\n              <ion-input type=\"email\" formControlName=\"email\" placeholder=\"Email adress\"></ion-input>\r\n            </ion-item>\r\n    \r\n            <ion-item>\r\n              <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Password\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label>Filière</ion-label>\r\n              <ion-select formControlName=\"filiere\" *ngFor=\"let filiere of filieres\">\r\n                <ion-select-option>{{filiere}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n\r\n            <ion-button shape=\"round\" size=\"medium\" expand=\"block\" type=\"button\" (click)=\"register()\" [disabled]=\"!credentialsForm.valid\">Register</ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/register/register.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.module.ts ***!
    \***************************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppPagesRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/pages/register/register.page.ts");

    const routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }];
    let RegisterPageModule = class RegisterPageModule {};
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/pages/register/register.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  background: #dfdfdf;\n}\n\nion-grid {\n  width: 80%;\n  height: 100%;\n}\n\nion-row {\n  height: 50%;\n}\n\nion-button {\n  margin-top: 30px;\n  font-weight: 200;\n}\n\n.underline {\n  text-decoration: underline;\n  text-align: center;\n}\n\n@media (min-width: 240px) and (max-width: 768px) {\n  ion-grid {\n    background: #fff;\n    margin-left: 5%;\n  }\n\n  ion-col {\n    border: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvRDpcXENvdXJzXFxTZW1lc3RyZSA4XFxQUk9KODMxXFxwcm9qZXRcXGFwcC9zcmNcXGFwcFxccGFnZXNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLG1CQUFBO0FDRko7O0FES0E7RUFDSSxVQUFBO0VBQ0EsWUFSUTtBQ01aOztBREtBO0VBQ0ksV0FBQTtBQ0ZKOztBRFVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ1BKOztBRFVBO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtBQ1BKOztBRFVBO0VBQ0k7SUFDSSxnQkFqQ007SUFrQ04sZUFBQTtFQ1BOOztFRFNFO0lBQ0ksWUFBQTtFQ05OO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2hpdGUtY29sb3I6ICNmZmY7XHJcbiRoZWlnaHQxMDA6IDEwMCU7XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGZkZmRmO1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBoZWlnaHQ6ICRoZWlnaHQxMDA7XHJcbn1cclxuXHJcbmlvbi1yb3cge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi8vIGlvbi1jb2wge1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgIzQ4OGFmZjtcclxuLy8gICAgIGJhY2tncm91bmQ6ICR3aGl0ZS1jb2xvcjtcclxuLy8gfVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuLnVuZGVybGluZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMjQwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgaW9uLWdyaWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZS1jb2xvcjtcclxuICAgICAgICBtYXJnaW4tbGVmdCA6IDUlO1xyXG4gICAgfVxyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG59IiwiaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZGZkZmRmO1xufVxuXG5pb24tZ3JpZCB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXJvdyB7XG4gIGhlaWdodDogNTAlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLnVuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAyNDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGlvbi1ncmlkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgfVxuXG4gIGlvbi1jb2wge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/register/register.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/register/register.page.ts ***!
    \*************************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppPagesRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    let RegisterPage = class RegisterPage {
      constructor(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
      }

      ngOnInit() {
        this.credentialsForm = this.formBuilder.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
          filiere: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]]
        });
        this.getFiliere();
      }

      getFiliere() {
        this.authService.getFiliere().subscribe(res => {
          this.filieres = res;
        });
      }

      register() {
        this.authService.register(this.credentialsForm.value).subscribe(res => {
          // Call Login to automatically login the new user
          this.authService.login(this.credentialsForm.value).subscribe();
        });
      }

    };

    RegisterPage.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }];

    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/pages/register/register.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-register-register-module-es5.js.map