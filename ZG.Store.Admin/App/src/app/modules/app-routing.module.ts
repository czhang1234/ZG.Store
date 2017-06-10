import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from '../components/login/login.component';
import { ProductCategoriesComponent } from '../components/product-categories/product-categories.component';
import { ProductCategoryFormComponent } from '../components/product-category-form/product-category-form.component';
import {AuthGuard} from '../services/auth-guard.service';
import { ProductsComponent } from '../components/products/products.component';
import { ProductFormComponent } from '../components/product-form.component.ts/product-form.component';

const routes: Routes = [
    { path: '', redirectTo: '/productcategories', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'productcategories', component: ProductCategoriesComponent, canActivate: [AuthGuard] },
    { path: 'prodcatdetails/:id', component: ProductCategoryFormComponent, canActivate: [AuthGuard] },
    { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
    { path: 'productdetails/:id', component: ProductFormComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports:[RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule{}
