import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcurementRoutingModule } from './procurement-routing.module';
import { ProcurementComponent } from './procurement.component';
import { TenderHistoryComponent } from './tender-history/tender-history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocViewComponent } from './doc-view/doc-view.component';
import { DocUploadComponent } from './doc-upload/doc-upload.component';
import { AngularRaveModule } from 'angular-rave';
import { Angular4PaystackModule } from 'angular4-paystack';
import { AffidavitComponent } from './affidavit/affidavit.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ViewTenderComponent } from './view-tender/view-tender.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    ProcurementComponent,
    TenderHistoryComponent,
    DocViewComponent,
    DocUploadComponent,
    AffidavitComponent,
    ViewTenderComponent,
    SummaryComponent,
  ],
  imports: [
    CommonModule,
    ProcurementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FilterPipeModule,
    // Angular4PaystackModule.forRoot('pk_test_d9f4d84fa5feda78ef50cc355efe00dd50a3d48f'),
    Angular4PaystackModule.forRoot('pk_test_961f74cc9467b58c13450983fff659a6bb8a52d3'),
    AngularRaveModule.forRoot({
      key: 'FLWPUBK_TEST-a95caf78b6504bde29af398c56b5eeab-X',
      isTest: true,
    }),
  ],
  exports: [
    ProcurementComponent,
  ]
})
export class ProcurementModule { }
