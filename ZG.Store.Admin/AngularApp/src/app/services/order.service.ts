import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {environment} from '../../environments/environment';

import {ApiBaseUrls} from '../constants/api-base-urls';

import 'rxjs/add/operator/toPromise';

import {AuthService} from './auth.service';
import {OrderListViewModel} from '../model/order-list-view-model';

@Injectable()
export class OrderService{
    private apiBaseUrls = new ApiBaseUrls();
    private orderUrl = this.apiBaseUrls.orderUrl;
    private ordersUrl = this.apiBaseUrls.ordersUrl;

    constructor(private authService: AuthService, private http: Http){}

    getOrders(pageNumber: number): Promise<OrderListViewModel>{
        const headers = this.getHeaders(false);
        let url = `${this.ordersUrl}/${pageNumber}`;
        return this.http.get(url, {headers})
            .toPromise()
            .then(response => response.json() as OrderListViewModel)
            .catch(this.handleError);
    }

    private getHeaders(appendContentTypeHeader: boolean): Headers{
        let headers = this.authService.initAuthHeaders();

        if(appendContentTypeHeader){
            headers.append('Content-Type', 'application/json')
        }

        return headers;
    }

    private handleError(error: any){
        console.error('an error occured:', error);// for demo purposes only
        return Promise.reject(error.message || error);
    }
}
