import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDomainComponent } from './input-domain.component';
import {ClarityModule} from '@clr/angular';
import {RouterModule} from '@angular/router';
import {AdminCardModule} from '../admin-card/admin-card.module';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    AdminCardModule,
    RouterModule.forChild([
      {path: '', component: InputDomainComponent}
      ]
    )
  ],
  declarations: [InputDomainComponent],
  exports: [
    ClarityModule,
    AdminCardModule,
    InputDomainComponent,
    RouterModule
  ]
})
export class InputDomainModule { }
