import { Component, OnInit} from '@angular/core';
import '../../../assets/css/styles.css';
import { Router } from '@angular/router';

import { JwtHelper } from 'angular2-jwt';
import { AuthService } from '../../services/auth.service';
import {LoginStatusService} from '../../services/login-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "ZG Store Administration";
  userName: string;

  constructor(private authService: AuthService, private router: Router, private loginStatusService: LoginStatusService) { 
    loginStatusService.loggedIn$.subscribe(
      () => {
        this.getUserName();
      });
  }

  ngOnInit(){
     this.getUserName();
  }

  logout(): void {
    this.authService.logout();
    this.userName = null;
    this.router.navigateByUrl('/login');
  }

  private getUserName(): void {
    let jwtHelper = new JwtHelper();
    let token = localStorage.getItem('token');
    if (token) {
      var tokenDecoded = jwtHelper.decodeToken(token);
      this.userName = tokenDecoded.UserName;
    }
  }
}
