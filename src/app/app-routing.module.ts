import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { DefaultLayoutComponent } from './containers';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404',
    },
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500',
    },
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Home',
    },
    children: [
      {
        path: 'contractor',
        loadChildren: () =>
          import('./views/contractor/contractor.module').then(
            (m) => m.ContractorModule
          ),
        data: {
          title: 'contractor',
        },
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./views/admin/admin.module').then((m) => m.AdminModule),
        data: {
          title: 'admin',
        },
      },
      {
        path: 'artisan',
        loadChildren: () =>
          import('./views/artisan/artisan.module').then((m) => m.ArtisanModule),
        data: {
          title: 'artisan',
        },
      },
      {
        path: 'expert',
        loadChildren: () =>
          import('./views/expert/expert.module').then(
            (m) => m.ExpertModule
          ),
        data: {
          title: 'expert',
        },
      },
      {
        path: 'mda',
        loadChildren: () =>
          import('./views/mda/mda.module').then((m) => m.MdaModule),
        data: {
          title: 'mda',
        },
      },
      {
        path: 'supplier',
        loadChildren: () =>
          import('./views/supplier/supplier.module').then(
            (m) => m.SupplierModule
          ),
        data: {
          title: 'supplier',
        },
      },
      {
        path: 'billing',
        loadChildren: () =>
          import('./views/payment/payment.module').then(
            (m) => m.PaymentModule
          ),
        data: {
          title: 'billing',
        },
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notification/notification.module').then(
            (m) => m.NotificationModule
          ),
        data: {
          title: 'notification',
        },
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./views/utility/utility.module').then((m) => m.UtilityModule),
        data: {
          title: 'settings',
        },
      },
    ],
  },
  { path: '**', component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
