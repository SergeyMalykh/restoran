webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-il-fornello></app-il-fornello>\n"

/***/ }),

/***/ "./src/app/app.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.styl")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__il_fornello_il_fornello_component__ = __webpack_require__("./src/app/il-fornello/il-fornello.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__il_fornello_home_il_fornello_home_component__ = __webpack_require__("./src/app/il-fornello-home/il-fornello-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__il_fornello_about_il_fornello_about_component__ = __webpack_require__("./src/app/il-fornello-about/il-fornello-about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__il_fornello_menu_il_fornello_menu_component__ = __webpack_require__("./src/app/il-fornello-menu/il-fornello-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__il_fornello_contact_il_fornello_contact_component__ = __webpack_require__("./src/app/il-fornello-contact/il-fornello-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__il_fornello_routing__ = __webpack_require__("./src/app/il-fornello.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__il_fornello_service__ = __webpack_require__("./src/app/il-fornello.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__il_fornello_il_fornello_component__["a" /* IlFornelloComponent */],
            __WEBPACK_IMPORTED_MODULE_4__il_fornello_home_il_fornello_home_component__["a" /* IlFornelloHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__il_fornello_about_il_fornello_about_component__["a" /* IlFornelloAboutComponent */],
            __WEBPACK_IMPORTED_MODULE_6__il_fornello_menu_il_fornello_menu_component__["a" /* IlFornelloMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_7__il_fornello_contact_il_fornello_contact_component__["a" /* IlFornelloContactComponent */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_8__il_fornello_routing__["a" /* AppRouting */], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* ReactiveFormsModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_10__il_fornello_service__["a" /* IlFornelloService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/il-fornello-about/il-fornello-about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  il-fornello-about works!\n</p>\n\n<div>ASSIGNMENTS! Please find below, and advise me when you think you can complete it by. Once completed, I would need to book\n  in your onsite interview (1hr).</div>\n<div>The most common slip up, is that when the solution/code is run, the homepage for the Angular doesn’t look like the attached\n  visual. Please ensure it looks like the attached visual. This is a Front end position, so the solution needs to be as close\n  to identical as possible, and you have no time constraints for CSS Stylings etc..\n</div>\n<div>They are also looking for Angular best practices (components, etc..).</div>\n<div>\n  I understand from the Hiring Manager it shouldn’t take more than a few hours to complete each exercise. Please add your completed\n  assignments to a Github Repository and send me the links once completed.\n</div>\n<div>\n  HTML5 and Angular 2+ A. Starting with index.html, create a homepage that look like the attached visual (visual.png), using\n  Angular 2+, Bootstrap and CSS3. B. Add a row after “Meet our Culinary Specialists” that displays the restaurant’s menu\n  in a grid. Demonstrate data binding to an array of JSON objects.\n</div>\n<div>\n  <img src=\"assets/img/visual.png\">\n\n</div>\n"

/***/ }),

/***/ "./src/app/il-fornello-about/il-fornello-about.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/il-fornello-about/il-fornello-about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IlFornelloAboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IlFornelloAboutComponent = (function () {
    function IlFornelloAboutComponent() {
    }
    IlFornelloAboutComponent.prototype.ngOnInit = function () {
    };
    return IlFornelloAboutComponent;
}());
IlFornelloAboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-il-fornello-about',
        template: __webpack_require__("./src/app/il-fornello-about/il-fornello-about.component.html"),
        styles: [__webpack_require__("./src/app/il-fornello-about/il-fornello-about.component.styl")]
    }),
    __metadata("design:paramtypes", [])
], IlFornelloAboutComponent);

//# sourceMappingURL=il-fornello-about.component.js.map

/***/ }),

