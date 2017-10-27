
import { Component } from '@angular/core';

import { IMyDpOptions } from 'mydatepicker';
import { DataService } from '../services/data.service'

@Component({
    selector: 'my-app',
    templateUrl: './events.component.html',
    providers: [DataService]
})

export class EventsComponent {
    counter = 0;
    clickMessage = 'click me';
    loading: boolean = true;

    constructor(private _dataservice: DataService) {
    }

    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };

    // Initialized to specific date (09.10.2018).
    public myDatepicker: any = { date: { year: 2018, month: 10, day: 9 } };

    ngOnInit(): void {
        this._dataservice.getEventbook()
            .subscribe(data => console.log(data));
        // this.value = this._appService.getApp();
    }

}