import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcurementComponent } from './procurement.component';
import { TenderHistoryComponent } from './tender-history/tender-history.component';
import { DocViewComponent } from './doc-view/doc-view.component';
import { DocUploadComponent } from './doc-upload/doc-upload.component';
import { AffidavitComponent } from './affidavit/affidavit.component';
import { ViewTenderComponent } from './view-tender/view-tender.component';
import { SummaryComponent } from './summary/summary.component';


const routes: Routes = [
  {
    path: '',
    component: ProcurementComponent,
  },
  {
    path: 'tender-history',
    component: TenderHistoryComponent,
  },
  {
    path: 'document/:doc',
    component: DocViewComponent,
  },
  {
    path: 'upload/affidavit',
    component: AffidavitComponent,
  },
  {
    path: 'upload/bank-refferal',
    component: DocUploadComponent,
  },
  {
    path: 'view-tender',
    component: ViewTenderComponent,
  },
  {
    path: 'summary',
    component: SummaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcurementRoutingModule { }
