import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCardComponent } from './admin-card.component';
import {ClarityModule} from '@clr/angular';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule
  ],
  declarations: [AdminCardComponent],
  exports: [
    ClarityModule,
    AdminCardComponent,
  ]
})
export class AdminCardModule { }
