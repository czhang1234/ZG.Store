import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { ProductService } from './product.service';
import { ProductCategory } from './product-category';

@Component({
    selector: 'product-category-form',
    templateUrl: './product-category-form.component.html',
    styleUrls: ['./product-category-form.component.css']
})
export class ProductCategoryFormComponent {
    prodCats: ProductCategory[];
    prodCat = new ProductCategory("", true, 0, null);

    constructor(private productService: ProductService, private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit() {
        this.route.params.switchMap((params: Params) => this.productService.getProductCategory(+params['id']))
            .subscribe(prodCat => {
                this.prodCat = prodCat;
            });

        this.productService.getProductCategories()
            .then(prodCats => {
                this.prodCats = prodCats;
            });
    }

    save(): void {
        this.prodCat.categoryName = this.prodCat.categoryName.trim();

        if (!this.prodCat.categoryName) {
            return;
        }

        if (this.prodCat.productCategoryId) {
            this.productService.update(this.prodCat)
                .then(() => this.goBack());
        }
        else {
            this.productService.create(this.prodCat)
                .then(() => this.goBack());
        }
    }

    goBack(): void {
        this.location.back();
    }

    newCategory() {
        this.prodCat = new ProductCategory('', true);
    }

    get diagnostic() { return JSON.stringify(this.prodCat) }
    get diagnostic2() { return JSON.stringify(this.prodCats) }
}