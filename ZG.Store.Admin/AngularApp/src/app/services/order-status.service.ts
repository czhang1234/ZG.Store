import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';

import { ApiBaseUrls } from '../constants/api-base-urls';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AuthService } from './auth.service';
import {OrderStatus} from '../model/order-status';

@Injectable()
export class OrderStatusService {
    private apiBaseUrls = new ApiBaseUrls();
    private orderStatusUrl = this.apiBaseUrls.orderStatusUrl;

    constructor(private authService: AuthService, private http: Http) { }

    getOrderStatus(): Observable<OrderStatus[]> {
        const headers = this.getHeaders(false);
        let url = `${this.orderStatusUrl}`;
        return this.http.get(url, { headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    extractData(response: Response){
        let body = response.json();
        return body as OrderStatus[] || [];
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