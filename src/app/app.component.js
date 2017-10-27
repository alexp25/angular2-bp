"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var products_service_1 = require("./test/products.service");
require("rxjs/add/operator/map");
var get_app_service_1 = require("./test/get-app.service");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(_product, _appService, router, titleService, activatedRoute) {
        this._product = _product;
        this._appService = _appService;
        this.router = router;
        this.titleService = titleService;
        this.activatedRoute = activatedRoute;
        this.name = "Alex";
        this.value = "";
        this.appStatus = true;
        this.routes = [{
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
    }
    AppComponent.prototype.selectTabFromUrl = function (url) {
        this.routes.forEach(function (element) {
            if (element.url === url) {
                element.active = true;
            }
            else {
                element.active = false;
            }
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .subscribe(function (event) {
            //console.log(event);
            if (event instanceof router_1.NavigationEnd) {
                console.log(event.url);
                _this.selectTabFromUrl(event.url);
            }
        });
        this._product.getproducts()
            .subscribe(function (iproducts) { return _this.iproducts = iproducts; });
        this.value = this._appService.getApp();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html',
        providers: [products_service_1.ProductService, get_app_service_1.appService]
    }),
    __metadata("design:paramtypes", [products_service_1.ProductService,
        get_app_service_1.appService,
        router_1.Router,
        platform_browser_1.Title,
        router_1.ActivatedRoute])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map