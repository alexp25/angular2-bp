import { Component } from '@angular/core';

import {
  DataService
} from '../services/data.service'

@Component({
  selector: 'my-app',
  templateUrl: './eventbooks.component.html',
  providers: [DataService]
})

export class EventbooksComponent {
  counter = 0;
  clickMessage = 'click me';
  loading: boolean = true;

  constructor(private _dataservice: DataService) {
  }

  events: any[] = [{
    "name": "jam 2",
    "date": ""
  }];

  data: any[] = [];

  settings = {
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

  onClickMe() {
    this.counter += 1;
    this.clickMessage = 'I was clicked ' + this.counter.toString() + ' times. click me!';
    console.log("it clicked me!");
  }


  ngOnInit(): void {
    this._dataservice.getGroups()
      .subscribe(data => {
        this.settings.columns.group.editor.config.list = data;
        this.loading = false;
      });

      // this.loading = false;
    this._dataservice.getEventbook()
      .subscribe(data => this.data = data);
    // this.value = this._appService.getApp();
  }

}