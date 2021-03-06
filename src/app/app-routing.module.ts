import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginModule'},
  { path: 'dashboard', loadChildren: './layout/subnav/subnav.module#SubnavModule'},
  { path: 'admin', loadChildren: './admin/admin-login/admin-login.module#AdminLoginModule'},
  { path: 'adminDashboard', loadChildren: './admin/admin-dashboard/admin-dashboard.module#AdminDashboardModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
