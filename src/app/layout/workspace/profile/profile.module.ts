import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {ClarityModule} from '@clr/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: ProfileComponent}
    ])
  ],
  declarations: [ProfileComponent],
  exports: [
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ProfileComponent
  ]
})
export class ProfileModule { }
