import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {ClarityModule} from '@clr/angular';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild([
      {path: '', component: DashboardComponent}
    ])
  ],
  declarations: [DashboardComponent],
  exports: [
    ClarityModule,
    DashboardComponent,
    RouterModule
  ]
})
export class DashboardModule { }
