import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login.component';
import {ClarityModule} from '@clr/angular';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild([
      {path: '', component: AdminLoginComponent}
      ]
    ),
  ],
  declarations: [AdminLoginComponent],
  exports: [
    ClarityModule,
    AdminLoginComponent,
    RouterModule
  ]
})
export class AdminLoginModule { }
