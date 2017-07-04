import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import 'rxjs/add/operator/switchMap';

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
    product: Product;
    private prodImgUrlBase = (!environment.production) ? 'http://localhost:50105' : '';
    deletedImage: string;
    selectedImgId: number;

    errorMsg: string;
    showSuccessMsg = false;
    loading = false;

    prodForm: NgForm;
    @ViewChild('prodForm') currentForm: NgForm;

    constructor(private productCategoryService: ProductCategoryService, private productService: ProductService,
        private route: ActivatedRoute, private location: Location, private router: Router) { }

    ngOnInit() {
        this.loading = true;

        this.route.params.switchMap((params: Params) => this.productService.getProduct(+params['id']))
            .subscribe(prod => {
                this.product = prod;
                this.loading = false;
            });

        this.productCategoryService.getProductCategories()
            .then(prodCats => {
                this.prodCats = prodCats;
            });
    }

    ngAfterViewChecked() {
        this.formChanged();
    }

    formChanged() {
        if (this.currentForm === this.prodForm) { return; }
        this.prodForm = this.currentForm;
        if (this.prodForm) {
            this.prodForm.valueChanges
                .subscribe(data => this.onValueChanged(data));
        }
    }

    onValueChanged(data?: any) {
        if (!this.prodForm) { return; }
        const form = this.prodForm.form;

        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    formErrors = {
        'name': '',
        'description': '',
        'salePrice': '',
        'weight': '',
        'shippingWeight': '',
        'height': '',
        'shippingHeight': '',
        'length': '',
        'shippingLength': '',
        'width': '',
        'shippingWidth': '',
        'productLink': '',
        'totalReviewCount': '',
        'ratingScore': '',
    };

    validationMessages = {
        'name': {'required': 'Name is required.'},
        'description': {'description': 'Description is required.'},
        'salePrice': {'required': 'SalePrice is required.'},
        'weight': {'required': 'Weight is required.'},
        'shippingWeight': {'required': 'ShippingWeight is required.'},
        'height': {'required': 'Height is required.'},
        'shippingHeight': {'required': 'ShippingHeight is required.'},
        'length': {'required': 'Length is required.'},
        'shippingLength': {'required': 'ShippingLength is required.'},
        'width': {'required': 'Width is required.'},
        'shippingWidth': {'required': 'ShippingWidth is required.'},
        'productLink': {'required': 'ProductLink is required.'},
        'totalReviewCount': {'required': 'TotalReviewCount is required.'},
        'ratingScore': {'required': 'RatingScore is required.'},
    };

    save(): void {
        this.product.name = this.product.name.trim();

        if (!this.product.name) {
            return;
        }

        if (this.product.productId) {
            this.productService.update(this.product)
                .then(() => {
                    this.showSuccessMsg = true;
                    setTimeout(() => this.showSuccessMsg = false, 4000);
                });
        }
        else {
            this.productService.create(this.product)
                .then(() => {
                    this.showSuccessMsg = true;
                    setTimeout(() => this.showSuccessMsg = false, 4000);
                });
        }
    }

    deleteImage(id: number): void {

        if (confirm("Are you sure you want to delete?")) {
            this.productService.deleteImage(id)
                .then(() => {
                    let img = this.product.images.find(img => img.productImageId === id)
                    this.deletedImage = img.fileName;

                    let index = this.product.images.indexOf(img);
                    this.product.images.splice(index, 1);
                });
        }
    }

    onFileUploaded(imgs: ProductImage[]) {
        imgs.forEach(img => this.product.images.push(img));

        this.deletedImage = null;
    }

    goBack(): void {
        this.location.back();
    }

    test(): void {
        this.deletedImage = "12345";
    }

    selectImage(imgId: number): void {
        this.selectedImgId = imgId;
    }

    get diagnosticProduct() { return JSON.stringify(this.product) }
    get diagnostic2() { return JSON.stringify(this.prodCats) }
    get prodImgs() { return JSON.stringify(this.product.images) }
}