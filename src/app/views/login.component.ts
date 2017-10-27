import { Component } from '@angular/core';

import {
  DataService
} from '../services/data.service'

@Component({
  selector: 'my-app',
  templateUrl: './login.component.html',
  providers: [DataService]
})

export class LoginComponent {
  loading: boolean = true;
  login: boolean = false;
  name: String = "User";

  constructor(private _dataservice: DataService) {
  }


  ngOnInit(): void {
    this._dataservice.getGroups()
      .subscribe(data => {
        this.loading = false;
      });
  }

}