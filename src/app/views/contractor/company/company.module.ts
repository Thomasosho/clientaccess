import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { CreateEquipmentComponent } from './equipments/create-equipment/create-equipment.component';
import { NgxLoadingXModule } from 'ngx-loading-x';
import { EditProjectComponent } from './projects/edit-project/edit-project.component';

@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    ProjectsComponent,
    EquipmentsComponent,
    CertificatesComponent,
    AddProjectComponent,
    CreateEquipmentComponent,
    EditProjectComponent,
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoadingXModule,
  ]
})
export class CompanyModule { }
