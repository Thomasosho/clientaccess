import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TenderComponent } from './tender/tender.component';
import { CreateTenderComponent } from './create-tender/create-tender.component';
import { EditTenderComponent } from './edit-tender/edit-tender.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { ArtisansComponent } from './artisans/artisans.component';
import { MdasComponent } from './mdas/mdas.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ContractorDocumentsComponent } from './contractor-documents/contractor-documents.component';
import { TenderRequirementsComponent } from './tender-requirements/tender-requirements.component';
import { TenderLotComponent } from './tender-lot/tender-lot.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { AddComponent } from './subscription/add/add.component';
import { PriviledgesComponent } from './subscription/priviledges/priviledges.component';
import { AddPriviledgesComponent } from './subscription/add-priviledges/add-priviledges.component';
import { TenderCategoryComponent } from './tender-category/tender-category.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tender',
  },
  {
    path: 'tender',
    component: TenderComponent,
  },
  {
    path: 'create-tender',
    component: CreateTenderComponent,
  },
  {
    path: 'edit-tender',
    component: EditTenderComponent,
  },
  {
    path: 'tender-requirement',
    component: TenderRequirementsComponent,
  },
  {
    path: 'tender-lot',
    component: TenderLotComponent,
  },
  {
    path: 'tender-categories',
    component: TenderCategoryComponent,
  },
  {
    path: 'applications',
    component: ApplicationsComponent,
  },
  {
    path: 'accounts',
    component: AccountsComponent,
  },
  {
    path: 'contractors',
    component: ContractorsComponent,
  },
  {
    path: 'contractor-documents/:id',
    component: ContractorDocumentsComponent,
  },
  {
    path: 'artisans',
    component: ArtisansComponent,
  },
  {
    path: 'mdas',
    component: MdasComponent,
  },
  {
    path: 'suppliers',
    component: SuppliersComponent,
  },
  {
    path: 'subscription',
    component: SubscriptionComponent,
  },
  {
    path: 'subscription/priviledges',
    component: PriviledgesComponent,
  },
  {
    path: 'subscription/priviledges/:type',
    component: AddPriviledgesComponent,
  },
  {
    path: 'subscription/:type',
    component: AddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
