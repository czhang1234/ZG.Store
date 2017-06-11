import { Component} from "@angular/core";
import { Router } from '@angular/router';

import { AuthService } from "../../services/auth.service";
import {LoginStatusService} from '../../services/login-status.service';

@Component({
    selector: "my-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent  {
    userName: string;
    password: string;

    constructor(
        private authService: AuthService,
        private router: Router,
        private loginStatusService: LoginStatusService,
    ) { }

    login() {
        this.authService.login(this.userName, this.password)
            .then(result => {
                if (result.State === 1) {
                    this.loginStatusService.loginComplete();
                    this.router.navigate(["./productcategories"]);
                }
                else {
                    alert(result.Msg);
                }
            });
    }
}