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
import { ProductImage } from '../../model/product-image';

import { environment } from '../../../environments/environment';

@Component({
    selector: 'product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
    prodCats: ProductCategory[];
    product = new Product(1, 'p1', 'description', 1, true, 1, 1, 1, 1, 1, 1, 1, 1, false, []);
    private prodImgUrlBase = (!environment.production) ? 'http://localhost:50105' : '';
    deletedImage: string;

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

    deleteImage(id: number): void{
        this.productService.deleteImage(id)
            .then(() => {
                let img = this.product.images.find(img => img.productImageId === id)
                this.deletedImage = img.fileName;

                let index = this.product.images.indexOf(img);
                this.product.images.splice(index, 1);
            });
    }

    onFileUploaded(imgs: ProductImage[]){
        imgs.forEach(img => this.product.images.push(img));

        this.deletedImage = null;
    }

    goBack(): void {
        this.location.back();
    }

    test(): void {
        this.deletedImage = "12345";
    }

    newProduct() {
        this.product = new Product(1, 'p1', 'description', 1, true, 1, 1, 1, 1, 1, 1, 1, 1, false, []);
    }

    get diagnostic() { return JSON.stringify(this.product) }
    get diagnostic2() { return JSON.stringify(this.prodCats) }
}