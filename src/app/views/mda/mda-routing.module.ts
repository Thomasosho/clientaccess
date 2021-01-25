import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TenderComponent } from '../admin/tender/tender.component';
import { ApplicationsComponent } from './applications/applications.component';
import { MdaProfileComponent } from './mda-profile/mda-profile.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'tender',
  },
  {
    path: 'tender',
    component: TenderComponent
  },
  {
    path: 'profile',
    component: MdaProfileComponent,
  },
  {
    path: 'applications',
    component: ApplicationsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MdaRoutingModule { }
