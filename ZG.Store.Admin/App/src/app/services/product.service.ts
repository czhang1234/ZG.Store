import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

import {AuthService} from './auth.service';
import {ProductCategory} from '../model/product-category';

@Injectable()
export class ProductService{
    private prodCatUrl = (!environment.production) ? 'http://localhost:50105/api/ProductCategory' : 'api/ProductCategory';

    constructor(private http: Http, private authService: AuthService){}

    getProductCategories(): Promise<ProductCategory[]>{
        let headers = this.getHeaders(false);

        return this.http.get(this.prodCatUrl, {headers})
            .toPromise()
            .then(response => response.json() as ProductCategory[])
            .catch(this.handleError);
    };

    getProductCategory(id: number): Promise<ProductCategory>{ 
        const url = `${this.prodCatUrl}/${id}`;

        if(id === 0){
            return Promise.resolve(new ProductCategory("", true, 0, null));
        }

        let headers = this.getHeaders(false);

        return this.http.get(url, {headers})
            .toPromise()
            .then(response => response.json() as ProductCategory)
            .catch(this.handleError);
    }

    create(prodCat: ProductCategory): Promise<ProductCategory>{
        let headers = this.getHeaders(true);
        
        return this.http.post(this.prodCatUrl, JSON.stringify(prodCat), {headers})
            .toPromise()
            .then(response => response.json() as ProductCategory)
            .catch(this.handleError);
    }

    update(productCategory: ProductCategory): Promise<void>{
        const url = `${this.prodCatUrl}/${productCategory.productCategoryId}`;
        let headers = this.getHeaders(false);

        return this.http.put(url, JSON.stringify(productCategory), {headers})  
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void>{
        const url = `${this.prodCatUrl}/${id}`;
        let headers = this.getHeaders(false);

        return this.http.delete(url, {headers}) 
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private getHeaders(appendContentTypeHeader: boolean): Headers{
        let headers = this.authService.initAuthHeaders();

        if(appendContentTypeHeader){
            headers.append('Content-Type', 'application/json');
        }

        return headers;
    }

    private handleError(error: any): Promise<any>{
        console.error('an error occured', error); // for demo purposes only
        return Promise.reject(error.message || error);;
    }
}