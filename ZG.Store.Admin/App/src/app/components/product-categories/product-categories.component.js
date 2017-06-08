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
var product_service_1 = require("./product.service");
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
    core_1.Component({
        selector: 'product-categories',
        templateUrl: './product-categories.component.html',
        styleUrls: ['./product-categories.component.css']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, router_1.Router])
], ProductCategoriesComponent);
exports.ProductCategoriesComponent = ProductCategoriesComponent;
//# sourceMappingURL=product-categories.component.js.map