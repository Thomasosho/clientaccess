import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpertSkillComponent } from './expert-skill/expert-skill.component';
import { QualificationComponent } from './qualification/qualification.component';
import { ExperienceComponent } from './experience/experience.component';
import { AddExperienceComponent } from './experience/add-experience/add-experience.component';
import { AddQualificationComponent } from './qualification/add-qualification/add-qualification.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './qualification/edit/edit.component';
import { EditExperienceComponent } from './experience/edit/edit.component';
import { AddClientsComponent } from './client/add-clients/add-clients.component';
import { ClientComponent } from './client/client.component';
import { ReferenceComponent } from './reference/reference.component';
import { AddReferenceComponent } from './reference/add-reference/add-reference.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';
import { EditReferenceComponent } from './reference/edit-reference/edit-reference.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'experience',
    component: ExperienceComponent,
  },
  {
    path: 'add-experience',
    component: AddExperienceComponent,
  },
  {
    path: 'edit-experience',
    component: EditExperienceComponent,
  },
  {
    path: 'qualification',
    component: QualificationComponent,
  },
  {
    path: 'add-qualification',
    component: AddQualificationComponent,
  },
  {
    path: 'edit-qualification',
    component: EditComponent,
  },
  {
    path: 'skill',
    component: ExpertSkillComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'clients',
    component: ClientComponent,
  },
  {
    path: 'add-client',
    component: AddClientsComponent,
  },
  {
    path: 'edit-client',
    component: EditClientComponent,
  },
  {
    path: 'referee',
    component: ReferenceComponent,
  },
  {
    path: 'add-referee',
    component: AddReferenceComponent,
  },
  {
    path: 'edit-referee',
    component: EditReferenceComponent,
  },
  // {
  //   path: 'testimonial',
  //   component: TestimonialComponent,
  // },
  // {
  //   path: 'subscription',
  //   component: SubscriptionComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpertRoutingModule { }
