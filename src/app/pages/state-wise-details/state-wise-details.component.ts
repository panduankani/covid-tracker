import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Location } from '@angular/common';

import { CovidTrackerService } from 'src/app/services/covid-tracker/covid-tracker.service';
import { CovidData } from 'src/app/models/CovidData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-state-wise-details',
  templateUrl: './state-wise-details.component.html',
  styleUrls: ['./state-wise-details.component.scss']
})
export class StateWiseDetailsComponent implements OnInit {

  stateWiseDetails: MatTableDataSource<CovidData>;
  columns = [ 'state', 'confirmed', 'recovered', 'deaths' ];
  displayedColumns = [
    { name: 'State', prop: 'state' },
    { name: 'Confirmed', prop: 'confirmed' },
    { name: 'Recovered', prop: 'recovered' },
    { name: 'Deaths', prop: 'deaths' }
  ];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private readonly _covidTrackerSerivce: CovidTrackerService, private readonly _location: Location, private readonly _router: Router) {
    this.getStateWiseDetails();
  }

  ngOnInit(): void {
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

  onSelectState(id): void {
    this._location.replaceState(`/district-wise-details/${id}`);
    this._router.navigate([`/district-wise-details/${id}`]);
    //this._router.navigate([]).then(() => this._location.replaceState(`/district-wise-details/${id}`));
  }
}
