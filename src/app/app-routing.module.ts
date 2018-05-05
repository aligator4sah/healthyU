import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubnavModule} from './layout/subnav/subnav.module';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginModule'},
  { path: 'dashboard', loadChildren: './layout/subnav/subnav.module#SubnavModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
