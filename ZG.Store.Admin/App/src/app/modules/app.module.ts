import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';

import {ProductService} from '../services/product.service';
import {AuthService} from '../services/auth.service';
import {AuthGuard} from '../services/auth-guard.service';
import {LoginStatusService} from '../services/login-status.service';

import { AppComponent } from '../components/app/app.component';
import { ProductCategoriesComponent } from '../components/product-categories/product-categories.component';
import { ProductCategoryFormComponent } from '../components/product-category-form/product-category-form.component';
import {LoginComponent} from '../components/login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    ProductCategoriesComponent,
    ProductCategoryFormComponent,
    LoginComponent,
  ],
  providers: [
    ProductService, 
    AuthService,
    AuthGuard,
    LoginStatusService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
