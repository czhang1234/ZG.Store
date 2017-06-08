import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/toPromise';

import {AuthService} from '../auth/auth.service';
import {ProductCategory} from '../../model/product-category/product-category';

@Injectable()
export class ProductService{
    private prodCatUrl = (!environment.production) ? 'http://localhost:50105/api/ProductCategory' : 'api/ProductCategory';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http, private authService: AuthService){}

    getProductCategories(): Promise<ProductCategory[]>{
        let headers = this.authService.initAuthHeaders();

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

        let headers = this.authService.initAuthHeaders();

        return this.http.get(url, {headers})
            .toPromise()
            .then(response => response.json() as ProductCategory)
            .catch(this.handleError);
    }

    create(prodCat: ProductCategory): Promise<ProductCategory>{
        let headers = this.authService.initAuthHeaders();
        
        return this.http.post(this.prodCatUrl, JSON.stringify(prodCat), {headers}) //TODO: append this.headers
            .toPromise()
            .then(response => response.json() as ProductCategory)
            .catch(this.handleError);
    }

    update(productCategory: ProductCategory): Promise<void>{
        const url = `${this.prodCatUrl}/${productCategory.productCategoryId}`;
        let headers = this.authService.initAuthHeaders();

        return this.http.put(url, JSON.stringify(productCategory), {headers})  //TODO: append this.headers
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void>{
        const url = `${this.prodCatUrl}/${id}`;
        let headers = this.authService.initAuthHeaders();

        return this.http.delete(url, {headers})  //TODO: append this.headers
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        console.error('an error occured', error); // for demo purposes only
        return Promise.reject(error.message || error);;
    }
}