/***/ "./src/app/il-fornello-contact/il-fornello-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  il-fornello-contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/il-fornello-contact/il-fornello-contact.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/il-fornello-contact/il-fornello-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IlFornelloContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IlFornelloContactComponent = (function () {
    function IlFornelloContactComponent() {
    }
    IlFornelloContactComponent.prototype.ngOnInit = function () {
    };
    return IlFornelloContactComponent;
}());
IlFornelloContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-il-fornello-contact',
        template: __webpack_require__("./src/app/il-fornello-contact/il-fornello-contact.component.html"),
        styles: [__webpack_require__("./src/app/il-fornello-contact/il-fornello-contact.component.styl")]
    }),
    __metadata("design:paramtypes", [])
], IlFornelloContactComponent);

//# sourceMappingURL=il-fornello-contact.component.js.map

/***/ }),

/***/ "./src/app/il-fornello-home/il-fornello-home.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n\n  <title>Ristorante Il Fornello</title>\n\n</head>\n\n\n\n<body>\n\n\n\n  <header class=\"header-container\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"header-inner-container col-lg-8\">\n          <h1 class=\"header-text-h1\">Ristorante Il Fornello</h1>\n          <p style=\"padding:40px;\"></p>\n          <p class=\"header-text-p\">Simple, fresh ingredients, prepared and cooked with love and passion become truly great dishes, from wood-oven\n            baked Neapolitan style pizzas to pastas, entrees!</p>\n        </div>\n        <div class=\"col-lg-4\">\n        </div>\n      </div>\n    </div>\n  </header>\n\n\n  <div class=\"container\">\n    <div class=\"container-fluid main-items-container\">\n      <div class=\"divider-line-bottom item-blocks row\">\n        <div class=\"col-lg-3 item-blocks-header float-right\">\n          <p style=\"padding:20px;\"></p>\n          <h3 align=center class=\"text-weight\">Our Unique Culinary Creations</h3>\n        </div>\n        <div class=\"col-lg-9\">\n          <h2 class=\"text-weight\">Fichipizza</h2>\n          <p>A unique combination of Mediterranean and Italian pizza, topped with Mascarphone, proscuitto, figs, grando panado,\n            honey and arugula.</p>\n          <p>\n            <a href=\"#\">More &raquo;</a>\n          </p>\n        </div>\n      </div>\n      <div class=\"divider-line-bottom item-blocks row\">\n        <div class=\"col-lg-3 item-blocks-header\">\n          <p style=\"padding:20px;\"></p>\n          <h3 align=center class=\"text-weight\">This Month's Promotions</h3>\n        </div>\n        <div class=\"col-lg-9\">\n          <h2 class=\"text-weight\">Weekend Grand Buffet</h2>\n          <p>Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main\n            entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person </p>\n          <p>\n            <a href=\"#\">More &raquo;</a>\n          </p>\n        </div>\n      </div>\n      <div class=\"item-blocks row\">\n        <div class=\"col-lg-3 item-blocks-header float-right\">\n          <p style=\"padding:20px;\"></p>\n          <h3 align=center class=\"text-weight\">Meet our Culinary Specialists</h3>\n        </div>\n        <div class=\"col-lg-9\">\n          <h2 class=\"text-weight\">Tommy McHugh</h2>\n          <h4 class=\"text-subtitle\">Executive Chef</h4>\n          <p>Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in\n            the culinary world, he specializes in creating mouthwatering Mediterranean-Italian experiences. </p>\n          <p>\n            <a href=\"#\">More &raquo;</a>\n          </p>\n        </div>\n      </div>\n\n      <div class=\"\">\n        <app-il-fornello-menu [inputFormGroup]=\"rootFormGroup.controls.tabMenu\"></app-il-fornello-menu>\n      </div>\n\n    </div>\n\n    <footer>\n      <div class=\"container-fluid\">\n        <div class=\"bottom-container row\">\n          <div class=\"bottom-links col-lg-3 col-md-6 bottom-container-chunk\">\n            <h5>Links</h5>\n            <ul class=\"cancel-ul-style\">\n              <li>\n                <a href=\"#/ilfornello/home\">Home</a>\n              </li>\n              <li>\n                <a href=\"#/ilfornello/about\">About</a>\n              </li>\n              <li>\n                <a href=\"#/ilfornello/menu\">Menu</a>\n              </li>\n\n              <li>\n                <a href=\"#/ilfornello/contact\">Contact</a>\n              </li>\n\n            </ul>\n\n          </div>\n\n          <div class=\"bottom-address-contrainer col-lg-5 col-md-6 bottom-container-chunk\">\n\n            <h5>Our Address</h5>\n\n            <address>\n\n              214, King Street West\n              <br> Downtown, Toronto\n              <br> ONTARIO\n\n              <br>\n              <i class=\"material-icons icon-size\">phone</i>: +416 1234 5678\n              <br>\n              <i class=\"material-icons icon-size\">business_center</i>: +416 8765 4321\n              <br>\n              <i class=\"material-icons icon-size\">email</i>:\n              <a href=\"mailto:ilfornello@food.net\">ilfornello@food.net</a>\n\n            </address>\n\n          </div>\n\n          <div class=\"bottom-icons col-lg-4 col-md-12 bottom-container-center\">\n\n            <div style=\"padding: 40px 10px;\">\n\n              <a href=\"#\" class=\"fa fa-google-plus\"></a>\n              <a href=\"#\" class=\"fa fa-facebook\"></a>\n              <a href=\"#\" class=\"fa fa-linkedin\"></a>\n              <a href=\"#\" class=\"fa fa-twitter\"></a>\n              <a href=\"#\" class=\"fa fa-youtube\"></a>\n              <a href=\"#\">\n                <i class=\"mail-to material-icons icon-size\">mail_outline</i>\n              </a>\n              <!-- <a href=\"http://google.com/+\">Google+</a>\n\n            <a href=\"http://www.facebook.com/profile.php?id=\">Facebook</a>\n\n            <a href=\"http://www.linkedin.com/in/\">LinkedIn</a>\n\n            <a href=\"http://twitter.com/\">Twitter</a>\n\n            <a href=\"http://youtube.com/\">YouTube</a>\n\n            <a href=\"mailto:\">Mail</a> -->\n\n            </div>\n\n          </div>\n\n          <div class=\"col-lg-12 col-md-12\">\n\n            <p style=\"padding:10px;\"></p>\n\n            <p align=center>© Copyright 2015 Ristorante Il Fornello</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </footer>\n  </div>\n"

