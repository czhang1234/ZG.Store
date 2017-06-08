import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HttpModule} from '@angular/http';

import {ProductService} from '../services/product/product.service';
import { AppComponent } from '../components/app/app.component';
import { ProductCategoriesComponent } from '../components/product-categories/product-categories.component';
import { ProductCategoryFormComponent } from '../components/product-category-form/product-category-form.component';

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
  ],
  providers: [
    ProductService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
