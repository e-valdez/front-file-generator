import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error401Component } from './components/error-401/error-401.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/create/users.component';
import { UsersDetailComponent } from './components/users/detail/users-detail.component';
import { UsersEditComponent } from './components/users/edit/users-edit.component';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'signup', component: UsersComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'profile/:id', component: UsersDetailComponent, pathMatch: 'full' },
  { path: 'profile/edit/:id', component: UsersEditComponent, pathMatch: 'full' },

  { path: 'error', component: ErrorComponent, pathMatch: 'full' },
  {
    path: 'error/unauthorized',
    component: Error401Component,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
