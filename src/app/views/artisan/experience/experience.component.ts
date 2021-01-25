import { Component, OnInit, TemplateRef } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  projects = [];
  loading = false;
  modalRef: BsModalRef;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private companyService: CompanyService,
    private router: Router,
    private modalService: BsModalService,
  ) {
   }

  ngOnInit(): void {
    this.getExperience();
  }

  getExperience() {
    this.loading = true;
    const artisanId = this.utilService.getUser();
    this.crudService.getRequest(`api/artisanexperience/allByArtisanId/${artisanId}`).subscribe((res: any) => {
      console.log(res);
      this.projects = res;
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
    });
  }

  openModal(template: TemplateRef<any>, project) {
    this.utilService.setProject(project);
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  addProjectImage() {
    this.modalRef.hide();
    this.router.navigate(['/artisan/add-project-image']);
  }

  setDocument(document) {
    this.companyService.setDocument(document);
    this.router.navigate([`/artisan/edit-project`]);
  }
}
