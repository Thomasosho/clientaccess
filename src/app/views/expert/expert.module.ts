import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertRoutingModule } from './expert-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpertSkillComponent } from './expert-skill/expert-skill.component';
import { NgxLoadingXModule } from 'ngx-loading-x';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QualificationComponent } from './qualification/qualification.component';
import { ExperienceComponent } from './experience/experience.component';
import { AddExperienceComponent } from './experience/add-experience/add-experience.component';
import { AddQualificationComponent } from './qualification/add-qualification/add-qualification.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewComponent } from './qualification/view/view.component';
import { EditComponent } from './qualification/edit/edit.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditExperienceComponent } from './experience/edit/edit.component';
import { ClientComponent } from './client/client.component';
import { ReferenceComponent } from './reference/reference.component';
import { AddClientsComponent } from './client/add-clients/add-clients.component';
import { AddReferenceComponent } from './reference/add-reference/add-reference.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';
import { EditReferenceComponent } from './reference/edit-reference/edit-reference.component';
import { ExpertDaysComponent } from './expert-days/expert-days.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ExpertSkillComponent,
    QualificationComponent,
    ExperienceComponent,
    AddExperienceComponent,
    AddQualificationComponent,
    ProfileComponent,
    ViewComponent,
    EditComponent,
    EditExperienceComponent,
    ClientComponent,
    ReferenceComponent,
    AddClientsComponent,
    AddReferenceComponent,
    EditClientComponent,
    EditReferenceComponent,
    ExpertDaysComponent,
  ],
  imports: [
    CommonModule,
    ExpertRoutingModule,
    NgxLoadingXModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ]
})
export class ExpertModule { }
