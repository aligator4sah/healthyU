import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputQuestionComponent } from './input-question.component';
import {ClarityModule} from '@clr/angular';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild([
      {path: '', component: InputQuestionComponent}
    ])
  ],
  declarations: [InputQuestionComponent],
  exports: [
    ClarityModule,
    RouterModule,
    InputQuestionComponent
  ]
})
export class InputQuestionModule { }
