import {SubnavComponent} from './subnav.component';
import {DashboardModule} from '../workspace/dashboard/dashboard.module';


export const routes = [
  {
    path: '',
    component: SubnavComponent,
    children: [
      {path: '', redirectTo: 'question', pathMatch: 'full'},
      {path: 'question', loadChildren: '../workspace/questionnaire/questionnaire.module#QuestionnaireModule'},
      {path: 'demographic', loadChildren: '../workspace/demographic/demographic.module#DemographicModule'},
      {path: 'dash', loadChildren: '../workspace/dashboard/dashboard.module#DashboardModule'}
    ]
  }
];
