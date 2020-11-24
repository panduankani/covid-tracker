import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { APIURL } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidTrackerService {

  constructor(private readonly _http: HttpClient) {}

  /**
   * To get the dashboard details(total covid cases information)
   */
  getDashboardDetails(): Observable<any> {
    return this._http.get(`${APIURL}/total.json`);
  }

  /**
   * To get the state wise covid cases information
   */
  getStateWiseDetails(): Observable<any> {
    return this._http.get(`${APIURL}/state_data.json`);
  }

}
