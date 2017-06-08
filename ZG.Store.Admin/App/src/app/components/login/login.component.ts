import { Component } from "@angular/core";
import { Router } from '@angular/router';

import { AuthService } from "../../services/auth/auth.service";

@Component({
    selector: "my-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {
    private userName: string;
    private password: string;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    login() {
        this.authService.login(this.userName, this.password)
            .then(result => {
                if (result.State === 1) {
                    this.router.navigate(["./productcategories"]);
                }
                else {
                    alert(result.Msg);
                }
            });
    }
}