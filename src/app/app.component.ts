import { Component } from '@angular/core';

import { IProduct } from './products';
import { ProductService } from './products.service';
// import { appService } from './app.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {
  appService
} from './get-app.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [ProductService, appService]
})
export class AppComponent {
  name = 'World';
  value: string = "";
  appTitle: string = 'Welcome';
  appStatus: boolean = true;

  appList: any[] = [{
    "ID": "1",
    "Name": "One",
    "url": 'app/Images/One.png'
  },
  {
    "ID": "2",
    "Name": "Two",
    "url": 'app/Images/Two.png'
  }];

  iproducts: IProduct[];
  constructor(private _product: ProductService,
    private _appService: appService) {
  }
  ngOnInit(): void {
    this._product.getproducts()
      .subscribe(iproducts => this.iproducts = iproducts);
    this.value = this._appService.getApp();
  }

}
