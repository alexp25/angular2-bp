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
var data_service_1 = require("../services/data.service");
var EventsComponent = (function () {
    function EventsComponent(_dataservice) {
        this._dataservice = _dataservice;
        this.counter = 0;
        this.clickMessage = 'click me';
        this.loading = true;
        this.myDatePickerOptions = {
            // other options...
            dateFormat: 'dd.mm.yyyy',
        };
        // Initialized to specific date (09.10.2018).
        this.myDatepicker = { date: { year: 2018, month: 10, day: 9 } };
    }
    EventsComponent.prototype.ngOnInit = function () {
        this._dataservice.getEventbook()
            .subscribe(function (data) { return console.log(data); });
        // this.value = this._appService.getApp();
    };
    return EventsComponent;
}());
EventsComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './events.component.html',
        providers: [data_service_1.DataService]
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], EventsComponent);
exports.EventsComponent = EventsComponent;
//# sourceMappingURL=events.component.js.map