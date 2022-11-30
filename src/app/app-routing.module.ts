import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginViewComponent } from './views/login-view/login-view.component';

const routes: Routes = [
  {
    path      : '',
    component : LoginViewComponent
  },
  {
    path      : 'dashboard',
    component : DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
