import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExperienceComponent } from './experience/experience.component';
import { QualificationComponent } from './qualification/qualification.component';
import { AddQualificationComponent } from './add-qualification/add-qualification.component';
import { AddExperienceComponent } from './experience/add-experience/add-experience.component';
import { SkillComponent } from './skill/skill.component';
import { ClientComponent } from './client/client.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ReferenceComponent } from './reference/reference.component';
import { AddClientsComponent } from './client/add-clients/add-clients.component';
import { AddReferenceComponent } from './reference/add-reference/add-reference.component';
import { AddProjectImagesComponent } from './experience/add-project-images/add-project-images.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './qualification/edit/edit.component';
import { EditExperienceComponent } from './experience/edit-experience/edit-experience.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';
import { EditReferenceComponent } from './reference/edit-reference/edit-reference.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'project',
    component: ExperienceComponent,
  },
  {
    path: 'edit-project',
    component: EditExperienceComponent,
  },
  {
    path: 'add-project',
    component: AddExperienceComponent,
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
    path: 'trade',
    component: SkillComponent,
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
    path: 'testimonial',
    component: TestimonialComponent,
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
  {
    path: 'add-project-image',
    component: AddProjectImagesComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtisanRoutingModule { }
