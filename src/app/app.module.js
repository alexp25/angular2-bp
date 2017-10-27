"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var product_component_1 = require("./test/product.component");
var inventory_component_1 = require("./test/inventory.component");
var NotFound_component_1 = require("./test/NotFound.component");
var forms_1 = require("@angular/forms");
var product_form_component_1 = require("./test/product-form.component");
var router_1 = require("@angular/router");
var mydatepicker_1 = require("mydatepicker");
var ng2_smart_table_1 = require("ng2-smart-table");
// from my app
var eventbooks_component_1 = require("./views/eventbooks.component");
var groups_component_1 = require("./views/groups.component");
var events_component_1 = require("./views/events.component");
var login_component_1 = require("./views/login.component");
var appRoutes = [
    {
        path: '',
        component: login_component_1.LoginComponent,
    },
    {
        path: 'groups',
        component: groups_component_1.GroupsComponent
    },
    {
        path: 'eventbooks',
        component: eventbooks_component_1.EventbooksComponent
    },
    {
        path: 'events',
        component: events_component_1.EventsComponent
    },
    {
        path: '**',
        component: NotFound_component_1.PageNotFoundComponent
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(appRoutes),
            forms_1.FormsModule,
            mydatepicker_1.MyDatePickerModule,
            ng2_smart_table_1.Ng2SmartTableModule
        ],
        declarations: [
            app_component_1.AppComponent,
            product_component_1.Appproduct,
            inventory_component_1.AppInventory,
            NotFound_component_1.PageNotFoundComponent,
            product_form_component_1.ProductFormComponent,
            eventbooks_component_1.EventbooksComponent,
            groups_component_1.GroupsComponent,
            events_component_1.EventsComponent,
            login_component_1.LoginComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map