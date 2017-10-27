import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';

import { Appproduct } from './product.component';
import { AppInventory } from './inventory.component';
import { PageNotFoundComponent } from  './NotFound.component' 

import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './product-form.component';

import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'Product', component: Appproduct },
  { path: 'Inventory', component: AppInventory },
  { path: '**', component: PageNotFoundComponent } 
];


@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule.forRoot(appRoutes), FormsModule ],
  declarations: [ AppComponent, Appproduct, AppInventory, PageNotFoundComponent, ProductFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