/***/ }),

/***/ "./src/app/il-fornello-home/il-fornello-home.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-container {\n  padding: 50px 10px 50px 0px;\n  background-color: #7884cd;\n  color: #fff;\n}\n.bottom-container {\n  background-color: #afafaf;\n  padding: 20px 100px 20px 100px;\n}\n@media (max-width: 1200px) {\n  .item-blocks-header {\n    padding-bottom: 30px;\n  }\n  .float-right {\n    float: none !important;\n  }\n  .bottom-container-center {\n    text-align: center;\n  }\n}\n@media (max-width: 992px) {\n  .bottom-container-chunk {\n    margin-left: auto;\n    margin-right: auto;\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n    margin-bottom: 30px;\n  }\n}\n.divider-line-bottom {\n  border-bottom: 1px solid #d8d6d6;\n}\n.item-blocks {\n  padding: 50px 5px 50px 0px;\n}\n.float-right {\n  float: right;\n}\n.cancel-ul-style {\n  list-style-type: none;\n  padding: 0px;\n}\n.text-weight,\n.text-subtitle,\n.header-text-h1 {\n  font-weight: 550;\n}\n.header-text-h1 {\n  font-size: 58px;\n}\n.header-text-p {\n  font-size: 20px;\n}\n.main-items-container {\n  margin-bottom: 50px;\n}\n.icon-size {\n  font-size: small;\n  vertical-align: middle;\n}\n.fa {\n  padding: 8px;\n  font-size: 23px;\n  width: 39px;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 7px;\n}\n.fa:hover {\n  opacity: 0.7;\n}\n.fa-facebook {\n  background: #3b5998;\n  color: #fff;\n}\n.fa-twitter {\n  background: #55acee;\n  color: #fff;\n}\n.fa-google-plus {\n  background: #dd4b39;\n  color: #fff;\n  padding: 8px 2px 8px 0px;\n}\n.fa-linkedin {\n  background: #007bb5;\n  color: #fff;\n}\n.fa-youtube {\n  background: #ff4930;\n  color: #fff;\n}\n.mail-to {\n  font-size: 32px;\n  padding-left: 4px;\n  padding-bottom: 8px;\n}\n", ""]);

