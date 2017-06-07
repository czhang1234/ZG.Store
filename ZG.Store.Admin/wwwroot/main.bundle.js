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

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_categories_component__ = __webpack_require__("./src/app/product-categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_category_form_component__ = __webpack_require__("./src/app/product-category-form.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/productcategories', pathMatch: 'full' },
    { path: 'productcategories', component: __WEBPACK_IMPORTED_MODULE_2__product_categories_component__["a" /* ProductCategoriesComponent */] },
    { path: 'prodcatdetails/:id', component: __WEBPACK_IMPORTED_MODULE_3__product_category_form_component__["a" /* ProductCategoryFormComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main {\r\n  padding: 1em;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  text-align: center;\r\n  margin-top: 50px;\r\n  display: block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n\n<nav>\n  <a routerLink=\"/productcategories\" routerLinkActive=\"active\">Product Categories</a>\n</nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_css_styles_css__ = __webpack_require__("./src/assets/css/styles.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_css_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_css_styles_css__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = "ZG Store Administration";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_service__ = __webpack_require__("./src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_categories_component__ = __webpack_require__("./src/app/product-categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_category_form_component__ = __webpack_require__("./src/app/product-category-form.component.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__product_categories_component__["a" /* ProductCategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__product_category_form_component__["a" /* ProductCategoryFormComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__product_service__["a" /* ProductService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/product-categories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/product-categories.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Product Categories</h2>\r\n\r\n<div>\r\n    <a [routerLink]=\"['/prodcatdetails', 0]\">Add New Product Category</a>\r\n</div>\r\n\r\n<table class=\"table table-hover\">\r\n    <thead>\r\n        <tr>\r\n            <th>Id</th>\r\n            <th>Parent Id</th>\r\n            <th>Name</th>\r\n            <th>Active</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let cat of productCategories\" (click)=\"goToDetails()\">\r\n            <td>{{cat.productCategoryId}}</td>\r\n            <td>{{cat.parentId}}</td>\r\n            <td>{{cat.categoryName}}</td>\r\n            <td>{{cat.active}}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n{{diagnostic}}"

/***/ }),

/***/ "./src/app/product-categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("./src/app/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCategoriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCategoriesComponent = (function () {
    function ProductCategoriesComponent(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    ProductCategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProductCategories().then(function (prodCats) { return _this.productCategories = prodCats; });
    };
    ;
    ProductCategoriesComponent.prototype.goToDetail = function (productCategory) {
        this.router.navigate(['/prodcatdetails', productCategory.productCategoryId]);
    };
    ;
    ProductCategoriesComponent.prototype.delete = function (productCategory) {
        var _this = this;
        this.productService.delete(productCategory.productCategoryId)
            .then(function () {
            _this.productCategories.filter(function (prodCat) { return prodCat !== productCategory; });
        });
    };
    ;
    Object.defineProperty(ProductCategoriesComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.productCategories); },
        enumerable: true,
        configurable: true
    });
    return ProductCategoriesComponent;
}());
ProductCategoriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'product-categories',
        template: __webpack_require__("./src/app/product-categories.component.html"),
        styles: [__webpack_require__("./src/app/product-categories.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], ProductCategoriesComponent);

var _a, _b;
//# sourceMappingURL=product-categories.component.js.map

/***/ }),

