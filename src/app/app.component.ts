import { Component } from '@angular/core';

import { IProduct } from './test/products';
import { ProductService } from './test/products.service';
// import { appService } from './app.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { appService } from './test/get-app.service';

import { IMyDpOptions } from 'mydatepicker';



import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { element } from 'protractor';

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
    "url": "/",
    "active": false
  }, {
    "name": "Groups",
    "url": "/groups",
    "active": false
  }, {
    "name": "Eventbooks",
    "url": "/eventbooks",
    "active": false
  }, {
    "name": "Group events",
    "url": "/events",
    "active": false
  }];

  private selectTabFromUrl(url: string): void {
    this.routes.forEach(element => {
      if (element.url === url) {
        element.active = true;
      } else {
        element.active = false;
      }
    });
  }

  iproducts: IProduct[];
  constructor(
    private _product: ProductService,
    private _appService: appService,
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute
  ) {
  }


  ngOnInit(): void {

    this.router.events
      .subscribe((event) => {
        //console.log(event);
        if (event instanceof NavigationEnd) {
          console.log(event.url);
          this.selectTabFromUrl(event.url);
        }
      });

    this._product.getproducts()
      .subscribe(iproducts => this.iproducts = iproducts);
    this.value = this._appService.getApp();
  }

}
