import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCategoriesComponent } from './product-categories.component';
import { ProductCategoryFormComponent } from './product-category-form.component';

const routes: Routes = [
    { path: '', redirectTo: '/productcategories', pathMatch: 'full' },
    { path: 'productcategories', component: ProductCategoriesComponent },
    { path: 'prodcatdetails/:id', component: ProductCategoryFormComponent },
];

@NgModule({
    imports:[RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule{}

