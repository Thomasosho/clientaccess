import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {
      title: 'dashboard'
    }
  },
  {
    path: 'company',
    loadChildren: () => import('./company/company.module').then(m => m.CompanyModule),
    data: {
      title: 'company'
    }
  },
  {
    path: 'procurement',
    loadChildren: () => import('../procurement/procurement.module').then(m => m.ProcurementModule),
    data: {
      title: 'procurement'
    }
  },
  {
    path: 'documents',
    loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule),
    data: {
      title: 'documents'
    }
  },
  {
    path: 'staff',
    loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule),
    data: {
      title: 'staff'
    }
  },
  {
    path: 'connect',
    loadChildren: () => import('../engagement/engagement.module').then(m => m.EngagementModule),
    data: {
      title: 'engagement'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractorRoutingModule { }
