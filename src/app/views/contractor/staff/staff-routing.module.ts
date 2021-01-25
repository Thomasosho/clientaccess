import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff.component';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { ProfileComponent } from './profile/profile.component';
import { AddQualificationComponent } from './add-qualification/add-qualification.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Staff'
    },
    children: [
      {
        path: '',
        component: StaffComponent,
      },
      {
        path: 'create-staff',
        component: CreateStaffComponent,
        data: {
          title: 'create staff'
        }
      },
      {
        path: 'edit-staff',
        component: EditStaffComponent,
        data: {
          title: 'edit staff'
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: 'staff profile'
        }
      },
      {
        path: 'qualification/:type',
        component: AddQualificationComponent,
        data: {
          title: 'qualification'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
