import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';

import { Appproduct } from './test/product.component';
import { AppInventory } from './test/inventory.component';
import { PageNotFoundComponent } from  './test/NotFound.component';

import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './test/product-form.component';

import { RouterModule, Routes } from '@angular/router';

import { MyDatePickerModule } from 'mydatepicker';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { NgClass } from '@angular/common';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from './material.module'

// from my app
import { EventbooksComponent } from './views/eventbooks.component';
import { GroupsComponent } from './views/groups.component';
import { EventsComponent } from './views/events.component';
import { LoginComponent } from './views/login.component';


const appRoutes: Routes = [
  { 
    path: '', 
    component: LoginComponent,
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
    path: 'events', 
    component: EventsComponent 
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
    Ng2SmartTableModule,

    BrowserAnimationsModule,
    NoopAnimationsModule,

    MyOwnCustomMaterialModule
  ],
  declarations: [ 
    AppComponent, 
     
    Appproduct, 
    AppInventory, 
    PageNotFoundComponent, 
    ProductFormComponent,

    EventbooksComponent,
    GroupsComponent,
    EventsComponent,
    LoginComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