// exports
exports.locals = {
	"softPurple": "#7884cd",
	"bottomContainer": "#afafaf",
	"dividerLine": "#d8d6d6",
	"headerTextColor": "#fff",
	"navBarBackground": "#2f3ba1",
	"navBarNormalText": "#a09f9d",
	"navBarSelectBackground": "#191e80",
	"navBarSelectText": "#fff",
	"iconContrastColor": "#fff",
	"youtube": "#ff4930",
	"facebook": "#3b5998",
	"twitter": "#55acee",
	"googlePlus": "#dd4b39",
	"linkedin": "#007bb5"
};

/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/il-fornello-home/il-fornello-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__il_fornello_service__ = __webpack_require__("./src/app/il-fornello.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_ngx_strongly_typed_forms_model__ = __webpack_require__("./src/app/ngx-strongly-typed-forms/model.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IlFornelloHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IlFornelloHomeComponent = (function () {
    function IlFornelloHomeComponent(service, formBuilder) {
        this.service = service;
        this.formBuilder = formBuilder;
    }
    IlFornelloHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getMenu().subscribe(function (menu) {
            if (menu) {
                _this.formBuilderGroupSetup(menu);
            }
        });
    };
    IlFornelloHomeComponent.prototype.formBuilderGroupSetup = function (menu) {
        var _this = this;
        this.rootFormGroup = this.formBuilder.group({
            tabMenu: this.formBuilder.group({
                categories: this.formBuilder.array(menu.categories.map(function (category) {
                    return _this.formBuilder.group({
                        categoryName: [category.categoryName],
                        menuItems: _this.formBuilder.array(category.menuItems.map(function (menuItem) {
                            return _this.formBuilder.group({
                                itemName: [menuItem.itemName],
                                itemDescription: [menuItem.itemDescription],
                                itemPrice: [menuItem.itemPrice],
                                itemPosition: [menuItem.itemPosition]
                            });
                        }))
                    });
                }))
            })
        });
    };
    return IlFornelloHomeComponent;
}());
IlFornelloHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-il-fornello-home',
        template: __webpack_require__("./src/app/il-fornello-home/il-fornello-home.component.html"),
        styles: [__webpack_require__("./src/app/il-fornello-home/il-fornello-home.component.styl")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__il_fornello_service__["a" /* IlFornelloService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__il_fornello_service__["a" /* IlFornelloService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_ngx_strongly_typed_forms_model__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_ngx_strongly_typed_forms_model__["b" /* FormBuilder */]) === "function" && _b || Object])
], IlFornelloHomeComponent);

var _a, _b;
//# sourceMappingURL=il-fornello-home.component.js.map

/***/ }),

