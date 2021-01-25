import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtisanRoutingModule } from './artisan-routing.module';
import { QualificationComponent } from './qualification/qualification.component';
import { ExperienceComponent } from './experience/experience.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddQualificationComponent } from './add-qualification/add-qualification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddExperienceComponent } from './experience/add-experience/add-experience.component';
import { NgxLoadingXModule } from 'ngx-loading-x';
import { SkillComponent } from './skill/skill.component';
import { ClientComponent } from './client/client.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ReferenceComponent } from './reference/reference.component';
import { AddClientsComponent } from './client/add-clients/add-clients.component';
import { AddReferenceComponent } from './reference/add-reference/add-reference.component';
import { DaysAvailableComponent } from './days-available/days-available.component';
import { ViewProjectsComponent } from './experience/view-projects/view-projects.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddProjectImagesComponent } from './experience/add-project-images/add-project-images.component';
import { AngularRaveModule } from 'angular-rave';
import { Angular4PaystackModule } from 'angular4-paystack';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './qualification/edit/edit.component';
import { ViewComponent } from './qualification/view/view.component';
import { EditExperienceComponent } from './experience/edit-experience/edit-experience.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';
import { EditReferenceComponent } from './reference/edit-reference/edit-reference.component';

@NgModule({
  declarations: [
    QualificationComponent,
    ExperienceComponent,
    DashboardComponent,
    AddQualificationComponent,
    AddExperienceComponent,
    SkillComponent,
    ClientComponent,
    TestimonialComponent,
    ReferenceComponent,
    AddClientsComponent,
    AddReferenceComponent,
    DaysAvailableComponent,
    ViewProjectsComponent,
    AddProjectImagesComponent,
    ProfileComponent,
    EditComponent,
    ViewComponent,
    EditExperienceComponent,
    EditClientComponent,
    EditReferenceComponent
  ],
  imports: [
    CommonModule,
    ArtisanRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoadingXModule,
    ModalModule.forRoot(),
  ]
})
export class ArtisanModule { }
