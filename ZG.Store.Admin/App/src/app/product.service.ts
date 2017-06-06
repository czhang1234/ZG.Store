import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {ProductCategory} from './product-category';

@Injectable()
export class ProductService{
    private prodCatUrl = 'api/ProductCategory';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http){}

    getProductCategories(): Promise<ProductCategory[]>{
        return this.http.get(this.prodCatUrl)
            .toPromise()
            .then(response => response.json().data as ProductCategory[])
            .catch(this.handleError);
    };

    create(parentId: number, categoryName: string, active: boolean): Promise<ProductCategory>{
        this.http.post(this.prodCatUrl, JSON.stringify({parentId, categoryName, active}), {headers: this.headers})
        .toPromise()
        .then(response => response.json().data as ProductCategory)
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