/***/ "./src/app/il-fornello-menu/il-fornello-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"inputFormGroup\" *ngIf=\"inputFormGroup\">\n  <div formArrayName=\"categories\">\n    <div *ngFor=\"let category of formArrayCategories().controls; let indexCategory = index; trackBy: trackByFn\">\n      <div [formGroupName]=\"indexCategory\">\n        <div class=\"form-group chefmenu-block\">\n          <div class=\"chefmenu-title\">{{category.value.categoryName}}</div>\n          <div formArrayName=\"menuItems\">\n            <div *ngFor=\"let menu of category.controls.menuItems.controls; let indexMenu = index; trackByFn\">\n              <div [formGroupName]=\"indexMenu\">\n                <div class=\"chefmenu-header\">{{menu.value.itemName}}</div>\n                <div class=\"chefmenu-text\">{{menu.value.itemDescription}} {{menu.value.itemPrice}}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/il-fornello-menu/il-fornello-menu.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chefmenu-title {\n  font-size: x-large;\n  font: normal 300 22px/25px \"Oswald\", Helvetica, Arial, Verdana, sans-serif;\n  text-decoration: underline;\n}\n.chefmenu-header {\n  font-weight: bold;\n}\n.chefmenu-block {\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/il-fornello-menu/il-fornello-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_ngx_strongly_typed_forms_model__ = __webpack_require__("./src/app/ngx-strongly-typed-forms/model.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IlFornelloMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IlFornelloMenuComponent = (function () {
    function IlFornelloMenuComponent() {
    }
    IlFornelloMenuComponent.prototype.ngOnInit = function () { };
    IlFornelloMenuComponent.prototype.trackByFn = function (index) {
        return index;
    };
    IlFornelloMenuComponent.prototype.formArrayCategories = function () {
        return this.inputFormGroup.controls.categories;
    };
    return IlFornelloMenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_ngx_strongly_typed_forms_model__["a" /* FormGroup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_ngx_strongly_typed_forms_model__["a" /* FormGroup */]) === "function" && _a || Object)
], IlFornelloMenuComponent.prototype, "inputFormGroup", void 0);
IlFornelloMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-il-fornello-menu',
        template: __webpack_require__("./src/app/il-fornello-menu/il-fornello-menu.component.html"),
        styles: [__webpack_require__("./src/app/il-fornello-menu/il-fornello-menu.component.styl")]
    }),
    __metadata("design:paramtypes", [])
], IlFornelloMenuComponent);

var _a;
//# sourceMappingURL=il-fornello-menu.component.js.map

/***/ }),

/***/ "./src/app/il-fornello.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__il_fornello_il_fornello_component__ = __webpack_require__("./src/app/il-fornello/il-fornello.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__il_fornello_home_il_fornello_home_component__ = __webpack_require__("./src/app/il-fornello-home/il-fornello-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__il_fornello_about_il_fornello_about_component__ = __webpack_require__("./src/app/il-fornello-about/il-fornello-about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__il_fornello_menu_il_fornello_menu_component__ = __webpack_require__("./src/app/il-fornello-menu/il-fornello-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__il_fornello_contact_il_fornello_contact_component__ = __webpack_require__("./src/app/il-fornello-contact/il-fornello-contact.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });






var appRoutes = [
    { path: 'ilfornello', component: __WEBPACK_IMPORTED_MODULE_1__il_fornello_il_fornello_component__["a" /* IlFornelloComponent */], pathMatch: 'full' },
    {
        path: 'ilfornello/home',
        component: __WEBPACK_IMPORTED_MODULE_2__il_fornello_home_il_fornello_home_component__["a" /* IlFornelloHomeComponent */],
        pathMatch: 'full'
    },
    {
        path: 'ilfornello/about',
        component: __WEBPACK_IMPORTED_MODULE_3__il_fornello_about_il_fornello_about_component__["a" /* IlFornelloAboutComponent */],
        pathMatch: 'full'
    },
    {
        path: 'ilfornello/menu',
        component: __WEBPACK_IMPORTED_MODULE_4__il_fornello_menu_il_fornello_menu_component__["a" /* IlFornelloMenuComponent */],
        pathMatch: 'full'
    },
    {
        path: 'ilfornello/contact',
        component: __WEBPACK_IMPORTED_MODULE_5__il_fornello_contact_il_fornello_contact_component__["a" /* IlFornelloContactComponent */],
        pathMatch: 'full'
    },
    { path: '', redirectTo: 'ilfornello/home', pathMatch: 'full' }
];
var AppRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=il-fornello.routing.js.map

