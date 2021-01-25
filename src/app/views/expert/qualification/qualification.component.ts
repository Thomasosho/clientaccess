import { Component, OnInit, TemplateRef } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit {
  modalRef: BsModalRef;
  qualifications = [];
  loading = false;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private modalService: BsModalService,
    private companyService: CompanyService,
    private router: Router,
  ) {
   }

  ngOnInit(): void {
    this.getQualification();
  }

  getQualification() {
    this.loading = true;
    const expertId = this.utilService.getUser();
    this.crudService.getRequest(`api/expertqualification/allByExpertId/${expertId}`).subscribe((res: any) => {
      console.log(res);
      this.qualifications = res;
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
    });
  }

  setDocument(document) {
    this.companyService.setDocument(document);
    this.router.navigate([`/expert/edit-qualification`]);
  }

  openModal(template: TemplateRef<any>, document) {
    this.companyService.setDocument(document);
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

}
