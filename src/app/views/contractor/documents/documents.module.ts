import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsComponent } from './documents.component';
import { DocUploadComponent } from './doc-upload/doc-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocViewComponent } from './doc-view/doc-view.component';
import { DocEditComponent } from './doc-edit/doc-edit.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ViewComponent } from './doc-view/view/view.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AuditComponent } from './audit/audit.component';

@NgModule({
  declarations: [
    DocumentsComponent,
    DocUploadComponent,
    DocViewComponent,
    DocEditComponent,
    ViewComponent,
    AuditComponent,
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    PdfViewerModule,
  ]
})
export class DocumentsModule { }
