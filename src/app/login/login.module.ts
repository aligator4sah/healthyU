import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: LoginComponent}
    ])
  ],
  declarations: [LoginComponent],
  exports: [
    LoginComponent,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ClarityModule
  ]
})
export class LoginModule { }
