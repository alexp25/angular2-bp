import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';

import { Appproduct } from './test/product.component';
import { AppInventory } from './test/inventory.component';
import { PageNotFoundComponent } from  './test/NotFound.component' 

import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './test/product-form.component';

import { RouterModule, Routes } from '@angular/router';

import { MyDatePickerModule } from 'mydatepicker';
import { Ng2SmartTableModule } from 'ng2-smart-table'

// from my app
import { EventbooksComponent } from './views/eventbooks.component'
import { GroupsComponent } from './views/groups.component'


const appRoutes: Routes = [
  { 
    path: '', 
    component: Appproduct,
  },
  { 
    path: 'groups', 
    component: GroupsComponent 
  },
  { 
    path: 'eventbooks', 
    component: EventbooksComponent 
  },
  { 
    path: 'details', 
    component: AppInventory 
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  } 
];


@NgModule({
  imports:      [ 
    BrowserModule, 
    HttpModule, 
    RouterModule.forRoot(appRoutes), 
    FormsModule, 
    MyDatePickerModule, 
    Ng2SmartTableModule 
  ],
  declarations: [ 
    AppComponent, 
     
    Appproduct, 
    AppInventory, 
    PageNotFoundComponent, 
    ProductFormComponent,

    EventbooksComponent,
    GroupsComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
