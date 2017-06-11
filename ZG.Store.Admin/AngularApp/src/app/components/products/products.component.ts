import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../services/auth.service';
import {ProductService} from '../../services/product.service';
import {ProductCategoryService} from '../../services/product-category.service';
import {Product} from '../../model/product';
import {ProductCategory} from '../../model/product-category';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
    products: Product[];
    prodCats: ProductCategory[];

    constructor(private productService: ProductService, private router: Router, 
        private authService: AuthService, private prodCatService: ProductCategoryService){}

    ngOnInit() {  
        this.prodCatService.getProductCategories().then(prodCats => {
            this.prodCats = prodCats;            
            this.prodCats.splice(0, 0, new ProductCategory("--- Select Product Category ---", false, 0));
        });
    };

    goToDetails(product: Product): void{
        this.router.navigate(['/productdetails', product.productId]);
    };

    delete(product: Product): void{
        this.productService.delete(product.productId)
            .then(() => {
                this.products.filter(prod => prod !== product);
            });
    };

    onProdCatChange(prodCatId: number): void{
        this.productService.getProducts(prodCatId).then(prods => this.products = prods);
    }

    get diagnostic() { return JSON.stringify(this.products) }
}