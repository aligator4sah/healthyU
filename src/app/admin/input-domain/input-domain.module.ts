import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDomainComponent } from './input-domain.component';
import {ClarityModule} from '@clr/angular';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild([
      {path: '', component: InputDomainComponent}
      ]
    )
  ],
  declarations: [InputDomainComponent],
  exports: [
    ClarityModule,
    InputDomainComponent,
    RouterModule
  ]
})
export class InputDomainModule { }