/***/ }),

/***/ "./src/app/il-fornello.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IlFornelloService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IlFornelloService = (function () {
    function IlFornelloService() {
        console.log(this.constructor.name + '.constructor');
    }
    IlFornelloService.prototype.getMenu = function () {
        var mockedMenuData = {
            categories: [
                {
                    categoryName: 'ANTIPASTI',
                    menuItems: [
                        {
                            itemName: 'OLIVES',
                            itemDescription: 'Warm green and black olives with garlic, chillies, bay leaves, lemon',
                            itemPrice: 7.95,
                            itemPosition: 1
                        },
                        {
                            itemName: 'CALAMARI GRIGLIA ALLA PUTTANESCA',
                            itemDescription: 'Grilled calamari, tomatoes, black olives, capers, lemon, olive oil',
                            itemPrice: 13.95,
                            itemPosition: 2
                        },
                        {
                            itemName: 'GARLIC BREAD WITH CHEESE',
                            itemDescription: 'Toasted herb & garlic buttered bread topped with mozzarella',
                            itemPrice: 7.75,
                            itemPosition: 3
                        }
                    ]
                },
                {
                    categoryName: 'INSALATE',
                    menuItems: [
                        {
                            itemName: 'INSALATA ROMA',
                            itemDescription: 'Mixed greens, chèvre, toasted walnuts, sweety drop peppers, balsamic vinaigrette',
                            itemPrice: 9.75,
                            itemPosition: 1
                        },
                        {
                            itemName: 'INSALATA DI BARBABIETOLE',
                            itemDescription: 'Arugula, beets, chèvre, toasted pecans, balsamic vinaigrette',
                            itemPrice: 9.95,
                            itemPosition: 2
                        },
                        {
                            itemName: 'INSALATA CAPRESE',
                            itemDescription: 'Fresh mozzarella, tomatoes, basil, olive oil, balsamic drizzle',
                            itemPrice: 12.0,
                            itemPosition: 3
                        }
                    ]
                },
                {
                    categoryName: 'PASTA',
                    menuItems: [
                        {
                            itemName: 'PENNE CAPRI',
                            itemDescription: 'Grilled chicken, wild mushrooms, spinach, tomato, olive oil, garlic, shaved parmigiano reggiano',
                            itemPrice: 18.5,
                            itemPosition: 1
                        },
                        {
                            itemName: 'PAPPARDELLE SALSICCIA',
                            itemDescription: 'Crumbled Italian sausage, cherry tomatoes, caramelized onions, olive oil, garlic',
                            itemPrice: 18.45,
                            itemPosition: 2
                        },
                        {
                            itemName: 'LASAGNA',
                            itemDescription: 'Layered with bolognese sauce, mozzarella, béchamel, pomodoro sauce',
                            itemPrice: 18.0,
                            itemPosition: 3
                        }
                    ]
                }
            ]
        };
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            observer.next(mockedMenuData);
            observer.complete();
        });
    };
    return IlFornelloService;
}());
IlFornelloService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], IlFornelloService);

//# sourceMappingURL=il-fornello.service.js.map

/***/ }),

