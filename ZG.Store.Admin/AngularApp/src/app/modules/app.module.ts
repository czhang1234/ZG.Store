import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';

import {ProductCategoryService} from '../services/product-category.service';
import {ProductService} from '../services/product.service';
import {AuthService} from '../services/auth.service';
import {AuthGuard} from '../services/auth-guard.service';
import {LoginStatusService} from '../services/login-status.service';
import { FileUploadService } from '../services/file-upload.service';
import {OrderService} from '../services/order.service';
import {OrderStatusService} from '../services/order-status.service';
import {CountryService} from '../services/country.service';
import {StateService} from '../services/state.service';

import { AppComponent } from '../components/app/app.component';
import { ProductCategoriesComponent } from '../components/product-categories/product-categories.component';
import { ProductCategoryFormComponent } from '../components/product-category-form/product-category-form.component';
import {LoginComponent} from '../components/login/login.component';
import { ProductsComponent } from '../components/products/products.component';
import { ProductFormComponent } from '../components/product-form/product-form.component';
import {FileUploadComponent} from '../components/file-upload/file-upload.component';
import {ProductSearchComponent} from '../components/search-products/search-products.component';
import {ProductSearchResultsComponent} from '../components/product-search-results/product-search-results.component';
import {OrdersComponent} from '../components/orders/orders.component';
import {OrderFormComponent} from '../components/order-form/order-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    ProductCategoriesComponent,
    ProductCategoryFormComponent,
    LoginComponent,
    ProductsComponent,
    ProductFormComponent,
    FileUploadComponent,
    ProductSearchComponent,
    ProductSearchResultsComponent,
    OrdersComponent,
    OrderFormComponent,
  ],
  providers: [
    ProductCategoryService, 
    ProductService,
    AuthService,
    AuthGuard,
    LoginStatusService,
    FileUploadService,
    OrderService,
    OrderStatusService,
    CountryService,
    StateService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
