import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { CovidTrackerService } from 'src/app/services/covid-tracker/covid-tracker.service';
import { CovidData } from 'src/app/models/CovidData';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-distict-wise-details',
  templateUrl: './distict-wise-details.component.html',
  styleUrls: ['./distict-wise-details.component.scss']
})
export class DistictWiseDetailsComponent implements OnInit {

  stateId: string;
  stateName: string;
  districtWiseDetails: MatTableDataSource<CovidData>;
  columns = [ 'name', 'confirmed', 'recovered', 'deaths' ];
  displayedColumns = [
    { name: 'District', prop: 'name' },
    { name: 'Confirmed', prop: 'confirmed' },
    { name: 'Recovered', prop: 'recovered' },
    { name: 'Deaths', prop: 'deaths' }
  ];

  @ViewChild(MatSort) sort: MatSort;
  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
  }

  constructor(private readonly _activatedRoute: ActivatedRoute, private readonly _router: Router, private readonly _covidTrackerSerivce: CovidTrackerService, private readonly _location: Location) {
    this._activatedRoute.params.subscribe(params => {
      this.stateId = params.stateId;
      this.getStateWiseDetails();
    });

    this._router.events.subscribe(event => {
      console.log(this._location.path());
    });
  }

  ngOnInit(): void {
    
  }

  /**
   * To get the district wise covid cases information
   */
  getStateWiseDetails(): void {
    this._covidTrackerSerivce.getStateWiseDetails().subscribe(stateWiseDetails => {
      let stateData = stateWiseDetails.find(stateData => stateData.id === this.stateId);
      if (!stateData) {
        this._router.navigate(['/dashboard']);
        return;
      }

      this.stateName = stateData.state;
      this.districtWiseDetails = new MatTableDataSource(stateData.districtData);
      this.districtWiseDetails.sort = this.sort;
    });
  }

  ngOnDestroy() {
    
  }

}
