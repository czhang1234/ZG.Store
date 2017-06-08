import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../services/auth/auth.service';
import {ProductService} from '../../services/product/product.service';
import {ProductCategory} from '../../model/product-category/product-category';

@Component({
    selector: 'product-categories',
    templateUrl: './product-categories.component.html',
    styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit{
    productCategories: ProductCategory[];
    loggedIn = false;
    userName: string;

    constructor(private productService: ProductService, private router: Router, 
        private authService: AuthService){}

    ngOnInit() {        
        this.authService.getUserInfo()
            .then(resp => this.userName = (resp.Data as any).UserName);     

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