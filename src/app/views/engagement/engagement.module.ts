import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngagementComponent } from './engagement.component';
import { EngagementRoutingModule } from './engagement-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { FilterPipeModule } from 'ngx-filter-pipe';


@NgModule({
  declarations: [EngagementComponent, ProfileComponent, ProfileCardComponent],
  imports: [
    CommonModule,
    EngagementRoutingModule,
    FilterPipeModule,
    FormsModule
  ]
})
export class EngagementModule { }
