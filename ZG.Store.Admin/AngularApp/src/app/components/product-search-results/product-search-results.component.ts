import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {ProductService} from '../../services/product.service';
import { Product } from '../../model/product';

@Component({
    selector: 'product-search-results',
    templateUrl: './product-search-results.component.html',
    styleUrls: ['./product-search-results.component.css']
})
export class ProductSearchResultsComponent implements OnInit{
    searchTerms: string;
    products: Product[];

    constructor(private prodService: ProductService, private route: ActivatedRoute, private router: Router){}

    ngOnInit(){
        this.route.params.switchMap((params: Params) => this.prodService.search(params['terms']))
            .subscribe(prods => this.products = prods);
    }

    goToDetails(product: Product): void{
        this.router.navigate(['/productdetails', product.productId]);
    };

    get getProducts(){ return JSON.stringify(this.products) }
}