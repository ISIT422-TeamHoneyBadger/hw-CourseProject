import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule
} from '@angular/material';

import { RoutingModuleModule } from './routing-module/routing-module.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginFeedbackComponent } from './login-feedback/login-feedback.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NewUserComponent,
    LoginFeedbackComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    RouterModule,
    RoutingModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
