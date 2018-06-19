import {SubnavComponent} from './subnav.component';

export const routes = [
  {
    path: '',
    component: SubnavComponent,
    children: [
      {path: '', redirectTo: 'dash', pathMatch: 'full'},
      {path: 'question', loadChildren: '../workspace/questionnaire/questionnaire.module#QuestionnaireModule'},
      {path: 'demographic', loadChildren: '../workspace/demographic/demographic.module#DemographicModule'},
      {path: 'dash', loadChildren: '../workspace/dashboard/dashboard.module#DashboardModule'},
      {path: 'session-list', loadChildren: '../workspace/session-list/session-list.module#SessionListModule'}
    ]
  }
];
