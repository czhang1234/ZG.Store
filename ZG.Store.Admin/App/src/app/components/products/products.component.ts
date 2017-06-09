import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../services/auth.service';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
    products: Product[];

    constructor(private productService: ProductService, private router: Router, 
        private authService: AuthService){}

    ngOnInit() {  
        this.productService.getProducts(1).then(prods => this.products = prods);
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

    get diagnostic() { return JSON.stringify(this.products) }
}