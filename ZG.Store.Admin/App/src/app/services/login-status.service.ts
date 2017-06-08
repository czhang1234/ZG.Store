import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LoginStatusService{
    // Observable string sources
    private loggedInSource = new Subject<string>();

    // Observable string streams
    loggedIn$ = this.loggedInSource.asObservable();

    loginComplete(){
        this.loggedInSource.next();
    }

}
