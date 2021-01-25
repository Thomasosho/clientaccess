import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProfileComponent } from './profile/profile.component';
import { AddQualificationComponent } from './add-qualification/add-qualification.component';

@NgModule({
  declarations: [
    StaffComponent,
    CreateStaffComponent,
    EditStaffComponent,
    ViewStaffComponent,
    ProfileComponent,
    AddQualificationComponent,
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ]
})
export class StaffModule { }
