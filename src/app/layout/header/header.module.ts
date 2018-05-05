import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {ClarityModule} from '@clr/angular';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
  ],
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent,
    ClarityModule
  ]
})
export class HeaderModule { }
