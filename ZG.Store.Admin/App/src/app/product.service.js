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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var product_category_1 = require("./product-category");
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.prodCatUrl = (process.env.ENV !== 'production') ? 'http://localhost:50105/api/ProductCategory' : 'api/ProductCategory';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
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
            return Promise.resolve(new product_category_1.ProductCategory("test", true));
        }
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.create = function (categoryName, active, parentId) {
        return this.http.post(this.prodCatUrl, JSON.stringify({ parentId: parentId, categoryName: categoryName, active: active }), { headers: this.headers })
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map