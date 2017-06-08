import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/toPromise';

import {RequestResult} from '../../model/request-result/request-result';

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

                    sessionStorage.setItem(this.tokenKey, data.accessToken);
                }

                return result;
            })
            .catch(this.handleError);
    }

    logout(){}

    checkLogin(): boolean{
        var token = sessionStorage.getItem(this.tokenKey);
        return token !== null;
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
        if(!this.token){
            this.token = sessionStorage.getItem(this.tokenKey);
        }

        return this.token;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
