import { Component } from '@angular/core';

import {
  DataService
} from '../services/data.service'

@Component({
  selector: 'my-app',
  templateUrl: './groups.component.html',
  providers: [DataService]
})

export class GroupsComponent {
  loading: boolean = true;

  constructor(private _dataservice: DataService) {
  }

  groupData: any[] = [];
  groups: any[] = [];
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      username: {
        title: 'Username'
      },
      email: {
        title: 'Email',
      }
    }
  };


  ngOnInit(): void {
    this._dataservice.getGroups()
      .subscribe(data => {
        // this.groupData = data;
        this.groups = data;
        this.loading = false;
      });
  }

}