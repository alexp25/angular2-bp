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
var products_service_1 = require("./products.service");
require("rxjs/add/operator/map");
var get_app_service_1 = require("./get-app.service");
var AppComponent = (function () {
    function AppComponent(_product, _appService) {
        this._product = _product;
        this._appService = _appService;
        this.name = 'World';
        this.value = "";
        this.appTitle = 'Welcome';
        this.appStatus = true;
        this.appList = [{
                "ID": "1",
                "Name": "One",
                "url": 'app/Images/One.png'
            },
            {
                "ID": "2",
                "Name": "Two",
                "url": 'app/Images/Two.png'
            }];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        get_app_service_1.appService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map