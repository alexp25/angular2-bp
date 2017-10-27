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
var GroupsComponent = (function () {
    function GroupsComponent(_dataservice) {
        this._dataservice = _dataservice;
        this.loading = true;
        this.groupData = [];
        this.groups = [];
        this.settings = {
            columns: {
                id: {
                    title: 'ID'
                },
                username: {
                    title: 'Username'
                }
            }
        };
    }
    GroupsComponent.prototype.showGroup = function (gname) {
        var _this = this;
        console.log(gname);
        this._dataservice.getPeopleFromGroup(gname)
            .subscribe(function (data) {
            _this.groupData = data;
        });
    };
    GroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this._dataservice.getGroups()
            .subscribe(function (data) {
            // this.groupData = data;
            _this.groups = data;
            _this.loading = false;
        }); }, 1000);
    };
    return GroupsComponent;
}());
GroupsComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './groups.component.html',
        providers: [data_service_1.DataService]
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], GroupsComponent);
exports.GroupsComponent = GroupsComponent;
//# sourceMappingURL=groups.component.js.map