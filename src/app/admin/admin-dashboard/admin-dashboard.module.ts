import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard.component';
import {ClarityModule} from '@clr/angular';
import {HeaderModule} from '../../layout/header/header.module';
import {RouterModule} from '@angular/router';

export const routes = [
  {path: '', component: AdminDashboardComponent}
];


@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    HeaderModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminDashboardComponent],
  exports: [
    HeaderModule,
    RouterModule,
    AdminDashboardComponent
  ]

})
export class AdminDashboardModule { }
