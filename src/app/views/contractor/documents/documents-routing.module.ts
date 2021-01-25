import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentsComponent } from './documents.component';
import { DocUploadComponent } from './doc-upload/doc-upload.component';
import { DocViewComponent } from './doc-view/doc-view.component';
import { DocEditComponent } from './doc-edit/doc-edit.component';
import { AuditComponent } from './audit/audit.component';


const routes: Routes = [
  {
    path: '',
    component: DocumentsComponent,
  },
  {
    path: ':doc',
    component: DocViewComponent,
  },
  {
    path: 'upload/:doc',
    component: DocUploadComponent,
  },
  {
    path: 'edit/:doc',
    component: DocEditComponent,
  },
  {
    path: 'audit/:type',
    component: AuditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
