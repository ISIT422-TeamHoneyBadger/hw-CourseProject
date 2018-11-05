import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { LoginFeedbackComponent } from '../login-feedback/login-feedback.component'
import { NewUserComponent } from '../new-user/new-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login-feedback',
    component: LoginFeedbackComponent
  },
  {
    path: 'new-user',
    component: NewUserComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) 
  ],
  exports: [RouterModule]
})

export class RoutingModuleModule { }
