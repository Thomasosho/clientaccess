import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdaRoutingModule } from './mda-routing.module';
import { MdaProfileComponent } from './mda-profile/mda-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingXModule } from 'ngx-loading-x';
import { ApplicationsComponent } from './applications/applications.component';
import { ViewComponent } from './applications/view/view.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    MdaProfileComponent,
    ApplicationsComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    MdaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoadingXModule,
    ModalModule.forRoot(),
    PdfViewerModule,
  ]
})
export class MdaModule { }
