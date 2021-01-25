import { NgModule } from '@angular/core';
import { UtilityRoutingModule } from './utility-routing.module';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { NgxLoadingXModule } from 'ngx-loading-x';



@NgModule({
  declarations: [
    ResetPasswordComponent,
    ProfileComponent
  ],
  imports: [
    UtilityRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoadingXModule,
  ]
})
export class UtilityModule { }
