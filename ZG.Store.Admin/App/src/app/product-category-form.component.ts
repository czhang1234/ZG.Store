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
    prodCat: ProductCategory;

    constructor(private productService: ProductService, private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit() {
        this.route.params.switchMap((params: Params) => this.productService.getProductCategory(+params['id']))
            .subscribe(prodCat => this.prodCat = prodCat);

        this.productService.getProductCategories()
            .then(prodCats =>this.prodCats = prodCats);
    }

    save(categoryName: string, active: boolean, productCategoryId?: number, parentId?: number): void {
        categoryName = categoryName.trim();

        if (!categoryName) {
            return;
        }

        if (productCategoryId) {
            this.productService.update(new ProductCategory(categoryName, active, productCategoryId, parentId))
                .then(() => this.goBack());
        }
        else {
            this.productService.create(categoryName, active, parentId)
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
}