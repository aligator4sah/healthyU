import {SubnavComponent} from './subnav.component';


export const routes = [
  {
    path: '',
    component: SubnavComponent,
    children: [
      {path: '', redirectTo: 'question', pathMatch: 'full'},
      {path: 'question', loadchildren: '../workspace/questionnaire/questionnaire.module#QuestionnaireModule'},
    ]
  }
];
