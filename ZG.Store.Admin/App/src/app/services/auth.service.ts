import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import {tokenNotExpired} from 'angular2-jwt';

import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';

import {RequestResult} from '../model/request-result';

@Injectable()
export class AuthService{
    private tokenKey = "token";
    private token: string;
    private authUrl = (!environment.production) ? 'http://localhost:50105/api/Auth' : 'api/Auth';


    constructor(private http: Http){}

    login(userName: string, password: string): Promise<RequestResult>{
        return this.http.post(this.authUrl, {userName, password})
            .toPromise()
            .then(response => {
                let result = response.json() as RequestResult;
                if(result.State === 1){
                    let data = result.Data as any;

                    localStorage.setItem(this.tokenKey, data.accessToken);
                }

                return result;
            })
            .catch(this.handleError);
    }

    logout(){
        localStorage.removeItem(this.tokenKey);
    }

    checkLogin(): boolean{
        return tokenNotExpired();
    }

    getUserInfo(): Promise<RequestResult>{
        return this.authGet(this.authUrl);
    }

    authGet(url: string): Promise<RequestResult>{
        let headers = this.initAuthHeaders();
        return this.http.get(this.authUrl, {headers})
            .toPromise()
            .then(response => response.json() as RequestResult)
            .catch(this.handleError);
    }

    authPost(url: string, body: any): Promise<RequestResult>{
        let headers = this.initAuthHeaders();
        return this.http.post(url, body, {headers})
            .toPromise()
            .then(response => response.json() as RequestResult)
            .catch(this.handleError);
    }

    initAuthHeaders(): Headers {
       let token = this.getLocalToken();
       if(token === null) throw 'No token';

       let headers = new Headers();
       headers.append('Authorization', 'Bearer ' + token);

       return headers;
    }

    private getLocalToken(): string{
        return localStorage.getItem(this.tokenKey);;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
