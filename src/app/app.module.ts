import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/create/users.component';
import { UsersDetailComponent } from './components/users/detail/users-detail.component';
import { UsersEditComponent } from "./components/users/edit/users-edit.component";
import { ErrorComponent } from './components/error/error.component';
import { Error401Component } from './components/error-401/error-401.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsersComponent,
    UsersDetailComponent,
    UsersEditComponent,
    ErrorComponent,
    Error401Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule, ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
