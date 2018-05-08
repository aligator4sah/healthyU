import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSummaryComponent } from './data-summary.component';
import {ClarityModule} from '@clr/angular';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild([
      {path: '', component: DataSummaryComponent}
    ])
  ],
  declarations: [DataSummaryComponent],
  exports: [
    ClarityModule,
    RouterModule,
    DataSummaryComponent
  ]
})
export class DataSummaryModule { }
