import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ClarityModule} from '@clr/angular';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ClarityIconsApi} from '@clr/icons/clr-icons-api';
import {QuestionService} from './service/question.service';
import {QuestionControlService} from './service/question-control.service';
import {StateService} from './service/state.service';
import {HttpService} from './service/http.service';
import {UserService} from './service/user.service';


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
  providers: [
    QuestionService,
    QuestionControlService,
    StateService,
    HttpService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
