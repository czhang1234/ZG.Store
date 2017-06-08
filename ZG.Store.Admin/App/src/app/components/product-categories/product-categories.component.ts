import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {ProductService} from '../../services/product/product.service';
import {ProductCategory} from '../../model/product-category/product-category';

@Component({
    selector: 'product-categories',
    templateUrl: './product-categories.component.html',
    styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit{
    productCategories: ProductCategory[];

    constructor(private productService: ProductService, private router: Router){}

    ngOnInit() {
        this.productService.getProductCategories().then(prodCats => this.productCategories = prodCats);
    };

    goToDetail(productCategory: ProductCategory): void{
        this.router.navigate(['/prodcatdetails', productCategory.productCategoryId]);
    };

    delete(productCategory: ProductCategory): void{
        this.productService.delete(productCategory.productCategoryId)
            .then(() => {
                this.productCategories.filter(prodCat => prodCat !== productCategory);
            });
    };

    get diagnostic() { return JSON.stringify(this.productCategories) }
}