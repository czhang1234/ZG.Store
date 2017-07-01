import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
import {AuthService} from './auth.service';
import {ApiBaseUrls} from '../constants/api-base-urls';

@Injectable()
export class FileUploadService {
    private apiBaseUrls = new ApiBaseUrls();
    private baseUrl = this.apiBaseUrls.baseUrl;
    private basePostUrl = this.apiBaseUrls.basePostUrl;

    constructor(private http: Http, private authService: AuthService) { }

    upload(formData, controller, id) {
        const url = `${this.basePostUrl}/${controller}/${id}`;
        let headers = this.getHeaders(false);

        return this.http.post(url, formData, {headers})
            .map(x => x.json());
            /*
            .map((x: any[]) => x
          // add a new field url to be used in UI later
                .map(item => Object
                    .assign({}, item, { url: `${this.baseUrl}/${controller}/${id}/${item.fileName}` }))
            );
            */
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