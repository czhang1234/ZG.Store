import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';

import {ProductService} from './product.service';
import { AppComponent } from './app.component';
import { ProductCategoriesComponent } from './product-categories.component';
import { ProductCategoryFormComponent } from './product-category-form.component';

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
