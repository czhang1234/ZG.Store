import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

import {AuthService} from '../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService, private router: Router){}

    canActivate(): boolean{
        if(this.authService.checkLogin()){
            return true;
        } else{
            this.router.navigateByUrl('/login');
            return false;
        }

    }
}