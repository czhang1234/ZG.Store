import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../services/auth.service';
import {ProductCategoryService} from '../../services/product-category.service';
import {ProductCategory} from '../../model/product-category';

@Component({
    selector: 'product-categories',
    templateUrl: './product-categories.component.html',
    styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit{
    productCategories: ProductCategory[];
    loggedIn = false;
    userName: string;

    constructor(private prodCatService: ProductCategoryService, private router: Router, 
        private authService: AuthService){}

    ngOnInit() {        
        this.authService.getUserInfo()
            .then(resp => this.userName = (resp.Data as any).UserName);     

        this.prodCatService.getProductCategories().then(prodCats => {
            this.productCategories = prodCats;
        });
    };

    goToDetails(productCategory: ProductCategory): void{
        this.router.navigate(['/prodcatdetails', productCategory.productCategoryId]);
    };

    delete(productCategory: ProductCategory): void{
        this.prodCatService.delete(productCategory.productCategoryId)
            .then(() => {
                this.productCategories.filter(prodCat => prodCat !== productCategory);
            });
    };

    get diagnostic() { return JSON.stringify(this.productCategories) }
}