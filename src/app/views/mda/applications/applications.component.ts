import { Component, OnInit, TemplateRef } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  modalRef: BsModalRef;
  loading: boolean;
  applications = [];

  constructor(
    private crudService: CrudService,
    private modalService: BsModalService,
    private swalService: SwalMixinService,
    private companyService: CompanyService,
  ) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    this.loading = true;
    this.crudService.getRequest('api/companyprofile/all/company/profiles/that/purchased/mda/tender').subscribe((res: any) => {
      console.log(res);
      this.applications = res;
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.error('There was an error fetching all applications.');
    });
  }

  openModal(template: TemplateRef<any>, document, type = 'aff') {
    const file = type === 'aff' ? document.affidavitList[0] : document.bankRefList[0];
    this.companyService.setDocument(file);
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

}
