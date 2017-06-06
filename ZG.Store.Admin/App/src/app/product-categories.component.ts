import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {ProductService} from './product.service';
import {ProductCategory} from './product-category';

@Component({
    selector: 'product-categories',
    templateUrl: '',
    styleUrls: ['']
})
export class ProductCategoriesComponent implements OnInit{
    productCategories: ProductCategory[];

    constructor(private productService: ProductService, private router: Router){}

    ngOnInit() {
        this.productService.getProductCategories().then(prodCats => this.productCategories = prodCats);
    };

    goToDetail(productCategory: ProductCategory): void{
        this.router.navigate(['/prodcat', productCategory.productCategoryId]);
    };

    add(parentId: number, categoryName: string, active: boolean): void{
        categoryName = categoryName.trim();

        if(!categoryName)        {
            return;
        }

        this.productService.create()
            .then(prodCat => this.productCategories.push(prodCat));
    }
}