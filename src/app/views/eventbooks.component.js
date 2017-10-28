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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("../services/data.service");
var EventbooksComponent = /** @class */ (function () {
    function EventbooksComponent(_dataservice) {
        this._dataservice = _dataservice;
        this.counter = 0;
        this.clickMessage = 'click me';
        this.loading = true;
        this.events = [{
                "name": "jam 2",
                "date": ""
            }];
        this.data = [];
        this.settings = {
            columns: {
                id: {
                    title: 'ID'
                },
                title: {
                    title: 'Title'
                },
                group: {
                    title: 'Group',
                    editable: true,
                    editor: {
                        type: 'list',
                        config: {
                            list: [{ value: "example", title: "example" }]
                        }
                    }
                }
            }
        };
    }
    EventbooksComponent.prototype.onClickMe = function () {
        this.counter += 1;
        this.clickMessage = 'I was clicked ' + this.counter.toString() + ' times. click me!';
        console.log("it clicked me!");
    };
    EventbooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataservice.getGroups()
            .subscribe(function (data) {
            _this.settings.columns.group.editor.config.list = data;
            _this.loading = false;
        });
        // this.loading = false;
        this._dataservice.getEventbook()
            .subscribe(function (data) { return _this.data = data; });
        // this.value = this._appService.getApp();
    };
    EventbooksComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './eventbooks.component.html',
            providers: [data_service_1.DataService]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], EventbooksComponent);
    return EventbooksComponent;
}());
exports.EventbooksComponent = EventbooksComponent;
//# sourceMappingURL=eventbooks.component.js.map