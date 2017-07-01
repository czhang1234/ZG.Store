import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

import {AuthService} from './auth.service';
import {Product} from '../model/product';
import {ApiBaseUrls} from '../constants/api-base-urls';

@Injectable()
export class ProductService{
    private apiBaseUrls = new ApiBaseUrls();
    private prodUrl = this.apiBaseUrls.prodUrl;
    private prodsUrl = this.apiBaseUrls.prodsUrl;
    private prodSearchUrl = this.apiBaseUrls.prodSearchUrl;

    constructor(private http: Http, private authService: AuthService){}

    getProducts(id: number): Promise<Product[]>{
        let headers = this.getHeaders(false);
        const url = `${this.prodsUrl}/${id}`;

        return this.http.get(url, {headers})
            .toPromise()
            .then(response => response.json() as Product[])
            .catch(this.handleError);
    };

    getProduct(id: number): Promise<Product>{ 
        const url = `${this.prodUrl}/${id}`;

        if(id === 0){
            return Promise.resolve(new Product(1, 'p1', 'description', 1, true, 1, 1, 1, 1, 1, 1, 1, 1, false, []));
        }

        let headers = this.getHeaders(false);

        return this.http.get(url, {headers})
            .toPromise()
            .then(response => response.json() as Product)
            .catch(this.handleError);
    }

    search(terms: string): Promise<Product[]>{
        let headers = this.getHeaders(true);
        const url = `${this.prodSearchUrl}`;

        return this.http.post(url, JSON.stringify({terms}), {headers})
            .toPromise()
            .then(response => response.json() as Product[])
            .catch(this.handleError);
    };

    create(prod: Product): Promise<Product>{
        let headers = this.getHeaders(true);
        
        return this.http.post(this.prodUrl, JSON.stringify(prod), {headers})
            .toPromise()
            .then(response => response.json() as Product)
            .catch(this.handleError);
    }

    update(product: Product): Promise<void>{
        const url = `${this.prodUrl}/${product.productId}`;
        let headers = this.getHeaders(true);

        return this.http.put(url, JSON.stringify(product), {headers})  
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void>{
        const url = `${this.prodUrl}/images/${id}`;
        let headers = this.getHeaders(true);

        return this.http.delete(url, {headers}) 
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    deleteImage(id: number): Promise<void>{
        const url = `${this.prodUrl}/images/${id}`;
        let headers = this.getHeaders(true);

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