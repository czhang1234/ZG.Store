import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import { environment } from '../environments/environment';

import 'rxjs/add/operator/toPromise';

import {ProductCategory} from './product-category';

@Injectable()
export class ProductService{
    private prodCatUrl = (!environment.production) ? 'http://localhost:50105/api/ProductCategory' : 'api/ProductCategory';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http){}

    getProductCategories(): Promise<ProductCategory[]>{
        return this.http.get(this.prodCatUrl)
            .toPromise()
            .then(response => response.json() as ProductCategory[])
            .catch(this.handleError);
    };

    getProductCategory(id: number): Promise<ProductCategory>{
        const url = `${this.prodCatUrl}/${id}`;

        if(id === 0){
            return Promise.resolve(new ProductCategory("", true, 0, null));
        }

        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as ProductCategory)
            .catch(this.handleError);
    }

    create(prodCat: ProductCategory): Promise<ProductCategory>{
        return this.http.post(this.prodCatUrl, JSON.stringify(prodCat), {headers: this.headers})
        .toPromise()
        .then(response => response.json() as ProductCategory)
        .catch(this.handleError);
    }

    update(productCategory: ProductCategory): Promise<void>{
        const url = `${this.prodCatUrl}/${productCategory.productCategoryId}`;
        return this.http.put(url, JSON.stringify(productCategory), {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void>{
        const url = `${this.prodCatUrl}/${id}`;

        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        console.error('an error occured', error); // for demo purposes only
        return Promise.reject(error.message || error);;
    }
}