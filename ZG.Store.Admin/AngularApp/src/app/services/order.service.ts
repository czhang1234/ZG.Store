import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';

import { ApiBaseUrls } from '../constants/api-base-urls';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {of} from 'rxjs/observable/of';

import { AuthService } from './auth.service';
import { OrderListViewModel } from '../model/order-list-view-model';
import {Order} from '../model/order';

@Injectable()
export class OrderService {
    private apiBaseUrls = new ApiBaseUrls();
    private orderUrl = this.apiBaseUrls.orderUrl;
    private ordersUrl = this.apiBaseUrls.ordersUrl;

    constructor(private authService: AuthService, private http: Http) { }

    getOrders(pageNumber: number): Observable<OrderListViewModel> {
        const headers = this.getHeaders(false);
        let url = `${this.ordersUrl}/${pageNumber}`;
        return this.http.get(url, { headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    getOrder(id: number): Observable<Order>{
        const url = `${this.orderUrl}/${id}`;
        if(id === 0){
            return of(null);
        }

        const headers = this.getHeaders(false);
        return this.http.get(url, {headers})
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    update(order: Order): Observable<void>{
        const url = `${this.orderUrl}/${order.orderId}`;
        const headers = this.getHeaders(true);

        return this.http.put(url, JSON.stringify(order), {headers})
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    extractData(response: Response){
        let body = response.json();
        return body as OrderListViewModel || {};
    }

    private getHeaders(appendContentTypeHeader: boolean): Headers {
        let headers = this.authService.initAuthHeaders();

        if (appendContentTypeHeader) {
            headers.append('Content-Type', 'application/json')
        }

        return headers;
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
