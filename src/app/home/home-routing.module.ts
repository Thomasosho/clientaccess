import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LandingComponent } from './landing/landing.component';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { RegisterComponent } from './register/register.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { NonAdminsComponent } from './non-admins/non-admins.component';


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: LandingComponent
      },
      {
        path: 'contractors',
        component: NonAdminsComponent,
      },
      {
        path: 'experts',
        component: NonAdminsComponent,
      },
      {
        path: 'artisans',
        component: NonAdminsComponent,
      },
      {
        path: 'suppliers',
        component: NonAdminsComponent,
      },
      {
        path: 'mdas',
        component: NonAdminsComponent,
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'reset-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
