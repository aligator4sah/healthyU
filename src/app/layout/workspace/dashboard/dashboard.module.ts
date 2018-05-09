import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {ClarityModule} from '@clr/angular';
import {RouterModule} from '@angular/router';
import {ChartsModule} from 'ng2-charts';
import {CompleteCardModule} from '../complete-card/complete-card.module';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ChartsModule,
    CompleteCardModule,
    RouterModule.forChild([
      {path: '', component: DashboardComponent}
    ])
  ],
  declarations: [DashboardComponent],
  exports: [
    ClarityModule,
    DashboardComponent,
    ChartsModule,
    CompleteCardModule,
    RouterModule
  ]
})
export class DashboardModule { }
