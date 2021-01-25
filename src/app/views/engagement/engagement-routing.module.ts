import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EngagementComponent } from './engagement.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: ':type',
    component: EngagementComponent
  },
  {
    path: '**',
    component: EngagementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngagementRoutingModule { }
