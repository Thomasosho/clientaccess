import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { CreateEquipmentComponent } from './equipments/create-equipment/create-equipment.component';
import { EditProjectComponent } from './projects/edit-project/edit-project.component';

const routes: Routes = [
  {
    path: '',
    component: ViewProfileComponent,
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'projects/edit-project',
    component: EditProjectComponent,
  },
  {
    path: 'projects/add-project',
    component: AddProjectComponent,
  },
  {
    path: 'equipments',
    component: EquipmentsComponent,
  },
  {
    path: 'equipments/upload',
    component: CreateEquipmentComponent,
  },
  {
    path: 'certificates',
    component: CertificatesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
