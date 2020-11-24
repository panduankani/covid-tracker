import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { CovidTrackerService } from 'src/app/services/covid-tracker/covid-tracker.service';
import { CovidData } from 'src/app/models/CovidData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardDetails: any;
  stateWiseDetails: MatTableDataSource<CovidData>;
  columns = [ 'state', 'confirmed', 'recovered', 'deaths' ];
  displayedColumns = [
    { name: 'State', prop: 'state' },
    { name: 'Confirmed', prop: 'confirmed' },
    { name: 'Recovered', prop: 'recovered' },
    { name: 'Deaths', prop: 'deaths' }
  ];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private readonly _covidTrackerSerivce: CovidTrackerService) {
    this.getDashboardDetails();
    this.getStateWiseDetails();
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

  /**
   * To get the state wise covid cases information
   */
  getStateWiseDetails(): void {
    this._covidTrackerSerivce.getStateWiseDetails().subscribe(stateWiseDetails => {
      this.stateWiseDetails = new MatTableDataSource(stateWiseDetails);
      this.stateWiseDetails.sort = this.sort;
    });
  }
  
}
