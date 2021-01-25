import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  // {
  //   path: 'change-password',
  //   component: ResetPasswordComponent,
  // },
  {
    path: 'change-password',
    component: ResetPasswordComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilityRoutingModule { }
