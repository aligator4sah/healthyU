import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ClarityModule} from '@clr/angular';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ClarityIconsApi} from '@clr/icons/clr-icons-api';
import {QuestionService} from './service/question.service';
import {QuestionControlService} from './service/question-control.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ClarityModule,
    AppRoutingModule
  ],
  providers: [QuestionService, QuestionControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
