import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteCardComponent } from './complete-card.component';
import {ClarityModule} from '@clr/angular';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule
  ],
  declarations: [CompleteCardComponent],
  exports: [
    CompleteCardComponent
  ]
})
export class CompleteCardModule { }