/***/ "./src/app/il-fornello/il-fornello.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div id=\"topheader\">\n    <nav class=\"navbar navbar-default navbar-override\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand navbar-brand-counter\">\n            <!-- <img src=\"assets/img/ngx-bootstrap.svg\" class=\"logo\"> -->\n            <img src=\"assets/img/navBarIcon.png\" class=\"logo\">\n          </a>\n          <!-- <span class=\"navbar-brand\">Angular + Bootstrap</span> -->\n        </div>\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\">\n            <a href=\"#/ilfornello/home\" class=\"nav-a-container\">\n              <i class=\"material-icons icon-size\">home</i>\n              <div class=\"navbar-custom-text\">Home</div>\n              <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n          <li>\n            <a href=\"#/ilfornello/about\" class=\"nav-a-container\">\n              <i class=\"material-icons icon-size\">info</i>\n              <div class=\"navbar-custom-text\">About</div>\n            </a>\n          </li>\n          <li class=\"dropdown\" dropdown>\n            <!-- {1} -->\n            <a dropdownToggle role=\"button\">\n              <!-- {2} -->\n              Menu\n              <!-- <a href=\"#/ilfornello/menu\">Menu</a> -->\n              <span class=\"caret\"></span>\n            </a>\n            <ul *dropdownMenu class=\"dropdown-menu\">\n              <!-- {3} -->\n              <li>\n                <a href=\"#\">Action</a>\n              </li>\n              <li>\n                <a href=\"#\">Another action</a>\n              </li>\n              <li>\n                <a href=\"#\">Something else here</a>\n              </li>\n              <li role=\"separator\" class=\"divider\"></li>\n              <li>\n                <a href=\"#\">Separated link</a>\n              </li>\n              <li role=\"separator\" class=\"divider\"></li>\n              <li>\n                <a href=\"#\">One more separated link</a>\n              </li>\n            </ul>\n          </li>\n          <li>\n            <a href=\"#/ilfornello/contact\">Contact</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/il-fornello/il-fornello.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#topheader .navbar-nav li > a {\n  background-color: #2f3ba1;\n  text-transform: capitalize;\n  color: #a09f9d;\n  transition: background-color 0.2s, color 0.2s;\n/* &:hover,\n  &:focus {\n  \tbackground-color: #333;\n  \tcolor: #fff;\n  } */\n}\n#topheader .navbar-nav li.active > a {\n  background-color: #191e80;\n  color: #fff;\n}\n.navbar-override {\n  margin-bottom: 0px;\n  border-bottom: 1px solid #191e80;\n  border-left: 0px;\n  border-right: 0px;\n  border-top: 0px;\n  border-radius: 0px;\n  background-color: #2f3ba1;\n}\n.icon-size {\n  font-size: 19px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.navbar-custom-text {\n  margin-left: -5px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.navbar-brand-counter {\n  padding: 9px;\n}\n", ""]);

// exports
exports.locals = {
	"softPurple": "#7884cd",
	"bottomContainer": "#afafaf",
	"dividerLine": "#d8d6d6",
	"headerTextColor": "#fff",
	"navBarBackground": "#2f3ba1",
	"navBarNormalText": "#a09f9d",
	"navBarSelectBackground": "#191e80",
	"navBarSelectText": "#fff"
};

/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/il-fornello/il-fornello.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IlFornelloComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IlFornelloComponent = (function () {
    function IlFornelloComponent() {
    }
    IlFornelloComponent.prototype.ngOnInit = function () {
    };
    return IlFornelloComponent;
}());
IlFornelloComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-il-fornello',
        template: __webpack_require__("./src/app/il-fornello/il-fornello.component.html"),
        styles: [__webpack_require__("./src/app/il-fornello/il-fornello.component.styl")]
    }),
    __metadata("design:paramtypes", [])
], IlFornelloComponent);

//# sourceMappingURL=il-fornello.component.js.map

/***/ }),

/***/ "./src/app/ngx-strongly-typed-forms/model.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* unused harmony export toUntyped */


const AbstractControl = __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* AbstractControl */];
/* unused harmony export AbstractControl */

const FormArray = __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormArray */];
/* unused harmony export FormArray */

const FormControl = __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* FormControl */];
/* unused harmony export FormControl */

const FormGroup = __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* FormGroup */];
/* harmony export (immutable) */ __webpack_exports__["a"] = FormGroup;

const FormBuilder =  __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* FormBuilder */];
/* harmony export (immutable) */ __webpack_exports__["b"] = FormBuilder;


function toUntyped(control) {
  return control;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map