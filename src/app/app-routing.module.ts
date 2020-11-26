import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DistictWiseDetailsComponent } from './pages/distict-wise-details/distict-wise-details.component';
import { StateWiseDetailsComponent } from './pages/state-wise-details/state-wise-details.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'state-wise-details',
        component: StateWiseDetailsComponent
      },
      {
        path: 'district-wise-details/:stateId',
        component: DistictWiseDetailsComponent
      },
      {
        path: '',
        redirectTo: '/state-wise-details',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
