import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TenderComponent } from './tender/tender.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTenderComponent } from './create-tender/create-tender.component';
import { EditTenderComponent } from './edit-tender/edit-tender.component';
import { ArtisansComponent } from './artisans/artisans.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { MdasComponent } from './mdas/mdas.component';
import { ContractorDocumentsComponent } from './contractor-documents/contractor-documents.component';
import { NgxLoadingXModule } from 'ngx-loading-x';
import { TenderRequirementsComponent } from './tender-requirements/tender-requirements.component';
import { TenderLotComponent } from './tender-lot/tender-lot.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { SubscriptionComponent } from './subscription/subscription.component';
import { PriviledgesComponent } from './subscription/priviledges/priviledges.component';
import { AddComponent } from './subscription/add/add.component';
import { AddPriviledgesComponent } from './subscription/add-priviledges/add-priviledges.component';
import { ViewComponent } from './applications/view/view.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TenderCategoryComponent } from './tender-category/tender-category.component';

@NgModule({
  declarations: [
    TenderComponent,
    DashboardComponent,
    CreateTenderComponent,
    EditTenderComponent,
    ArtisansComponent,
    AccountsComponent,
    ApplicationsComponent,
    ContractorsComponent,
    SuppliersComponent,
    MdasComponent,
    ContractorDocumentsComponent,
    TenderRequirementsComponent,
    TenderLotComponent,
    SubscriptionComponent,
    PriviledgesComponent,
    AddComponent,
    AddPriviledgesComponent,
    ViewComponent,
    TenderCategoryComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoadingXModule,
    FilterPipeModule,
    PdfViewerModule,
    ModalModule.forRoot(),
  ],
})
export class AdminModule {}
