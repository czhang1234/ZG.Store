import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

import 'rxjs/add/operator/switchMap';

import {AuthService} from '../../services/auth.service';
import { ProductCategoryService } from '../../services/product-category.service';
import { ProductCategory } from '../../model/product-category';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';

@Component({
    selector: 'product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
    prodCats: ProductCategory[];
    product = new Product(1, 'p1', 'description', 1, true, 1, 1, 1, 1, 1, 1, 1, 1, false, []);

    constructor(private productCategoryService: ProductCategoryService, private productService: ProductService, 
        private route: ActivatedRoute, private location: Location, private authService: AuthService, private router: Router) { }

    ngOnInit() {
        this.route.params.switchMap((params: Params) => this.productService.getProduct(+params['id']))
            .subscribe(prod => {
                this.product = prod;
            });

        this.productCategoryService.getProductCategories()
            .then(prodCats => {
                this.prodCats = prodCats;
            });
    }

    save(): void {
        this.product.name = this.product.name.trim();

        if (!this.product.name) {
            return;
        }

        if (this.product.productId) {
            this.productService.update(this.product)
                .then(() => this.goBack());
        }
        else {
            this.productService.create(this.product)
                .then(() => this.goBack());
        }
    }

    goBack(): void {
        this.location.back();
    }

    newCategory() {
        this.product = new Product(1, 'p1', 'description', 1, true, 1, 1, 1, 1, 1, 1, 1, 1, false, []);
    }

    get diagnostic() { return JSON.stringify(this.product) }
    get diagnostic2() { return JSON.stringify(this.prodCats) }
}