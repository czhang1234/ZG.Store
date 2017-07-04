import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { ProductCategoryService } from '../../services/product-category.service';
import { ProductCategory } from '../../model/product-category';

@Component({
    selector: 'product-category-form',
    templateUrl: './product-category-form.component.html',
    styleUrls: ['./product-category-form.component.css']
})
export class ProductCategoryFormComponent {
    prodCats: ProductCategory[];
    prodCat: ProductCategory;
    loading = false;

    constructor(private productCategoryService: ProductCategoryService, private route: ActivatedRoute,
        private location: Location, private router: Router) { }

    ngOnInit() {
        this.loading = true;
        this.route.params.switchMap((params: Params) => this.productCategoryService.getProductCategory(+params['id']))
            .subscribe(prodCat => {
                this.prodCat = prodCat;
                this.loading = false;
            });

        this.productCategoryService.getProductCategories()
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
            this.productCategoryService.update(this.prodCat)
                .then(() => this.goBack());
        }
        else {
            this.productCategoryService.create(this.prodCat)
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