/***/ "./src/app/product-category-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/product-category-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <form #prodCatForm=\"ngForm\" (ngSubmit)=\"save()\">\r\n  \r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Category Name:</label>\r\n            <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" required [(ngModel)]=\"prodCat.categoryName\" #name=\"ngModel\" />\r\n            <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">Name is required</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"parent\">Parent Category:</label>\r\n            <select class=\"form-control\" id=\"parent\" name=\"parent\" required [(ngModel)]=\"prodCat.parentId\">\r\n                <option *ngFor=\"let cat of prodCats\" [value]=\"cat.productCategoryId\">{{cat.categoryName}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"active\">Active:</label>\r\n            <input type=\"checkbox\" id=\"active\" name=\"active\" checked [(ngModel)]=\"prodCat.active\"/>\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!prodCatForm.form.valid\">Submit</button>\r\n        <button type=\"submit\" class=\"btn btn-default\" (click)=\"newCategory(); prodCatForm.reset();\">Reset</button>\r\n    </form>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/product-category-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_service__ = __webpack_require__("./src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_category__ = __webpack_require__("./src/app/product-category.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCategoryFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductCategoryFormComponent = (function () {
    function ProductCategoryFormComponent(productService, route, location) {
        this.productService = productService;
        this.route = route;
        this.location = location;
        this.prodCat = new __WEBPACK_IMPORTED_MODULE_5__product_category__["a" /* ProductCategory */]("", true, 0, null);
    }
    ProductCategoryFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) { return _this.productService.getProductCategory(+params['id']); })
            .subscribe(function (prodCat) {
            _this.prodCat = prodCat;
        });
        this.productService.getProductCategories()
            .then(function (prodCats) {
            _this.prodCats = prodCats;
        });
    };
    ProductCategoryFormComponent.prototype.save = function () {
        var _this = this;
        this.prodCat.categoryName = this.prodCat.categoryName.trim();
        if (!this.prodCat.categoryName) {
            return;
        }
        if (this.prodCat.productCategoryId) {
            this.productService.update(this.prodCat)
                .then(function () { return _this.goBack(); });
        }
        else {
            this.productService.create(this.prodCat)
                .then(function () { return _this.goBack(); });
        }
    };
    ProductCategoryFormComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProductCategoryFormComponent.prototype.newCategory = function () {
        this.prodCat = new __WEBPACK_IMPORTED_MODULE_5__product_category__["a" /* ProductCategory */]('', true);
    };
    Object.defineProperty(ProductCategoryFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.prodCat); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductCategoryFormComponent.prototype, "diagnostic2", {
        get: function () { return JSON.stringify(this.prodCats); },
        enumerable: true,
        configurable: true
    });
    return ProductCategoryFormComponent;
}());
ProductCategoryFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'product-category-form',
        template: __webpack_require__("./src/app/product-category-form.component.html"),
        styles: [__webpack_require__("./src/app/product-category-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */]) === "function" && _c || Object])
], ProductCategoryFormComponent);

var _a, _b, _c;
//# sourceMappingURL=product-category-form.component.js.map

/***/ }),

/***/ "./src/app/product-category.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCategory; });
var ProductCategory = (function () {
    function ProductCategory(categoryName, active, productCategoryId, parentId) {
        this.categoryName = categoryName;
        this.active = active;
        this.productCategoryId = productCategoryId;
        this.parentId = parentId;
    }
    return ProductCategory;
}());

//# sourceMappingURL=product-category.js.map

/***/ }),

/***/ "./src/app/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_category__ = __webpack_require__("./src/app/product-category.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.prodCatUrl = (!__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) ? 'http://localhost:50105/api/ProductCategory' : 'api/ProductCategory';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ProductService.prototype.getProductCategories = function () {
        return this.http.get(this.prodCatUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    ProductService.prototype.getProductCategory = function (id) {
        var url = this.prodCatUrl + "/" + id;
        if (id === 0) {
            return Promise.resolve(new __WEBPACK_IMPORTED_MODULE_4__product_category__["a" /* ProductCategory */]("", true, 0, null));
        }
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.create = function (prodCat) {
        return this.http.post(this.prodCatUrl, JSON.stringify(prodCat), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.update = function (productCategory) {
        var url = this.prodCatUrl + "/" + productCategory.productCategoryId;
        return this.http.put(url, JSON.stringify(productCategory), { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ProductService.prototype.delete = function (id) {
        var url = this.prodCatUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ProductService.prototype.handleError = function (error) {
        console.error('an error occured', error); // for demo purposes only
        return Promise.reject(error.message || error);
        ;
    };
    return ProductService;
}());
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "./src/assets/css/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    background: #0147A7;\r\n    color: #fff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
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