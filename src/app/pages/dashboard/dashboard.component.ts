import { Component, OnInit } from '@angular/core';

import { CovidTrackerService } from 'src/app/services/covid-tracker/covid-tracker.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardDetails: any;
  covidInfoTypes = [
    {
      prop: 'confirmed', label: 'Confirmed'
    },
    {
      prop: 'recovered', label: 'Recovered'
    },
    {
      prop: 'deaths', label: 'Deaths'
    }
  ];

  constructor(private readonly _covidTrackerSerivce: CovidTrackerService) {
    this.getDashboardDetails();
  }

  ngOnInit(): void {
  }

  /**
   * To get the dashboard details(total covid cases information)
   */
  getDashboardDetails(): void {
    this._covidTrackerSerivce.getDashboardDetails().subscribe(dashboardDetails => {
      this.dashboardDetails = dashboardDetails;
    });
  }

  getCovidInfoClass(covidInfoType): string {
    return covidInfoType.prop;
  }
  
}
