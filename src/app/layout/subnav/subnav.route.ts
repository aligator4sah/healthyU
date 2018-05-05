import {SubnavComponent} from './subnav.component';


export const routes = [
  {
    path: '',
    component: SubnavComponent,
    children: [
      {path: '', redirectTo: 'question', pathMatch: 'full'},
      {path: 'question', loadChildren: '../workspace/questionnaire/questionnaire.module#QuestionnaireModule'},
    ]
  }
];
