import { Component } from '@angular/core';

import { IProduct } from './test/products';
import { ProductService } from './test/products.service';
// import { appService } from './app.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {
  appService
} from './test/get-app.service';

import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [ProductService, appService]
})
export class AppComponent {
  name: string = "Alex";
  value: string = "";

  appStatus: boolean = true;

  routes: any[] = [{
    "name": "Home",
    "url": "/"
  },{
    "name": "Groups",
    "url": "/groups"
  },{
    "name": "Eventbooks",
    "url": "/eventbooks"
  }, {
    "name": "Details",
    "url": "/details"
  }];

  iproducts: IProduct[];
  constructor(private _product: ProductService,
    private _appService: appService) {
  }


  public myDatePickerOptions: IMyDpOptions = {
      // other options...
      dateFormat: 'dd.mm.yyyy',
  };

   // Initialized to specific date (09.10.2018).
   public myDatepicker: any = { date: { year: 2018, month: 10, day: 9 } };


  ngOnInit(): void {
    this._product.getproducts()
      .subscribe(iproducts => this.iproducts = iproducts);
    this.value = this._appService.getApp();
  }

}
