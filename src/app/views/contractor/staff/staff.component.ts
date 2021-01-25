import { Component, OnInit, TemplateRef } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { CompanyService } from 'src/app/Services/company.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  staffProfiles = [];
  loading = false;
  modalRef: BsModalRef;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swalService: SwalMixinService,
    private companyService: CompanyService,
    private router: Router,
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
    this.getAllStaffProfile();
  }

  getAllStaffProfile() {
    this.loading = true;
    const companyId = this.utilService.getCompany().id;
    const token = this.utilService.getToken();
    this.crudService.getRequestImAuth(`api/staffprofile/allByCompanyId/${companyId}`, token).subscribe((res: any) => {
      console.log(res);
      this.loading = false;
      this.staffProfiles = res;
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.error('An Error occured, Couldn\'t fetch staff profile');
    });
  }

  setStaff(staff, type= 'view') {
    this.companyService.setStaff(staff);
    if (type === 'edit') {
      return this.router.navigate(['/contractor/staff/edit-staff']);
    }
    return this.router.navigate(['/contractor/staff/profile']);
  }

  openModal(template: TemplateRef<any>, staff) {
    this.companyService.setStaff(staff);
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

}
