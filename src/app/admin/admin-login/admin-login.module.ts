import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login.component';
import {ClarityModule} from '@clr/angular';
import {RouterModule} from '@angular/router';

export const routes = [
  {path: '', redirectTo: 'admin-login', patchMathch: 'full'},
  {path: 'admin-login', component: AdminLoginComponent},
];

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AdminLoginComponent],
  exports: [
    ClarityModule,
    AdminLoginComponent,
    RouterModule
  ]
})
export class AdminLoginModule { }
