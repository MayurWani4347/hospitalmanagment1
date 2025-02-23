


import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { ResetComponent } from './reset/reset.component';
import { ForgetComponent } from './forget/forget.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forget-password', component: ForgetComponent },
  { path: 'reset-password', component: ResetComponent },
  {path:'admin',component:AdminComponent},
  {
    path:'user',component:UserComponent
  }
];