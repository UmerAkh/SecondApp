import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';


import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailedComponent } from './pages/product-detailed/product-detailed.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HomeComponent,
    NavbarComponent,
    ProductListComponent,
    ProductDetailedComponent,
    ContactUsComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
