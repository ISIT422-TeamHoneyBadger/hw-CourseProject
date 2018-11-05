import { HomeComponent } from '../home/home.component';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { RoutingModuleModule } from '../routing-module/routing-module.module';
 

@NgModule({
    declarations: [
      HomeComponent,
      LoginComponent
    ],
    imports: [
        RoutingModuleModule
    ]
  })
  export class LoginModule { }