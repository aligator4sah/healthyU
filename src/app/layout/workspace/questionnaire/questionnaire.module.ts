import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire.component';
import {ClarityModule} from '@clr/angular';
import {Router, RouterModule} from '@angular/router';
import {CompleteCardModule} from '../complete-card/complete-card.module';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    CompleteCardModule,
    RouterModule.forChild([
      {path: '', component: QuestionnaireComponent}
    ])
  ],
  declarations: [QuestionnaireComponent],
  exports: [
    ClarityModule,
    RouterModule,
    CompleteCardModule,
    QuestionnaireComponent
  ]
})
export class QuestionnaireModule { }
