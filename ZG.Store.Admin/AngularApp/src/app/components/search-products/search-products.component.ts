import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'product-search',
    templateUrl: './search-products.component.html',
    styleUrls: ['./search-products.component.css']
})
export class ProductSearchComponent {
    searchTerms: string;

    constructor(private router: Router) { }

    search(terms: string): void {
        this.router.navigate(['/products', terms]);
    }

    onKeyUp(event: any, terms: string): void {
        if (event.keyCode == 13) {
            this.router.navigate(['/products', terms]);
        }
    }
}