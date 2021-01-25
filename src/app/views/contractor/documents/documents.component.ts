import { Component, OnInit, TemplateRef } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { CompanyService } from 'src/app/Services/company.service';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  modalRef: BsModalRef;
  loading: boolean;
  documents: any;
  docType: any;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private companyService: CompanyService,
    private modalService: BsModalService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAllDocuments();
  }

  getAllDocuments() {
    this.loading = true;
    const companyId = this.utilService.getCompany().id;
    this.crudService.getRequest(`api/companyprofile/getByCompanyId/${companyId}`).subscribe((res: any) => {
      console.log(res);
      this.documents = res;
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
    });
  }

  setDocument(document) {
    const type = document.type.toLowerCase();
    this.companyService.setDocument(document);
    this.router.navigate([`/contractor/documents/edit/${type}`]);
  }

  openModal(template: TemplateRef<any>, document) {
    this.docType = document.type;
    this.companyService.setDocument(document);
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
}
