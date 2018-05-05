import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire.component';
import {ClarityModule} from '@clr/angular';
import {Router, RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild([
      {path: '', component: QuestionnaireComponent}
    ])
  ],
  declarations: [QuestionnaireComponent],
  exports: [
    ClarityModule,
    RouterModule,
  ]
})
export class QuestionnaireModule { }
