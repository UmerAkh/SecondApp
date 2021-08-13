

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductDetailedComponent } from './pages/product-detailed/product-detailed.component';
import { ProductListComponent } from './pages/product-list/product-list.component';


const routes: Routes = [
{path: 'employeeList' , component:ProductListComponent},
{path: 'products/:id', component: ProductDetailedComponent},
{path: 'posts' , component: CategoryComponent},
{path: 'contactus' , component: ContactUsComponent},
{path: 'spalsh', component: HomeComponent},
{path: '', redirectTo: 'spalsh', pathMatch: 'full'},
{path: '**', redirectTo: 'spalsh', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
