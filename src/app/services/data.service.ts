import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch'; 

@Injectable()
export class DataService {
    constructor(private _http: Http) { }

    getEventbook(): Observable<any[]> {
        return this._http.get('app/resources/eventbooks.json')
            .map((response: Response) => <any[]>response.json())
            // .do(data => console.log(JSON.stringify(data)))
            .do(data => console.log(data))
            .catch(this.handleError); 
    }

    getGroups(): Observable<any[]> {
        return this._http.get('app/resources/groups.json')
            .map((response: Response) => <any[]>response.json())
            // .do(data => console.log(JSON.stringify(data)))
            .do(data => console.log(data))
            .catch(this.handleError); 
    }

    private handleError(error: Response) { 
        console.error(error); 
        return Observable.throw(error.json().error()); 
     } 
}