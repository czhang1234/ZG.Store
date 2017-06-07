"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var product_service_1 = require("./product.service");
var product_category_1 = require("./product-category");
var ProductCategoryFormComponent = (function () {
    function ProductCategoryFormComponent(productService, route, location) {
        this.productService = productService;
        this.route = route;
        this.location = location;
        this.prodCat = new product_category_1.ProductCategory("", true, 0, null);
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
        this.prodCat = new product_category_1.ProductCategory('', true);
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
    core_1.Component({
        selector: 'product-category-form',
        templateUrl: './product-category-form.component.html',
        styleUrls: ['./product-category-form.component.css']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, router_1.ActivatedRoute,
        common_1.Location])
], ProductCategoryFormComponent);
exports.ProductCategoryFormComponent = ProductCategoryFormComponent;
//# sourceMappingURL=product-category-form.component.js.map